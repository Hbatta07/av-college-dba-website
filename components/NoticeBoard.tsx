"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface Notice {
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
  const [filterCategory, setFilterCategory] = useState<string>("ALL");

  const categories = ["ALL", "Examinations", "Academic", "General"];

  const filteredNotices = notices.filter((item) => {
    if (filterCategory === "ALL") return true;
    return item.category.toLowerCase() === filterCategory.toLowerCase();
  });

  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
            Department Bulletin & Examination Notices
          </h3>
          <p className="text-xs text-[#252525]/70 mt-0.5">
            Official announcements, examination schedules, and academic circulars
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 font-medium border ${
                filterCategory === cat
                  ? "bg-[#172033] text-white border-[#172033]"
                  : "bg-white text-[#252525] border-[#E5E0D6] hover:bg-[#F7F4ED]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Academic Table Layout */}
      <div className="overflow-x-auto">
        <table className="portal-table">
          <thead>
            <tr>
              <th className="w-28">Date</th>
              <th className="w-32">Category</th>
              <th>Notice Title & Specification</th>
              <th className="w-28 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotices.length > 0 ? (
              filteredNotices.slice(0, 5).map((notice) => (
                <tr key={notice.id}>
                  <td className="font-semibold text-[#7A263A] whitespace-nowrap">
                    {notice.date}
                  </td>
                  <td>
                    <span className="px-2 py-0.5 text-[11px] font-semibold uppercase border border-[#E5E0D6] bg-[#F7F4ED]">
                      {notice.category}
                    </span>
                  </td>
                  <td className="font-medium text-[#172033]">
                    {notice.title}
                  </td>
                  <td className="text-right whitespace-nowrap">
                    {notice.pdfUrl ? (
                      <a
                        href={notice.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#7A263A] hover:underline"
                      >
                        Download PDF
                      </a>
                    ) : (
                      <Link
                        href={`/notices?id=${notice.id}`}
                        className="text-xs font-semibold text-[#172033] hover:underline"
                      >
                        View Details
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-xs text-gray-500 py-6">
                  No notices found for the selected category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E5E0D6] flex justify-between items-center text-xs">
        <span className="text-[#252525]/70">Showing latest official department circulars</span>
        <Link
          href="/notices"
          className="font-bold text-[#7A263A] hover:underline flex items-center gap-1"
        >
          View All Notices & Search Archive &rarr;
        </Link>
      </div>
    </section>
  );
}
