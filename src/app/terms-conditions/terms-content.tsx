"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";

export default function TermsContent() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-10 bg-white">
      <div className="container mx-auto max-w-4xl">
        <FadeIn direction="up">
          <Typography variant="h1" className="mb-8 font-bold text-gray-900">
            Terms & Conditions
          </Typography>
          <Typography className="text-gray-600 mb-8">
            Last Updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </Typography>

          <div className="space-y-8">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  1. Acceptance of Terms
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  By accessing and using the website and services of V K S K & COMPANY (&quot;VKSK&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  2. Services
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  VKSK provides Chartered Accountancy services including but not limited to taxation, GST services, audits, business setup, legal compliance, financial advisory, debt syndication, and RBI regulatory matters. All services are subject to applicable laws and regulations.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  3. Client Responsibilities
                </Typography>
                <Typography className="text-gray-700 leading-relaxed mb-4">
                  Clients are responsible for:
                </Typography>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Providing accurate and complete information</li>
                  <li>Disclosing all relevant facts and documents</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Paying fees as agreed upon</li>
                  <li>Maintaining confidentiality of login credentials, if any</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  4. Fees and Payment
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  Fees for our services will be communicated to you before the commencement of work. Payment terms will be as agreed upon in writing. Late payment may result in suspension of services and may attract interest charges.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  5. Confidentiality
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  We maintain strict confidentiality of all client information in accordance with professional standards and applicable laws. We will not disclose any confidential information without your consent, except as required by law or regulatory authorities.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  6. Limitation of Liability
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  While we exercise due professional care and diligence in providing our services, our liability is limited to the extent permitted by law. We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  7. Intellectual Property
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  All content on this website, including text, graphics, logos, and software, is the property of VKSK and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  8. Termination
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  Either party may terminate the engagement by providing written notice. Upon termination, all outstanding fees become due and payable. We will return your documents and information as per our professional obligations.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  9. Governing Law
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  10. Changes to Terms
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                </Typography>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <Typography variant="h4" className="mb-4 font-semibold text-gray-900">
                  11. Contact Information
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  For any questions or concerns regarding these terms and conditions, please contact us:
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

