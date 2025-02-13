import * as ROUTES from "@/constants/routes";
import { SidebarItem, UserDropdownItem } from "@/interfaces";
import {
  Briefcase,
  CheckSquare,
  Clipboard,
  FileText,
  Globe,
  Settings,
  Star,
  Users,
} from "lucide-react";

export const sidebarData: SidebarItem[] = [
  {
    title: "HR",
    path: ROUTES.HR,
    icon: Briefcase,
    children: [
      { title: "Recruitment", path: ROUTES.RECRUITMENT, icon: Clipboard },
      {
        title: "Employee Lifecycle",
        path: "/employee-lifecycle",
        icon: CheckSquare,
      },
      { title: "Performance", path: ROUTES.PERFORMANCE, icon: Star },
      {
        title: "Shift & Attendance",
        path: ROUTES.SHIFT_AND_ATTENDANCE,
        icon: FileText,
      },
    ],
  },
  {
    title: "Users",
    path: ROUTES.USERS,
    icon: Users,
  },
  {
    title: "Website",
    path: "",
    icon: Globe,
  },
  {
    title: "Settings",
    path: ROUTES.SETTINGS,
    icon: Settings,
  },
];

export const userDropdown: UserDropdownItem[] = [
  {
    title: "My Profile",
    path: ROUTES.PROFILE,
  },
  {
    title: "Toggle Theme",
  },
  {
    title: "Log out",
  },
];
