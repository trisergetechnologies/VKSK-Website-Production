'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* -------------------------------------------------
   Types (LOCAL)
------------------------------------------------- */
type LeadershipType = {
  name: string;
  designation: string;
  bio: string;
  image?: string;
  qualifications?: string[];
};

/* -------------------------------------------------
   Dummy Leadership Data (INLINE)
------------------------------------------------- */
const LEADERSHIP_DATA: LeadershipType[] = [
  {
    name: 'Roshan Kumar Mishra',
    designation: 'Founder & Managing Partner',
    bio:
      'Chartered Accountant with extensive experience in taxation, corporate compliance, and strategic financial advisory. Known for building strong client relationships and delivering practical, result-oriented solutions.',
    image: '/images/leadership/roshan.jpg',
    qualifications: [
      'Chartered Accountant (ICAI)',
      'Direct & Indirect Tax Advisory',
      'Business Structuring',
      'Regulatory Compliance',
    ],
  },
  {
    name: 'Anita Sharma',
    designation: 'Partner – Audit & Assurance',
    bio:
      'Leads audit and assurance engagements with a strong focus on governance, risk management, and statutory compliance across multiple industries.',
    image: '/images/leadership/anita.jpg',
    qualifications: [
      'Statutory & Internal Audits',
      'Risk Assessment',
      'IFRS & Ind AS',
      'Corporate Governance',
    ],
  },
  {
    name: 'Vikas Verma',
    designation: 'Partner – GST & Indirect Tax',
    bio:
      'Specialist in GST litigation, advisory, and compliance. Works closely with businesses to optimize tax positions while ensuring full regulatory adherence.',
    image: '/images/leadership/vikas.jpg',
    qualifications: [
      'GST Advisory & Litigation',
      'Indirect Tax Compliance',
      'Tax Planning',
      'Departmental Representation',
    ],
  },
];

/* -------------------------------------------------
   Motion Variants
------------------------------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

/* -------------------------------------------------
   Leadership 3 Cards (FINAL)
------------------------------------------------- */
export default function LeadershipCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-14"
    >
      {LEADERSHIP_DATA.map((leader) => (
        <motion.div
          key={leader.name}
          variants={fadeUp}
          className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px] shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="256px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {leader.name}
              </h3>
              <p className="text-primary font-semibold mb-4">
                {leader.designation}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {leader.bio}
              </p>

              {/* Qualifications */}
              {leader.qualifications && leader.qualifications.length > 0 && (
                <>
                  <p className="font-semibold text-gray-900 mb-3">
                    Qualifications & Expertise
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {leader.qualifications.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
