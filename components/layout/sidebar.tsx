import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-full border-r bg-muted flex flex-col justify-start flex-shrink-0 first:border-b">
      <Link href="/" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background/40", false && "text-white bg-background hover:bg-background")}>
        <File />
      </Link>
      <Link href="/" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background/40", true && "text-white bg-background hover:bg-background")}>
        <File />
        {true && <BorderActive />}
      </Link>
      <Link href="/" className={cn("relative size-14 flex items-center justify-center text-muted-foreground hover:bg-background/40", false && "text-white bg-background hover:bg-background")}>
        <File />
      </Link>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute left-0 top-0 h-full w-0.5 bg-primary" />
    <div className="absolute -right-0.5 top-0 h-full w-1 bg-background" />
  </>
);
