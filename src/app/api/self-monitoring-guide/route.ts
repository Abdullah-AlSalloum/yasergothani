import { google } from "googleapis";
import { buildSelfMonitoringGuideEmail } from "@/lib/emailTemplates/selfMonitoringGuideEmail";

export const runtime = "nodejs";

type GuidePayload = {
  fullName: string;
  role: string;
  email: string;
  country: string;
  phone: string;
};

const SELF_MONITORING_FALLBACK_SHEET_ID = "1ZclaE4z8wFryjcHCfxUWJN0nbivuJpXNyVeZ7X61VN4";

const DEFAULT_SENDER_NAME = "ياسر الغوثاني";

const sendGuideEmail = async ({
  toEmail,
  fullName,
  guideUrl,
}: {
  toEmail: string;
  fullName: string;
  guideUrl: string;
}) => {
  const brevoApiKey = process.env.BREVO_API_KEY || process.env.SMTP_PASS;
  if (!brevoApiKey) {
    throw new Error("Missing required environment variable: BREVO_API_KEY (or SMTP_PASS)");
  }
  const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.SMTP_FROM;
  if (!senderEmail) {
    throw new Error("Missing required environment variable: BREVO_SENDER_EMAIL");
  }
  const senderName = process.env.BREVO_SENDER_NAME || DEFAULT_SENDER_NAME;

  const { subject, htmlContent, textContent } = buildSelfMonitoringGuideEmail({ fullName, guideUrl });

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": brevoApiKey,
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: toEmail, name: fullName || undefined }],
      subject,
      htmlContent,
      textContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo send failed: ${errorText}`);
  }
};

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
    const requestOrigin = new URL(request.url).origin;

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

    const guideUrl =
      process.env.SELF_MONITORING_GUIDE_FILE_URL ||
      process.env.NEXT_PUBLIC_SELF_MONITORING_GUIDE_FILE_URL ||
      `${requestOrigin}/ip-protection/self-monitoring-guide`;

    try {
      await sendGuideEmail({
        toEmail: normalizeValue(payload.email),
        fullName: normalizeValue(payload.fullName),
        guideUrl,
      });

      return Response.json({ success: true, emailSent: true, message: "تم الإرسال. تحقق من بريدك الإلكتروني." });
    } catch (emailError) {
      console.error("Self monitoring guide email send error:", emailError);
      return Response.json({
        success: true,
        emailSent: false,
        message:
          "تم استلام بياناتك بنجاح، لكن تعذر إرسال البريد الإلكتروني الآن. حاول زر تأكيد البريد بعد قليل.",
      });
    }
  } catch (error) {
    console.error("Self monitoring guide form submit error:", error);

    if (error instanceof Error && error.message.includes("Missing required environment variable")) {
      return Response.json(
        { error: "إعدادات البريد غير مكتملة في الخادم (Brevo)." },
        { status: 500 },
      );
    }

    return Response.json(
      { error: "تعذر إرسال البيانات الآن. حاول مرة أخرى بعد قليل." },
      { status: 500 },
    );
  }
}
