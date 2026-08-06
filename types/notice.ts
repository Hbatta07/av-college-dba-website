export type NoticeCategory = 'EXAM' | 'OU' | 'PLACEMENT' | 'GENERAL';

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string;
  description: string;
  isUrgent?: boolean;
  link?: string;
}
