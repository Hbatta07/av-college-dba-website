import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F7F4ED] border-b border-[#E5E0D6] py-8 lg:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Academic Editorial Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#7A263A] text-white text-xs uppercase tracking-wider font-semibold rounded-none">
              <span>Established Academic Department</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] leading-tight">
              Master of Business Administration (MBA)
            </h1>

            <div className="w-16 h-[2px] bg-[#B08D57]" />

            <p className="text-[#252525] text-base leading-relaxed max-w-2xl">
              Fostering managerial competence, ethical leadership, and academic rigor at the 
              A.V. College Post-Graduate Centre. Affiliated to Osmania University and committed 
              to academic excellence in management education.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="px-5 py-2.5 bg-[#172033] text-white text-sm font-medium hover:bg-[#7A263A] transition-colors border border-[#172033]"
              >
                Admissions & Eligibility
              </Link>
              <Link
                href="/academics"
                className="px-5 py-2.5 bg-transparent text-[#172033] text-sm font-medium hover:bg-white border border-[#B08D57] transition-colors"
              >
                Academic Programme
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Campus Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="bg-white p-2 border border-[#E5E0D6] shadow-sm">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-[#E5E0D6]">
                <Image
                  src="/images/campus-pg-centre.jpg"
                  alt="A.V. College Post-Graduate Centre Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-[11px] text-[#252525]/70 italic mt-2 text-center">
                A.V. College Post-Graduate Centre Campus
              </p>
            </div>
          </div>

        </div>

        {/* Institutional Facts Strip */}
        <div className="mt-10 pt-6 border-t border-[#E5E0D6] grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="border-l-2 border-[#B08D57] pl-3">
            <p className="text-xs uppercase tracking-wider text-[#7A263A] font-semibold">Programme</p>
            <p className="text-sm font-bold text-[#172033] mt-0.5">2-Year Full-Time MBA</p>
          </div>
          <div className="border-l-2 border-[#B08D57] pl-3">
            <p className="text-xs uppercase tracking-wider text-[#7A263A] font-semibold">Affiliation</p>
            <p className="text-sm font-bold text-[#172033] mt-0.5">Osmania University</p>
          </div>
          <div className="border-l-2 border-[#B08D57] pl-3">
            <p className="text-xs uppercase tracking-wider text-[#7A263A] font-semibold">Status</p>
            <p className="text-sm font-bold text-[#172033] mt-0.5">Autonomous Institution</p>
          </div>
          <div className="border-l-2 border-[#B08D57] pl-3">
            <p className="text-xs uppercase tracking-wider text-[#7A263A] font-semibold">Location</p>
            <p className="text-sm font-bold text-[#172033] mt-0.5">Gaganmahal, Hyderabad</p>
          </div>
        </div>

      </div>
    </section>
  );
}
