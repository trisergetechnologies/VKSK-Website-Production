"use client";

import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { FadeIn } from "./animations";

const INTERNAL_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const EXTERNAL_LINKS = [
  { name: "Income Tax India", href: "https://www.incometax.gov.in" },
  { name: "GST Portal", href: "https://www.gst.gov.in" },
  { name: "MCA Portal", href: "https://www.mca.gov.in" },
  { name: "RBI", href: "https://www.rbi.org.in" },
];

const CURRENT_YEAR = new Date().getFullYear();

const FIRM_INFO = {
  name: "V K S K & COMPANY",
  type: "Partnership",
  registration: "040721N",
  established: "26-12-2022",
  address:
    "A-196/1B, Shri Ram Nagar, Nearby Punjab National Bank, Shahdara, New Delhi-110092",
  email: "vkskoffice@gmail.com",
  phone: "+91-9911565237",
};

export function Footer() {
  return (
    <footer className="relative px-8 pt-28 pb-10 bg-gradient-to-b from-white via-primary/5 to-secondary/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <FadeIn direction="up" delay={0.1}>
            <div>
              <Typography
                variant="h5"
                className="mb-4 font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              >
                VKSK & Company
              </Typography>

              <Typography className="text-gray-600 text-sm mb-2">
                {FIRM_INFO.type}
              </Typography>
              <Typography className="text-gray-600 text-sm mb-2">
                Reg. No.: {FIRM_INFO.registration}
              </Typography>

              <Typography className="mt-5 text-gray-700 text-sm leading-relaxed">
                A professionally driven firm committed to excellence,
                compliance, and long-term value creation for individuals and
                enterprises.
              </Typography>
            </div>
          </FadeIn>

          {/* Quick Links – External */}
          <FadeIn direction="up" delay={0.2}>
            <div>
              <Typography
                variant="h6"
                className="mb-4 font-semibold text-gray-900"
              >
                Financial Resources
              </Typography>

              <ul className="flex flex-col gap-2">
                {EXTERNAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Quick Links – Internal */}
          <FadeIn direction="up" delay={0.3}>
            <div>
              <Typography
                variant="h6"
                className="mb-4 font-semibold text-gray-900"
              >
                Explore VKSK
              </Typography>

              <ul className="flex flex-col gap-2">
                {INTERNAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <Typography className="text-sm text-gray-600 hover:text-primary transition-colors">
                        {link.name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="up" delay={0.4}>
            <div>
              <Typography
                variant="h6"
                className="mb-4 font-semibold text-gray-900"
              >
                Contact Us
              </Typography>

              <Typography className="text-gray-600 text-sm leading-relaxed mb-3">
                {FIRM_INFO.address}
              </Typography>

              <Typography className="text-gray-600 text-sm mb-2">
                Email:{" "}
                <a
                  href={`mailto:${FIRM_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {FIRM_INFO.email}
                </a>
              </Typography>

              <Typography className="text-gray-600 text-sm">
                Phone:{" "}
                <a
                  href={`tel:${FIRM_INFO.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {FIRM_INFO.phone}
                </a>
              </Typography>
            </div>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <Typography className="text-gray-600 text-sm">
            © {CURRENT_YEAR} {FIRM_INFO.name}. All rights reserved.
          </Typography>
          <Typography className="text-gray-500 text-xs mt-2">
            Chartered Accountants | Established {FIRM_INFO.established}
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
