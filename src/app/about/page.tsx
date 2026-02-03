"use client";
import React from "react";

const AboutPage: React.FC = () => (
  <section className="w-full py-16 px-4">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2">
        من نحن
      </h2>
      <p className="text-gray-600 text-lg">
        سيتم تخصيص هذه الصفحة لاحقًا لتعريف الشركة وفريق العمل ورؤيتنا.
      </p>
    </div>
  </section>
);

export default AboutPage;
