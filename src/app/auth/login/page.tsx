"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import FormInput from "@/components/ui/form/FormInput";
import { Button } from "@/components/ui/button";
import FormProvider from "@/components/ui/form/FormProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormPassword from "@/components/ui/form/FormPassword";
import { GithubIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/common/navbar";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const zodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type ZodSchema = z.infer<typeof zodSchema>;

function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<ZodSchema>({
    resolver: zodResolver(zodSchema),
  });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <FormProvider methods={form} onSubmit={form.handleSubmit(() => {})}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              type="email"
              required
            />
            <FormPassword
              control={form.control}
              name="password"
              label="Password"
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </FormProvider>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GithubIcon className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
}

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="lg:p-8 min-h-screen flex items-center justify-center">
        <div className="mx-auto border mt-20 bg-slate-50 flex w-full p-8 rounded-lg h-fit flex-col justify-center space-y-6 max-w-sm">
          <div className="flex  flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
