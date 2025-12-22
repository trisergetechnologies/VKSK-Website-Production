import {
  DocumentTextIcon,
  CalculatorIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  BanknotesIcon,
  ScaleIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import type { ComponentType } from "react";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  targetAudience: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "taxation-returns",
    title: "Taxation & Returns",
    description:
      "Comprehensive tax planning, filing, and advisory services for individuals and businesses.",
    longDescription:
      "Our taxation services cover all aspects of tax planning, compliance, and filing for individuals, businesses, and corporate entities. We help clients optimize their tax liabilities while ensuring full compliance with Indian tax laws and regulations.",
    icon: CalculatorIcon,
    gradient: "from-primary to-secondary",
    features: [
      "Income Tax Planning & Filing",
      "Corporate Tax Services",
      "Tax Advisory & Consulting",
      "TDS Compliance & Returns",
      "Tax Assessment Support",
      "Advance Tax Planning",
      "Tax Litigation Support",
    ],
    targetAudience: [
      "Individual taxpayers",
      "Proprietorships",
      "Partnerships",
      "Private Limited Companies",
      "LLPs",
      "NGOs and Trusts",
    ],
    process: [
      {
        step: 1,
        title: "Tax Assessment",
        description: "Review your financial documents and income sources",
      },
      {
        step: 2,
        title: "Tax Planning",
        description: "Develop strategies to optimize tax liabilities",
      },
      {
        step: 3,
        title: "Compliance",
        description: "Ensure all TDS and advance tax obligations are met",
      },
      {
        step: 4,
        title: "Filing",
        description: "Prepare and file accurate tax returns on time",
      },
      {
        step: 5,
        title: "Assessment Support",
        description: "Assist with any queries or assessments from tax authorities",
      },
    ],
    benefits: [
      "Maximum tax savings through strategic planning",
      "Full compliance with tax laws",
      "Timely and accurate return filing",
      "Expert guidance on tax matters",
      "Protection against penalties and interest",
    ],
  },
  {
    id: "gst-services",
    title: "GST Services",
    description:
      "End-to-end GST solutions including registration, return filing, refund processing, and compliance management.",
    longDescription:
      "We provide comprehensive GST services to help businesses navigate the complexities of GST law. From initial registration to ongoing compliance and refund processing, we ensure your business stays GST-compliant at all times.",
    icon: DocumentTextIcon,
    gradient: "from-secondary to-accent",
    features: [
      "GST Registration",
      "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)",
      "GST Refund Processing",
      "GST Audit & Assessment",
      "Compliance Management",
      "GST Advisory",
      "Input Tax Credit Reconciliation",
    ],
    targetAudience: [
      "Manufacturers",
      "Traders",
      "Service providers",
      "E-commerce businesses",
      "Exporters",
      "All GST-registered entities",
    ],
    process: [
      {
        step: 1,
        title: "Registration",
        description: "Assist with GST registration and obtaining GSTIN",
      },
      {
        step: 2,
        title: "Setup",
        description: "Set up accounting systems for GST compliance",
      },
      {
        step: 3,
        title: "Monthly Filing",
        description: "File monthly GST returns accurately and on time",
      },
      {
        step: 4,
        title: "Reconciliation",
        description: "Reconcile input tax credits and ensure accuracy",
      },
      {
        step: 5,
        title: "Annual Compliance",
        description: "File annual returns and undergo GST audit if required",
      },
    ],
    benefits: [
      "Timely GST return filing",
      "Maximize input tax credit benefits",
      "Avoid penalties and interest",
      "Efficient refund processing",
      "Expert GST advisory support",
    ],
  },
  {
    id: "audits",
    title: "Audits",
    description:
      "Professional audit services including internal, statutory, and tax audits with thorough analysis.",
    longDescription:
      "Our audit services provide independent verification of financial statements, internal controls, and compliance with various regulations. We conduct thorough examinations and provide actionable recommendations for improvement.",
    icon: DocumentMagnifyingGlassIcon,
    gradient: "from-accent to-primary",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "GST Audit",
      "Stock Audit",
      "Due Diligence",
      "Special Purpose Audit",
    ],
    targetAudience: [
      "Companies (Private/Public)",
      "LLPs",
      "Partnerships",
      "Banks and NBFCs",
      "Manufacturing units",
      "Trading entities",
    ],
    process: [
      {
        step: 1,
        title: "Planning",
        description: "Develop audit plan based on business nature and risks",
      },
      {
        step: 2,
        title: "Execution",
        description: "Conduct detailed examination of records and processes",
      },
      {
        step: 3,
        title: "Review",
        description: "Review findings and verify compliance",
      },
      {
        step: 4,
        title: "Reporting",
        description: "Prepare comprehensive audit reports",
      },
      {
        step: 5,
        title: "Follow-up",
        description: "Assist in implementing recommendations",
      },
    ],
    benefits: [
      "Compliance with statutory requirements",
      "Identify areas for improvement",
      "Enhanced credibility with stakeholders",
      "Risk mitigation",
      "Expert audit opinions",
    ],
  },
  {
    id: "business-setup",
    title: "Business Setup & Compliance",
    description:
      "Complete support for business registration, company incorporation, and ongoing compliance.",
    longDescription:
      "Starting a business involves multiple legal and regulatory requirements. We provide end-to-end support from choosing the right business structure to ongoing compliance, ensuring your business operates smoothly from day one.",
    icon: BuildingLibraryIcon,
    gradient: "from-primary to-accent",
    features: [
      "Company Incorporation (Private/Public)",
      "Partnership Registration",
      "LLP Registration",
      "ROC Compliance",
      "Annual Filing",
      "Change in Business Structure",
      "Winding Up Services",
    ],
    targetAudience: [
      "Startups",
      "Entrepreneurs",
      "Existing businesses",
      "Foreign investors",
      "Partnership firms",
      "Sole proprietorships",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Understand your business needs and recommend structure",
      },
      {
        step: 2,
        title: "Name Reservation",
        description: "Reserve and approve business name",
      },
      {
        step: 3,
        title: "Documentation",
        description: "Prepare and file incorporation documents",
      },
      {
        step: 4,
        title: "Registration",
        description: "Complete registration and obtain certificates",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description: "Provide compliance support and annual filing services",
      },
    ],
    benefits: [
      "Quick and hassle-free setup",
      "Right business structure selection",
      "Full compliance from start",
      "Ongoing support and guidance",
      "Save time and resources",
    ],
  },
  {
    id: "legal-corporate",
    title: "Legal & Corporate Law Matters",
    description:
      "Expert guidance on corporate law, regulatory compliance, and legal matters.",
    longDescription:
      "We provide comprehensive corporate law advisory services to ensure your business operations comply with all applicable laws and regulations. Our services cover everything from corporate governance to regulatory filings.",
    icon: ScaleIcon,
    gradient: "from-secondary to-primary",
    features: [
      "Corporate Law Advisory",
      "Legal Compliance",
      "Agreements & Contracts",
      "Regulatory Filings",
      "Corporate Governance",
      "Board Meetings Support",
      "Legal Documentation",
    ],
    targetAudience: [
      "Companies",
      "LLPs",
      "Partnerships",
      "Boards of Directors",
      "Corporate executives",
      "Investors",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Review current legal structure and compliance status",
      },
      {
        step: 2,
        title: "Planning",
        description: "Develop compliance strategy and action plan",
      },
      {
        step: 3,
        title: "Documentation",
        description: "Prepare necessary legal documents and agreements",
      },
      {
        step: 4,
        title: "Implementation",
        description: "Execute compliance measures and filings",
      },
      {
        step: 5,
        title: "Monitoring",
        description: "Ongoing monitoring and compliance updates",
      },
    ],
    benefits: [
      "Legal compliance assurance",
      "Risk mitigation",
      "Professional documentation",
      "Expert legal guidance",
      "Peace of mind",
    ],
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory & Planning",
    description:
      "Strategic financial planning and advisory services to help you achieve your financial goals.",
    longDescription:
      "Our financial advisory services help businesses make informed financial decisions. From budgeting and forecasting to performance analysis and investment advisory, we provide comprehensive financial guidance.",
    icon: ChartBarIcon,
    gradient: "from-accent to-secondary",
    features: [
      "Financial Planning",
      "Investment Advisory",
      "Budgeting & Forecasting",
      "MIS & Reporting",
      "Performance Analysis",
      "Valuation Services",
      "Fund Management Advisory",
    ],
    targetAudience: [
      "Growing businesses",
      "SMEs",
      "Startups seeking funding",
      "Investors",
      "Business owners",
      "Management teams",
    ],
    process: [
      {
        step: 1,
        title: "Financial Review",
        description: "Analyze current financial position and performance",
      },
      {
        step: 2,
        title: "Goal Setting",
        description: "Define financial goals and objectives",
      },
      {
        step: 3,
        title: "Planning",
        description: "Develop comprehensive financial plan",
      },
      {
        step: 4,
        title: "Implementation",
        description: "Execute financial strategies",
      },
      {
        step: 5,
        title: "Monitoring",
        description: "Regular monitoring and plan adjustments",
      },
    ],
    benefits: [
      "Informed financial decisions",
      "Achieve financial goals",
      "Optimize financial performance",
      "Better cash flow management",
      "Strategic financial guidance",
    ],
  },
  {
    id: "debt-syndication",
    title: "Debt Syndication & Project Financing",
    description:
      "Assistance in securing project financing and debt syndication from banks and financial institutions.",
    longDescription:
      "We assist businesses in securing financing for projects and operations through debt syndication and project financing. Our services include preparation of project reports, financial projections, and liaison with financial institutions.",
    icon: BanknotesIcon,
    gradient: "from-primary to-secondary",
    features: [
      "Project Financing",
      "Debt Syndication",
      "Loan Documentation",
      "Financial Projections",
      "Bank Liaison",
      "Project Report Preparation",
      "Credit Appraisal Support",
    ],
    targetAudience: [
      "Manufacturing companies",
      "Infrastructure projects",
      "Real estate developers",
      "Expansion projects",
      "Working capital needs",
      "Capital expenditure financing",
    ],
    process: [
      {
        step: 1,
        title: "Requirement Analysis",
        description: "Understand financing needs and project details",
      },
      {
        step: 2,
        title: "Documentation",
        description: "Prepare project reports and financial projections",
      },
      {
        step: 3,
        title: "Bank Selection",
        description: "Identify suitable lenders and prepare applications",
      },
      {
        step: 4,
        title: "Negotiation",
        description: "Negotiate terms and conditions",
      },
      {
        step: 5,
        title: "Disbursement",
        description: "Facilitate loan documentation and disbursement",
      },
    ],
    benefits: [
      "Access to appropriate financing",
      "Competitive interest rates",
      "Expert project report preparation",
      "Efficient loan processing",
      "Ongoing support",
    ],
  },
  {
    id: "rbi-regulatory",
    title: "RBI & Regulatory Matters",
    description:
      "Comprehensive support for RBI compliance, regulatory filings, and adherence to financial sector regulations.",
    longDescription:
      "We provide expert assistance in matters related to RBI regulations, FEMA compliance, FCRA, and other financial sector regulations. Our services ensure your business stays compliant with all regulatory requirements.",
    icon: BriefcaseIcon,
    gradient: "from-secondary to-accent",
    features: [
      "RBI Compliance",
      "Regulatory Filings",
      "FCRA Matters",
      "FEMA Compliance",
      "Regulatory Advisory",
      "Foreign Investment Compliance",
      "Banking Regulations",
    ],
    targetAudience: [
      "Banks and NBFCs",
      "Companies with foreign investment",
      "Export-import businesses",
      "NGOs with foreign funding",
      "Entities dealing in foreign exchange",
      "Financial services companies",
    ],
    process: [
      {
        step: 1,
        title: "Regulatory Assessment",
        description: "Identify applicable regulations and requirements",
      },
      {
        step: 2,
        title: "Compliance Planning",
        description: "Develop compliance strategy and timeline",
      },
      {
        step: 3,
        title: "Documentation",
        description: "Prepare necessary documents and filings",
      },
      {
        step: 4,
        title: "Filing",
        description: "Submit regulatory filings and applications",
      },
      {
        step: 5,
        title: "Ongoing Compliance",
        description: "Ensure continuous compliance and reporting",
      },
    ],
    benefits: [
      "Full regulatory compliance",
      "Avoid penalties and sanctions",
      "Expert regulatory guidance",
      "Timely filings",
      "Risk mitigation",
    ],
  },
];

