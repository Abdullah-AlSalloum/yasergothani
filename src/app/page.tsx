'use client'
import ProblemSection from "@/components/ProblemSection";
import HeroSection from "../components/HeroSection";
import Snowfall from 'react-snowfall'


export default function Home() {
  return <>
   <Snowfall color="#82C3D9" />
   <HeroSection />
  < ProblemSection/>
  </>
 ;
}
