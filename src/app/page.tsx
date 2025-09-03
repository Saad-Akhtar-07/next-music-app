import { main } from "motion/react-client";
import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05]">
   
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
   
  );
} 
