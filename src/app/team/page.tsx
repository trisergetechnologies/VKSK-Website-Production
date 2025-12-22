import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import TeamContent from "./team-content";

export const metadata = generateSEOMetadata({
  title: "Our Team - VKSK & Company | Expert Chartered Accountants",
  description:
    "Meet our team of experienced Chartered Accountants led by CA Vivek Kumar Lal. Professional expertise in taxation, auditing, and financial advisory.",
});

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TeamContent />
      <Footer />
    </>
  );
}

