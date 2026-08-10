import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function StudentLifePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
      <SectionHeading
        title="Student Life & Campus Culture"
        subtitle="Extracurricular activities, management clubs, and holistic development at A.V. College."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
          <h3 className="font-bold text-lg text-brand-primary mb-2">Management Clubs</h3>
          <p className="text-xs text-brand-textSecondary leading-relaxed">
            Student-led functional clubs for Marketing, Finance, and HR organizing quizzes, case study competitions, and debates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
          <h3 className="font-bold text-lg text-brand-primary mb-2">Seminars & Fests</h3>
          <p className="text-xs text-brand-textSecondary leading-relaxed">
            Annual management meets, inter-college symposiums, and cultural events promoting teamwork and leadership.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
          <h3 className="font-bold text-lg text-brand-primary mb-2">Campus Infrastructure</h3>
          <p className="text-xs text-brand-textSecondary leading-relaxed">
            Access to computer labs, departmental library facilities, audio-visual seminar halls, and sports grounds.
          </p>
        </div>
      </div>
    </div>
  );
}
