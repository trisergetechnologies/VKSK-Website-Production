"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import { FadeIn, GradientText } from "@/components/animations";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft/30 via-white to-primary/10">
      {/* Animated Background Elements */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <FadeIn direction="right" delay={0.2}>
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <Typography
                variant="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Expert <GradientText>Chartered Accountancy</GradientText> Services
              </Typography>

              <Typography
                variant="lead"
                className="mb-8 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                VKSK & Company – Your trusted partner for premium financial
                solutions. Founded in 2022, we deliver excellence in taxation,
                audits, compliance, and strategic financial advisory.
              </Typography>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary hover:shadow-glow-secondary transition-all"
                    fullWidth
                  >
                    Get Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outlined"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    fullWidth
                  >
                    Our Services
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200">
                <div>
                  <Typography className="text-2xl sm:text-3xl font-bold gradient-text">
                    2022
                  </Typography>
                  <Typography className="text-xs sm:text-sm text-gray-600">
                    Established
                  </Typography>
                </div>
                <div>
                  <Typography className="text-2xl sm:text-3xl font-bold gradient-text">
                    CA Firm
                  </Typography>
                  <Typography className="text-xs sm:text-sm text-gray-600">
                    Partnership
                  </Typography>
                </div>
                <div>
                  <Typography className="text-2xl sm:text-3xl font-bold gradient-text">
                    100+
                  </Typography>
                  <Typography className="text-xs sm:text-sm text-gray-600">
                    Clients Served
                  </Typography>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT IMAGE */}
          <FadeIn direction="left" delay={0.3}>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                className="relative z-10 w-full max-w-sm sm:max-w-md"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                  <Image
                    src="/image/logos/CA-Logo.png"
                    alt="VKSK & Company"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Floating badges – mobile safe */}
                <div className="absolute -right-2 sm:-right-6 -bottom-2 sm:-bottom-6 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                  <p className="text-xs sm:text-sm font-bold text-green-600">
                    Contact Us <br/> +91 9911560588
                  </p>
                </div>

                <div className="absolute -left-2 sm:-left-6 -top-2 sm:-top-6 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                  <p className="text-xs sm:text-sm font-bold text-primary">
                    Trusted<br/>Firm
                  </p>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
