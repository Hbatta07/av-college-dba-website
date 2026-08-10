import React from 'react';
import { FacultyMember } from '@/types/faculty';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-lg border border-brand-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-brand-textPrimary">{faculty.name}</h3>
      <p className="text-sm text-brand-primary font-medium">{faculty.designation}</p>
      <div className="mt-4 space-y-1.5 text-xs text-brand-textSecondary">
        <p><span className="font-semibold text-gray-700">Qualification:</span> {faculty.qualification}</p>
        <p><span className="font-semibold text-gray-700">Experience:</span> {faculty.experience}</p>
        <p><span className="font-semibold text-gray-700">Specialization:</span> {faculty.specialization}</p>
      </div>
      <div className="mt-4 pt-3 border-t border-brand-border text-xs">
        <a href={`mailto:${faculty.email}`} className="text-brand-primary hover:underline font-medium">
          {faculty.email}
        </a>
      </div>
    </div>
  );
}
