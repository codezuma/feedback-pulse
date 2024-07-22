'use client'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import FormGroupSelect from '@/components/ui/form/form-select';
import FormTextArea from '@/components/ui/form/FormTextArea';
import FormDatePicker from '@/components/ui/form/form-date-picker';

const zodSchema = z.object({
  project: z.string().min(1, "Project is required"),
  raisedTo: z.string().min(1, "Raised To is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  startDate: z.date(),
  endDate: z.date(),
});

type ZodSchema = z.infer<typeof zodSchema>;

interface SnapshotFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const projectOptions = [
  { value: "project1", label: "Project 1" },
  { value: "project2", label: "Project 2" },
  { value: "project3", label: "Project 3" },
];

const raisedToOptions = [
  { value: "person1", label: "Person 1" },
  { value: "person2", label: "Person 2" },
  { value: "person3", label: "Person 3" },
];

export default function SnapshotForm({ className, ...props }: SnapshotFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<ZodSchema>({
    resolver: zodResolver(zodSchema),
  });

  async function onSubmit(data: ZodSchema) {
    setIsLoading(true);
    // Here you would typically send the data to your backend
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid w-full max-w-xl gap-6", className)} {...props}>
      <header>
        <h2 className="text-xl font-semibold">Create Snapshot</h2>
      </header>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormGroupSelect
            control={form.control}
            name="project"
            label="Project"
            options={projectOptions}
            placeholder="Select a project"
            required
          />
          
          <FormGroupSelect
            control={form.control}
            name="raisedTo"
            label="Raised To"
            options={raisedToOptions}
            placeholder="Select a person"
            required
          />
          
          <FormTextArea
            control={form.control}
            name="description"
            label="Description"
            placeholder="Enter snapshot description"
            required
          />
          <FormDatePicker control={form.control} name="startDate" label="Start Date" required />
          <FormDatePicker control={form.control} name="endDate" label="End Date" required />
          
          <Button type="submit" className='w-full !mt-4' disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Snapshot
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}