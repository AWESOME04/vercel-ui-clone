export interface FooterColumnProps {
    title: string;
    links: (string | React.ReactNode)[];
}

export interface SocialLinkProps {
    name: string;
    icon: React.ReactNode;
}

export interface SocialLinkData {
    name: string;
    icon: React.ReactNode;
}

export interface StatusIndicatorProps {
    isOnline?: boolean;
    statusText?: string;
}

export type ThemeType = 'system' | 'light' | 'dark';

export interface ThemeToggleProps {
  onThemeChange?: (theme: ThemeType) => void;
  currentTheme?: ThemeType;
}