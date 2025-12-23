        "use client";

import { Typography, Button } from "@material-tailwind/react";
import { FAQAccordion } from "@/components/faq-accordion";
import { FadeIn } from "@/components/animations";

const FAQS = [
  {
    question: "What is a Digital Signature Certificate (DSC)?",
    answer:
      "A DSC is a secure digital key issued by certifying authorities to validate and authenticate the identity of the holder while signing electronic documents."
  },
  {
    question: "Is DSC legally valid in India?",
    answer:
      "Yes. DSCs are legally valid under the Information Technology Act, 2000."
  },
  {
    question: "Who needs a DSC?",
    answer:
      "Directors, professionals, business owners, GST registrants, tender participants, and anyone filing statutory documents online."
  },
  {
    question: "How long does it take to get a DSC?",
    answer:
      "Typically, DSC issuance takes 1–2 working days after document verification."
  },
  {
    question: "What is the validity of a DSC?",
    answer:
      "DSCs are usually valid for 1 or 2 years depending on the selected plan."
  },
  {
    question: "Why choose VKSK & Company for DSC?",
    answer:
      "We provide end-to-end assistance, fast processing, compliance assurance, and expert guidance."
  }
];

export default function DSCContactAndFAQ() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4 font-bold">
            Need a Digital Signature Certificate?
          </Typography>
          <Typography className="text-center text-gray-600 mb-8">
            Get your DSC quickly and securely with professional assistance from VKSK & Company.
          </Typography>
        </FadeIn>

        <div className="flex justify-center mb-16">
          <a
            href="https://wa.me/919911560588?text=Hello%20VKSK%20Team%2C%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary"
            >
              Buy DSC @ ₹1500
            </Button>
          </a>
        </div>

        <FadeIn>
          <Typography variant="h3" className="text-center mb-8 font-semibold">
            Frequently Asked Questions
          </Typography>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={FAQS} />
        </div>
      </div>
    </section>
  );
}
