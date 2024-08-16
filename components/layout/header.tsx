"use client";
import { cn } from "@/lib/utils";
import { Codesandbox, File } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: 1,
    name: "_Home.ts",
    path: "#home",
    icon: File,
  },
  {
    id: 2,
    name: "_About.ts",
    path: "#about",
    icon: File,
  },
  {
    id: 3,
    name: "_Projects.ts",
    path: "#projects",
    icon: File,
  },
  {
    id: 3,
    name: "_Contact-Me.ts",
    path: "#contact",
    icon: File,
    isRight: true,
  },
];

export default function Header() {
  const path = usePathname();
  return (
    <div className="w-full h-12 border-b bg-muted flex items-center">
      <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">{"{M}"}</div>
      <div className="flex items-center size-full">
        {navItems.map((item) => {
          const isActive = item.id === 1 || (item.path.startsWith(path) && path !== "/") || item.path === path;
          return (
            <Link key={item.id} href={item.path} scroll className={cn("relative h-full min-w-40 border-x flex items-center justify-start gap-2 text-muted-foreground hover:bg-background px-4", isActive && "text-white bg-background hover:bg-background", item.isRight && "ml-auto")}>
              <item.icon size={14} className="text-primary-foreground" /> {item.name} {isActive && <BorderActive />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
    <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
  </>
);
