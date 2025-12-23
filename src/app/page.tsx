import { generateSEOMetadata } from "@/components/seo";
import Hero from "./home-sections/hero";
import ServicesOverview from "./home-sections/services-overview";
import WhyVKSK from "./home-sections/why-vksk";
import Leadership from "./home-sections/leadership";
import VisionMission from "./home-sections/vision-mission";
import CTASection from "./home-sections/cta-section";
import { Footer, Navbar } from "@/components";
import NewsCard from "@/components/news/NewsCard";
import NewsUpdates from "@/components/news/NewsUpdates";

export const metadata = generateSEOMetadata({
  title: "VKSK & Company - Chartered Accountants | Premium CA Services",
  description:
    "VKSK & Company - Expert Chartered Accountancy services in New Delhi. Professional taxation, GST, audits, business setup, and financial advisory services.",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leadership />
      <ServicesOverview />
      <WhyVKSK />
      <VisionMission />
      <CTASection />
      <NewsUpdates />
      <Footer />
      
    </>
  );
}
