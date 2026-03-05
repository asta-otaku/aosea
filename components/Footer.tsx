import Link from "next/link";
import Image from "next/image";

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

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

const regulatoryRefs = [
  "PIA Compliant",
  "NUPRC Registered",
  "NCDMB Certified",
  "NIMASA Approved",
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
  { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="AOSEA Global Services"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
              AOSEA Global Services Limited is an indigenous technical services
              company committed to advancing Nigeria&apos;s oil & gas sector
              through regulatory fluency, execution accountability, and
              compliance-ready solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {regulatoryRefs.map((ref) => (
                <span
                  key={ref}
                  className="rounded border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {ref}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Follow Us
              </span>
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-accent-600"
                  aria-label={s.label}
                >
                  {s.icon === "linkedin" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                  {s.icon === "twitter" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  )}
                  {s.icon === "facebook" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-accent-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-900">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Offices
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  {offices.map((office) => (
                    <li key={office.city}>
                      <span className="font-medium text-navy-900">
                        {office.city}
                      </span>{" "}
                      ({office.type})
                      <br />
                      <span className="text-gray-500">{office.address}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-gray-500">
                  Contact
                </p>
                <a
                  href="mailto:info@aosea.com"
                  className="mt-1 block text-sm text-gray-600 hover:text-accent-600"
                >
                  info@aosea.com
                </a>
                <a
                  href="tel:+2348000000000"
                  className="block text-sm text-gray-600 hover:text-accent-600"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} AOSEA Global Services Limited. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
