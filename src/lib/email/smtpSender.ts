import nodemailer from "nodemailer";

type EmailAttachment = {
  filename: string;
  content: Buffer;
  cid: string;
};

type SendSmtpEmailOptions = {
  to: string;
  subject: string;
  html: string;
  text: string;
  senderName?: string;
  attachments?: EmailAttachment[];
};

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"] as const;

const getEnv = (name: (typeof requiredEnv)[number]) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const sendSmtpEmail = async ({
  to,
  subject,
  html,
  text,
  senderName,
  attachments,
}: SendSmtpEmailOptions) => {
  for (const key of requiredEnv) getEnv(key);

  const host = process.env.SMTP_HOST as string;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER as string;
  const pass = process.env.SMTP_PASS as string;
  const from = process.env.SMTP_FROM as string;
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  await transporter.verify();

  const info = await transporter.sendMail({
    from: senderName ? `${senderName} <${from}>` : from,
    to,
    subject,
    html,
    text,
    attachments,
  });

  const accepted = Array.isArray(info.accepted) ? info.accepted : [];
  const rejected = Array.isArray(info.rejected) ? info.rejected : [];

  console.info("[email][smtp]", {
    messageId: info.messageId,
    accepted,
    rejected,
    response: info.response,
  });

  if (accepted.length === 0 || rejected.length > 0) {
    throw new Error("SMTP delivery not accepted for recipient.");
  }

  return info;
};
