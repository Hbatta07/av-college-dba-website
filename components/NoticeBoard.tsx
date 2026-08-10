import React from "react";
import Link from "next/link";

interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  pdfUrl?: string;
}

interface NoticeBoardProps {
  notices: Notice[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
  return (
    <div className="bg-white border border-[#E5E0D6] p-6 relative">
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D6] mb-4">
        <div>
          <h2 className="text-xl font-bold text-[#172033]">Departmental Notice Board</h2>
          <div className="w-12 h-[2px] bg-[#B08D57] mt-1" />
        </div>
        <Link
          href="/notices"
          className="text-xs font-semibold text-[#7A263A] hover:text-[#172033] uppercase tracking-wider"
        >
          View All Notices →
        </Link>
      </div>

      <div className="divide-y divide-[#E5E0D6]">
        {notices.map((notice) => (
          <div key={notice.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#F7F4ED]/50 px-2 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono px-2 py-0.5 bg-[#F7F4ED] text-[#7A263A] border border-[#E5E0D6] whitespace-nowrap">
                {notice.date}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#172033] hover:text-[#7A263A]">
                  <Link href={`/notices#${notice.id}`}>{notice.title}</Link>
                </h3>
                <span className="text-[11px] text-[#252525]/60 uppercase tracking-wider">
                  {notice.category}
                </span>
              </div>
            </div>
            {notice.pdfUrl && (
              <a
                href={notice.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#B08D57] hover:underline whitespace-nowrap self-start sm:self-center"
              >
                Download Circular (PDF)
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
