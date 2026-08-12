import React from "react";

export default function DepartmentInfo() {
  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6 space-y-4">
      <div className="border-b border-[#E5E0D6] pb-3">
        <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Department Profile & Institutional Overview
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-[#252525]">
        <div className="lg:col-span-8 space-y-3 leading-relaxed">
          <p>
            The Department of Business Management at A.V. College has been at the forefront of management education since the inception of the MBA programme in 1991. The department aims to nurture critical thinking, decision-making capabilities, and ethical leadership required in today's dynamic business environment.
          </p>
          <p>
            The curriculum designed by Osmania University provides a strong foundation in functional management domains with dual specializations offered in Finance, Marketing, and Human Resource Management. Students undergo rigorous academic preparation, case-study methodology, corporate executive lectures, and mandatory summer project internships.
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#F7F4ED] p-4 border border-[#E5E0D6] space-y-2 text-xs">
          <h4 className="font-bold text-[#7A263A] uppercase tracking-wider border-b border-[#E5E0D6] pb-1">
            Institutional Factsheet
          </h4>
          <div className="grid grid-cols-2 gap-y-2 pt-1">
            <span className="font-semibold text-[#172033]">Programme:</span>
            <span>MBA (Full-Time, 2 Years)</span>

            <span className="font-semibold text-[#172033]">Inception Year:</span>
            <span>1991</span>

            <span className="font-semibold text-[#172033]">Affiliation:</span>
            <span>Osmania University</span>

            <span className="font-semibold text-[#172033]">Approval:</span>
            <span>AICTE, New Delhi</span>

            <span className="font-semibold text-[#172033]">Accreditation:</span>
            <span>NAAC 'A' Grade</span>

            <span className="font-semibold text-[#172033]">Location:</span>
            <span>Domalguda, Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
