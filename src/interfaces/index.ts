export interface ISidebarItem {
  title: string;
  icon: React.ElementType;
  path: string;
  children?: ISidebarItem[];
}

export interface IUserDropdownItem {
  title: string;
  path?: string;
  onClick?: () => void;
}

export interface IBodyMenuItem {
  title: string;
  link?: string;
  control?: boolean;
  children?: IBodyMenuItem[];
}

export interface DateTimeFormatOption {
  value: string;
  label: string;
}
