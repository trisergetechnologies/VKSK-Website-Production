import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

const defaultTitle = "VKSK & Company - Chartered Accountants | Premium CA Services";
const defaultDescription = "VKSK & Company - Expert Chartered Accountancy services in New Delhi. Professional taxation, GST, audits, business setup, and financial advisory services.";
const defaultKeywords = "Chartered Accountant, CA Services, GST Services, Tax Consultant, Business Setup, Audit Services, Financial Advisory, New Delhi, India";

export function generateSEOMetadata({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "VKSK & Company" }],
    creator: "VKSK & Company",
    publisher: "VKSK & Company",
    robots: noindex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "https://vkskcompany.com",
      title,
      description,
      siteName: "VKSK & Company",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: "https://vkskcompany.com",
    },
  };
}

