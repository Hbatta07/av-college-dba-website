import React from "react";

export default function AcademicsSection() {
  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4">
        <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Academic Structure & Specializations
        </h3>
        <p className="text-xs text-[#252525]/70 mt-0.5">
          Curriculum prescribed by Osmania University spread across 4 Semesters
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Course Core Structure */}
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
          <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">
            Core Foundations (Sem I & II)
          </h4>
          <ul className="space-y-1 text-[#252525] list-disc list-inside leading-relaxed">
            <li>Management & Organizational Behaviour</li>
            <li>Accounting for Management & Economics</li>
            <li>Marketing Management & Research</li>
            <li>Human Resource Management</li>
            <li>Quantitative Techniques & Financial Mgmt</li>
            <li>IT Applications for Business</li>
          </ul>
        </div>

        {/* Dual Specializations */}
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
          <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">
            Dual Specializations (Sem III & IV)
          </h4>
          <div className="space-y-2 text-[#252525]">
            <div>
              <span className="font-semibold text-[#172033]">Financial Management:</span>
              <p>Security Analysis, Portfolio Mgmt, Financial Services, Derivatives</p>
            </div>
            <div>
              <span className="font-semibold text-[#172033]">Marketing Management:</span>
              <p>Consumer Behaviour, Services Marketing, Digital & Supply Chain</p>
            </div>
            <div>
              <span className="font-semibold text-[#172033]">Human Resource Management:</span>
              <p>Talent Management, Performance Mgmt, Industrial Relations</p>
            </div>
          </div>
        </div>

        {/* Practical Pedagogy */}
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
          <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">
            Practical Pedagogy & Projects
          </h4>
          <ul className="space-y-1.5 text-[#252525] leading-relaxed">
            <li><strong>Summer Internship Project:</strong> Mandatory 8-week corporate project after Semester II.</li>
            <li><strong>Saturday Self-Development:</strong> Student-led seminars, group discussions, and quizzes.</li>
            <li><strong>Guest Lectures:</strong> Senior executives from major corporate organizations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
