"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertOrgsSchema } from "@/db/org-schema";

const formSchema = insertOrgsSchema
  .extend({
    addressCity: z.string().min(1).max(255),
    addressState: z.string().min(1).max(255),
    addressStreet2: z.union([z.string().min(1).optional(), z.literal("")]),
    addressStreet: z.string().min(1).max(255),
    addressCountry: z.string().min(1).max(255),
    addressZip: z.string().min(1).max(255),
  })
  .omit({
    id: true,
    imageUrl: true,
    name: true,
    createdAt: true,
    updatedAt: true,
  });

export type BusinessAddressFormValues = z.input<typeof formSchema>;

interface BusinessAddressStepProps {
  defaultValues?: BusinessAddressFormValues;
  disabled?: boolean;
  onSubmit: (values: BusinessAddressFormValues) => void;
}

export const BusinessAddressStep = ({
  defaultValues,
  disabled,
  onSubmit,
}: BusinessAddressStepProps) => {
  const form = useForm<BusinessAddressFormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="max-w-full md:max-w-2xl t w-full px-2 ">
      <Form {...form}>
        <form
          className="flex flex-col pt-4 space-y-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="addressStreet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressStreet2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address 2</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressState"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressZip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip code</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="text-md w-full"
            // variant="outline"
            disabled={disabled}
            type="submit"
          >
            Confirm Address
          </Button>
        </form>
      </Form>
    </div>
  );
};
