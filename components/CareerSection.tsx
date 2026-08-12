import React from "react";

export default function CareerSection() {
  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4">
        <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Career Development & Placement Guidance
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#252525]">
        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
          <h4 className="font-bold text-[#7A263A] uppercase mb-1">Campus Recruitment Training (CRT)</h4>
          <p className="leading-relaxed">
            One-week intensive CRT programmes organized in association with Magic Bus India Foundation and United Way of Hyderabad to enhance employability skills, aptitude, and interview confidence.
          </p>
        </div>

        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
          <h4 className="font-bold text-[#7A263A] uppercase mb-1">Skill Building Workshops</h4>
          <p className="leading-relaxed">
            Hands-on training in Data Visualization through Power BI & Tableau, Tally accounting software, and Cyber Security awareness to equip students with modern practical capabilities.
          </p>
        </div>

        <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
          <h4 className="font-bold text-[#7A263A] uppercase mb-1">Career Counseling Cell</h4>
          <p className="leading-relaxed">
            One-on-one career guidance sessions, soft skills training, mock interview practice, and language lab accent training to support students from rural and diverse backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
}
