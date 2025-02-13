export interface SidebarItem {
  title: string;
  icon: React.ElementType;
  path: string;
  children?: SidebarItem[];
}

export interface UserDropdownItem {
  title: string;
  path?: string;
  onClick?: () => void;
}
