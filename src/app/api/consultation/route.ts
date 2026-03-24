import { google } from "googleapis";

export const runtime = "nodejs";

type ConsultationPayload = {
  fullName: string;
  phone: string;
  projectName: string;
  country: string;
  businessSummary: string;
  biggestEffortArea: string;
  biggestEffortAreaOther?: string;
  numbersTracking: string;
  upcomingGoal: string;
  upcomingGoalOther?: string;
  previousAttempts: string;
  socialLinks: string;
};

const FALLBACK_SHEET_ID = "175RDIk_6RQaXux-j6jB3UdFCVkaW8wNoAb2k0YNrT3Y";

const requiredFields: Array<keyof ConsultationPayload> = [
  "fullName",
  "phone",
  "projectName",
  "country",
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
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || FALLBACK_SHEET_ID;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const firstSheetTitle = spreadsheet.data.sheets?.[0]?.properties?.title;

    if (!firstSheetTitle) {
      return Response.json({ error: "تعذر العثور على ورقة صالحة داخل الملف." }, { status: 500 });
    }

    const values = [
      new Date().toISOString(),
      normalizeValue(payload.fullName),
      normalizeValue(payload.phone),
      normalizeValue(payload.projectName),
      normalizeValue(payload.country),
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
      range: `${firstSheetTitle}!A:Z`,
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
