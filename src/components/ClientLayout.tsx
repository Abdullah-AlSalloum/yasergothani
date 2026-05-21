"use client";
import React from "react";
import Header from "../components/Header";
import FloatingSocials from "../components/FloatingSocials";
import CTASection from "../components/CTASection";
import WebsitesFormModal from "../components/WebsitesFormModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <FloatingSocials />
      {children}
      <CTASection modalOnly />
      <WebsitesFormModal />
    </>
  );
}
