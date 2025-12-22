"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";

export default function PrivacyContent() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-10 bg-white">
      <div className="container mx-auto max-w-4xl">
        <FadeIn direction="up">
          <Typography variant="h1" className="mb-8 font-bold text-gray-900">
            Privacy Policy
          </Typography>
          <Typography className="text-gray-600 mb-8">
            Last Updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </Typography>

          <div className="space-y-8">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  1. Introduction
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  V K S K & COMPANY (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  2. Information We Collect
                </Typography>
                <Typography className="text-gray-700 leading-relaxed mb-4">
                  We may collect information that you provide directly to us, including:
                </Typography>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Business information (company name, registration details)</li>
                  <li>Financial information (as required for our services)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  3. How We Use Your Information
                </Typography>
                <Typography className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </Typography>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  4. Information Sharing
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, to protect our rights, or with service providers who assist us in operating our business, provided they agree to keep your information confidential.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  5. Data Security
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  6. Your Rights
                </Typography>
                <Typography className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </Typography>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  7. Cookies
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  8. Changes to This Policy
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  9. Contact Us
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </Typography>
                <Typography className="text-gray-700 mt-4">
                  <strong>V K S K & COMPANY</strong>
                  <br />
                  A-110 Ground Floor, Gate No. 4, Swasthya Vihar, Near Preet Vihar, New Delhi-110092
                  <br />
                  Email: info@vkskcompany.com
                  <br />
                  Phone: +91-XXXXXXXXXX
                </Typography>
              </CardBody>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

