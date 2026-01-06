import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import AboutContent from "./about-content";
import TeamContent from "./team-content";
import LeadershipCards from "./team-structure";

export const metadata = generateSEOMetadata({
  title: "About Us - VKSK & Company | Chartered Accountants",
  description:
    "Learn about VKSK & Company, a leading Chartered Accountancy firm in New Delhi. Established in 2022, we provide excellence in financial services.",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <TeamContent />
      {/* <LeadershipCards /> */}
      <AboutContent />
      <Footer />
    </>
  );
}

