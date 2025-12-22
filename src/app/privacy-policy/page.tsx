import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import PrivacyContent from "./privacy-content";

export const metadata = generateSEOMetadata({
  title: "Privacy Policy - VKSK & Company",
  description: "Privacy Policy of VKSK & Company - Chartered Accountants",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}

