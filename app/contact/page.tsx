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
    type: "",
  },
  {
    city: "Warri",
    address: "Delta State, Nigeria",
    type: "",
  },
];

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroImageSlider overlayClassName="bg-navy-950/80" className="min-h-[40vh]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Get in touch for technical consultation, Projects partnership, or compliance advisory.
          </p>
        </div>
      </HeroImageSlider>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-7 w-7 text-accent-600" />
                <h2 className="font-heading text-2xl font-bold text-navy-900">
                  Our Offices
                </h2>
              </div>
              <div className="mt-6 space-y-6">
                {offices.map((office) => (
                  <div key={office.city}>
                    <h3 className="font-semibold text-navy-900">{office.city}</h3>
                    {office.type && (
                      <p className="text-sm text-gray-500">{office.type}</p>
                    )}
                    <p className={office.type ? "mt-1 text-gray-600" : "mt-0.5 text-gray-600"}>
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-navy-900">Email</h3>
                <a
                  href="mailto:info@aoseaglobal.com"
                  className="text-accent-600 hover:text-accent-500"
                >
                  info@aoseaglobal.com
                </a>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-navy-900">Phone</h3>
                <div className="mt-1 space-y-1">
                  <a
                    href="tel:+2348151114607"
                    className="block text-accent-600 hover:text-accent-500"
                  >
                    +234 815 111 4607
                  </a>
                  <a
                    href="tel:+2348143899609"
                    className="block text-accent-600 hover:text-accent-500"
                  >
                    +234 814 389 9609
                  </a>
                  <a
                    href="tel:+18255618334"
                    className="block text-accent-600 hover:text-accent-500"
                  >
                    +1 825 561 8334
                  </a>
                </div>
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
