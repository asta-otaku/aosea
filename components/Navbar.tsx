"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { href: "/contact", label: "Contact" },
  { href: "/industries", label: "Industries" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function ChevronDownIcon({ open, className }: { open: boolean; className?: string }) {
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setServicesOpen(false);
      setExpandedCategory(null);
    }

    function onPointerDown(e: MouseEvent) {
      if (!servicesRef.current) return;
      if (servicesRef.current.contains(e.target as Node)) return;
      setServicesOpen(false);
      setExpandedCategory(null);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const linkClass = (href: string) => {
    const active = isActive(href, pathname);
    return `text-sm font-medium transition-colors ${active ? "text-sky-600" : "text-gray-600 hover:text-navy-900"
      }`;
  };

  const childLinkClass = (href: string) => {
    const active = pathname === href;
    return `block px-4 py-2 text-sm transition-colors ${active ? "bg-sky-50 text-sky-600" : "text-gray-600 hover:bg-gray-100 hover:text-navy-900"
      }`;
  };

  const subChildLinkClass = (href: string) => {
    const active = pathname === href;
    return `block px-4 py-1.5 pl-6 text-sm transition-colors ${active ? "bg-sky-50 text-sky-600" : "text-gray-500 hover:bg-gray-100 hover:text-navy-900"
      }`;
  };

  const mobileLinkClass = (href: string) => {
    const active = isActive(href, pathname);
    return `block rounded px-3 py-2 transition-colors ${active ? "bg-sky-50 text-sky-600 font-medium" : "text-gray-600 hover:bg-gray-100"
      }`;
  };

  const mobileChildClass = (href: string) => {
    const active = pathname === href;
    return `ml-4 block rounded px-3 py-2 text-sm transition-colors ${active ? "bg-sky-50/50 text-sky-600" : "text-gray-500 hover:bg-gray-100"
      }`;
  };

  const mobileSubChildClass = (href: string) => {
    const active = pathname === href;
    return `ml-8 block rounded px-3 py-1.5 text-sm transition-colors ${active ? "bg-sky-50/50 text-sky-600" : "text-gray-500 hover:bg-gray-100"
      }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="AOSEA Global Resources Limited"
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
                ref={servicesRef}
                className="relative"
              >
                <button
                  type="button"
                  className={`${linkClass(link.href)} inline-flex items-center gap-1`}
                  onClick={() => {
                    setServicesOpen((v) => !v);
                    setExpandedCategory(null);
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  {link.label}
                  <motion.span
                    animate={servicesOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.18, ease }}
                    className="text-gray-400"
                    aria-hidden
                  >
                    <ChevronDownIcon open={servicesOpen} className="h-4 w-4" />
                  </motion.span>
                </button>

                {/* Accordion dropdown: category titles only until hover */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease }}
                      style={{ transformOrigin: "top center" }}
                      className="absolute left-0 top-full mt-1 w-72 max-h-[80vh] overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-xl"
                    >
                      {link.children.map((child) => {
                        const isExpanded = expandedCategory === child.href;
                        const hasSubLinks = child.children && child.children.length > 0;
                        return (
                          <div
                            key={child.href}
                            className="relative"
                          >
                            <div className="flex items-center justify-between">
                              <Link
                                href={child.href}
                                className={`flex-1 ${childLinkClass(child.href)} py-2 pr-2`}
                              >
                                {child.label}
                              </Link>
                              {hasSubLinks && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setExpandedCategory((prev) =>
                                      prev === child.href ? null : child.href
                                    );
                                  }}
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-gray-500 hover:bg-gray-100"
                                  aria-expanded={isExpanded}
                                  aria-label={isExpanded ? "Collapse category" : "Expand category"}
                                >
                                  <ChevronDownIcon
                                    open={isExpanded}
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      isExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            <AnimatePresence initial={false}>
                              {hasSubLinks && isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease }}
                                  className="overflow-hidden border-t border-gray-100 bg-gray-50/80"
                                >
                                  {child.children!.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      className={subChildLinkClass(sub.href)}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
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

        {/* Morphing hamburger button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded md:hidden"
          onClick={() => {
            if (!mobileOpen) setExpandedCategory(null);
            setMobileOpen(!mobileOpen);
          }}
          aria-label="Toggle menu"
        >
          <span className="flex w-6 flex-col gap-[5px]">
            <motion.span
              className="block h-0.5 rounded bg-gray-700"
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease }}
            />
            <motion.span
              className="block h-0.5 rounded bg-gray-700"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 rounded bg-gray-700"
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease }}
            />
          </span>
        </button>
      </nav>

      {/* Animated mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease }}
            className="overflow-hidden border-t border-gray-200 bg-gray-50 md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.045, delayChildren: 0.05 },
                },
                hidden: {},
              }}
              className="space-y-1 px-4 py-4"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease } },
                  }}
                >
                  <Link
                    href={link.href}
                    className={mobileLinkClass(link.href)}
                    onClick={() => { setMobileOpen(false); setExpandedCategory(null); }}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => {
                    const isExpanded = expandedCategory === child.href;
                    const hasSubLinks = child.children && child.children.length > 0;
                    return (
                      <div key={child.href} className="mt-0.5">
                        <div className="flex items-center justify-between rounded">
                          <Link
                            href={child.href}
                            className={`flex-1 ${mobileChildClass(child.href)}`}
                            onClick={() => { setMobileOpen(false); setExpandedCategory(null); }}
                          >
                            {child.label}
                          </Link>
                          {hasSubLinks && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setExpandedCategory((prev) => (prev === child.href ? null : child.href));
                              }}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-gray-500 hover:bg-gray-200"
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? "Collapse" : "Expand"}
                            >
                              <ChevronDownIcon open={isExpanded} className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>
                        <AnimatePresence initial={false}>
                          {hasSubLinks && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease }}
                              className="overflow-hidden"
                            >
                              {child.children!.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className={mobileSubChildClass(sub.href)}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-4 block rounded-md bg-sky-600 px-4 py-2 text-center font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Proposal
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
