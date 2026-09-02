import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/sites" },
};

export default function Sites() {
  return (
    <div className="flex items-center justify-center py-32">
      <h1 className="text-4xl font-bold text-navy">Sites</h1>
    </div>
  );
}
