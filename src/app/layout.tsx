import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Yasir Gothan",
  description: "مهندس الإيرادات الرقمية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
