import React from "react";
import Link from "next/link";

const links = [
  { title: "Admissions & TSICET", description: "Eligibility criteria, counselling, seats", href: "/admissions" },
  { title: "Academic Curriculum", description: "OU syllabus & semester structure", href: "/academics" },
  { title: "Official Notice Board", description: "Exam timetables & circulars", href: "/notices" },
  { title: "Faculty Directory", description: "Academic staff profiles & contacts", href: "/faculty" },
  { title: "Career & Placement Cell", description: "CRT, internships & guidance", href: "/career-hub" },
  { title: "Student Activities", description: "AVIRBHAV management club & events", href: "/student-life" },
];

export default function ImportantLinks() {
  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#172033] tracking-wide uppercase flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Important Links & Student Services
        </h3>
        <span className="text-xs text-[#252525]/60">Direct Portal Access</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs font-bold text-[#7A263A] uppercase tracking-wider mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#252525]/80 leading-snug">
                {item.description}
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#172033] mt-2 inline-flex items-center gap-1">
              Access Page &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
