import { google } from "googleapis";

export const runtime = "nodejs";

type IpProtectionRequestPayload = {
  email: string;
  applicantName: string;
  phone: string;
  websiteUrl?: string;
  socialLinks: string;
  bookTitle: string;
  authorName: string;
  publisherName: string;
  isbn: string;
  publicationYear: string;
  pageCount: string;
  officialPurchaseLink?: string;
  bookDigitalCopyInfo: string;
  copyrightCertificateInfo: string;
  publishingContractInfo?: string;
  otherSupportingDocsInfo: string;
  foundPiratedCopies: "نعم" | "لا";
  piratedLinksDetails?: string;
  previousRemovalAction: "نعم" | "لا";
  previousRemovalActionDetails?: string;
  monitoringPreference: string;
  officialComplaintsPreference: "نعم" | "لا";
  awarenessCampaignPreference: "نعم" | "لا";
  additionalNotes?: string;
};

const FALLBACK_SHEET_ID = "16N4_Y4mQJ-nyYr1kFRObxrvnkOIxI8z-YsIAHyP_agU";

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
    const payload = (await request.json()) as IpProtectionRequestPayload;

    if (!normalizeValue(payload.email)) {
      return Response.json({ error: "البريد الإلكتروني مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.applicantName)) {
      return Response.json({ error: "اسم مقدم الطلب مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.phone)) {
      return Response.json({ error: "رقم الهاتف مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.socialLinks)) {
      return Response.json({ error: "حسابات التواصل الاجتماعي مطلوبة." }, { status: 400 });
    }
    if (!normalizeValue(payload.bookTitle)) {
      return Response.json({ error: "عنوان الكتاب المطلوب حمايته مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.authorName)) {
      return Response.json({ error: "اسم المؤلف مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.publisherName)) {
      return Response.json({ error: "دار النشر مطلوبة." }, { status: 400 });
    }
    if (!normalizeValue(payload.isbn)) {
      return Response.json({ error: "رقم ISBN مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.publicationYear)) {
      return Response.json({ error: "سنة النشر مطلوبة." }, { status: 400 });
    }
    if (!normalizeValue(payload.pageCount)) {
      return Response.json({ error: "عدد صفحات الكتاب مطلوب." }, { status: 400 });
    }
    if (!normalizeValue(payload.bookDigitalCopyInfo)) {
      return Response.json({ error: "بيانات النسخة الإلكترونية مطلوبة." }, { status: 400 });
    }
    if (!normalizeValue(payload.copyrightCertificateInfo)) {
      return Response.json({ error: "بيانات شهادة الملكية الفكرية مطلوبة." }, { status: 400 });
    }
    if (!normalizeValue(payload.otherSupportingDocsInfo)) {
      return Response.json({ error: "بيانات المستندات الإضافية مطلوبة." }, { status: 400 });
    }
    if (payload.foundPiratedCopies !== "نعم" && payload.foundPiratedCopies !== "لا") {
      return Response.json({ error: "يرجى تحديد ما إذا تم العثور على نسخ مقرصنة." }, { status: 400 });
    }
    if (payload.foundPiratedCopies === "نعم" && !normalizeValue(payload.piratedLinksDetails)) {
      return Response.json({ error: "يرجى إدخال روابط النسخ المقرصنة." }, { status: 400 });
    }
    if (payload.previousRemovalAction !== "نعم" && payload.previousRemovalAction !== "لا") {
      return Response.json({ error: "يرجى تحديد ما إذا تم اتخاذ إجراء سابق." }, { status: 400 });
    }
    if (payload.previousRemovalAction === "نعم" && !normalizeValue(payload.previousRemovalActionDetails)) {
      return Response.json({ error: "يرجى توضيح الإجراءات السابقة ونتائجها." }, { status: 400 });
    }
    if (!normalizeValue(payload.monitoringPreference)) {
      return Response.json({ error: "خيار المراقبة مطلوب." }, { status: 400 });
    }
    if (payload.officialComplaintsPreference !== "نعم" && payload.officialComplaintsPreference !== "لا") {
      return Response.json({ error: "يرجى تحديد خيار الشكاوى الرسمية." }, { status: 400 });
    }
    if (payload.awarenessCampaignPreference !== "نعم" && payload.awarenessCampaignPreference !== "لا") {
      return Response.json({ error: "يرجى تحديد خيار الحملة التوعوية." }, { status: 400 });
    }

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_IP_PROTECTION_SHEET_ID || FALLBACK_SHEET_ID;

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
      range: `${firstSheetTitle}!B:Y`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          normalizeValue(payload.email),
          normalizeValue(payload.applicantName),
          normalizeValue(payload.phone),
          normalizeValue(payload.websiteUrl),
          normalizeValue(payload.socialLinks),
          normalizeValue(payload.bookTitle),
          normalizeValue(payload.authorName),
          normalizeValue(payload.publisherName),
          normalizeValue(payload.isbn),
          normalizeValue(payload.publicationYear),
          normalizeValue(payload.pageCount),
          normalizeValue(payload.officialPurchaseLink),
          normalizeValue(payload.bookDigitalCopyInfo),
          normalizeValue(payload.copyrightCertificateInfo),
          normalizeValue(payload.publishingContractInfo),
          normalizeValue(payload.otherSupportingDocsInfo),
          normalizeValue(payload.foundPiratedCopies),
          normalizeValue(payload.piratedLinksDetails),
          normalizeValue(payload.previousRemovalAction),
          normalizeValue(payload.previousRemovalActionDetails),
          normalizeValue(payload.monitoringPreference),
          normalizeValue(payload.officialComplaintsPreference),
          normalizeValue(payload.awarenessCampaignPreference),
          normalizeValue(payload.additionalNotes),
        ]],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("IP protection request form submit error:", error);
    return Response.json(
      { error: "تعذر إرسال البيانات الآن. تأكد من إعداد ربط Google Sheets بشكل صحيح." },
      { status: 500 },
    );
  }
}