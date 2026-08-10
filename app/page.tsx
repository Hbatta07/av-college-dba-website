import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";

const sampleNotices = [
  {
    id: "1",
    title: "MBA Examination Schedule & Guidelines",
    date: "10 Aug 2026",
    category: "Examinations",
  },
  {
    id: "2",
    title: "Departmental Academic Orientation Program",
    date: "05 Aug 2026",
    category: "Academic",
  },
  {
    id: "3",
    title: "Placement Cell & Campus Recruitment Drive",
    date: "28 Jul 2026",
    category: "Placements",
  },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Editorial Campus Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Academic Notice Board */}
        <NoticeBoard notices={sampleNotices} />

        {/* Editorial About Section */}
        <div className="bg-white border border-[#E5E0D6] p-6 sm:p-8">
          <div className="border-l-4 border-[#7A263A] pl-4">
            <span className="text-xs uppercase tracking-wider text-[#7A263A] font-semibold">
              Department Overview
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#172033] mt-1">
              About the Department of Business Administration
            </h2>
          </div>
          <p className="text-sm text-[#252525] leading-relaxed mt-4">
            The Department of Business Administration at A.V. College offers a comprehensive 2-year full-time MBA programme aimed at cultivating managerial expertise, critical analytical thinking, and ethical leadership. Affiliated to Osmania University and recognized for academic rigor, the department provides an environment designed for professional growth.
          </p>
        </div>
      </div>
    </div>
  );
}
