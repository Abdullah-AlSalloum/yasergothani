'use client'
import ProblemSection from "@/components/ProblemSection";
import MethodologySection from "@/components/MethodologySection";
import HeroSection from "../components/HeroSection";
import Snowfall from 'react-snowfall'


export default function Home() {
  return <>
  <Snowfall color="#82C3D9" speed={[0.2, 0.5]} />
   <HeroSection />
  <ProblemSection/>
  <MethodologySection/>
  </>
 ;
}
