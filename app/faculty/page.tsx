'use client';

import React, { useState, useMemo } from 'react';
import { FACULTY_DATA } from '@/data/faculty';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FacultyCard } from '@/components/ui/FacultyCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { EmptyState } from '@/components/ui/StateViews';

export default function FacultyPage() {
  const [search, setSearch] = useState('');

  const filteredFaculty = useMemo(() => {
    return FACULTY_DATA.filter((member) => {
      const query = search.toLowerCase();
      return (
        member.name.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.specialization.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SectionHeading
        title="Faculty Directory"
        subtitle="Meet the academic staff and research mentors of the Department of Business Administration."
      />

      <div className="mb-8 max-w-md">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search faculty by name, designation, or specialization..."
        />
      </div>

      {filteredFaculty.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No faculty members found"
          description="No records match your search criteria."
        />
      )}
    </div>
  );
}
