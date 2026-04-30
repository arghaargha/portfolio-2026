import { ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { navItems, profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dce4dc] bg-[#10223a] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
            {profile.brandLine}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/80">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} className="text-white/72 hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
