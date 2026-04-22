import { buildLogoHeader } from "./_shared";

type BuildResourceGuideEmailParams = {
  fullName: string;
  resourceTitle: string;
  guideUrl: string;
};

export const buildResourceGuideEmail = ({
  fullName,
  resourceTitle,
  guideUrl,
}: BuildResourceGuideEmailParams) => {
  const subject = `دليلك: ${resourceTitle} - ياسر الغوثاني`;

  const htmlContent = `
  <div dir="rtl" style="background:#f4f8f6;padding:24px;font-family:'Tajawal',Arial,sans-serif;color:#123d35;">
    <table style="max-width:620px;width:100%;margin:0 auto;background:#ffffff;border:1px solid #dce8e4;border-radius:14px;overflow:hidden;">
      ${buildLogoHeader("#113c56")}
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 12px 0;font-size:18px;font-weight:700;">مرحبًا ${fullName || "بك"}،</p>
          <p style="margin:0 0 12px 0;font-size:16px;line-height:1.9;color:#2b4e46;">
            شكرًا لتعبئة النموذج. هذا هو الدليل الذي طلبته:
          </p>
          <p style="margin:0 0 16px 0;font-size:17px;font-weight:700;color:#113c56;">${resourceTitle}</p>
          <p style="margin:0 0 20px 0;">
            <a href="${guideUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#1a604f;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:10px;">
              تحميل الدليل
            </a>
          </p>
          <p style="margin:0;font-size:13px;color:#6d857f;line-height:1.7;">
            في حال لم يعمل الزر، استخدم هذا الرابط مباشرة:<br />
            <a href="${guideUrl}" target="_blank" rel="noopener noreferrer" style="color:#1a604f;word-break:break-all;">${guideUrl}</a>
          </p>
        </td>
      </tr>
    </table>
  </div>`;

  const textContent = [
    `مرحبًا ${fullName || "بك"}`,
    "",
    "شكرًا لتعبئة النموذج.",
    `الدليل المطلوب: ${resourceTitle}`,
    "رابط التحميل:",
    guideUrl,
    "",
    "فريق ياسر الغوثاني",
  ].join("\n");

  return { subject, htmlContent, textContent };
};
