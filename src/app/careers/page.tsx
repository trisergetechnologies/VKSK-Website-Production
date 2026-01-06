import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import CareerContent from "./careerContent";

export const metadata = generateSEOMetadata({
  title: "Contact Us - VKSK & Company | Chartered Accountants",
  description:
    "Get in touch with VKSK & Company for expert Chartered Accountancy services. Located in New Delhi. Schedule a consultation today.",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <CareerContent />
      <Footer />
    </>
  );
}

