"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { FadeIn } from "@/components/animations";
import { FormInput, FormTextarea } from "../../components/form/FormInput";

const CONTACT_INFO = {
  address:
    "Flat No:196/1B Shri Ram Nagar Near by Punjab National Bank Shahdara New Delhi - 110032",
  email: "vkskoffice@gmail.com",
  phone: "+91-9911565237",
  hours: "Monday - Saturday: 11:00 AM - 8:00 PM",
};

export default function ContactContent() {
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-10 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <FadeIn direction="up">
          <div className="container mx-auto text-center">
            <Typography variant="h1" className="mb-6 font-bold text-gray-900">
              Contact Us
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl mx-auto text-gray-700 text-lg"
            >
              Get in touch with our team for expert Chartered Accountancy
              services. We&apos;re here to help with all your financial needs.
            </Typography>
          </div>
        </FadeIn>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* GOOGLE MAP */}
            <FadeIn direction="right">
              <div className="flex flex-col h-full">
                <Typography
                  variant="h3"
                  className="mb-8 font-bold text-gray-900"
                >
                  Visit Our Office
                </Typography>

                <Card className="border border-gray-200 shadow-xl overflow-hidden h-[520px]">
                  <CardBody className="p-0 h-full">
                    <iframe
                      title="VKSK Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.481353496504!2d77.2935194!3d28.6750622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb57c0000001:0x18e90285410bd02!2sV%20K%20S%20K%20%26%20COMPANY!5e0!3m2!1sen!2sin!4v1733740000000"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </CardBody>
                </Card>

                <Typography className="mt-4 text-sm text-gray-600">
                  {CONTACT_INFO.address}
                </Typography>
              </div>
            </FadeIn>

            {/* CONTACT FORM */}
            <FadeIn direction="left">
              <div className="flex flex-col h-full">
                <Typography
                  variant="h3"
                  className="mb-8 font-bold text-gray-900"
                >
                  Send Us a Message
                </Typography>

                <Card className="border border-gray-200 shadow-xl h-[520px] flex flex-col">
                  <CardBody className="p-8 flex flex-col h-full">
                    {/* SCROLLABLE FORM AREA */}
                    <form
                      onSubmit={handleSubmit}
                      className="flex-1 overflow-y-auto space-y-6 pr-2"
                    >
                      <FormInput
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                      <FormInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                      <FormInput
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                      <FormInput
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />

                      <FormTextarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </form>

                    {/* FIXED ACTION AREA */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary hover:shadow-glow-secondary"
                      >
                        Send Message
                      </Button>

                      {submitStatus && (
                        <div
                          className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium text-center
                          ${
                            submitStatus === "success"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}
                        >
                          {submitStatus === "success"
                            ? "Message sent successfully. We will contact you shortly."
                            : "There is some problem. Please try again later."}
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
