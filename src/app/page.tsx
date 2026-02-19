'use client'

import ProblemSection from "@/components/ProblemSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import HeroSection from "../components/HeroSection";
import Snowfall from 'react-snowfall'
import SolutionsSection from "@/components/SolutionsSection";
import ProofSection from "@/components/ProofSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";
import '@/app/globals.css';



export default function Home() {
  return <>
    <Snowfall color="#82C3D9" speed={[0.05, 0.2]} snowflakeCount={200} />
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
