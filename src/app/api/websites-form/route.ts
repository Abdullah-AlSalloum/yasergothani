import { google, sheets_v4 } from "googleapis";

export const runtime = "nodejs";

type WebsitesFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectGoal: string;
  hasContent: string;
  hasWebsite: string;
  currentWebsiteUrl?: string;
  socialLinks?: string;
  budget: string;
};

const TARGET_SHEET_ID = "175RDIk_6RQaXux-j6jB3UdFCVkaW8wNoAb2k0YNrT3Y";
const TARGET_SHEET_GID = "7651413";

const SHEET_HEADERS = [
  "طابع زمني",
  "الاسم الكامل",
  "البريد الإلكتروني",
  "رقم الجوال",
  "نوع المشروع",
  "هدف الموقع",
  "هل لديك محتوى جاهز؟",
  "هل لديك موقع حالي؟",
  "رابط الموقع الحالي",
  "وسائل التواصل الاجتماعي",
  "الميزانية التقريبية",
];

const normalizeValue = (value: string | undefined) =>
  typeof value === "string" ? value.trim() : "";

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const normalizePrivateKey = (rawKey: string) =>
  rawKey
    .trim()
    .replace(/^['\"]|['\"]$/g, "")
    .replace(/\\n/g, "\n");

const resolveTargetSheetTitle = (
  sheets: sheets_v4.Schema$Sheet[] | null | undefined,
  preferredGid: string,
) => {
  if (!sheets?.length) return undefined;
  const numericGid = Number(preferredGid);
  if (!Number.isNaN(numericGid)) {
    const byGid = sheets.find(
      (sheet) => sheet.properties?.sheetId === numericGid,
    )?.properties?.title;
    if (byGid) return byGid;
  }
  return undefined;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as WebsitesFormPayload;

    if (!normalizeValue(payload.fullName))
      return Response.json({ error: "الاسم الكامل مطلوب." }, { status: 400 });
    if (!normalizeValue(payload.email))
      return Response.json({ error: "البريد الإلكتروني مطلوب." }, { status: 400 });
    if (!normalizeValue(payload.phone))
      return Response.json({ error: "رقم الجوال مطلوب." }, { status: 400 });
    if (!normalizeValue(payload.projectType))
      return Response.json({ error: "نوع المشروع مطلوب." }, { status: 400 });
    if (!normalizeValue(payload.projectGoal))
      return Response.json({ error: "هدف الموقع مطلوب." }, { status: 400 });
    if (!normalizeValue(payload.hasContent))
      return Response.json({ error: "يرجى الإجابة على سؤال المحتوى." }, { status: 400 });
    if (!normalizeValue(payload.hasWebsite))
      return Response.json({ error: "يرجى الإجابة على سؤال الموقع الحالي." }, { status: 400 });
    if (!normalizeValue(payload.budget))
      return Response.json({ error: "الميزانية التقريبية مطلوبة." }, { status: 400 });

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = normalizePrivateKey(getEnv("GOOGLE_PRIVATE_KEY"));
    const spreadsheetId = TARGET_SHEET_ID;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });

    let targetSheetTitle = resolveTargetSheetTitle(
      spreadsheet.data.sheets,
      TARGET_SHEET_GID,
    );

    if (!targetSheetTitle) {
      return Response.json(
        { error: `تعذر العثور على تبويب بناء المواقع (GID: ${TARGET_SHEET_GID}).` },
        { status: 500 },
      );
    }

    const headerRange = `${targetSheetTitle}!A1:K1`;
    const headerRead = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
    });
    const existingHeaderRow = headerRead.data.values?.[0] ?? [];
    const headerMissing = SHEET_HEADERS.some(
      (header, idx) => existingHeaderRow[idx] !== header,
    );

    if (headerMissing) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "RAW",
        requestBody: { values: [SHEET_HEADERS] },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${targetSheetTitle}!A:K`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("ar-SA", { timeZone: "Asia/Riyadh" }),
            normalizeValue(payload.fullName),
            normalizeValue(payload.email),
            normalizeValue(payload.phone),
            normalizeValue(payload.projectType),
            normalizeValue(payload.projectGoal),
            normalizeValue(payload.hasContent),
            normalizeValue(payload.hasWebsite),
            normalizeValue(payload.currentWebsiteUrl),
            normalizeValue(payload.socialLinks),
            normalizeValue(payload.budget),
          ],
        ],
      },
    });

    return Response.json({ message: "تم إرسال طلبك بنجاح. سنتواصل معك قريبًا." });
  } catch (error) {
    console.error("websites-form error:", error);
    return Response.json({ error: "حدث خطأ غير متوقع. حاول مرة أخرى." }, { status: 500 });
  }
}
