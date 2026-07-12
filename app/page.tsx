import { AuroraBackground } from "@/components/aurora-background";
import { Particles } from "@/components/particles";
import { MouseFollower } from "@/components/mouse-follower";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AuroraBackground />
      <Particles />
      <MouseFollower />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
