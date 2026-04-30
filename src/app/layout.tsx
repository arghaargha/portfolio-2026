import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antara Chakraborty | Biotechnology & Bioinformatics Portfolio",
    template: "%s | Antara Chakraborty",
  },
  description:
    "Portfolio of Antara Chakraborty, biotechnology dual-degree student at KIIT University working across environmental bioinformatics, genomic data analysis, AI/IoT-enabled sustainable biotechnology, and student leadership.",
  keywords: [
    "Biotechnology student",
    "Bioinformatics",
    "Environmental genomics",
    "Genomic data analysis",
    "AI in biotechnology",
    "Sustainable vertical farming",
    "KIIT School of Biotechnology",
    "Biotechnology portfolio",
  ],
  openGraph: {
    title: "Antara Chakraborty | Biotechnology & Bioinformatics Portfolio",
    description:
      "Biotechnology, bioinformatics, AI/IoT sustainable systems, and student research leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-[#fbfaf5] text-[#10223a]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
