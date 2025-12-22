"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  BanknotesIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalculatorIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Link from "next/link";

const SERVICES = [
  {
    id: "taxation-returns",
    title: "Taxation & Returns",
    description:
      "Comprehensive tax planning, filing, and advisory services for individuals and businesses. We help you optimize your tax liabilities while ensuring full compliance.",
    icon: CalculatorIcon,
    href: "/services/taxation-returns",
    gradient: "from-primary to-secondary",
    features: [
      "Income Tax Planning & Filing",
      "Corporate Tax Services",
      "Tax Advisory & Consulting",
      "TDS Compliance",
      "Tax Assessment Support",
    ],
  },
  {
    id: "gst-services",
    title: "GST Services",
    description:
      "End-to-end GST solutions including registration, return filing, refund processing, and compliance management to keep your business GST-ready.",
    icon: DocumentTextIcon,
    href: "/services/gst-services",
    gradient: "from-secondary to-accent",
    features: [
      "GST Registration",
      "GST Return Filing",
      "GST Refund Processing",
      "GST Audit & Assessment",
      "Compliance Management",
    ],
  },
  {
    id: "audits",
    title: "Audits",
    description:
      "Professional audit services including internal, statutory, and tax audits with thorough analysis and actionable recommendations.",
    icon: DocumentMagnifyingGlassIcon,
    href: "/services/audits",
    gradient: "from-accent to-primary",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "GST Audit",
      "Due Diligence",
    ],
  },
  {
    id: "business-setup",
    title: "Business Setup & Compliance",
    description:
      "Complete support for business registration, company incorporation, and ongoing compliance to help you start and run your business smoothly.",
    icon: BuildingLibraryIcon,
    href: "/services/business-setup",
    gradient: "from-primary to-accent",
    features: [
      "Company Incorporation",
      "Partnership Registration",
      "LLP Registration",
      "ROC Compliance",
      "Annual Filing",
    ],
  },
  {
    id: "legal-corporate",
    title: "Legal & Corporate Law Matters",
    description:
      "Expert guidance on corporate law, regulatory compliance, and legal matters to ensure your business operates within the legal framework.",
    icon: ScaleIcon,
    href: "/services/legal-corporate",
    gradient: "from-secondary to-primary",
    features: [
      "Corporate Law Advisory",
      "Legal Compliance",
      "Agreements & Contracts",
      "Regulatory Filings",
      "Corporate Governance",
    ],
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory & Planning",
    description:
      "Strategic financial planning and advisory services to help you make informed decisions and achieve your financial goals.",
    icon: ChartBarIcon,
    href: "/services/financial-advisory",
    gradient: "from-accent to-secondary",
    features: [
      "Financial Planning",
      "Investment Advisory",
      "Budgeting & Forecasting",
      "MIS & Reporting",
      "Performance Analysis",
    ],
  },
  {
    id: "debt-syndication",
    title: "Debt Syndication & Project Financing",
    description:
      "Assistance in securing project financing and debt syndication from banks and financial institutions to support your business growth.",
    icon: BanknotesIcon,
    href: "/services/debt-syndication",
    gradient: "from-primary to-secondary",
    features: [
      "Project Financing",
      "Debt Syndication",
      "Loan Documentation",
      "Financial Projections",
      "Bank Liaison",
    ],
  },
  {
    id: "rbi-regulatory",
    title: "RBI & Regulatory Matters",
    description:
      "Comprehensive support for RBI compliance, regulatory filings, and adherence to financial sector regulations.",
    icon: BriefcaseIcon,
    href: "/services/rbi-regulatory",
    gradient: "from-secondary to-accent",
    features: [
      "RBI Compliance",
      "Regulatory Filings",
      "FCRA Matters",
      "FEMA Compliance",
      "Regulatory Advisory",
    ],
  },
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-10 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <FadeIn direction="up">
          <div className="container mx-auto text-center">
            <Typography variant="h1" className="mb-6 font-bold text-gray-900">
              Our Services
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl mx-auto text-gray-700 text-lg"
            >
              Comprehensive Chartered Accountancy services designed to meet all
              your financial and compliance needs
            </Typography>
          </div>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  
                    <Card className="h-full border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                      <CardBody className="p-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <Typography
                          variant="h5"
                          className="mb-3 font-semibold text-gray-900 group-hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Typography>
                        <Typography className="text-gray-600 mb-4">
                          {service.description}
                        </Typography>
                        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More →
                        </div>
                      </CardBody>
                    </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-soft/30 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-6 font-bold text-gray-900">
              Need Help Choosing the Right Service?
            </Typography>
            <Typography className="text-gray-700 mb-8 text-lg">
              Our expert team is here to guide you. Schedule a consultation to
              discuss your specific requirements.
            </Typography>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-glow-primary transition-all transform hover:scale-105">
                Schedule Consultation
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

