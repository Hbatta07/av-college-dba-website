import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';

export default function CareerHubPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
      <SectionHeading
        title="Career Hub & Placements"
        subtitle="Training, internship assistance, and corporate campus placement initiatives."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Placement Cell" value="Active" description="Dedicated Corporate Relations Team" />
        <MetricCard label="Soft Skills" value="Training" description="Pre-placement grooming & mock interviews" />
        <MetricCard label="Internships" value="Summer Project" description="Mandatory industrial project work" />
      </div>

      <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-brand-textPrimary">Training & Readiness Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-brand-textSecondary">
          <div className="p-4 border border-brand-border rounded-lg bg-gray-50">
            <h4 className="font-bold text-sm text-brand-textPrimary mb-1">Skill Enhancement Workshops</h4>
            <p>Regular sessions on resume building, aptitude testing, group discussions, and corporate etiquette.</p>
          </div>
          <div className="p-4 border border-brand-border rounded-lg bg-gray-50">
            <h4 className="font-bold text-sm text-brand-textPrimary mb-1">Industry Interactions</h4>
            <p>Guest lectures, seminars, and alumni interaction programs to keep students aligned with industry trends.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
