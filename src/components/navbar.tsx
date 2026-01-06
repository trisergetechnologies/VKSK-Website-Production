"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

/* ------------------ Main Nav Menu ------------------ */
const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Buy DSC", href: "/dsc" },
  { name: "Services", href: "/services" },
  { name: "Latest News", href: "/#news-updates" },
  { name: "Career", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

/* ------------------ Quick Links ------------------ */
const QUICK_LINKS = [
  { name: "GST Portal", href: "https://www.gst.gov.in" },
  { name: "Income Tax e-Filing", href: "https://www.incometax.gov.in" },
  { name: "CBIC", href: "https://www.cbic.gov.in" },
  { name: "ICAI", href: "https://www.icai.org" },
  { name: "C&AG (CIG)", href: "https://cag.gov.in" },
];

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

/* ------------------ FIXED NavItem ------------------ */
function NavItem({ href, children, isActive, onClick }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block"
      >
        <span
          className={`
            flex items-center gap-2 font-medium transition-colors
            text-black
            hover:text-primary
            active:text-primary
            focus:text-primary
            ${isActive ? "font-semibold text-primary" : ""}
          `}
        >
          {children}
        </span>
      </Link>
    </li>
  );
}


export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [quickOpen, setQuickOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const resizeHandler = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-10 sticky top-4 z-50"
    >
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 border-0 pr-3 py-3 pl-6 shadow-lg shadow-primary/10 glass"
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="/image/logos/CA-Logo.png"
                alt="VKSK & Company"
                className="h-8 md:h-10 object-contain"
              />
            </Link>

            {/* ---------------- Desktop Menu ---------------- */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, href }) => (
                <NavItem
                  key={name}
                  href={href}
                  isActive={isActiveLink(href)}
                >
                  {name}
                </NavItem>
              ))}

              {/* Quick Links (Pure Tailwind) */}
              <li className="relative">
                <button
                  onClick={() => setQuickOpen(!quickOpen)}
                  className="flex items-center gap-1 font-medium text-black hover:text-primary"
                >
                  Quick Links
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {quickOpen && (
                  <ul className="absolute left-0 top-full mt-3 w-60 rounded-xl bg-white shadow-lg border border-gray-100 z-50">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 font-medium text-black hover:bg-gray-50 hover:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary text-white"
                  size="md"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>

            <IconButton
              variant="text"
              color="gray"
              onClick={() => setOpen(!open)}
              className="ml-auto lg:hidden"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          {/* ---------------- Mobile Menu ---------------- */}
          <Collapse open={open}>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, href }) => (
                  <NavItem
                    key={name}
                    href={href}
                    isActive={isActiveLink(href)}
                    onClick={() => setOpen(false)}
                  >
                    {name}
                  </NavItem>
                ))}

                <li>
                  <button
                    onClick={() => setQuickOpen(!quickOpen)}
                    className="flex w-full items-center justify-between font-normal text-black"
                  >
                    Quick Links
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${
                        quickOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {quickOpen && (
                    <ul className="mt-3 ml-3 border-l border-gray-200 pl-4 space-y-3">
                      {QUICK_LINKS.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-normal text-black hover:text-primary"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </motion.div>
  );
}

export default Navbar;
