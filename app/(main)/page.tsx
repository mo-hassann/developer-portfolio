import Game from "@/components/game";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
