'use client';

import React from 'react';
import { NOTICES_DATA } from '@/data/notices';

export default function EmergencyTicker() {
  const urgentNotices = NOTICES_DATA.filter((notice) => notice.isUrgent);

  if (urgentNotices.length === 0) return null;

  return (
    <div className="bg-red-600 text-white text-xs font-semibold py-1.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <span className="bg-white text-red-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase shrink-0">
          Urgent
        </span>
        <div className="truncate flex-1">
          {urgentNotices.map((notice) => (
            <span key={notice.id} className="mr-6 inline-block">
              {notice.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
