export interface Notice {
  id: string;
  title: string;
  category: 'EXAM' | 'OU' | 'PLACEMENT' | 'GENERAL';
  date: string;
  description: string;
  isUrgent?: boolean;
  link?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string;
  email: string;
}

export const COLLEGE_INFO = {
  name: 'A.V. College of Arts, Science & Commerce',
  status: 'Autonomous Institution | Affiliated to Osmania University',
  accreditation: 'NAAC Re-accredited with A Grade',
  department: 'Department of Business Administration (MBA)',
  address: 'Gagan Mahal, Domalguda, Hyderabad, Telangana - 500029',
  phoneUG: '040-27637751',
  phonePG: '040-27610241',
  emailUG: 'avcollege@gmail.com',
  emailPG: 'avpgcentre@gmail.com',
};

export const NOTICES_DATA: Notice[] = [
  {
    id: '1',
    title: 'TG ICET-2026 Phase-1 Counseling & Verification Schedule',
    category: 'EXAM',
    date: '2026-08-01',
    description: 'Document verification and web options submission schedule for MBA candidates via TG ICET.',
    isUrgent: true,
  },
  {
    id: '2',
    title: 'Osmania University MBA III-Semester Almanac (2025-26)',
    category: 'OU',
    date: '2026-07-25',
    description: 'Detailed academic calendar including commencement of classes, mid-terms, and end-semester examinations.',
    isUrgent: false,
  },
  {
    id: '3',
    title: 'Campus Recruitment Drive: Deloitte & Tech Mahindra Placement',
    category: 'PLACEMENT',
    date: '2026-07-20',
    description: 'On-campus placement registration for final year MBA students. Deadline for resume submission is August 15.',
    isUrgent: true,
  },
  {
    id: '4',
    title: 'Guest Lecture on Financial Modeling and Analytics',
    category: 'GENERAL',
    date: '2026-07-10',
    description: 'Departmental workshop hosted by industry leaders on modern corporate financial strategies.',
    isUrgent: false,
  },
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Ch. Rajalingam',
    designation: 'Principal & Professor',
    qualification: 'Ph.D., MBA',
    experience: '22+ Years',
    specialization: 'Strategic Management & Leadership',
    email: 'principal@avcollege.in',
  },
  {
    id: 'f2',
    name: 'Prof. K. Ramchandra Reddy',
    designation: 'Senior Professor',
    qualification: 'Ph.D., M.Com, MBA',
    experience: '25+ Years',
    specialization: 'Financial Accounting & Portfolio Management',
    email: 'ramchandra.reddy@avcollege.in',
  },
  {
    id: 'f3',
    name: 'Dr. P. Sudha Rani',
    designation: 'Associate Professor & Head of Department',
    qualification: 'Ph.D., MBA (HR & Marketing)',
    experience: '18+ Years',
    specialization: 'Human Resource Management & Consumer Behavior',
    email: 'hod.mba@avcollege.in',
  },
];
