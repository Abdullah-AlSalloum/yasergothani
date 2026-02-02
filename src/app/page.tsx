'use client'

import ProblemSection from "@/components/ProblemSection";
import MethodologySection from "@/components/MethodologySection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import HeroSection from "../components/HeroSection";
import Snowfall from 'react-snowfall'
import SolutionsSection from "@/components/SolutionsSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import ProofSection from "@/components/ProofSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import IPProtectionSection from "@/components/IPProtectionSection";
import CTASection from "@/components/CTASection";



export default function Home() {
  return <>
    <Snowfall color="#82C3D9" speed={[0.2, 0.5]} />
    <HeroSection />
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
