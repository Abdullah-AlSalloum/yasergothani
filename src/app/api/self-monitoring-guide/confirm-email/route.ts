import { buildSelfMonitoringGuideEmail } from "@/lib/emailTemplates/selfMonitoringGuideEmail";
import { sendSmtpEmail } from "@/lib/email/smtpSender";

export const runtime = "nodejs";

type ConfirmPayload = {
  email: string;
  fullName?: string;
};

const DEFAULT_SENDER_NAME = "ياسر الغوثاني";

const normalizeValue = (value: string | undefined) => (typeof value === "string" ? value.trim() : "");

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

    const senderName = process.env.BREVO_SENDER_NAME || DEFAULT_SENDER_NAME;

    const { subject, htmlContent, textContent } = buildSelfMonitoringGuideEmail({
      fullName,
      guideUrl,
    });

    await sendSmtpEmail({
      to: email,
      subject,
      html: htmlContent,
      text: textContent,
      senderName,
    });

    return Response.json({ success: true, message: "تم إرسال رسالة التأكيد." });
  } catch (error) {
    console.error("Self monitoring confirm-email error:", error);

    if (error instanceof Error && error.message.includes("Missing required environment variable")) {
      return Response.json({ error: "إعدادات Brevo غير مكتملة في الخادم." }, { status: 500 });
    }

    if (error instanceof Error && error.message.includes("SMTP")) {
      return Response.json(
        { error: "تعذر إرسال رسالة التأكيد عبر SMTP. تأكد من إعدادات SMTP وهوية البريد المرسل." },
        { status: 502 },
      );
    }

    return Response.json({ error: "تعذر إرسال رسالة التأكيد الآن." }, { status: 500 });
  }
}
