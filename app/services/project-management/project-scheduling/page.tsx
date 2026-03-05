import type { Metadata } from "next";
import ServiceSubPageTemplate from "@/components/ServiceSubPageTemplate";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Project Scheduling & Coordination | AOSEA Project Management Nigeria",
  description:
    "Primavera P6, MS Project. Nigerian project data. NUPRC/NCDMB milestones. Schedule health check in one week.",
};

export default function ProjectSchedulingPage() {
  return (
    <ServiceSubPageTemplate
      title="Project Scheduling & Coordination"
      parentTitle="Project Management"
      parentHref="/services/project-management"
      number="02"
      heroImage={images.industrial}
      heroAlt="Project scheduling"
      metrics={[
        { label: "Schedule health check", value: "1 week" },
        { label: "Tools", value: "P6, MS Project" },
        { label: "Nigerian data", value: "Realistic" },
      ]}
      ctaText="Request a schedule health check on your active project. We will identify risks and propose recovery strategies within one week."
      ctaHref="/contact?service=scheduling"
      content={
        <>
          <p>
            In Nigeria&apos;s oil and gas sector, the difference between a profitable project and a value-destroying one often comes down to schedule discipline. Permit delays, procurement lead times, community engagement timelines, and rig availability windows create scheduling complexity that standard project management tools cannot capture without local expertise.
          </p>
          <p>
            Our project scheduling and coordination services provide the structure and oversight that keeps your project on track. We develop integrated schedules using Primavera P6 and Microsoft Project, incorporating realistic durations based on actual Nigerian project data, not optimistic benchmarks from other geographies. Our schedulers build in the regulatory hold points, NUPRC approval timelines, NCDMB compliance milestones, and environmental permit durations that are specific to Nigerian upstream operations.
          </p>
          <p>
            We run the cadence: lookaheads, constraint logs, procurement expediting trackers, and recoverable baseline schedules. We provide weekly schedule updates, critical path analysis, and early warning reports that give project leadership the visibility to make informed decisions before delays become irreversible.
          </p>
        </>
      }
    />
  );
}
