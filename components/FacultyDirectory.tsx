"use client";

import React, { useState } from "react";

export interface FacultyMember {
  name: string;
  qualification: string;
  designation: string;
  specialization: string;
  experience: string;
  email: string;
}

const verifiedFaculty: FacultyMember[] = [
  {
    name: "Dr. Vinita Sharma",
    qualification: "MBA, Ph.D, CFPCM, NCMP, NCIAC, NCDC",
    designation: "Professor & Director (MBA, MCA)",
    specialization: "Finance",
    experience: "23 Years",
    email: "vinitasharma.avcollege@gmail.com",
  },
  {
    name: "Ms. Taruna Shah",
    qualification: "MBA, Fellow-III, DCA, UGC-NET/JRF, (Ph.D)",
    designation: "Professor & HOD",
    specialization: "Finance, Marketing",
    experience: "25 Years",
    email: "tarunashah69@gmail.com",
  },
  {
    name: "Dr. C. Lalitha",
    qualification: "MBA, M.Phil, Ph.D, NET, PGDMM",
    designation: "Assistant Professor",
    specialization: "Human Resource Management",
    experience: "13 Years",
    email: "channalalitha@gmail.com",
  },
  {
    name: "Ms. Archana Chaitankar",
    qualification: "MBA, SLET",
    designation: "Assistant Professor",
    specialization: "Marketing, HRM",
    experience: "7 Years",
    email: "avchaitankar@gmail.com",
  },
  {
    name: "Dr. K. Sunanda",
    qualification: "MBA, Ph.D, UGC-NET/JRF, SET",
    designation: "Assistant Professor",
    specialization: "HRM, Marketing",
    experience: "13 Years",
    email: "[DATA REQUIRED]",
  },
];

export default function FacultyDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = verifiedFaculty.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
            Faculty Academic Directory
          </h3>
          <p className="text-xs text-[#252525]/70 mt-0.5">
            Teaching staff profiles, qualifications, specializations, and contact emails
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by name or subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1.5 border border-[#E5E0D6] text-xs focus:outline-none focus:border-[#7A263A] w-full sm:w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="portal-table">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Designation</th>
              <th>Qualifications</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Email Contact</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((fac, idx) => (
              <tr key={idx}>
                <td className="font-bold text-[#172033]">{fac.name}</td>
                <td className="text-xs text-[#7A263A] font-medium">{fac.designation}</td>
                <td className="text-xs text-[#252525]">{fac.qualification}</td>
                <td className="text-xs font-semibold">{fac.specialization}</td>
                <td className="text-xs whitespace-nowrap">{fac.experience}</td>
                <td className="text-xs font-mono text-blue-900">{fac.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
