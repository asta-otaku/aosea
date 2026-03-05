"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const serviceLinks = [
  {
    href: "/services/technical",
    label: "Technical Services",
    children: [
      { href: "/services/technical/drilling-well-services", label: "Drilling & Well Services" },
      { href: "/services/technical/installation-operations-maintenance", label: "Installation, Operations & Maintenance" },
      { href: "/services/technical/equipment-services", label: "Equipment Services" },
      { href: "/services/technical/marine-services", label: "Marine Services" },
      { href: "/services/technical/engineering-technical-support", label: "Engineering & Technical Support" },
    ],
  },
  {
    href: "/services/project-management",
    label: "Project Management",
    children: [
      { href: "/services/project-management/turnkey-delivery", label: "Turnkey Delivery" },
      { href: "/services/project-management/construction-management", label: "Construction Management" },
      { href: "/services/project-management/commissioning-startup", label: "Commissioning & Start-up" },
      { href: "/services/project-management/project-scheduling", label: "Project Scheduling" },
      { href: "/services/project-management/resource-optimization", label: "Resource Optimization" },
    ],
  },
  {
    href: "/services/procurement",
    label: "Procurement & Supplies",
    children: [
      { href: "/services/procurement/strategic-sourcing", label: "Strategic Sourcing" },
      { href: "/services/procurement/chemical-supplies", label: "Chemical Supplies" },
      { href: "/services/procurement/safety-equipment", label: "Safety Equipment" },
    ],
  },
  {
    href: "/services/training",
    label: "Training & Compliance",
    children: [
      { href: "/services/training/technical-training", label: "Technical Training" },
      { href: "/services/training/hse-training", label: "HSE Training" },
      { href: "/services/training/regulatory-compliance", label: "Regulatory Compliance" },
      { href: "/services/training/operational-best-practices", label: "Operational Best Practices" },
      { href: "/services/training/custom-training", label: "Custom Training" },
    ],
  },
  {
    href: "/services/manpower",
    label: "Manpower Supply",
    children: [
      { href: "/services/manpower/technical-personnel", label: "Technical Personnel" },
      { href: "/services/manpower/field-operations-staff", label: "Field Operations Staff" },
      { href: "/services/manpower/management-support", label: "Management Support" },
      { href: "/services/manpower/documentation-mobility", label: "Documentation & Mobility" },
    ],
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: serviceLinks },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkClass = (href: string) => {
    const active = isActive(href, pathname);
    return `text-sm font-medium transition-colors ${
      active ? "text-sky-600" : "text-gray-600 hover:text-navy-900"
    }`;
  };

  const childLinkClass = (href: string) => {
    const active = pathname === href;
    return `block px-4 py-2 text-sm transition-colors ${
      active ? "bg-sky-50 text-sky-600" : "text-gray-600 hover:bg-gray-100 hover:text-navy-900"
    }`;
  };

  const subChildLinkClass = (href: string) => {
    const active = pathname === href;
    return `block px-4 py-1.5 pl-6 text-sm transition-colors ${
      active ? "bg-sky-50 text-sky-600" : "text-gray-500 hover:bg-gray-100 hover:text-navy-900"
    }`;
  };

  const mobileLinkClass = (href: string) => {
    const active = isActive(href, pathname);
    return `block rounded px-3 py-2 transition-colors ${
      active ? "bg-sky-50 text-sky-600 font-medium" : "text-gray-600 hover:bg-gray-100"
    }`;
  };

  const mobileChildClass = (href: string) => {
    const active = pathname === href;
    return `ml-4 block rounded px-3 py-2 text-sm transition-colors ${
      active ? "bg-sky-50/50 text-sky-600" : "text-gray-500 hover:bg-gray-100"
    }`;
  };

  const mobileSubChildClass = (href: string) => {
    const active = pathname === href;
    return `ml-8 block rounded px-3 py-1.5 text-sm transition-colors ${
      active ? "bg-sky-50/50 text-sky-600" : "text-gray-500 hover:bg-gray-100"
    }`;
  };

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="AOSEA Global Services"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-1 w-72 max-h-[80vh] overflow-y-auto rounded-lg border border-gray-200 bg-white py-2 shadow-xl">
                    {link.children.map((child) => (
                      <div key={child.href}>
                        <Link
                          href={child.href}
                          className={childLinkClass(child.href)}
                        >
                          {child.label}
                        </Link>
                        {child.children?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={subChildLinkClass(sub.href)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
          >
            Request Proposal
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded p-2 text-gray-600 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-gray-50 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={mobileLinkClass(link.href)}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <div key={child.href}>
                    <Link
                      href={child.href}
                      className={mobileChildClass(child.href)}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                    {child.children?.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={mobileSubChildClass(sub.href)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-4 block rounded-md bg-sky-600 px-4 py-2 text-center font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Request Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
