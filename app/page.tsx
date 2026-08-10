import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";

const fallbackNotices = [
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
];

async function getNoticesFromSheet() {
  const SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/1dY_bTuQJ1qyeBqEkGvqBlJbuK48mVeraXMiEgmPm4Zc/export?format=csv";

  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 30 }, // Refresh every 30 seconds
    });

    if (!res.ok) return fallbackNotices;

    const text = await res.text();
    const lines = text.split("\n").filter((line) => line.trim() !== "");

    if (lines.length <= 1) return fallbackNotices;

    const notices = lines.slice(1).map((line, idx) => {
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
    console.error("Sheet Fetch Error:", error);
    return fallbackNotices;
  }
}

export default async function Home() {
  const notices = await getNoticesFromSheet();

  return (
    <div className="watermark-bg space-y-12 pb-12 overflow-hidden">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <NoticeBoard notices={notices} />

        <div className="bg-white/90 backdrop-blur-sm border border-[#E5E0D6] p-6 sm:p-8">
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
