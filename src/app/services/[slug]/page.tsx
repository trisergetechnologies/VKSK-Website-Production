import { Navbar, Footer } from "@/components";
import { generateSEOMetadata } from "@/components/seo";
import ServiceDetail from "./service-detail";
import { servicesData } from "./services-data";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);
  return generateSEOMetadata({
    title: `${service?.title || "Service"} - VKSK & Company`,
    description: service?.description || "Professional Chartered Accountancy services",
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600">The service you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ServiceDetail service={service} />
      <Footer />
    </>
  );
}

