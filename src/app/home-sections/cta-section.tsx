"use client";

import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";
import { ScrollReveal, Parallax } from "@/components/enhanced-animations";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <Parallax speed={0.2}>
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  className="mb-6 font-bold text-white text-3xl md:text-4xl lg:text-5xl"
                >
                  Ready to Transform Your Financial Future?
                </Typography>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="lead"
                  className="mb-10 text-white/90 text-lg md:text-xl"
                >
                  Partner with VKSK & Company for expert Chartered Accountancy
                  services. Let&apos;s discuss how we can help your business thrive.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      varient = "outlined"
                      className="border-2 bg-transparent border-white text-lg text-black hover:bg-white/10 shadow-md px-8 py-4"
                    >
                      Get Free Consultation
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outlined"
                      className="border-2 border-white text-lg text-black hover:bg-white/10 shadow-md px-8 py-4"
                    >
                      Explore Services
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </Parallax>
      </div>
    </section>
  );
}

