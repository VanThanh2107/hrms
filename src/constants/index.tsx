import * as ROUTES from '@/constants/routes';
import {
  DateTimeFormatOption,
  ISidebarItem,
  IUserDropdownItem,
} from '@/interfaces';
import {
  Briefcase,
  CheckSquare,
  Clipboard,
  FileText,
  Globe,
  SlidersHorizontal,
  Star,
  Users,
} from 'lucide-react';

export const sidebarData: ISidebarItem[] = [
  {
    title: 'HR',
    path: ROUTES.HR,
    icon: Briefcase,
    children: [
      { title: 'Recruitment', path: ROUTES.RECRUITMENT, icon: Clipboard },
      {
        title: 'Employee Lifecycle',
        path: '/employee-lifecycle',
        icon: CheckSquare,
      },
      { title: 'Performance', path: ROUTES.PERFORMANCE, icon: Star },
      {
        title: 'Shift & Attendance',
        path: ROUTES.SHIFT_AND_ATTENDANCE,
        icon: FileText,
      },
    ],
  },
  {
    title: 'Users',
    path: ROUTES.USERS,
    icon: Users,
  },
  {
    title: 'Website',
    path: '',
    icon: Globe,
  },
  {
    title: 'Build',
    path: ROUTES.BUILD,
    icon: SlidersHorizontal,
  },
];

export const userDropdown: IUserDropdownItem[] = [
  {
    title: 'My Profile',
    path: ROUTES.PROFILE,
  },
  {
    title: 'Toggle Theme',
  },
  {
    title: 'Log out',
  },
];

export const dateFormats: DateTimeFormatOption[] = [
  { value: 'yyyy-mm-dd', label: 'yyyy-mm-dd' },
  { value: 'dd-mm-yyyy', label: 'dd-mm-yyyy' },
  { value: 'dd/mm/yyyy', label: 'dd/mm/yyyy' },
  { value: 'dd.mm.yyyy', label: 'dd.mm.yyyy' },
  { value: 'mm/dd/yyyy', label: 'mm/dd/yyyy' },
  { value: 'mm-dd-yyyy', label: 'mm-dd-yyyy' },
];

export const timeFormats: DateTimeFormatOption[] = [
  { value: 'HH:mm:ss', label: 'HH:mm:ss' },
  { value: 'HH:mm', label: 'HH:mm' },
];
