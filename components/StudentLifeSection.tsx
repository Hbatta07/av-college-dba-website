import React from "react";

export default function StudentLifeSection() {
  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4">
        <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Student Life & Co-Curricular Management Forum
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#252525]">
        {/* AVIRBHAV Club */}
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40 space-y-1.5">
          <h4 className="font-bold text-[#7A263A] uppercase border-b border-[#E5E0D6] pb-1">
            AVIRBHAV: Management Club ("Genesis")
          </h4>
          <p className="leading-relaxed">
            Formed by MBA students to provide an active platform for corporate interaction and peer competition.
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-[#172033]">
            <li>Young Manager Contest & Business Plan Presentations</li>
            <li>Business Quiz, Case Analysis & Group Discussions</li>
            <li>Role Play, Mock Press, and Management Contests</li>
          </ul>
        </div>

        {/* Saturday Activities */}
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40 space-y-1.5">
          <h4 className="font-bold text-[#7A263A] uppercase border-b border-[#E5E0D6] pb-1">
            Saturday Self-Development Activities
          </h4>
          <p className="leading-relaxed">
            Saturdays are dedicated to student-led self-development programmes:
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-[#172033]">
            <li>Student-led seminars and paper presentations</li>
            <li>Corporate executive guest lectures & industry interactions</li>
            <li>Industrial visits and business domain quizzes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
