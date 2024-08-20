import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Technologies />
      <ContactSection />
    </>
  );
}
