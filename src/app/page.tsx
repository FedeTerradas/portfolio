import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Flagship } from "@/components/sections/Flagship";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Preloader } from "@/components/sections/Preloader";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Flagship />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

