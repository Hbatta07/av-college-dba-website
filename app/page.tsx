import React from 'react';
import Link from 'next/link';
import { COLLEGE_INFO } from '@/lib/constants';
import { NOTICES_DATA } from '@/data/notices';
import { FACULTY_DATA } from '@/data/faculty';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';
import { NoticeCard } from '@/components/ui/NoticeCard';
import { FacultyCard } from '@/components/ui/FacultyCard';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const recentNotices = NOTICES_DATA.slice(0, 3);
  const featuredFaculty = FACULTY_DATA.slice(0, 3);

  return (
    <div className="flex flex-col gap-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <section className="bg-brand-primary text-white rounded-2xl p-8 sm:p-12 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {COLLEGE_INFO.accreditation}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {COLLEGE_INFO.department}
          </h1>
          <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed">
            {COLLEGE_INFO.name} ({COLLEGE_INFO.status}). Fostering academic excellence, innovative leadership, and professional integrity in management education.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/admissions">
              <Button variant="secondary" size="lg">
                Admissions Info
              </Button>
            </Link>
            <Link href="/academics">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Explore Academics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Affiliation" value="Osmania Univ." description="Autonomous Program" />
        <MetricCard label="Accreditation" value="Grade A" description="NAAC Re-accredited" />
        <MetricCard label="Program" value="2-Year MBA" description="Full-Time Post-Graduation" />
        <MetricCard label="Location" value="Hyderabad" description="Gagan Mahal, Domalguda" />
      </section>

      <section>
        <SectionHeading
          title="Latest Department Announcements"
          subtitle="Stay updated with exam schedules, Osmania University circulars, and campus events."
          action={
            <Link href="/notices">
              <Button variant="ghost" size="sm">View All Notices &rarr;</Button>
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          title="Department Faculty"
          subtitle="Experienced academicians and industry mentors guiding business leaders."
          action={
            <Link href="/faculty">
              <Button variant="ghost" size="sm">View All Faculty &rarr;</Button>
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFaculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
