"use client";

import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { ChromeIcon, GithubIcon, OctagonAlertIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const SignInView = () => {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);
    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => setPending(false),
        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        },
      }
    );
  };

  const onSocial = async (provider: "github" | "google") => {
    setError(null);
    setPending(true);
    authClient.signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => setPending(false),
        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-12">
      <Card className="overflow-hidden p-0 shadow-lg">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Form Section */}
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">Sign in to your account</p>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="********" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && (
                <Alert className="bg-destructive/10 border-none !text-destructive flex items-center gap-2">
                  <OctagonAlertIcon className="h-4 w-4" />
                  <AlertTitle className="text-sm">{error}</AlertTitle>
                </Alert>
              )}

              <Button type="submit" disabled={pending} className="w-full">
                {pending ? "Signing In..." : "Sign In"}
              </Button>

              <div className="relative text-center text-sm before:absolute before:inset-0 before:top-1/2 before:border-t before:border-border">
                <span className="bg-card text-muted-foreground relative px-2 z-10">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  type="button"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => onSocial("github")}
                >
                  <GithubIcon className="w-4 h-4" />
                  Github
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => onSocial("google")}
                >
                  <ChromeIcon className="w-4 h-4" />
                  Google
                </Button>
              </div>

              <p className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="underline underline-offset-4">
                  Sign up
                </Link>
              </p>
            </form>
          </FormProvider>

          {/* Side panel with logo */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 p-8 gap-4 text-white rounded-tr-lg rounded-br-lg">
            <h2 className="text-3xl font-bold">ResumAI</h2>
            <p className="text-center max-w-xs opacity-90">
              Create your perfect resume powered by AI in just minutes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInView;
