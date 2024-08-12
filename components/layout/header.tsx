import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-12 border-b bg-muted flex items-center">
      <div className="w-14 flex items-center justify-center">(*_*)</div>
      <div className="flex items-center h-full">
        <Link href="/" className={cn("relative h-full w-40 border-x flex items-center justify-start gap-1 text-muted-foreground hover:bg-background/40 px-4", true && "text-white bg-background hover:bg-background")}>
          <File /> Home {true && <BorderActive />}
        </Link>
        <Link href="/" className={cn("relative h-full w-40 border-r flex items-center justify-start gap-1 text-muted-foreground hover:bg-background/40 px-4", false && "text-white bg-background")}>
          <File /> Home
        </Link>
        <Link href="/" className={cn("relative h-full w-40 border-r flex items-center justify-start gap-1 text-muted-foreground hover:bg-background/40 px-4", false && "text-white bg-background")}>
          <File /> Home
        </Link>
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
    <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
  </>
);
