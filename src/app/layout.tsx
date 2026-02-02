import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Yasir Gothan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
