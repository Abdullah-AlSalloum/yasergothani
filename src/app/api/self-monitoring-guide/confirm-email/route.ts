import { buildSelfMonitoringGuideEmail } from "@/lib/emailTemplates/selfMonitoringGuideEmail";

export const runtime = "nodejs";

type ConfirmPayload = {
  email: string;
  fullName?: string;
};

const DEFAULT_SENDER_NAME = "ياسر الغوثاني";

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
    const payload = (await request.json()) as ConfirmPayload;
    const email = normalizeValue(payload.email);
    const fullName = normalizeValue(payload.fullName);

    if (!email) {
      return Response.json({ error: "البريد الإلكتروني مطلوب." }, { status: 400 });
    }

    const guideUrl =
      process.env.SELF_MONITORING_GUIDE_FILE_URL ||
      process.env.NEXT_PUBLIC_SELF_MONITORING_GUIDE_FILE_URL ||
      `${new URL(request.url).origin}/ip-protection/self-monitoring-guide`;

    const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.SMTP_FROM;
    if (!senderEmail) {
      throw new Error("Missing required environment variable: BREVO_SENDER_EMAIL");
    }
    const senderName = process.env.BREVO_SENDER_NAME || DEFAULT_SENDER_NAME;
    const brevoApiKey = process.env.BREVO_API_KEY || process.env.SMTP_PASS;
    if (!brevoApiKey) {
      throw new Error("Missing required environment variable: BREVO_API_KEY (or SMTP_PASS)");
    }

    const { subject, htmlContent, textContent } = buildSelfMonitoringGuideEmail({
      fullName,
      guideUrl,
    });

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email, name: fullName || undefined }],
        subject,
        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Brevo send failed: ${errorText}`);
    }

    return Response.json({ success: true, message: "تم إرسال رسالة التأكيد." });
  } catch (error) {
    console.error("Self monitoring confirm-email error:", error);

    if (error instanceof Error && error.message.includes("Missing required environment variable")) {
      return Response.json({ error: "إعدادات Brevo غير مكتملة في الخادم." }, { status: 500 });
    }

    if (error instanceof Error && error.message.includes("Brevo send failed")) {
      return Response.json(
        { error: "تعذر إرسال رسالة التأكيد عبر Brevo. تأكد من API Key والبريد المرسل الموثق." },
        { status: 502 },
      );
    }

    return Response.json({ error: "تعذر إرسال رسالة التأكيد الآن." }, { status: 500 });
  }
}
