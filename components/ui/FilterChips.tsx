'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export function FilterChips({ categories, activeCategory, onSelect, className }: FilterChipsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
              isActive
                ? 'bg-brand-primary text-white border-brand-primary font-semibold'
                : 'bg-white text-brand-textSecondary border-brand-border hover:bg-gray-50'
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
