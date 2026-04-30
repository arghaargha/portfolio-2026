import { Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: "Contact",
  description:
    "Contact Antara Chakraborty for research collaboration, internships, club initiatives, workshops, or academic networking.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us connect around biotechnology, bioinformatics, sustainability, or student-led innovation."
        description="Use the form for professional outreach, or reach out directly by email and LinkedIn."
      />

      <SectionShell className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-[#dce4dc] bg-[#fbfaf5] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#10223a]">
              Contact Details
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[#526170]">
              <a
                className="flex items-center gap-3 font-semibold text-[#10223a] hover:text-[#2b6f63]"
                href={`mailto:${profile.email}`}
              >
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={18} aria-hidden="true" />
                {profile.location}
              </p>
              <a
                className="flex items-center gap-3 font-semibold text-[#10223a] hover:text-[#2b6f63]"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href={profile.resumeHref}
                variant="secondary"
                icon={<Download size={18} aria-hidden="true" />}
              >
                Download Resume
              </ButtonLink>
            </div>
          </aside>
          <ContactForm />
        </div>
      </SectionShell>
    </>
  );
}
