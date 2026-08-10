import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  title = 'No records found',
  description = 'There are no items matching your criteria at this time.',
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('text-center py-12 px-4 bg-white rounded-lg border border-brand-border', className)}>
      <h3 className="text-sm font-semibold text-brand-textPrimary">{title}</h3>
      <p className="text-xs text-brand-textSecondary mt-1">{description}</p>
    </div>
  );
}

export function LoadingState({ className }: { className?: string }) {
  return (
    <div className={cn('text-center py-12 px-4', className)}>
      <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
      <p className="text-xs text-brand-textSecondary mt-2">Loading content...</p>
    </div>
  );
}
