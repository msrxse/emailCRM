"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  from_name: z.string().max(255).min(1),
  message: z.string().max(5000).min(0),
  to_email: z.string().email(),
  to_name: z.string().max(255).min(1),
});
export type EmailFormValues = z.infer<typeof formSchema>;

interface EmailFormProps {
  defaultValues?: EmailFormValues;
  disabled?: boolean;
  onSubmit: (values: EmailFormValues) => void;
}

export const EmailForm = ({
  defaultValues,
  disabled,
  onSubmit,
}: EmailFormProps) => {
  const form = useForm<EmailFormValues>({
    defaultValues: defaultValues ?? {
      from_name: "",
      message: "",
      to_email: "",
      to_name: "",
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="from_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>You</FormLabel>
              <FormControl>
                <Input {...field} disabled={disabled} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-x-2">
          <FormField
            control={form.control}
            name="to_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>To Name</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="to_email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>To Email</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={disabled}
                  placeholder="Enter your email message here"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
