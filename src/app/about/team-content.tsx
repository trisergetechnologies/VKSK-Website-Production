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
import {
  ScrollReveal,
  Parallax,
} from "@/components/enhanced-animations";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

/* ======================================================
   DATA
====================================================== */

const TEAM_MEMBERS = [
  {
    name: "CA Vivek Kumar Lal",
    designation: "Founder & Partner",
    image: "/image/vksk-owner.png",
    description:
      "CA Vivek Kumar Lal is the visionary founder of VKSK & Company. With extensive experience in Chartered Accountancy, he has built a reputation for excellence, integrity, and client-centric advisory. He has an extensive experience of more than 15 years in the field of Accountancy, Auditing and Domestic Taxation. He has conducted several Internal Audits of PSUs such as NTPC, NHPC, Power Grid, ONGC etc. He has also been appointed as an Internal Auditor in South Africa (Luanshya Copper Mines) where he was awarded for his valuable work in the year 2008.",
    expertise: [
      "Taxation & Compliance",
      "Financial Advisory",
      "Business Consulting",
      "Audit & Assurance",
    ],
  },
];

const ADDITIONAL_LEADERS = [
  {
    name: "Sikander Sahu",
    designation: "Partner",
    image: "/image/logos/profile3d.jpg",
    summary:
      "Expert in statutory audits, governance frameworks, and enterprise risk management across multiple sectors.",
    expertise: [
      "Statutory Audits",
      "Risk Management",
      "Ind AS & IFRS",
      "Corporate Governance",
    ],
  },
  {
    name: "Shubham Jindal",
    designation: "General Manager",
    image: "/image/logos/profile3d.jpg",
    summary:
      "GST advisory and litigation specialist helping organizations maintain compliance while optimizing tax efficiency.",
    expertise: [
      "GST Advisory",
      "Litigation Support",
      "Compliance Strategy",
      "Department Representation",
    ],
  },
  {
    name: "Vivek Joshi",
    designation: "Account Manager",
    image: "/image/logos/profile3d.jpg",
    summary:
      "Focused on business structuring, financial planning, and strategic growth advisory for startups and enterprises.",
    expertise: [
      "Business Advisory",
      "Financial Planning",
      "Startup Consulting",
      "Strategic Structuring",
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

/* ======================================================
   COMPONENT
====================================================== */

export default function TeamContent() {
  return (
    <div className="min-h-screen">
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

                <Typography className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  A legacy of trust, professional excellence, and ethical
                  leadership — empowering individuals and enterprises to grow
                  with confidence in a rapidly evolving financial world.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </Parallax>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-white via-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-14 font-bold text-center">
              Leadership
            </Typography>
          </FadeIn>

          {/* Founder Card (UNCHANGED) */}
          {TEAM_MEMBERS.map((member) => (
            <FadeIn key={member.name} direction="up">
              <Card className="border border-gray-200 shadow-2xl bg-white/80 backdrop-blur-lg">
                <CardBody className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
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

                    <div className="lg:col-span-2">
                      <Typography variant="h4" className="mb-1 font-bold">
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

                      <Typography variant="h6" className="mb-3 font-semibold">
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

          {/* ADDITIONAL LEADERS (NEW SECTION) */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADDITIONAL_LEADERS.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Typography variant="h6" className="font-bold mb-1">
                    {leader.name}
                  </Typography>
                  <Typography className="text-primary font-semibold text-sm mb-3">
                    {leader.designation}
                  </Typography>

                  <Typography className="text-gray-700 text-sm mb-5">
                    {leader.summary}
                  </Typography>

                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STRUCTURE */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-soft/20 to-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Typography variant="h3" className="mb-12 font-bold text-center">
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
                      <Typography variant="h6" className="mb-2 font-semibold">
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

      {/* VALUES */}
      {/* (unchanged – same as your original file) */}
    </div>
  );
}
