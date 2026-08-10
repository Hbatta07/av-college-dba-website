import React from 'react';
import { COLLEGE_INFO } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';

export default function AcademicsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
      <SectionHeading
        title="Academic Programs & Curriculum"
        subtitle="Master of Business Administration (MBA) curriculum under Osmania University framework."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Degree Duration" value="2 Years" description="4 Semesters Full-Time" />
        <MetricCard label="Affiliation" value="Osmania Univ." description="Curriculum & Choice Based Credit System" />
        <MetricCard label="Evaluation" value="70 : 30" description="University Exam : Internal Assessment" />
      </div>

      <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-brand-textPrimary">Program Overview</h3>
        <p className="text-sm text-brand-textSecondary leading-relaxed">
          The MBA program at {COLLEGE_INFO.department} is structured to impart core management principles, strategic decision-making skills, and practical business acumen. Affiliated to Osmania University, the program incorporates lectures, case studies, seminars, and industry projects.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-brand-textPrimary">Elective Specializations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg border border-brand-border shadow-sm">
            <h4 className="font-bold text-brand-primary text-base mb-1">Financial Management</h4>
            <p className="text-xs text-brand-textSecondary leading-relaxed">Corporate finance, investment analysis, financial markets, and risk management.</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-brand-border shadow-sm">
            <h4 className="font-bold text-brand-primary text-base mb-1">Marketing Management</h4>
            <p className="text-xs text-brand-textSecondary leading-relaxed">Consumer behavior, digital marketing, brand management, and sales strategies.</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-brand-border shadow-sm">
            <h4 className="font-bold text-brand-primary text-base mb-1">Human Resource Management</h4>
            <p className="text-xs text-brand-textSecondary leading-relaxed">Organizational behavior, talent acquisition, labor laws, and performance management.</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-brand-border shadow-sm">
            <h4 className="font-bold text-brand-primary text-base mb-1">Systems & Analytics</h4>
            <p className="text-xs text-brand-textSecondary leading-relaxed">Management information systems, business analytics, e-commerce, and enterprise IT.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
