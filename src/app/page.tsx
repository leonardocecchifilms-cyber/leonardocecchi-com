import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a" }}>
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Resume />
      <Instagram />
      <Contact />
    </main>
  );
}
