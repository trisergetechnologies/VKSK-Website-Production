import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import TermsContent from "./terms-content";

export const metadata = generateSEOMetadata({
  title: "Terms & Conditions - VKSK & Company",
  description: "Terms and Conditions of VKSK & Company - Chartered Accountants",
});

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <TermsContent />
      <Footer />
    </>
  );
}

