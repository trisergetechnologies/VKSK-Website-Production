"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  ScrollReveal,
  StaggerReveal,
  FadeInScale,
  SlideIn,
  RotateIn,
  Parallax,
} from "@/components/enhanced-animations";
import { FAQAccordion } from "@/components/faq-accordion";
import {
  BuildingOfficeIcon,
  CalendarIcon,
  MapPinIcon,
  IdentificationIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
  HeartIcon,
  LightBulbIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const FIRM_INFO = {
  name: "V K S K & COMPANY",
  type: "Partnership",
  registration: "040721N",
  established: "26-12-2022",
  address:
    "A-110 Ground Floor, Gate No. 4, Swasthya Vihar, Near Preet Vihar, New Delhi-110092",
  pan: "AAWFV4339D",
};

const INFO_ITEMS = [
  {
    icon: BuildingOfficeIcon,
    label: "Firm Type",
    value: FIRM_INFO.type,
    color: "from-primary via-secondary to-accent",
    delay: 0.1,
  },
  {
    icon: IdentificationIcon,
    label: "Registration No.",
    value: FIRM_INFO.registration,
    color: "from-secondary via-accent to-primary",
    delay: 0.2,
  },
  {
    icon: CalendarIcon,
    label: "Established",
    value: FIRM_INFO.established,
    color: "from-accent via-primary to-secondary",
    delay: 0.3,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "New Delhi",
    color: "from-primary via-accent to-secondary",
    delay: 0.4,
  },
];

const VALUES = [
  {
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
    icon: ShieldCheckIcon,
    color: "from-primary to-secondary",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every service we deliver, continuously improving our processes and knowledge.",
    icon: TrophyIcon,
    color: "from-secondary to-accent",
  },
  {
    title: "Client Focus",
    description:
      "Our clients are at the center of everything we do. We prioritize their success and satisfaction above all.",
    icon: HeartIcon,
    color: "from-accent to-primary",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and modern solutions to provide cutting-edge financial services to our clients.",
    icon: LightBulbIcon,
    color: "from-primary to-accent",
  },
];

const FAQS = [
  {
    question: "What services does VKSK & Company offer?",
    answer:
      "VKSK & Company offers comprehensive Chartered Accountancy services including taxation, GST, audits, compliance, advisory, and regulatory matters.",
  },
  {
    question: "Where is VKSK & Company located?",
    answer:
      "A-110 Ground Floor, Gate No. 4, Swasthya Vihar, Near Preet Vihar, New Delhi-110092.",
  },
  {
    question: "When was VKSK & Company established?",
    answer: "December 26, 2022.",
  },
  {
    question: "Do you provide remote consultations?",
    answer:
      "Yes, we provide in-person, remote, and online consultation services.",
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-white via-secondary/10 to-accent/20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Parallax speed={0.3}>
          <div className="container mx-auto px-4 md:px-10 relative z-10">
            <ScrollReveal direction="fade">
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent mb-8 shadow-2xl items-center justify-center"
                >
                  <SparklesIcon className="w-10 h-10 text-white" />
                </motion.div>

                <Typography variant="h1" className="mb-6 font-bold">
                  About{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    VKSK & Company
                  </span>
                </Typography>
                {/* Subtitle */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                >
                  <Typography className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    A legacy of trust, professional excellence, and ethical
                    leadership — empowering individuals and enterprises to grow
                    with confidence in a rapidly evolving financial world.
                  </Typography>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </Parallax>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-4 md:px-10 relative overflow-hidden bg-gradient-to-br from-soft/30 via-white to-primary/10">
        <div
          className={`absolute inset-0 opacity-20 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%238F87F1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <ScrollReveal direction="up">
            <Typography variant="h2" className="text-center font-bold mb-10">
              Our Story
            </Typography>
          </ScrollReveal>

          <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
            <CardBody className="p-8">
              <Typography className="text-lg leading-relaxed">
                Established in <strong>2022</strong>, VKSK & Company was founded
                with a commitment to excellence, integrity, and client success.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal direction="up">
            <FAQAccordion faqs={FAQS} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
