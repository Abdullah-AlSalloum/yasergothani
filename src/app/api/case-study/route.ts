import { google } from "googleapis";

export const runtime = "nodejs";

type CaseStudyPayload = {
  email: string;
  applicantName: string;
  phone?: string;
  country?: string;
  bookTitle: string;
  authorName: string;
  publisherName?: string;
  isbn?: string;
  pageCount?: string;
  publicationYear?: string;
  officialPurchaseLink?: string;
  piratedLink?: string;
  foundPiratedOnline?: string;
  piratedCopiesScale?: string;
  triedToRemove?: string;
  contactedLawyer?: string;
  filedComplaint?: string;
  officialRegistration?: string;
  publishingContract?: string;
  officialDigitalCopy?: string;
  salesDecline?: string;
  futurePlan?: string;
};

const FALLBACK_SHEET_ID = "";

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const n = (value: string | undefined) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CaseStudyPayload;

    if (!n(payload.email)) return Response.json({ error: "البريد الإلكتروني مطلوب." }, { status: 400 });
    if (!n(payload.applicantName)) return Response.json({ error: "اسم مقدم الطلب مطلوب." }, { status: 400 });
    if (!n(payload.bookTitle)) return Response.json({ error: "عنوان الكتاب مطلوب." }, { status: 400 });
    if (!n(payload.authorName)) return Response.json({ error: "اسم المؤلف مطلوب." }, { status: 400 });

    const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_CASE_STUDY_SHEET_ID || FALLBACK_SHEET_ID;

    if (!spreadsheetId) throw new Error("GOOGLE_CASE_STUDY_SHEET_ID is not configured.");

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetTitle = spreadsheet.data.sheets?.[0]?.properties?.title ?? "Sheet1";

    const row = [
      new Date().toISOString(),   // A - طابع زمني
      n(payload.email),            // B
      n(payload.applicantName),    // C
      n(payload.phone),            // D
      n(payload.country),          // E
      n(payload.bookTitle),        // F
      n(payload.authorName),       // G
      n(payload.publisherName),    // H
      n(payload.isbn),             // I
      n(payload.pageCount),        // J
      n(payload.publicationYear),  // K
      n(payload.officialPurchaseLink), // L
      n(payload.piratedLink),      // M
      n(payload.foundPiratedOnline),   // N
      n(payload.piratedCopiesScale),   // O
      n(payload.triedToRemove),        // P
      n(payload.contactedLawyer),      // Q
      n(payload.filedComplaint),       // R
      n(payload.officialRegistration), // S
      n(payload.publishingContract),   // T
      n(payload.officialDigitalCopy),  // U
      n(payload.salesDecline),         // V
      n(payload.futurePlan),           // W
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetTitle}!A:W`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Case study form error:", error);
    return Response.json(
      { error: "تعذر إرسال البيانات الآن. تأكد من إعداد ربط Google Sheets بشكل صحيح." },
      { status: 500 }
    );
  }
}
