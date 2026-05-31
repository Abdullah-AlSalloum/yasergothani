import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "ياسر الغوثاني - Yaser Gothani",
  description: "",
  icons: {
    icon: "/favico.png",
  },
  openGraph: {
    title: "ياسر الغوثاني - Yaser Gothani",
    description: "",
    url: "https://www.yasergothani.com",
    siteName: "ياسر الغوثاني",
    images: [
      {
        url: "https://www.yasergothani.com/yaser-gothani.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ياسر الغوثاني - Yaser Gothani",
    images: ["https://www.yasergothani.com/yaser-gothani.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBJLGDHX');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBJLGDHX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
