import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/project";
import Skills from "@/components/home/skill";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
   <div className="modern-sleek">
    <div className="modern-sleek-content">
     <Hero/>
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
   </div>
  );
}
