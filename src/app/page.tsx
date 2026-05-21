'use client'

import ProblemSection from "@/components/ProblemSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import DetailedProblemSection from "@/components/DetailedProblemSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeTeamSection from "@/components/HomeTeamSection";
import HomeVisionSection from "@/components/HomeVisionSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProofSection from "@/components/ProofSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";
import '@/app/globals.css';



export default function Home() {
  return <>
    <HomeHeroSection />
    <DetailedProblemSection />
    <HomeAboutSection />
    <HomeTeamSection />
    <HomeVisionSection />
    <ProblemSection />
    {/* <MethodologySection /> */}
     <HowWeWorkSection />
    <TargetAudienceSection />
    <SolutionsSection />
    {/* <DifferentiationSection /> */}
    <ProofSection />
    {/* < IPProtectionSection /> */}
    <CTASection />
  </>;
}
