"use client";
import { useEffect, useState } from "react";

export default function Face() {
  const [pos, setPos] = useState({ x: 30, y: 30 }); // from 0 to 100
  const char = pos.y < 90 && pos.y > 10 ? "-" : "o";

  const handleMouseMove = (event: MouseEvent) => {
    setPos({ x: Math.floor((event.clientX / window.innerWidth) * 100), y: Math.floor((event.clientY / window.innerHeight) * 100) });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(pos);

  return (
    <>
      {"{"}
      <span className="size-[50px] inline-block bg-slate-200 relative overflow-hidden rounded-full bg-background">
        <div className="absolute size-[20px] rounded-full bg-slate-900" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: `translate(-${pos.x}%,-${pos.y}%)` }} />
      </span>
      <span className="inline-block translate-y-14 text-slate-200 text-8xl w-14">{char}</span>
      <span className="size-[50px] inline-block bg-slate-200 relative overflow-hidden rounded-full bg-background">
        <div className="absolute size-[20px] rounded-full bg-slate-900" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: `translate(-${pos.x}%,-${pos.y}%)` }} />
      </span>
      {"}"}
    </>
  );
}