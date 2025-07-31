"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertOrgsSchema } from "@/db/org-schema";
import { Button } from "@/components/ui/button";

const formSchema = insertOrgsSchema
  .extend({
    imageUrl: z.union([z.string().min(1).optional(), z.literal("")]),
    name: z.string().min(1),
  })
  .omit({
    addressCity: true,
    addressCountry: true,
    addressState: true,
    addressStreet: true,
    addressStreet2: true,
    addressZip: true,
    createdAt: true,
    id: true,
    updatedAt: true,
  });
export type BusinessInfoFormValues = z.input<typeof formSchema>;

interface BusinessInfoStepProps {
  defaultValues?: BusinessInfoFormValues;
  disabled?: boolean;
  onSubmit: (values: BusinessInfoFormValues) => void;
}

export const BusinessInfoStep = ({
  defaultValues,
  disabled,
  onSubmit,
}: BusinessInfoStepProps) => {
  const form = useForm<BusinessInfoFormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });
  const [hasUploadedImage, setHasUploadedImage] = useState<boolean>(false);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);

  return (
    <div className="max-w-full md:max-w-2xl text-center mx-auto w-full px-2">
      <Form {...form}>
        <form
          className="flex flex-col pt-4 space-y-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Business&apos; Name</FormLabel>
                <FormControl>
                  <Input {...field} disabled={disabled} />
                </FormControl>
              </FormItem>
            )}
          />
          {uploadedPhotoUrl && (
            <div className="flex justify-center w-full">
              <Image
                alt="Uploaded Image"
                className="rounded-md"
                height={200}
                src={uploadedPhotoUrl}
                width={200}
              />
            </div>
          )}
          {/* Here we fake uploadthing where the user should be able to 
          upload an image and its url send as part of this form data values */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={() => (
              <>
                <FormItem className="flex flex-col w-full justify-center items-center">
                  <FormLabel className="self-start">
                    {uploadedPhotoUrl
                      ? "Business Logo"
                      : "Add a Logo for your Business"}
                  </FormLabel>
                  <FormControl>
                    <Button
                      className={
                        hasUploadedImage
                          ? "bg-emerald-500 border-2 font-medium hover:bg-emerald-400 text-md w-full"
                          : "bg-sky-500 rounded-sm font-medium hover:bg-sky-400 border-2 text-md w-full"
                      }
                      disabled={disabled || hasUploadedImage}
                      onClick={() => {
                        setHasUploadedImage(true);
                        setUploadedPhotoUrl("/globe.svg");
                        form.setValue("imageUrl", "/globe.svg"); // <-- sync with React Hook Form
                      }}
                    >
                      {hasUploadedImage
                        ? "Logo Uploaded!"
                        : "Upload Logo (Optional)"}
                    </Button>
                  </FormControl>
                  <FormDescription>Images up to 16MB, max 2</FormDescription>
                </FormItem>
              </>
            )}
          />
          <Button
            className="text-md w-full"
            // variant="outline"
            disabled={disabled}
            type="submit"
          >
            Create a new Business Account
          </Button>
        </form>
      </Form>
    </div>
  );
};
