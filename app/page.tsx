import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImportantLinks from "@/components/ImportantLinks";
import NoticeBoard, { Notice } from "@/components/NoticeBoard";
import DepartmentInfo from "@/components/DepartmentInfo";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import FacultyDirectory from "@/components/FacultyDirectory";
import CareerSection from "@/components/CareerSection";
import StudentLifeSection from "@/components/StudentLifeSection";
import Footer from "@/components/Footer";

// Verified notices fallback
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
    title: "Submission Guidelines for 8-Week Summer Project Internship Reports",
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
    <div className="min-h-screen flex flex-col watermark-bg bg-[#F7F4ED]">
      {/* 1. Institutional Header & Navigation */}
      <Header />

      {/* Main Content Area in Strict Information Order */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 relative z-10">
        {/* 3. Short MBA Programme Introduction */}
        <Hero />

        {/* 4. Important Links / Student Services */}
        <ImportantLinks />

        {/* 5. Notice Board */}
        <NoticeBoard notices={notices} />

        {/* 6. Department Information */}
        <DepartmentInfo />

        {/* 7. Academics */}
        <AcademicsSection />

        {/* 8. Admissions */}
        <AdmissionsSection />

        {/* 9. Faculty */}
        <FacultyDirectory />

        {/* 10. Career / Placement */}
        <CareerSection />

        {/* 11. Student Life */}
        <StudentLifeSection />
      </main>

      {/* 12. Contact & Footer */}
      <Footer />
    </div>
  );
}
