import { google } from "googleapis";

export const runtime = "nodejs";

type GuidePayload = {
  fullName: string;
  role: string;
  email: string;
  country: string;
  phone: string;
};

const SELF_MONITORING_FALLBACK_SHEET_ID = "1ZclaE4z8wFryjcHCfxUWJN0nbivuJpXNyVeZ7X61VN4";

const normalizeValue = (value: string | undefined) => (typeof value === "string" ? value.trim() : "");

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as GuidePayload;

    if (!normalizeValue(payload.fullName)) {
      return Response.json({ error: "الاسم الكامل مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.role)) {
      return Response.json({ error: "الوصف مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.email)) {
      return Response.json({ error: "البريد الإلكتروني مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.country)) {
      return Response.json({ error: "رمز الدولة مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.phone)) {
      return Response.json({ error: "رقم الهاتف مطلوب." }, { status: 400 });
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SELF_MONITORING_SHEET_ID || SELF_MONITORING_FALLBACK_SHEET_ID;

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

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${firstSheetTitle}!A:F`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            "",
            normalizeValue(payload.fullName),
            normalizeValue(payload.role),
            normalizeValue(payload.email),
            normalizeValue(payload.country).toUpperCase(),
            normalizeValue(payload.phone),
          ],
        ],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Self monitoring guide form submit error:", error);
    return Response.json(
      { error: "تعذر إرسال البيانات الآن. حاول مرة أخرى بعد قليل." },
      { status: 500 },
    );
  }
}
