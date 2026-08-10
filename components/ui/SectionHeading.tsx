import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({ title, subtitle, action, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col md:flex-row md:items-end justify-between mb-6 pb-2 border-b border-brand-border gap-2', className)}>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-brand-textPrimary tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-brand-textSecondary mt-1 leading-normal">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
