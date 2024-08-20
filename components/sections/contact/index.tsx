import { Globe } from "lucide-react";
import Game from "./game";
import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <div id="contact" className="flex justify-between w-full container my-32">
      <div className="flex flex-col items-center gap-2 text-center max-w-[400px]">
        <h1 className="text-gradient-primary text-4xl">Still Not Sure About Contacting Me?</h1>
        <p className="text-muted-foreground mb-9">{"// "}you can play a game while thinking</p>

        <Game />
      </div>

      <div className="w-[450px] h-auto rounded-2xl bg-muted border overflow-hidden">
        <div className="flex justify-between flex-shrink-0 px-4 pt-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe size={18} />
            <span>contact-form</span>
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
      </div>
    </div>
  );
}
