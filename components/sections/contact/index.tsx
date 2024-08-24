"use client";
import { Globe } from "lucide-react";
import Game from "./game";
import { ContactForm } from "./contact-form";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function ContactSection() {
  const [gameTurnsLeft, setGameTurnsLeft] = useState(1);
  const ref = useRef(null);
  useCurSection(ref, 0.5);
  return (
    <div ref={ref} id="contact" className="w-full container py-32">
      <h1 className="text-center text-2xl md:text-4xl mb-12">
        <span className="text-gradient-primary">{"-{ "}</span>
        Contact Me
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>
      <div className="flex items-center justify-around w-full h-full">
        {gameTurnsLeft > 0 && (
          <div className="hidden lg:flex flex-col items-center gap-2 text-center max-w-[400px]">
            <h1 className="text-gradient-primary text-4xl">Still Not Sure About Contacting Me?</h1>
            <p className="text-muted-foreground mb-6">{"// "}you can play a game while thinking</p>

            <Game turnsLeft={gameTurnsLeft} setTurnsLeft={setGameTurnsLeft} />
          </div>
        )}

        <motion.div layout className="w-[450px] h-fit rounded-2xl bg-muted border overflow-hidden">
          <div className="flex justify-between flex-shrink-0 px-4 pt-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe size={18} />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block rounded-full size-3 bg-green-500 ml-auto" />
              <span className="block rounded-full size-3 bg-yellow-500" />
              <span className="block rounded-full size-3 bg-red-500 " />
            </div>
          </div>
          <div className="p-6">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
