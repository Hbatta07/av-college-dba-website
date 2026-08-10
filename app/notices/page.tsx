import React from "react";

export default function NoticesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#E5E0D6] pb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7A263A]">
          Official Examination Notifications
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#172033] mt-1">
          Departmental Notice Board & Circulars
        </h1>
        <p className="text-xs text-[#252525]/70 mt-1">
          Controller of Examinations • A.V. College Post-Graduate Centre
        </p>
      </div>

      {/* Notice 1: MBA II-Semester Regular */}
      <article id="mba-2sem-regular-2026" className="bg-white border border-[#E5E0D6] p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E0D6] pb-3 gap-2">
          <div>
            <span className="text-xs font-mono text-[#7A263A] bg-[#F7F4ED] px-2 py-0.5 border border-[#E5E0D6]">
              Ref No: No.29/PG/Acad./2025
            </span>
            <h2 className="text-lg font-bold text-[#172033] mt-2">
              TIME TABLE: MBA (CBCS) II - SEMESTER (REGULAR) EXAMINATIONS AUGUST-2026
            </h2>
          </div>
          <div className="text-left sm:text-right text-xs text-[#252525]/70">
            <p><span className="font-semibold text-[#172033]">Date:</span> 01.08.2026</p>
            <p><span className="font-semibold text-[#172033]">Time:</span> 2:00 PM to 4:30 PM</p>
          </div>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-[#E5E0D6]">
            <thead>
              <tr className="bg-[#172033] text-white">
                <th className="border border-[#E5E0D6] p-2.5">Date</th>
                <th className="border border-[#E5E0D6] p-2.5">Day</th>
                <th className="border border-[#E5E0D6] p-2.5">Program</th>
                <th className="border border-[#E5E0D6] p-2.5">Paper / Subject Title</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D6] text-[#252525]">
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">17-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Monday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Human Resource Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">19-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Wednesday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Financial Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">22-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Saturday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Operations Research</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">25-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Tuesday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Entrepreneurship Development</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">29-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Saturday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Business Research Methods</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">01-09-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Tuesday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Business Law and Ethics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      {/* Notice 2: MBA I-Semester Backlog */}
      <article id="mba-1sem-backlog-2026" className="bg-white border border-[#E5E0D6] p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E0D6] pb-3 gap-2">
          <div>
            <span className="text-xs font-mono text-[#7A263A] bg-[#F7F4ED] px-2 py-0.5 border border-[#E5E0D6]">
              Ref No: No.30/PG/Acad./2025
            </span>
            <h2 className="text-lg font-bold text-[#172033] mt-2">
              TIME TABLE: MBA (CBCS) I - SEMESTER (BACKLOG) EXAMINATIONS AUGUST-2026
            </h2>
          </div>
          <div className="text-left sm:text-right text-xs text-[#252525]/70">
            <p><span className="font-semibold text-[#172033]">Date:</span> 01.08.2026</p>
            <p><span className="font-semibold text-[#172033]">Time:</span> 2:00 PM to 4:30 PM</p>
          </div>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-[#E5E0D6]">
            <thead>
              <tr className="bg-[#172033] text-white">
                <th className="border border-[#E5E0D6] p-2.5">Date</th>
                <th className="border border-[#E5E0D6] p-2.5">Day</th>
                <th className="border border-[#E5E0D6] p-2.5">Program</th>
                <th className="border border-[#E5E0D6] p-2.5">Paper / Subject Title</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D6] text-[#252525]">
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">18-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Tuesday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Managerial and Organizational Behavior</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">20-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Thursday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Accounting for Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">24-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Monday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Marketing Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">27-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Thursday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Statistics for Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">31-08-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Monday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">IT Applications for Management</td>
              </tr>
              <tr className="hover:bg-[#F7F4ED]/50">
                <td className="border border-[#E5E0D6] p-2.5 font-semibold">02-09-2026</td>
                <td className="border border-[#E5E0D6] p-2.5">Wednesday</td>
                <td className="border border-[#E5E0D6] p-2.5 font-bold text-[#7A263A]">MBA</td>
                <td className="border border-[#E5E0D6] p-2.5 font-medium">Economics for Managers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
