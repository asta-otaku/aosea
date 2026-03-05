import type { Metadata } from "next";
import { Suspense } from "react";
import HeroImageSlider from "@/components/HeroImageSlider";
import AnimatedImage from "@/components/AnimatedImage";
import InquiryForm from "@/components/InquiryForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact | AOSEA Oil & Gas Nigeria",
  description:
    "Contact AOSEA for technical services, project proposals, procurement, training, or manpower supply. Offices in Port Harcourt, Lagos, Warri.",
};

const offices = [
  {
    city: "Port Harcourt",
    address: "Rivers State, Nigeria",
    type: "Headquarters",
  },
  {
    city: "Lagos",
    address: "Lagos State, Nigeria",
    type: "Office",
  },
  {
    city: "Warri",
    address: "Delta State, Nigeria",
    type: "Office",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroImageSlider overlayClassName="bg-navy-950/80" className="min-h-[40vh]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Get in touch for technical consultation, proposals, or compliance
            advisory.
          </p>
        </div>
      </HeroImageSlider>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Corporate Offices
              </h2>
              <div className="mt-6 space-y-6">
                {offices.map((office) => (
                  <div key={office.city}>
                    <h3 className="font-semibold text-navy-900">{office.city}</h3>
                    <p className="text-sm text-gray-500">{office.type}</p>
                    <p className="mt-1 text-gray-600">{office.address}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-navy-900">Email</h3>
                <a
                  href="mailto:info@aosea.com"
                  className="text-accent-600 hover:text-accent-500"
                >
                  info@aosea.com
                </a>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-navy-900">Phone</h3>
                <a
                  href="tel:+2348000000000"
                  className="text-accent-600 hover:text-accent-500"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>

            {/* Inquiry form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Send an Inquiry
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we&apos;ll respond within 24–48
                hours.
              </p>
              <div className="mt-8">
                <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-gray-100" />}>
                  <InquiryForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
