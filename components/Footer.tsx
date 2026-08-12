import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#172033] text-white/80 border-t-4 border-[#B08D57] pt-8 pb-6 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b border-white/10">
        
        {/* Address & Contact */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase tracking-wider text-sm border-b border-white/20 pb-1">
            Department of Business Administration
          </h4>
          <p>A.V. College of Arts, Science & Commerce</p>
          <p>Domalguda, Gagan Mahal, Hyderabad - 500 029, Telangana, India</p>
          <p className="pt-1"><strong>Phone:</strong> 040-27637751 / 040-27610241</p>
          <p><strong>Email:</strong> avcollege@gmail.com / vinitasharma.avcollege@gmail.com</p>
        </div>

        {/* Quick Institutional Links */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase tracking-wider text-sm border-b border-white/20 pb-1">
            Portal Quick Links
          </h4>
          <ul className="space-y-1">
            <li><Link href="/notices" className="hover:text-[#B08D57]">Examination & Circular Notices</Link></li>
            <li><Link href="/academics" className="hover:text-[#B08D57]">MBA Curriculum & Osmania University Syllabus</Link></li>
            <li><Link href="/admissions" className="hover:text-[#B08D57]">TSICET Admission Process & Eligibility</Link></li>
            <li><Link href="/faculty" className="hover:text-[#B08D57]">Faculty Staff Directory</Link></li>
            <li><Link href="/career-hub" className="hover:text-[#B08D57]">Placement Cell & Skill Development</Link></li>
          </ul>
        </div>

        {/* Affiliation Notice */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase tracking-wider text-sm border-b border-white/20 pb-1">
            Affiliation & Approval
          </h4>
          <p className="leading-relaxed">
            Affiliated to Osmania University, Hyderabad. Approved by All India Council for Technical Education (AICTE), New Delhi. NAAC Reaccredited with 'A' Grade.
          </p>
          <p className="text-[11px] text-white/50 pt-2">
            Official Portal maintained by Department of Business Administration, A.V. College.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/50">
        <p>© {new Date().getFullYear()} A.V. College of Arts, Science & Commerce. All rights reserved.</p>
        <p>Gagan Mahal, Hyderabad, Telangana - 500029</p>
      </div>
    </footer>
  );
}
