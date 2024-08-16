"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodObject } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type props = {
  formSchema: ZodObject<any>;
  defaultValues: Record<string, string>;
  setFormState: any;
  formState: any;
};

export function ContactForm({ formSchema, defaultValues, setFormState, formState }: props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Name</FormLabel>
              <FormControl>
                <Input {...field} value={formState.name} onChange={(e) => setFormState((state: any) => ({ ...state, name: e.target.value }))} placeholder="Your-Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Email</FormLabel>
              <FormControl>
                <Input placeholder="your-email@email.com" {...field} value={formState.email} onChange={(e) => setFormState((state: any) => ({ ...state, email: e.target.value }))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Let's Work Together!" className="resize-y max-h-44" {...field} value={formState.message} onChange={(e) => setFormState((state: any) => ({ ...state, message: e.target.value }))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
