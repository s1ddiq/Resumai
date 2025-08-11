"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const HomeNavbar = () => {
  return (
    <nav
      aria-label="Primary Navigation"
      className="min-h-16 flex justify-between items-center px-6"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          width={128}
          height={32}
          alt="ResumAI Logo"
          priority
        />
      </div>

      {/* Nav Links (hidden on mobile) */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
        <Link
          href="/features"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          Pricing
        </Link>
        <Link
          href="/faq"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          FAQ
        </Link>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          Sign in
        </Link>
        <Button asChild size="sm" aria-label="Get Started with ResumAI">
          <Link href="/signup">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
