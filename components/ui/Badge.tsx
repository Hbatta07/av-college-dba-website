import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'urgent' | 'ou' | 'placement' | 'outline';
}

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 border-gray-200',
    urgent: 'bg-red-100 text-red-800 border-red-200 font-semibold',
    ou: 'bg-blue-100 text-blue-800 border-blue-200',
    placement: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    outline: 'bg-transparent text-gray-700 border-gray-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
