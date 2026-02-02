"use client";
import React from "react";
import Header from "../components/Header";
import FloatingSocials from "../components/FloatingSocials";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <FloatingSocials />
      {children}
    </>
  );
}
