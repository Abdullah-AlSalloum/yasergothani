"use client";
import React, { useEffect, useState } from "react";
import BookLoader from "../components/BookLoader";
import Header from "../components/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <BookLoader />}
      {!loading && <>
        <Header />
        {children}
      </>}
    </>
  );
}
