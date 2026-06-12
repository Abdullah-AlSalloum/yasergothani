"use client";
import React from "react";
import HeroIntro from "@/components/Copyright-wthiiq/HeroIntro";
import RisksList from "@/components/Copyright-wthiiq/RisksList";
import SelfMonitoringGuide from "@/components/Copyright-wthiiq/SelfMonitoringGuide";
import ManualMonotoringProblems from "@/components/Copyright-wthiiq/ManualMonitoringProblems"
import PiracyStats from "@/components/Copyright-wthiiq/PiracyStats"
import ProtectedVsPiratedBook from "@/components/Copyright-wthiiq/ProtectedVsPiratedBook"
import ServicesOverview from "@/components/Copyright-wthiiq/ServicesOverview"
import ProtectionProcessStepper from "@/components/Copyright-wthiiq/ProtectionProcessStepper"
import CaseStudy from "@/components/Copyright-wthiiq/CaseStudy"
import WhyChooseUs from "@/components/Copyright-wthiiq/WhyChooseUs"
import AdditionalActions from "@/components/Copyright-wthiiq/AdditionalActions";
import FinalCallToAction from "@/components/Copyright-wthiiq/FinalCallToAction";
import LegalProtectionBenefits from "@/components/Copyright-wthiiq/LegalProtectionBenefits";
import IpProtectionRequestModal from "@/components/Copyright-wthiiq/CopyrightWthiiqRequestModal";
import CaseStudyModal from "@/components/Copyright-wthiiq/CaseStudyModal";



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
      <IpProtectionRequestModal />
      <CaseStudyModal />
    </main>
  );
};

export default Page;
