import Hero from "@/components/Hero";
import NoticeBoard, { Notice } from "@/components/NoticeBoard";

// Verified fallback notices
const fallbackNotices: Notice[] = [
  {
    id: "mba-2sem-regular-2026",
    title: "Time Table: MBA II-Semester (Regular) Examinations August-2026",
    date: "01 Aug 2026",
    category: "Examinations",
  },
  {
    id: "mba-1sem-backlog-2026",
    title: "Time Table: MBA I-Semester (Backlog) Examinations August-2026",
    date: "01 Aug 2026",
    category: "Examinations",
  },
  {
    id: "project-internship-guidelines",
    title: "Submission Guidelines for Summer Project Internship Reports",
    date: "25 Jul 2026",
    category: "Academic",
  },
];

async function getNoticesFromSheet(): Promise<Notice[]> {
  const SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/1dY_bTuQJ1qyeBqEkGvqBlJbuK48mVeraXMiEgmPm4Zc/export?format=csv";

  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 30 },
    });

    if (!res.ok) return fallbackNotices;

    const text = await res.text();
    const lines = text.split("\n").filter((line) => line.trim() !== "");

    if (lines.length <= 1) return fallbackNotices;

    const notices: Notice[] = lines.slice(1).map((line, idx) => {
      const cols = line.split(",").map((col) => col.trim().replace(/^"|"$/g, ""));
      return {
        id: cols[0] || String(idx + 1),
        title: cols[1] || "",
        date: cols[2] || "",
        category: cols[3] || "General",
        pdfUrl: cols[4] || undefined,
      };
    });

    return notices.filter((n) => n.title !== "");
  } catch (error) {
    return fallbackNotices;
  }
}

export default async function Home() {
  const notices = await getNoticesFromSheet();

  return (
    <div className="watermark-bg space-y-8 pb-12 overflow-hidden text-[#252525]">
      {/* 3. Short MBA Programme Introduction */}
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* 4. Important Links / Student Services */}
        <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
          <div className="border-b border-[#E5E0D6] pb-3 mb-4 flex justify-between items-center">
            <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
              Important Links & Student Services
            </h3>
            <span className="text-xs text-[#252525]/60">Institutional Portal</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <a href="/admissions" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Admissions & TSICET</h4>
              <p className="text-[#252525]/80">Eligibility criteria, counselling & seat allotment</p>
            </a>
            <a href="/academics" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Academic Curriculum</h4>
              <p className="text-[#252525]/80">Osmania University syllabus & course structure</p>
            </a>
            <a href="/notices" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Official Notice Board</h4>
              <p className="text-[#252525]/80">Exam timetables, circulars & announcements</p>
            </a>
            <a href="/faculty" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Faculty Directory</h4>
              <p className="text-[#252525]/80">Teaching staff profiles, qualifications & contacts</p>
            </a>
            <a href="/career-hub" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Career Development</h4>
              <p className="text-[#252525]/80">Placement cell CRT, internships & guidance</p>
            </a>
            <a href="/student-life" className="p-3 border border-[#E5E0D6] bg-[#F7F4ED]/40 hover:bg-[#F7F4ED] hover:border-[#B08D57] transition-all">
              <h4 className="font-bold text-[#7A263A] uppercase mb-1">Student Activities</h4>
              <p className="text-[#252525]/80">AVIRBHAV management club & forums</p>
            </a>
          </div>
        </section>

        {/* 5. Notice Board */}
        <NoticeBoard notices={notices} />

        {/* 6. Department Information */}
        <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6 space-y-4">
          <div className="border-b border-[#E5E0D6] pb-3">
            <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
              Department Profile & Overview
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
            <div className="lg:col-span-8 space-y-3 leading-relaxed">
              <p>
                The Department of Business Management at A.V. College has been imparting professional management education since the establishment of the MBA programme in 1991. The department focuses on developing decision-making capabilities, analytical thinking, and ethical leadership.
              </p>
              <p>
                Affiliated to Osmania University and approved by AICTE, the 2-year full-time curriculum provides dual specializations in Finance, Marketing, and Human Resource Management.
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#F7F4ED] p-4 border border-[#E5E0D6] text-xs space-y-2">
              <h4 className="font-bold text-[#7A263A] uppercase border-b border-[#E5E0D6] pb-1">Institutional Factsheet</h4>
              <div className="grid grid-cols-2 gap-y-1.5 pt-1">
                <span className="font-semibold text-[#172033]">Programme:</span>
                <span>MBA (2 Years)</span>
                <span className="font-semibold text-[#172033]">Inception:</span>
                <span>1991</span>
                <span className="font-semibold text-[#172033]">Affiliation:</span>
                <span>Osmania University</span>
                <span className="font-semibold text-[#172033]">Approval:</span>
                <span>AICTE, New Delhi</span>
                <span className="font-semibold text-[#172033]">Accreditation:</span>
                <span>NAAC 'A' Grade</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Academics */}
        <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
          <div className="border-b border-[#E5E0D6] pb-3 mb-4">
            <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
              Academic Structure & Specializations
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
              <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">Core Subjects (Sem I & II)</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Management & Organizational Behaviour</li>
                <li>Accounting for Management & Economics</li>
                <li>Marketing Management & Research</li>
                <li>Human Resource Management</li>
                <li>Quantitative Techniques & Finance</li>
              </ul>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
              <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">Dual Specializations (Sem III & IV)</h4>
              <div className="space-y-1.5">
                <p><strong>Financial Management:</strong> Security Analysis, Portfolio Mgmt, Derivatives</p>
                <p><strong>Marketing Management:</strong> Consumer Behaviour, Digital Marketing, Services</p>
                <p><strong>Human Resource Management:</strong> Talent Mgmt, Performance Mgmt, Industrial Relations</p>
              </div>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/40">
              <h4 className="font-bold text-[#7A263A] uppercase mb-2 border-b border-[#E5E0D6] pb-1">Practical Pedagogy</h4>
              <ul className="space-y-1.5">
                <li><strong>Summer Internship:</strong> Mandatory 8-week corporate project after Sem II.</li>
                <li><strong>Saturday Activities:</strong> Student-led seminars, quizzes, and workshops.</li>
                <li><strong>Corporate Lectures:</strong> Guest sessions by industry professionals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Admissions */}
        <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
          <div className="border-b border-[#E5E0D6] pb-3 mb-4">
            <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
              Admission Pathway (TSICET)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
              <span className="font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">Step 01</span>
              <h4 className="font-bold text-[#172033] mb-1">Eligibility</h4>
              <p className="text-[#252525]/80">Bachelor's degree with min 50% aggregate (45% for reserved categories).</p>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
              <span className="font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">Step 02</span>
              <h4 className="font-bold text-[#172033] mb-1">Entrance Exam</h4>
              <p className="text-[#252525]/80">Appear for TSICET entrance examination conducted by TGCHE / OU.</p>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
              <span className="font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">Step 03</span>
              <h4 className="font-bold text-[#172033] mb-1">Counselling</h4>
              <p className="text-[#252525]/80">Participate in web counselling for state merit rank allotment.</p>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
              <span className="font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">Step 04</span>
              <h4 className="font-bold text-[#172033] mb-1">Seat Allotment</h4>
              <p className="text-[#252525]/80">70% seats via Convener quota; 30% seats under Management quota.</p>
            </div>
            <div className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
              <span className="font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">Step 05</span>
              <h4 className="font-bold text-[#172033] mb-1">Verification</h4>
              <p className="text-[#252525]/80">Original certificate submission and fee payment at college campus.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
