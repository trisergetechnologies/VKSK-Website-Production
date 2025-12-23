"use client";

import { Typography, Card } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";

const PURPOSES = [
  {
    title: "Income Tax Filing",
    description:
      "DSC is mandatory for filing income tax returns where audit is applicable and for signing digital tax forms securely."
  },
  {
    title: "Company & LLP Filings",
    description:
      "Required for filing ROC forms, annual returns, and statutory documents on the MCA portal."
  },
  {
    title: "GST Registration & Returns",
    description:
      "Essential for GST registration, return filing, and authorizing submissions on the GST portal."
  },
  {
    title: "E-Tendering & E-Procurement",
    description:
      "DSC ensures authenticity and security while participating in government and private tenders."
  },
  {
    title: "Legal & Contract Signing",
    description:
      "Used for signing digital contracts, agreements, and legal documents with full legal validity."
  },
  {
    title: "Secure Authentication",
    description:
      "Protects against identity theft and ensures only authorized users can sign digital documents."
  }
];

export default function WhyNeedDSC() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-6 font-bold">
            Why You Need a Digital Signature Certificate
          </Typography>
          <Typography className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Digital Signature Certificates are legally recognized, secure, and
            mandatory for most digital compliance and authentication processes.
          </Typography>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PURPOSES.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="p-6 h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <Typography variant="h5" className="mb-3 font-semibold">
                  {item.title}
                </Typography>
                <Typography className="text-gray-600 leading-relaxed">
                  {item.description}
                </Typography>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
