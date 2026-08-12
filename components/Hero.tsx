import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white border-b border-[#E5E0D6] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Factual Academic Text Column */}
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F7F4ED] border border-[#E5E0D6] text-xs text-[#7A263A] font-semibold">
              <span>ESTABLISHED 1991</span>
              <span>•</span>
              <span>OSMANIA UNIVERSITY SYLLABUS</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#172033] tracking-tight">
              Department of Business Administration (MBA)
            </h2>

            <p className="text-sm text-[#252525] leading-relaxed">
              The MBA Programme at A.V. College is a two-year full-time postgraduate course recognized by the All India Council for Technical Education (AICTE) and affiliated to Osmania University, Hyderabad. The curriculum provides rigorous management education with dual specializations in Finance, Marketing, and Human Resource Management.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/notices"
                className="px-4 py-2 bg-[#7A263A] text-white text-xs font-semibold hover:bg-[#5C1B2B] transition-colors"
              >
                View Official Notices
              </Link>
              <Link
                href="/admissions"
                className="px-4 py-2 bg-white border border-[#172033] text-[#172033] text-xs font-semibold hover:bg-[#F7F4ED] transition-colors"
              >
                Admission Criteria
              </Link>
              <Link
                href="/academics"
                className="px-4 py-2 bg-white border border-[#E5E0D6] text-[#252525] text-xs font-semibold hover:bg-[#F7F4ED] transition-colors"
              >
                Course Structure
              </Link>
            </div>
          </div>

          {/* Campus Photograph Visual */}
          <div className="md:col-span-4">
            <div className="border border-[#E5E0D6] p-1.5 bg-[#F7F4ED]">
              <div className="relative h-44 sm:h-48 w-full bg-[#E5E0D6] overflow-hidden">
                <img
                  src="/images/campus-photo.jpg"
                  alt="A.V. College PG Centre Campus"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if local image is missing
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <p className="text-[11px] text-center text-[#252525]/70 mt-1 font-medium">
                Post-Graduate Centre Campus, Gagan Mahal, Hyderabad
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
