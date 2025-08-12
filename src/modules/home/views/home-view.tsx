"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Briefcase,
  CheckCircle,
  Download,
  FileText,
  Paintbrush,
  Search,
  UploadCloud,
} from "lucide-react";

const HomeView = () => {
  const features = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "Fast & Easy",
      desc: "Build your resume in minutes with AI-powered suggestions.",
    },
    {
      icon: <Search className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "ATS Optimized",
      desc: "Your resume will get past hiring bots and land in front of real people.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "Professional Designs",
      desc: "Choose from templates tailored to your industry and style.",
    },
  ];

  const steps = [
    {
      icon: <UploadCloud className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "Upload Your Info",
      desc: "Quickly upload your existing resume or enter your details manually.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "Add & Edit Details",
      desc: "Customize and enhance your resume with AI-powered suggestions.",
    },
    {
      icon: <Download className="w-12 h-12 text-primary mx-auto mb-4" />,
      title: "Download & Apply",
      desc: "Export your polished resume as PDF and start applying instantly.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-background px-6 text-foreground py-8">
      {/* Hero Section */}
      <section className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Build Your Perfect Resume in Minutes with AI
          </h1>
          <p className="text-lg text-gray-700">
            ATS-friendly professional resumes tailored to your experience and
            skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="px-8 py-3 text-lg transition hover:shadow-lg focus:shadow-lg"
              aria-label="Start building your resume for free"
            >
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition hover:shadow-lg focus:shadow-lg"
              aria-label="See resume examples"
            >
              See Examples
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by{" "}
            <span className="font-semibold text-primary">2,000+</span> job
            seekers
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/example.png"
            alt="Example resume preview"
            width={512}
            height={512}
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl w-full text-center space-y-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Getting hired was never meant to be hard.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          ResumAI takes the guesswork out of resume writing by using AI to
          highlight your skills, optimize for Applicant Tracking Systems (ATS),
          and present you as the best fit for every job you apply for.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
          {[
            "ATS-friendly formats that get past hiring filters",
            "AI-written bullet points that showcase your skills",
            "Clean, professional designs tailored to your industry",
          ].map((feature) => (
            <div key={feature} className="flex gap-3">
              <CheckCircle className="text-primary w-6 h-6 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why ResumAI Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why ResumAI?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm transition hover:shadow-lg"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm transition hover:shadow-lg"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomeView;
