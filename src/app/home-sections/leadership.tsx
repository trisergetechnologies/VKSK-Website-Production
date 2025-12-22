"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";

export default function Leadership() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white overflow-x-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <Typography variant="h2" className="mb-6 font-bold text-gray-900">
                Our Leadership
              </Typography>

              <Typography
                variant="lead"
                className="mb-6 text-gray-600 leading-relaxed"
              >
                Meet CA Vivek Kumar Lal, the founder and driving force behind
                VKSK & Company. With extensive experience in Chartered
                Accountancy, he leads our team in delivering exceptional
                financial solutions.
              </Typography>

              <Typography className="mb-8 text-gray-600">
                Under his leadership, we have built a reputation for excellence,
                integrity, and client-focused service delivery in the Indian
                professional services landscape.
              </Typography>

              <Link href="/team">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary"
                  size="lg"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative flex justify-center lg:justify-end">
              {/* 🔒 Width + aspect locked BEFORE image load */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl glass">
                {/* Background gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

                {/* Image */}
                <Image
                  src="/image/vksk-owner.png"
                  alt="VKSK & Company"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />
              </div>

              {/* Ambient glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
