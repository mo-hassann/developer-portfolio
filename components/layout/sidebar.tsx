import data from "@/data";
import { cn } from "@/lib/utils";
import { File, Github, Info } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-full border-r bg-muted hidden lg:flex flex-col justify-start flex-shrink-0">
      <Link href="/" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background", "text-foreground bg-background hover:bg-background")}>
        <BorderActive /> <Info />
      </Link>
      {data.sidebar.links.map(
        (link) =>
          link.link && (
            <Link key={link.name} href={link.link} target="_blank" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background mt-auto")}>
              <link.icon />
            </Link>
          )
      )}
    </div>
  );
}

const BorderActive = () => <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-foreground" />;
