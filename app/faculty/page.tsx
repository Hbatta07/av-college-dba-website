"use client";

import React, { useState } from "react";

interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience: string;
  email: string;
}

const facultyList: FacultyMember[] = [
  {
    name: "Dr. Vinita Sharma",
    designation: "Professor & Director (MBA, MCA)",
    qualification: "MBA, Ph.D, CFPCM, NCMP, NCIAC, NCDC",
    specialization: "Finance",
    experience: "23 Years",
    email: "vinitasharma.avcollege@gmail.com",
  },
  {
    name: "Ms. Taruna Shah",
    designation: "Professor & HOD",
    qualification: "MBA, Fellow-III, DCA, UGC-NET/JRF, (Ph.D)",
    specialization: "Finance, Marketing",
    experience: "25 Years",
    email: "tarunashah69@gmail.com",
  },
  {
    name: "Dr. C. Lalitha",
    designation: "Assistant Professor",
    qualification: "MBA, M.Phil, Ph.D, NET, PGDMM",
    specialization: "Human Resource Management",
    experience: "13 Years",
    email: "channalalitha@gmail.com",
  },
  {
    name: "Ms. Archana Chaitankar",
    designation: "Assistant Professor",
    qualification: "MBA, SLET",
    specialization: "Marketing, HRM",
    experience: "7 Years",
    email: "avchaitankar@gmail.com",
  },
  {
    name: "Dr. K. Sunanda",
    designation: "Assistant Professor",
    qualification: "MBA, Ph.D, UGC-NET/JRF, SET",
    specialization: "HRM, Marketing",
    experience: "13 Years",
    email: "avcollege@gmail.com",
  },
  {
    name: "Mr. K. Rajkishore",
    designation: "Assistant Professor",
    qualification: "MBA, TS-SET",
    specialization: "Finance, Quantitative Techniques",
    experience: "8 Years",
    email: "avcollege@gmail.com",
  },
];

export default function FacultyPage() {
  const [query, setQuery] = useState("");

  const filtered = facultyList.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.designation.toLowerCase().includes(query.toLowerCase()) ||
      f.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F7F4ED] py-8 text-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header Title */}
        <div className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
          <div className="border-l-4 border-[#7A263A] pl-3">
            <span className="text-xs uppercase font-bold text-[#7A263A]">Academic Staff</span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#172033]">Faculty Directory</h1>
          </div>
          <p className="text-xs text-[#252525]/70 mt-2">
            Profiles, academic qualifications, and specializations of teaching staff in the Department of Business Administration.
          </p>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search faculty by name, designation, or subject..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-80 px-3 py-2 border border-[#E5E0D6] text-xs focus:outline-none focus:border-[#7A263A]"
            />
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((fac, idx) => (
            <div key={idx} className="bg-white border border-[#E5E0D6] p-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#7A263A] uppercase tracking-wider">
                  {fac.designation}
                </span>
                <h3 className="text-base font-bold text-[#172033] mt-0.5">{fac.name}</h3>
                
                <div className="mt-3 space-y-1.5 text-xs border-t border-[#E5E0D6] pt-2">
                  <p><span className="font-semibold text-[#172033]">Qualification:</span> {fac.qualification}</p>
                  <p><span className="font-semibold text-[#172033]">Specialization:</span> {fac.specialization}</p>
                  <p><span className="font-semibold text-[#172033]">Experience:</span> {fac.experience}</p>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-[#E5E0D6] text-xs font-mono text-blue-900 truncate">
                {fac.email}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
