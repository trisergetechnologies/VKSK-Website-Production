"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";
import { EyeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function VisionMission() {
  return (
    <section className="relative py-24 px-4 md:px-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Typography
              variant="h2"
              className="font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Our Purpose & Direction
            </Typography>
            <Typography className="mt-4 text-gray-600 text-lg">
              Driven by values, guided by excellence, and inspired to lead with
              integrity in everything we do.
            </Typography>
          </div>
        </FadeIn>

        {/* Vision & Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <FadeIn direction="left" delay={0.2}>
            <Card className="group border border-primary/20 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardBody className="p-10 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                    <EyeIcon className="w-9 h-9 text-white" />
                  </div>

                  <Typography
                    variant="h4"
                    className="mb-4 font-bold text-gray-900"
                  >
                    Our Vision
                  </Typography>

                  <Typography className="text-primary font-semibold text-lg italic">
                    “To be & get stiffed at par with excellence”
                  </Typography>

                  <Typography className="mt-5 text-gray-700 leading-relaxed">
                    We envision a future where our firm stands as a benchmark of
                    professional excellence—respected, trusted, and admired.
                    Our goal is not only to achieve the highest standards, but
                    to continuously redefine them through innovation,
                    discipline, and unwavering commitment to quality.
                  </Typography>

                  <Typography className="mt-4 text-gray-600">
                    By nurturing talent, embracing responsibility, and leading
                    with clarity, we aspire to create enduring value for our
                    clients, our people, and the profession as a whole.
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </FadeIn>

          {/* Mission */}
          <FadeIn direction="right" delay={0.4}>
            <Card className="group border border-secondary/20 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardBody className="p-10 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <RocketLaunchIcon className="w-9 h-9 text-white" />
                  </div>

                  <Typography
                    variant="h4"
                    className="mb-4 font-bold text-gray-900"
                  >
                    Our Mission
                  </Typography>

                  <Typography className="text-secondary font-semibold text-lg italic">
                    “Serve & get Served”
                  </Typography>

                  <Typography className="mt-5 text-gray-700 leading-relaxed">
                    Our mission is to serve with purpose, integrity, and deep
                    professional responsibility. Every engagement is approached
                    with diligence, transparency, and a client-first mindset. Provide 
                    best solutions to achieve the satisfaction & professional goals.
                  </Typography>

                  <Typography className="mt-4 text-gray-600">
                    Through ethical practices, strategic insight, and
                    personalized solutions, we aim to build long-term
                    partnerships rooted in trust, mutual respect, and shared
                    growth.
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
