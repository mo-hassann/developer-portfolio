"use client";
import { ContactForm } from "@/components/contact-form";
import React, { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "// Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "// Please enter a valid email." }),
  message: z.string().min(1, {
    message: "// please enter any message to submit",
  }),
});

export default function ContactSection() {
  const defaultFormValues: z.infer<typeof formSchema> = {
    name: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(defaultFormValues);
  console.log(formState);
  return (
    <div id="contact" className="flex size-full">
      <div className="flex-1 p-4 flex items-center justify-center [&_form]:w-[400px]">
        <ContactForm formSchema={formSchema} defaultValues={defaultFormValues} setFormState={setFormState} formState={formState} />
      </div>
      <div className="h-full flex-1 flex flex-col items-center justify-center border-l text-muted-foreground p-4">
        <div className="text-left">
          <p className="w-full">{`<!-- the submit data form -->`}</p>
          <div className="space-y-1 text-left [&>span]:text-secondary [&_span]:font-normal text-lg">
            <span>{"<form>"}</span>
            <br />
            <span className="ml-6  flex items-center">
              {"<input"} <span className="text-primary-foreground">name=</span>
              <span className="text-muted-foreground">{`"name"`}</span> <span className="text-primary-foreground">value=</span>
              <span className="text-muted-foreground truncate max-w-20 inline-block -translate-y-1">{`"${formState.name}`}</span> {" />"}
            </span>
            <span className="ml-6  flex items-center">
              {"<input"} <span className="text-primary-foreground">name=</span>
              <span className="text-muted-foreground">{`"email"`}</span> <span className="text-primary-foreground">value=</span>
              <span className="text-muted-foreground truncate max-w-20 inline-block -translate-y-1">{`"${formState.email}"`}</span> {" />"}
            </span>
            <span className="ml-6  flex items-center">
              {"<input"} <span className="text-primary-foreground">name=</span>
              <span className="text-muted-foreground">{`"message"`}</span> <span className="text-primary-foreground">value=</span>
              <span className="text-muted-foreground truncate max-w-20 inline-block -translate-y-1">{`"${formState.message}"`}</span> {" />"}
            </span>
            <span className="ml-6">
              {"<button"} <span className="text-primary-foreground">onClick=</span>
              {`{handleSubmit}`}
              {" />"}
            </span>
            <br />
            <span>{"</form>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
