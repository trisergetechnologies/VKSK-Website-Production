"use client";

import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { FadeIn, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

export default function DSCHero() {
  return (
    <section className="relative min-h-[90svh] flex items-center bg-gradient-to-br from-soft/30 via-white to-primary/10 px-4 md:px-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
          className="absolute top-20 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        </div>

        {/* Content – LEFT */}
        <FadeIn direction="left">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Digital <GradientText>Signature Certificate </GradientText> (DSC)
            </Typography>

            <Typography className="text-lg text-gray-700 mb-6 leading-relaxed">
              Secure your digital identity with legally valid Digital Signature
              Certificates issued through <strong>VKSK & Company</strong>.
              We help individuals, professionals, and businesses obtain DSCs
              quickly, securely, and compliantly.
            </Typography>

            <Typography className="text-gray-600 mb-8">
              From company filings to income tax returns, DSCs are mandatory for
              most online government and statutory processes in India.
            </Typography>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary"
            >
              Get Your DSC Today
            </Button>
          </div>
        </FadeIn>

        {/* Image – RIGHT */}
        <FadeIn direction="right">
          <motion.div
            className="relative w-full max-w-md mx-auto aspect-square rounded-3xl mt-3 overflow-hidden glass shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/image/fingerprint-dsc.jpg"
              alt="Digital Signature Certificate"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </motion.div>
        </FadeIn>

      </div>
    </section>
  );
}
