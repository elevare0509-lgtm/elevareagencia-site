import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/landing-pages" },
};

export default function LandingPages() {
  return (
    <div className="flex items-center justify-center py-32">
      <h1 className="text-4xl font-bold text-navy">Landing Pages</h1>
    </div>
  );
}
