import Image from "next/image";
import Face from "./face";
import { Button } from "@/components/ui/button";

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-full flex flex-col lg:flex-row gap-28 p-6 items-center justify-center overflow-hidden">
      {/* grid image behind */}
      <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-transparent opacity-10 h-auto w-10/12 max-w-[1250px]" src="/grid.svg" alt="grid image" width={0} height={0} />

      <div className="space-y-7 text-left text-xl">
        <div className="-space-y-1">
          <p>Hi There 👋, I&apos;m</p>
          <h1 className="relative text-8xl">
            {/* blur background colors behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 gradient-primary opacity-50 w-full h-10 blur-3xl" />
            Mohamed Adel
          </h1>
          <h2 className="text-xl text-muted-foreground">
            {"// "} The Developer for the <span className="text-secondary">{"{Web}"}</span>
          </h2>
        </div>
        <div className="space-x-4">
          <Button variant="gradientOutline">See My Work</Button>
          <Button className="bg-muted-foreground/5" variant="ghost">
            Get My CV
          </Button>
        </div>
      </div>
      <div className="relative min-w-[350px] text-center text-9xl min-h-[150px]">
        {/* blur background colors behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 gradient-primary opacity-50 size-[120px] rounded-full blur-3xl" />

        <Face />
      </div>
    </section>
  );
}
