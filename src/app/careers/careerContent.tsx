"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations";
import { FormInput, FormTextarea } from "../../components/form/FormInput";
import {
  BriefcaseIcon,
  DocumentArrowUpIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

/* ======================================================
   CONSTANTS
====================================================== */

const MAX_FILE_SIZE_MB = 2;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function CareerContent() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const [resume, setResume] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    positionType: "",
    qualification: "",
    experience: "",
    expectedStipend: "",
    coverLetter: "",
  });

  /* ======================================================
     HANDLERS
  ====================================================== */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormError(null);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError("Only PDF, DOC, or DOCX files are allowed.");
      setResume(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError("Resume size must be less than 2 MB.");
      setResume(null);
      return;
    }

    setFileError(null);
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!/^\d{10}$/.test(formData.phone)) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const experience = Number(formData.experience);
    if (isNaN(experience) || experience < 0 || experience > 40) {
      setFormError("Experience must be between 0 and 40 years.");
      return;
    }

    const stipend = Number(formData.expectedStipend);
    if (isNaN(stipend) || stipend < 0) {
      setFormError("Expected stipend must be a positive number.");
      return;
    }

    if (!resume) {
      setFileError("Please upload your resume.");
      return;
    }

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        payload.append(key, value)
      );
      payload.append("resume", resume);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        positionType: "",
        qualification: "",
        experience: "",
        expectedStipend: "",
        coverLetter: "",
      });
      setResume(null);
    } catch {
      setSubmitStatus("error");
    } finally {
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  /* ======================================================
     UI
  ====================================================== */

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative py-20 px-4 md:px-10 bg-gradient-to-br from-primary/20 via-white to-secondary/20">
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">
              Careers at VKSK & Company
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Build a long-term professional career in taxation, audit, and
              advisory with a firm that values integrity, depth, and excellence.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ================= CONTENT + FORM ================= */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ================= LEFT: SCROLLABLE FORM ================= */}
          <FadeIn direction="up">
            <div className="rounded-2xl border border-gray-200 shadow-2xl bg-white flex flex-col">
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Application Form
                  </h2>
                </div>
              </div>

              {/* Scrollable Body */}
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5 overflow-y-auto max-h-[520px]"
              >
                <FormInput
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
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
                  label="Mobile Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Applying For
                  </label>
                  <select
                    name="positionType"
                    value={formData.positionType}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        positionType: e.target.value,
                      }))
                    }
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select Position</option>
                    <option value="articleship">CA Articleship</option>
                    <option value="semi-qualified">Semi-Qualified CA</option>
                    <option value="qualified">Qualified CA</option>
                    <option value="account-executive">
                      Accounts Executive
                    </option>
                  </select>
                </div>

                <FormInput
                  label="Highest Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Experience (Years)"
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Expected Stipend / CTC (Monthly)"
                  type="number"
                  name="expectedStipend"
                  value={formData.expectedStipend}
                  onChange={handleChange}
                  required
                />

                <FormTextarea
                  label="Cover Letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Upload Resume
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-gray-300 px-4 py-4 hover:border-primary">
                    <DocumentArrowUpIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm text-gray-600">
                      {resume ? resume.name : "Choose file"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                  {fileError && (
                    <p className="mt-2 text-sm text-red-600">{fileError}</p>
                  )}
                </div>

                {formError && (
                  <p className="text-sm text-red-600 text-center">
                    {formError}
                  </p>
                )}
              </form>

              {/* Footer / Submit */}
              <div className="p-6 border-t border-gray-200">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-4 text-white font-semibold"
                >
                  Submit Application
                </button>

                {submitStatus && (
                  <div
                    className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium text-center ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success"
                      ? "Application submitted successfully."
                      : "Submission failed. Please try again later."}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>

          {/* ================= RIGHT: RICH CONTENT ================= */}
          <FadeIn direction="up">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Career Built on Professional Depth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  VKSK & Company offers exposure to complex real-world
                  assignments across direct tax, indirect tax, audits, ROC
                  compliance, and advisory services. Team members work closely
                  with partners, gaining hands-on experience that goes far
                  beyond routine compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: AcademicCapIcon,
                    title: "Structured Learning",
                    text: "Continuous technical guidance aligned with ICAI standards.",
                  },
                  {
                    icon: UserGroupIcon,
                    title: "Mentorship Culture",
                    text: "Direct interaction with experienced professionals.",
                  },
                  {
                    icon: ChartBarIcon,
                    title: "Career Progression",
                    text: "Clear growth paths based on merit and performance.",
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Ethical Practice",
                    text: "Strong emphasis on compliance, accuracy, and integrity.",
                  },
                  {
                    icon: GlobeAltIcon,
                    title: "Diverse Exposure",
                    text: "Work with clients across industries and jurisdictions.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <item.icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Should Apply
            </h2>
            <p className="text-gray-700 leading-relaxed">
              CA Articles seeking strong practical exposure. Semi-qualified
              professionals building specialization. Qualified Chartered
              Accountants aiming for advisory-driven roles. Accounts executives
              with hands-on compliance experience.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
