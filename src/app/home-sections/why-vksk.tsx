"use client";

import { Typography } from "@material-tailwind/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ScrollReveal, StaggerReveal, FadeInScale } from "@/components/enhanced-animations";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const REASONS = [
  {
    title: "Expert Team",
    description:
      "Led by experienced Chartered Accountants with deep industry knowledge and expertise.",
    icon: AcademicCapIcon,
    color: "text-primary",
  },
  {
    title: "Client-Focused",
    description:
      "We prioritize your success with personalized solutions tailored to your unique needs.",
    icon: CheckCircleIcon,
    color: "text-secondary",
  },
  {
    title: "Timely Delivery",
    description:
      "Commitment to deadlines with efficient processes ensuring on-time service delivery.",
    icon: ClockIcon,
    color: "text-accent",
  },
  {
    title: "Trust & Integrity",
    description:
      "Built on a foundation of ethical practices, transparency, and unwavering commitment.",
    icon: ShieldCheckIcon,
    color: "text-primary",
  },
];

export default function WhyVKSK() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-soft/30 to-white">
      <div className="container mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 font-bold text-gray-900">
              Why Choose VKSK & Company?
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl mx-auto text-gray-600"
            >
              Excellence, integrity, and client success are at the heart of
              everything we do
            </Typography>
          </div>
        </FadeIn>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeInScale key={reason.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`w-10 h-10 ${reason.color}`} />
                  </motion.div>
                  <Typography
                    variant="h6"
                    className="mb-3 font-bold text-gray-900"
                  >
                    {reason.title}
                  </Typography>
                  <Typography className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </Typography>
                </motion.div>
              </FadeInScale>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}

