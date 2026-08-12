"use client";

import React, { useState } from "react";

interface FacultyMember {
  name: string;
  designation: string;
  qualifications: string;
  experience: string;
  areasOfInterest: string;
  email: string;
  others: string;
  initials: string;
  imageUrl?: string;
}

const officialFacultyData: FacultyMember[] = [
  {
    name: "Prof. Vinita Sharma",
    designation: "Head of the Department, Director - MBA & MCA",
    qualifications: "MBA (Fin), CFP, NSE Certified Market Professional Level-5",
    experience: "29 yrs Teaching & 1 yr Corporate",
    areasOfInterest: "Sustainability, Use of Technology in Education, Investment Management, Financial Management, International Business, International Finance, Business Communication",
    email: "vinitasharma.avcollege@gmail.com",
    others: "MBA- Alumni Coordinator, Convener / Member- Climate Change & Sustainability Club, CRT Committee, Placement Committee, Career Development Centre",
    initials: "VS",
    imageUrl: "/images/faculty/vinita-sharma.jpg",
  },
  {
    name: "Dr. Reshetha Reddy",
    designation: "Associate Professor",
    qualifications: "MBA, Ph.D",
    experience: "26 yrs Teaching",
    areasOfInterest: "Finance",
    email: "avcollege@gmail.com",
    others: "Anti Ragging Committee Convenor",
    initials: "RR",
    imageUrl: "/images/faculty/reshetha-reddy.jpg",
  },
  {
    name: "Ms. Archana Bhaganagre",
    designation: "Asst. Professor",
    qualifications: "MBA (Marketing, HR), B.Ed, SET, BSE (Education)",
    experience: "14 yrs (Teaching), 4 yrs (Industry)",
    areasOfInterest: "Marketing Management, Business Research, Organization Development, Consumer Behaviour, Product and Brand Management",
    email: "archana.avcollege@gmail.com",
    others: "Literary Club member, AVC Handbook and Newsletter Committee, Convenor, Criteria VII, Member",
    initials: "AB",
    imageUrl: "/images/faculty/archana-b.jpg",
  },
  {
    name: "Dr. J. Divya",
    designation: "Asst. Professor",
    qualifications: "MBA (Finance & Marketing), UGC-NET, Ph.D.",
    experience: "4 yrs",
    areasOfInterest: "Accounting, Financial Risk Management, Business Intelligence, Innovation Management, Services & Global Marketing, Promotion & Distribution Management, Entrepreneurship",
    email: "divya.avcollege@gmail.com",
    others: "Departmental Internship Coordinator, Science Club Member, Equal Opportunity Cell Member",
    initials: "JD",
    imageUrl: "/images/faculty/j-divya.jpg",
  },
  {
    name: "Ms. P. Sandhya Rani",
    designation: "Asst. Professor",
    qualifications: "MBA (Finance & Marketing), M.Com",
    experience: "9 yrs",
    areasOfInterest: "Operation Research, Statistics, Finance, Marketing",
    email: "sandhya.avcollege@gmail.com",
    others: "Teaching Learning Centre, Entrepreneur Club, Criteria -I, Canteen Committee Member, Departmental Placement Coordinator",
    initials: "SR",
    imageUrl: "/images/faculty/sandhya-rani.jpg",
  },
  {
    name: "Ms. Meera Sehgal",
    designation: "Asst. Professor",
    qualifications: "MBA, ADNCC (NET)",
    experience: "4 yrs",
    areasOfInterest: "Operation Research, Statistics, Finance, Marketing",
    email: "meera.avcollege@gmail.com",
    others: "Teaching Learning Centre, Entrepreneur Club, Criteria -I, Canteen Committee Member, Departmental Placement Coordinator",
    initials: "MS",
    imageUrl: "/images/faculty/meera-sehgal.jpg",
  },
  {
    name: "Dr. B. Bhavani",
    designation: "Asst. Professor",
    qualifications: "MBA - HR, UGC - NET, JRF, Ph.D",
    experience: "8 yrs",
    areasOfInterest: "Human Resource Management, Organization Behaviour, Industrial Relations, Leadership and Change Management",
    email: "bhavani.avcollege@gmail.com",
    others: "Departmental Academic & Seminar Committee Member",
    initials: "BB",
    imageUrl: "/images/faculty/b-bhavani.jpg",
  },
];

export default function FacultyPage() {
  const [query, setQuery] = useState("");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  const filtered = officialFacultyData.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.designation.toLowerCase().includes(query.toLowerCase()) ||
      f.areasOfInterest.toLowerCase().includes(query.toLowerCase()) ||
      f.qualifications.toLowerCase().includes(query.toLowerCase())
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
            Detailed profiles, teaching experience, research interests, and committee responsibilities for Department of Business Management faculty.
          </p>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search by name, specialization, or qualification..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-80 px-3 py-2 border border-[#E5E0D6] text-xs focus:outline-none focus:border-[#7A263A]"
            />
          </div>
        </div>

        {/* Faculty Cards */}
        <div className="space-y-4">
          {filtered.map((fac, idx) => (
            <div key={idx} className="bg-white border border-[#E5E0D6] p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-start">
              
              {/* Profile Image or Institutional Initials Badge */}
              <div className="w-24 h-28 sm:w-28 sm:h-32 bg-[#172033] border border-[#B08D57] flex-shrink-0 flex items-center justify-center overflow-hidden text-white font-bold">
                {fac.imageUrl && !imgErrors[fac.name] ? (
                  <img
                    src={fac.imageUrl}
                    alt={fac.name}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(fac.name)}
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-xl font-serif text-[#B08D57]">{fac.initials}</span>
                    <p className="text-[9px] text-white/60 tracking-widest mt-1">FACULTY</p>
                  </div>
                )}
              </div>

              {/* Comprehensive Faculty Details */}
              <div className="flex-1 space-y-2 text-xs">
                <div>
                  <h3 className="text-base font-bold text-[#172033]">{fac.name}</h3>
                  <p className="text-xs font-semibold text-[#7A263A]">{fac.designation}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 border-t border-[#E5E0D6] pt-2 text-[#252525]">
                  <p>
                    <strong className="text-[#172033]">Qualifications:</strong> {fac.qualifications}
                  </p>
                  <p>
                    <strong className="text-[#172033]">Experience:</strong> {fac.experience}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="text-[#172033]">Areas of Interest:</strong> {fac.areasOfInterest}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="text-[#172033]">Mail ID:</strong>{" "}
                    <span className="font-mono text-blue-900">{fac.email}</span>
                  </p>
                  {fac.others && (
                    <p className="sm:col-span-2 text-[#252525]/80">
                      <strong className="text-[#172033]">Additional Roles & Committees:</strong> {fac.others}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
