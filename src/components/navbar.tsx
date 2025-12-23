"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Buy DSC", href: "/dsc" },
  { name: "Services", href: "/services" },
  { name: "Latest News", href: "/#news-updates" },
  { name: "Contact", href: "/contact" },
];

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ href, children, isActive, onClick }: NavItemProps) {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        <Typography
          variant="paragraph"
          className={`flex items-center gap-2 font-medium transition-colors ${
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  /** ✅ Correct active state handling (supports hash links) */
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
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6 shadow-lg shadow-primary/10 glass"
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="/image/logos/CA-Logo.png"
                alt="VKSK & Company"
                className="h-8 md:h-10 object-contain"
              />
            </Link>

            {/* Desktop Menu */}
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
            </ul>

            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary hover:shadow-glow-secondary transition-all"
                  size="md"
                >
                  Get Consultation
                </Button>
              </Link>
            </div>

            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          {/* Mobile Menu */}
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
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
              </ul>

              <div className="mt-6 mb-4 flex items-center gap-4">
                <Link href="/contact" className="w-full" onClick={() => setOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                    size="md"
                  >
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
