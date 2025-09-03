import { main } from "motion/react-client";
import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
   
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05]">
   
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingWebinar/>
      <Instructors/>
    </main>
   
  );
} 
