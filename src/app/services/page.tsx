import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import ServicesContent from "./services-content";

export const metadata = generateSEOMetadata({
  title: "Services - VKSK & Company | Chartered Accountancy Services",
  description:
    "Comprehensive Chartered Accountancy services including Taxation, GST, Audits, Business Setup, Legal Compliance, Financial Advisory, and more.",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
}

