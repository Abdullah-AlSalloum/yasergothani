"use client";
import React from "react";
import HeroIntro from "@/components/IPProtection/HeroIntro";
import RisksList from "@/components/IPProtection/RisksList";
import SelfMonitoringGuide from "@/components/IPProtection/SelfMonitoringGuide";
import ManualMonotoringProblems from "@/components/IPProtection/ManualMonitoringProblems"
import PiracyStats from "@/components/IPProtection/PiracyStats"
import ProtectedVsPiratedBook from "@/components/IPProtection/ProtectedVsPiratedBook"
import ServicesOverview from "@/components/IPProtection/ServicesOverview"
import ProtectionProcessStepper from "@/components/IPProtection/ProtectionProcessStepper"
import CaseStudy from "@/components/IPProtection/CaseStudy"
import WhyChooseUs from "@/components/IPProtection/WhyChooseUs"
import AdditionalActions from "@/components/IPProtection/AdditionalActions";
import FinalCallToAction from "@/components/IPProtection/FinalCallToAction";
import LegalProtectionBenefits from "@/components/IPProtection/LegalProtectionBenefits";




const Page: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-16" style={{ background: '#1a604f' }}>
      <HeroIntro />
      <RisksList />
      <ManualMonotoringProblems />
      <SelfMonitoringGuide />
      <PiracyStats />
      <ProtectedVsPiratedBook />
      <ServicesOverview />
      <ProtectionProcessStepper />
      <CaseStudy />
      <WhyChooseUs />
      <AdditionalActions />
      <FinalCallToAction />
      <LegalProtectionBenefits />
    </main>
  );
};

export default Page;
