"use client";

import Link from "next/link";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ScrollReveal, StaggerReveal, FadeInScale } from "@/components/enhanced-animations";
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  CalculatorIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  BanknotesIcon,
  ScaleIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  {
    title: "Taxation & Returns",
    description: "Comprehensive tax planning and filing services for individuals and businesses.",
    icon: CalculatorIcon,
    href: "/services/taxation-returns",
    gradient: "from-primary to-secondary",
  },
  {
    title: "GST Services",
    description: "End-to-end GST registration, filing, and compliance solutions.",
    icon: DocumentTextIcon,
    href: "/services/gst-services",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Audits",
    description: "Internal, statutory, and tax audit services with expert analysis.",
    icon: DocumentMagnifyingGlassIcon,
    href: "/services/audits",
    gradient: "from-accent to-primary",
  },
  {
    title: "Business Setup",
    description: "Complete business registration and compliance support.",
    icon: BuildingLibraryIcon,
    href: "/services/business-setup",
    gradient: "from-primary to-accent",
  },
  {
    title: "Legal & Corporate Law",
    description: "Expert guidance on corporate law matters and legal compliance.",
    icon: ScaleIcon,
    href: "/services/legal-corporate",
    gradient: "from-secondary to-primary",
  },
  {
    title: "Financial Advisory",
    description: "Strategic financial planning and advisory services.",
    icon: ChartBarIcon,
    href: "/services/financial-advisory",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Debt Syndication",
    description: "Project financing and debt syndication solutions.",
    icon: BanknotesIcon,
    href: "/services/debt-syndication",
    gradient: "from-primary to-secondary",
  },
  {
    title: "RBI & Regulatory",
    description: "Comprehensive regulatory compliance and RBI matters.",
    icon: BriefcaseIcon,
    href: "/services/rbi-regulatory",
    gradient: "from-secondary to-accent",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 font-bold text-gray-900">
              Our Services
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl mx-auto text-gray-600"
            >
              Comprehensive Chartered Accountancy services tailored to meet your
              business needs
            </Typography>
          </div>
        </FadeIn>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInScale key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                      <CardBody className="p-6">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <Typography
                          variant="h6"
                          className="mb-3 font-bold text-gray-900 group-hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Typography>
                        <Typography className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </Typography>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Link>
              </FadeInScale>
            );
          })}
        </StaggerReveal>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-glow-primary transition-all transform hover:scale-105">
                View All Services
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

