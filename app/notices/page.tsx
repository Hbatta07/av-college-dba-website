'use client';

import React, { useState, useMemo } from 'react';
import { NOTICES_DATA } from '@/data/notices';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NoticeCard } from '@/components/ui/NoticeCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterChips } from '@/components/ui/FilterChips';
import { EmptyState } from '@/components/ui/StateViews';

const CATEGORIES: string[] = ['ALL', 'EXAM', 'OU', 'PLACEMENT', 'GENERAL'];

export default function NoticesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredNotices = useMemo(() => {
    return NOTICES_DATA.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(search.toLowerCase()) ||
        notice.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'ALL' || notice.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <SectionHeading
        title="Notice Board & Announcements"
        subtitle="Official circulars, examination schedules, placement drives, and university updates."
      />

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mb-8">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search notices by keyword..."
          className="max-w-md"
        />
        <FilterChips
          categories={CATEGORIES}
          activeCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {filteredNotices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No notices found"
          description="Try adjusting your search query or switching categories."
        />
      )}
    </div>
  );
}
