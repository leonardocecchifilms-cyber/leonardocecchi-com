import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Studios from "@/components/Studios";
import About from "@/components/About";
import Showreel from "@/components/Showreel";
import Reels from "@/components/Reels";
import PressAwards from "@/components/PressAwards";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import InstagramGrid from "@/components/InstagramGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <main style={{ background: "#0a0a0a" }}>
        <Navigation />
        <Hero />
        <Studios />
        <Showreel />
        <About />
        <Gallery />
        <Reels />
        <InstagramGrid />
        <Resume />
        <PressAwards />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
