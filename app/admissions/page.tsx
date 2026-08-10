import React from 'react';
import { COLLEGE_INFO } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';

export default function AdmissionsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
      <SectionHeading
        title="Admissions & Eligibility"
        subtitle="Admission process, intake capacity, and entrance criteria for the MBA program."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Entrance Exam" value="TG ICET" description="Telangana Integrated Common Entrance Test" />
        <MetricCard label="Convenor Quota" value="70%" description="Admissions via State Counseling" />
        <MetricCard label="Management Quota" value="30%" description="Admissions as per OU Norms" />
      </div>

      <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-brand-textPrimary">Eligibility Criteria</h3>
        <ul className="list-disc list-inside text-sm text-brand-textSecondary space-y-2 leading-relaxed">
          <li>Bachelor’s Degree in any discipline from a recognized University with a minimum required aggregate percentage as per Telangana State Council of Higher Education (TSCHE) norms.</li>
          <li>A valid rank in the TG ICET examination conducted for the current academic session.</li>
          <li>Qualifying criteria and relaxation rules apply for reserved categories as per Osmania University and State Government guidelines.</li>
        </ul>
      </section>

      <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-brand-textPrimary">Admission Enquiries</h3>
        <p className="text-sm text-brand-textSecondary">For details regarding seat availability, fee structure, and counseling assistance:</p>
        <div className="text-xs text-brand-textSecondary space-y-1 font-medium">
          <p><span className="font-semibold text-gray-700">PG Office Phone:</span> {COLLEGE_INFO.phonePG}</p>
          <p><span className="font-semibold text-gray-700">PG Office Email:</span> {COLLEGE_INFO.emailPG}</p>
          <p><span className="font-semibold text-gray-700">Campus Address:</span> {COLLEGE_INFO.address}</p>
        </div>
      </section>
    </div>
  );
}
