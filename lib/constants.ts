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

export const NOTICES_DATA: Notice[] = [];

export const FACULTY_DATA: FacultyMember[] = [];
