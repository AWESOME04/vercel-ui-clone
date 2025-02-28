export interface NavItem {
  name: string;
  url: string;
  description: string;
}

export interface DropdownColumn {
  title: string;
  items: NavItem[];
}

export interface NavLinkType {
  name: string;
  url: string;
  hasDropdown: boolean;
  dropdownColumns?: DropdownColumn[];
}
