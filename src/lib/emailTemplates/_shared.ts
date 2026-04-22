export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yasergothani.vercel.app";

export const LOGO_URL = `${SITE_URL}/logo-light.png`;

export const buildLogoHeader = (bgColor: string) => `
  <tr>
    <td style="background:${bgColor};padding:18px 24px;text-align:center;">
      <img src="${LOGO_URL}" alt="ياسر الغوثاني" width="160" style="display:block;margin:0 auto;max-width:160px;height:auto;" />
    </td>
  </tr>`;
