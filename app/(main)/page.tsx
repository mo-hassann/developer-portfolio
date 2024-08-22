import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Technologies />
      <ContactSection />
    </Suspense>
  );
}
