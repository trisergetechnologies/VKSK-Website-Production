import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import DSCHero from "@/components/dscHero";
import DSCContactAndFAQ from "@/components/dscFAQ";
import WhyNeedDSC from "@/components/whyNeedDsc";

export const metadata = generateSEOMetadata({
  title: "DIgital Signature Services - VKSK & Company | Chartered Accountancy Services",
  description:
    "Get your digital signature with VKSK & Company. Contact us.",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <DSCHero />
      <WhyNeedDSC />
      <DSCContactAndFAQ />
      <Footer />
    </>
  );
}

