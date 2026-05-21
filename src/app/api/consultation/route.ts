import { google, sheets_v4 } from "googleapis";

export const runtime = "nodejs";

type ConsultationPayload = {
  fullName: string;
  email: string;
  phone: string;
  projectName: string;
  city: string;
  businessSummary: string;
  biggestEffortArea: string;
  biggestEffortAreaOther?: string;
  numbersTracking: string;
  upcomingGoal: string;
  upcomingGoalOther?: string;
  previousAttempts: string;
  socialLinks: string;
};

const TARGET_SHEET_ID = "175RDIk_6RQaXux-j6jB3UdFCVkaW8wNoAb2k0YNrT3Y";
const TARGET_SHEET_GID = "2001283852";

const requiredFields: Array<keyof ConsultationPayload> = [
  "fullName",
  "email",
  "phone",
  "projectName",
  "city",
  "businessSummary",
  "biggestEffortArea",
  "numbersTracking",
  "upcomingGoal",
  "previousAttempts",
  "socialLinks",
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
  preferredGid: string | undefined,
) => {
  if (!sheets?.length) return undefined;

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
    const payload = (await request.json()) as ConsultationPayload;

    for (const field of requiredFields) {
      if (!normalizeValue(payload[field])) {
        return Response.json({ error: `الحقل مطلوب: ${field}` }, { status: 400 });
      }
    }

    if (payload.biggestEffortArea === "Other" && !normalizeValue(payload.biggestEffortAreaOther)) {
      return Response.json({ error: "يرجى كتابة الإجابة الأخرى لسؤال الجهد الأكبر." }, { status: 400 });
    }

    if (payload.upcomingGoal === "Other" && !normalizeValue(payload.upcomingGoalOther)) {
      return Response.json({ error: "يرجى كتابة الإجابة الأخرى لسؤال الهدف القادم." }, { status: 400 });
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY")
      .trim()
      .replace(/^['\"]|['\"]$/g, "")
      .replace(/\\n/g, "\n");
    const spreadsheetId = TARGET_SHEET_ID;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const targetSheetTitle = resolveTargetSheetTitle(spreadsheet.data.sheets, TARGET_SHEET_GID);

    if (!targetSheetTitle) {
      return Response.json(
        { error: `تعذر العثور على تبويب الاستشارة (GID: ${TARGET_SHEET_GID}).` },
        { status: 500 },
      );
    }

    const values = [
      new Date().toISOString(),
      normalizeValue(payload.fullName),
      normalizeValue(payload.email),
      normalizeValue(payload.phone),
      normalizeValue(payload.projectName),
      normalizeValue(payload.city),
      normalizeValue(payload.businessSummary),
      payload.biggestEffortArea === "Other"
        ? `Other: ${normalizeValue(payload.biggestEffortAreaOther)}`
        : normalizeValue(payload.biggestEffortArea),
      normalizeValue(payload.numbersTracking),
      payload.upcomingGoal === "Other"
        ? `Other: ${normalizeValue(payload.upcomingGoalOther)}`
        : normalizeValue(payload.upcomingGoal),
      normalizeValue(payload.previousAttempts),
      normalizeValue(payload.socialLinks),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${targetSheetTitle}!A:Z`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [values],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Consultation form submit error:", error);
    return Response.json(
      { error: "تعذر إرسال البيانات الآن. تأكد من إعداد ربط Google Sheets بشكل صحيح." },
      { status: 500 },
    );
  }
}
