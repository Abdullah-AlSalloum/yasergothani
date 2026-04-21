import { google, sheets_v4 } from "googleapis";

export const runtime = "nodejs";

type AdsConsultationPayload = {
  fullName: string;
  phone: string;
  projectName: string;
  city: string;
  socialLinks: string;
  previousAdsExperience: string;
  adImpactData: string;
  offerAndIdealCustomer: string;
  differentiation: string;
  adGoals: string[];
  successMetric90Days: string;
  landingPageFlow: string;
  monthlyBudget: string;
  expectedOutcome: string;
};

const FALLBACK_SHEET_ID = "175RDIk_6RQaXux-j6jB3UdFCVkaW8wNoAb2k0YNrT3Y";
const FALLBACK_ADS_SHEET_TITLE = "إدارة الحملات الإعلانية";
const FALLBACK_ADS_SHEET_GID = "965869592";

const requiredFields: Array<keyof AdsConsultationPayload> = [
  "fullName",
  "phone",
  "projectName",
  "city",
  "socialLinks",
  "previousAdsExperience",
  "adImpactData",
  "offerAndIdealCustomer",
  "differentiation",
  "successMetric90Days",
  "landingPageFlow",
  "monthlyBudget",
  "expectedOutcome",
];

const SHEET_HEADERS = [
  "طابع زمني",
  "الاسم الكامل",
  "رقم الهاتف",
  "اسم المشروع",
  "المدينة",
  "حسابات وسائل التواصل (رابط)",
  "هل سبق تشغيل إعلانات؟ وما النتيجة؟",
  "ما أثرها وهل لديك بيانات منها؟",
  "ماذا تبيع ومن هو عميلك المثالي؟",
  "ما الذي يميزك عن المنافسين؟",
  "ماذا تريد من الإعلانات الآن؟",
  "رقم نجاح خلال 90 يوم",
  "صفحة هبوط/موقع وكيفية استقبال العملاء",
  "الميزانية الشهرية للإعلانات",
  "التوقع بعد الحصول على الخدمة",
];

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const normalizeValue = (value: string | undefined) => (typeof value === "string" ? value.trim() : "");

const resolveTargetSheetTitle = (
  sheets: sheets_v4.Schema$Sheet[] | null | undefined,
  preferredTitle: string | undefined,
  preferredGid: string | undefined,
) => {
  if (!sheets?.length) return undefined;

  const normalizeTitle = (value: string) => value.replace(/\s+/g, " ").trim();

  if (preferredTitle) {
    const target = normalizeTitle(preferredTitle);
    const byTitle = sheets.find((sheet) => {
      const title = sheet.properties?.title;
      return title ? normalizeTitle(title) === target : false;
    })?.properties?.title;

    if (byTitle) return byTitle;
  }

  if (preferredGid) {
    const numericGid = Number(preferredGid);
    if (!Number.isNaN(numericGid)) {
      const byGid = sheets.find((sheet) => sheet.properties?.sheetId === numericGid)?.properties?.title;
      if (byGid) return byGid;
    }
  }

  return undefined;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AdsConsultationPayload;

    for (const field of requiredFields) {
      if (!normalizeValue(payload[field] as string)) {
        return Response.json({ error: `الحقل مطلوب: ${field}` }, { status: 400 });
      }
    }

    if (!Array.isArray(payload.adGoals) || payload.adGoals.length === 0) {
      return Response.json({ error: "يرجى تحديد هدف واحد على الأقل من الإعلانات." }, { status: 400 });
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_ADS_SHEET_ID || process.env.GOOGLE_SHEET_ID || FALLBACK_SHEET_ID;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const preferredSheetTitle = process.env.GOOGLE_ADS_SHEET_TITLE || FALLBACK_ADS_SHEET_TITLE;
    const preferredSheetGid = process.env.GOOGLE_ADS_SHEET_GID || FALLBACK_ADS_SHEET_GID;
    const targetSheetTitle = resolveTargetSheetTitle(
      spreadsheet.data.sheets,
      preferredSheetTitle,
      preferredSheetGid,
    );

    if (!targetSheetTitle) {
      return Response.json(
        { error: "تعذر العثور على تبويب إدارة الحملات الإعلانية داخل ملف Google Sheets." },
        { status: 500 },
      );
    }

    const headerRange = `${targetSheetTitle}!A1:O1`;
    const headerRead = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
    });
    const existingHeaderRow = headerRead.data.values?.[0] ?? [];
    const headerMissing = SHEET_HEADERS.some((header, idx) => existingHeaderRow[idx] !== header);

    if (headerMissing) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "RAW",
        requestBody: { values: [SHEET_HEADERS] },
      });
    }

    const values = [
      new Date().toISOString(),
      normalizeValue(payload.fullName),
      normalizeValue(payload.phone),
      normalizeValue(payload.projectName),
      normalizeValue(payload.city),
      normalizeValue(payload.socialLinks),
      normalizeValue(payload.previousAdsExperience),
      normalizeValue(payload.adImpactData),
      normalizeValue(payload.offerAndIdealCustomer),
      normalizeValue(payload.differentiation),
      payload.adGoals.map((goal) => normalizeValue(goal)).filter(Boolean).join(" | "),
      normalizeValue(payload.successMetric90Days),
      normalizeValue(payload.landingPageFlow),
      normalizeValue(payload.monthlyBudget),
      normalizeValue(payload.expectedOutcome),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${targetSheetTitle}!A:O`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [values],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Ads consultation form submit error:", error);
    return Response.json(
      { error: "تعذر إرسال البيانات الآن. تأكد من إعداد ربط Google Sheets بشكل صحيح." },
      { status: 500 },
    );
  }
}
