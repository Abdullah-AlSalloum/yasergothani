import { google, sheets_v4 } from "googleapis";
import { sendSmtpEmail } from "@/lib/email/smtpSender";
import { buildResourceGuideEmail } from "@/lib/emailTemplates/resourceGuideEmail";

export const runtime = "nodejs";

type ResourcesGuidePayload = {
  fullName: string;
  role: string;
  email: string;
  country: string;
  phone: string;
  materialTitle: string;
  materialFile: string;
};

const FALLBACK_SHEET_ID = "175RDIk_6RQaXux-j6jB3UdFCVkaW8wNoAb2k0YNrT3Y";
const FALLBACK_SHEET_GID = "1279095454";
const FALLBACK_SHEET_TITLE = "Form_Responses3";
const DEFAULT_SENDER_NAME = "ياسر الغوثاني";

const SHEET_HEADERS = [
  "طابع زمني",
  "عنوان البريد الإلكتروني",
  "الاسم الكامل",
  "رقم الهاتف",
  "المادة التي حصل عليها العميل",
  "الوصف",
  "رمز الدولة",
];

const normalizeValue = (value: string | undefined) => (typeof value === "string" ? value.trim() : "");

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const resolveTargetSheetTitle = (
  sheets: sheets_v4.Schema$Sheet[] | null | undefined,
  preferredTitle: string | undefined,
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

  if (preferredTitle) {
    const byTitle = sheets.find((sheet) => sheet.properties?.title === preferredTitle)?.properties?.title;
    if (byTitle) return byTitle;
  }

  return undefined;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ResourcesGuidePayload;
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
    if (!normalizeValue(payload.materialTitle)) {
      return Response.json({ error: "المادة المطلوبة غير محددة." }, { status: 400 });
    }
    if (!normalizeValue(payload.materialFile)) {
      return Response.json({ error: "ملف المادة المطلوبة غير محدد." }, { status: 400 });
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_RESOURCES_SHEET_ID || process.env.GOOGLE_SHEET_ID || FALLBACK_SHEET_ID;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });

    const targetSheetTitle = resolveTargetSheetTitle(
      spreadsheet.data.sheets,
      process.env.GOOGLE_RESOURCES_SHEET_TITLE || FALLBACK_SHEET_TITLE,
      process.env.GOOGLE_RESOURCES_SHEET_GID || FALLBACK_SHEET_GID,
    );

    if (!targetSheetTitle) {
      return Response.json({ error: "تعذر العثور على تبويب الموارد المطلوب في Google Sheets." }, { status: 500 });
    }

    const headerRange = `${targetSheetTitle}!A1:G1`;
    const headerRead = await sheets.spreadsheets.values.get({ spreadsheetId, range: headerRange });
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

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${targetSheetTitle}!A:G`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toISOString(),
          normalizeValue(payload.email),
          normalizeValue(payload.fullName),
          normalizeValue(payload.phone),
          normalizeValue(payload.materialTitle),
          normalizeValue(payload.role),
          normalizeValue(payload.country).toUpperCase(),
        ]],
      },
    });

    const normalizedFile = normalizeValue(payload.materialFile).replace(/^\/+/, "");
    const guideUrl = `${requestOrigin}/${normalizedFile}`;
    const senderName = process.env.BREVO_SENDER_NAME || DEFAULT_SENDER_NAME;
    const { subject, htmlContent, textContent } = buildResourceGuideEmail({
      fullName: normalizeValue(payload.fullName),
      resourceTitle: normalizeValue(payload.materialTitle),
      guideUrl,
    });

    try {
      await sendSmtpEmail({
        to: normalizeValue(payload.email),
        subject,
        html: htmlContent,
        text: textContent,
        senderName,

      });

      return Response.json({ success: true, emailSent: true, message: "تم الإرسال. تحقق من بريدك الإلكتروني للحصول على الدليل." });
    } catch (emailError) {
      console.error("Resources guide email send error:", emailError);
      return Response.json({
        success: true,
        emailSent: false,
        message: "تم حفظ بياناتك، لكن تعذر إرسال البريد الآن. حاول مرة أخرى بعد قليل.",
      });
    }
  } catch (error) {
    console.error("Resources guide form submit error:", error);
    return Response.json({ error: "تعذر إرسال البيانات الآن. حاول مرة أخرى بعد قليل." }, { status: 500 });
  }
}
