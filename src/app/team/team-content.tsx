"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const TEAM_MEMBERS = [
  {
    name: "CA Vivek Kumar Lal",
    designation: "Founder & Partner",
    image: "/image/vksk-owner.png", // 🔁 replace with actual image
    description:
      "CA Vivek Kumar Lal is the visionary founder of VKSK & Company. With extensive experience in Chartered Accountancy, he has built a reputation for excellence, integrity, and client-centric advisory.	He has an extensive experience of More than 15 years in the field of Accountancy, Auditing and Domestic Taxation.	He has conducted several Internal Audit of PSUs such as NTPC, NHPC, Power Grid, ONGC etc. and put his values in Audit Report.	He has appointed as an Internal Auditor in South Africa Luanshya Copper Mines where he has awarded for his valuable work in year 2008.",
    expertise: [
      "Taxation & Compliance",
      "Financial Advisory",
      "Business Consulting",
      "Audit & Assurance",
    ],
  },
];

const TEAM_STRUCTURE = [
  {
    title: "Partners",
    description: "Senior partners with decades of combined experience",
    icon: BriefcaseIcon,
    color: "from-primary to-secondary",
  },
  {
    title: "Managers",
    description: "Experienced managers overseeing service delivery",
    icon: ChartBarIcon,
    color: "from-secondary to-accent",
  },
  {
    title: "Associates",
    description: "Dedicated professionals ensuring quality service",
    icon: AcademicCapIcon,
    color: "from-accent to-primary",
  },
  {
    title: "Support Staff",
    description: "Administrative team providing seamless operations",
    icon: BriefcaseIcon,
    color: "from-primary to-accent",
  },
];

export default function TeamContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 md:px-10 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <FadeIn direction="up">
          <div className="container mx-auto text-center max-w-4xl">
            <Typography variant="h1" className="mb-6 font-extrabold">
              Our Team
            </Typography>
            <Typography className="text-lg text-gray-700">
              A strong team of Chartered Accountants and professionals committed
              to accuracy, compliance, and long-term value creation.
            </Typography>
          </div>
        </FadeIn>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-white via-primary/5 to-secondary/10 bg-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Typography
              variant="h3"
              className="mb-14 font-bold text-center"
            >
              Leadership
            </Typography>
          </FadeIn>

          {TEAM_MEMBERS.map((member) => (
            <FadeIn key={member.name} direction="up">
              <Card className="border border-gray-200 shadow-2xl bg-white/80 backdrop-blur-lg">
                <CardBody className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                      <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-xl">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2">
                      <Typography
                        variant="h4"
                        className="mb-1 font-bold"
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="mb-4 text-primary font-semibold"
                      >
                        {member.designation}
                      </Typography>

                      <Typography className="text-gray-700 mb-6 leading-relaxed">
                        {member.description}
                      </Typography>

                      <Typography
                        variant="h6"
                        className="mb-3 font-semibold"
                      >
                        Areas of Expertise
                      </Typography>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {member.expertise.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-soft/30"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <Typography className="text-sm text-gray-700">
                              {item}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-soft/20 to-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Typography
              variant="h3"
              className="mb-12 font-bold text-center"
            >
              Our Team Structure
            </Typography>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_STRUCTURE.map((structure) => {
              const Icon = structure.icon;
              return (
                <StaggerItem key={structure.title}>
                  <Card className="border border-gray-200 hover:shadow-xl transition-all h-full">
                    <CardBody className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${structure.color} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Typography
                        variant="h6"
                        className="mb-2 font-semibold"
                      >
                        {structure.title}
                      </Typography>
                      <Typography className="text-sm text-gray-600">
                        {structure.description}
                      </Typography>
                    </CardBody>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
     <section className="relative py-24 px-4 md:px-10 bg-gradient-to-br from-white via-primary/5 to-secondary/10 overflow-hidden">
  {/* Ambient background glow */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

  <div className="container mx-auto max-w-6xl relative z-10">
    <FadeIn direction="up">
      {/* Section header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Typography
          variant="h3"
          className="mb-4 font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Our Team Values
        </Typography>
        <Typography className="text-gray-700 text-lg leading-relaxed">
          The principles that guide our conduct, shape our culture, and define
          the trust our clients place in us.
        </Typography>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Professional Excellence",
            description:
              "We uphold the highest standards of competence, accuracy, and continuous learning to deliver dependable and forward-thinking solutions.",
            gradient: "from-primary to-secondary",
          },
          {
            title: "Client Commitment",
            description:
              "Every engagement is driven by a deep understanding of client goals, ensuring solutions that support long-term growth and compliance.",
            gradient: "from-secondary to-accent",
          },
          {
            title: "Integrity & Ethics",
            description:
              "Our work is grounded in honesty, transparency, and ethical responsibility, forming the foundation of lasting client relationships.",
            gradient: "from-accent to-primary",
          },
          {
            title: "Collaboration",
            description:
              "We function as a unified team—sharing knowledge, insights, and responsibility to consistently deliver superior outcomes.",
            gradient: "from-primary to-accent",
          },
        ].map((value) => (
          <Card
            key={value.title}
            className="group relative border border-gray-200 bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Hover gradient glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            <CardBody className="relative z-10 p-8">
              {/* Accent bar */}
              <div
                className={`w-12 h-1 rounded-full mb-4 bg-gradient-to-r ${value.gradient}`}
              />

              <Typography
                variant="h5"
                className="mb-3 font-bold text-gray-900"
              >
                {value.title}
              </Typography>

              <Typography className="text-gray-700 text-sm leading-relaxed">
                {value.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </FadeIn>
  </div>
</section>
    </div>
  );
}
