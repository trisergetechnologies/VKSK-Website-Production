"use client";

import Link from "next/link";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { ServiceData } from "./services-data";

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative py-20 px-4 md:px-10 bg-gradient-to-br ${service.gradient} opacity-90`}
      >
        <FadeIn direction="up">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <Typography variant="h1" className="mb-6 font-bold text-white">
              {service.title}
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl mx-auto text-white/90 text-lg"
            >
              {service.description}
            </Typography>
          </div>
        </FadeIn>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeIn direction="up">
            <Typography className="text-gray-700 leading-relaxed text-lg">
              {service.longDescription}
            </Typography>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-soft/20 to-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-8 font-bold text-center text-gray-900">
              Our Service Features
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <FadeIn key={feature} direction="up" delay={index * 0.1}>
                <Card className="border border-gray-200 hover:border-primary/50 transition-all">
                  <CardBody className="p-4 flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <Typography className="text-gray-700 font-medium">
                      {feature}
                    </Typography>
                  </CardBody>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-6 font-bold text-gray-900">
              Who Can Benefit?
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.targetAudience.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 p-3 rounded-lg bg-soft/30"
                >
                  <ArrowRightIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <Typography className="text-gray-700">{audience}</Typography>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-12 font-bold text-center text-gray-900">
              Our Process
            </Typography>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {service.process.map((step) => (
              <StaggerItem key={step.step}>
                <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      >
                        <Typography className="text-white font-bold text-lg">
                          {step.step}
                        </Typography>
                      </div>
                      <div className="flex-1">
                        <Typography
                          variant="h5"
                          className="mb-2 font-semibold text-gray-900"
                        >
                          {step.title}
                        </Typography>
                        <Typography className="text-gray-600">
                          {step.description}
                        </Typography>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-8 font-bold text-center text-gray-900">
              Key Benefits
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <Card
                  key={benefit}
                  className="border border-primary/20 hover:border-primary/50 transition-all"
                >
                  <CardBody className="p-4 flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <Typography className="text-gray-700">{benefit}</Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-10 bg-gradient-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-6 font-bold text-white">
              Ready to Get Started?
            </Typography>
            <Typography className="text-white/90 mb-8 text-lg">
              Contact us today to discuss how we can help you with {service.title.toLowerCase()}
            </Typography>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-xl"
              >
                Schedule Consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

