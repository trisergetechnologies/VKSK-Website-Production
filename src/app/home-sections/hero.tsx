"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import { FadeIn, GradientText } from "@/components/animations";
import { ScrollReveal, Parallax, FadeInScale } from "@/components/enhanced-animations";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft/30 via-white to-primary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h1"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Expert <GradientText>Chartered Accountancy</GradientText>{" "}
                  Services
                </Typography>
              </motion.div>

              <FadeIn direction="up" delay={0.4}>
                <Typography
                  variant="lead"
                  className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  VKSK & Company - Your trusted partner for premium financial
                  solutions. Founded in 2022, we deliver excellence in taxation,
                  audits, compliance, and strategic financial advisory.
                </Typography>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary hover:shadow-glow-secondary transition-all transform hover:scale-105"
                    >
                      Get Consultation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outlined"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.8}>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div>
                    <Typography className="text-3xl font-bold gradient-text">
                      2022
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      Established
                    </Typography>
                  </div>
                  <div>
                    <Typography className="text-3xl font-bold gradient-text">
                      CA Firm
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      Partnership
                    </Typography>
                  </div>
                  <div>
                    <Typography className="text-3xl font-bold gradient-text">
                      100+
                    </Typography>
                    <Typography className="text-sm text-gray-600">
                      Clients Served
                    </Typography>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="glass rounded-3xl p-8 shadow-2xl border border-white/20">
                  <Image
                    src="/image/logos/vksklogo.jpg"
                    width={500}
                    height={500}
                    alt="VKSK & Company"
                  />
                </div>
                <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-6 sm:w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5.5C3 4.12 4.12 3 5.5 3h1.1c.7 0 1.33.37 1.66.98l1.1 2.2c.3.6.2 1.32-.25 1.8l-1.2 1.2a15.5 15.5 0 007.2 7.2l1.2-1.2c.48-.45 1.2-.55 1.8-.25l2.2 1.1c.6.33.98.96.98 1.66v1.1c0 1.38-1.12 2.5-2.5 2.5A17.5 17.5 0 013 5.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call Us</p>
                      <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        +91 8800198276
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-6 sm:w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Trusted</p>
                      <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Reliable
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

