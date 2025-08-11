"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">ResumAI</h4>
          <p className="max-w-xs">
            AI-powered resume builder that helps you land your dream job faster.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/features" className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/examples" className="hover:text-primary">
                Examples
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-primary">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:support@resumai.com"
                className="hover:text-primary"
              >
                support@resumai.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-primary">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/resumai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} ResumAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
