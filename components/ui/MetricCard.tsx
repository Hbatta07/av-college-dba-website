import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricCardProps {
  label: string;
  value: string;
  description?: string;
  className?: string;
}

export function MetricCard({ label, value, description, className }: MetricCardProps) {
  return (
    <div className={cn('bg-white rounded-lg border border-brand-border p-5 shadow-sm', className)}>
      <p className="text-xs font-medium text-brand-textSecondary uppercase tracking-wider">{label}</p>
      <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary mt-1">{value}</p>
      {description && <p className="text-xs text-brand-textSecondary mt-1 leading-normal">{description}</p>}
    </div>
  );
}
