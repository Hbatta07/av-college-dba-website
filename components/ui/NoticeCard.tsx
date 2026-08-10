import React from 'react';
import { Notice } from '@/types/notice';
import { Badge } from '@/components/ui/Badge';

interface NoticeCardProps {
  notice: Notice;
}

export function NoticeCard({ notice }: NoticeCardProps) {
  const categoryVariantMap: Record<Notice['category'], 'default' | 'urgent' | 'ou' | 'placement'> = {
    EXAM: 'default',
    OU: 'ou',
    PLACEMENT: 'placement',
    GENERAL: 'default',
  };

  return (
    <div className="bg-white rounded-lg border border-brand-border p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant={notice.isUrgent ? 'urgent' : categoryVariantMap[notice.category]}>
            {notice.category}
          </Badge>
          <span className="text-xs text-brand-textSecondary">{notice.date}</span>
        </div>
        <h3 className="text-base font-semibold text-brand-textPrimary mb-2 leading-snug">
          {notice.title}
        </h3>
        <p className="text-xs text-brand-textSecondary line-clamp-3 leading-relaxed">
          {notice.description}
        </p>
      </div>
      {notice.link && (
        <div className="mt-4 pt-3 border-t border-brand-border">
          <a
            href={notice.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-primary hover:underline font-medium inline-flex items-center gap-1"
          >
            View Details &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
