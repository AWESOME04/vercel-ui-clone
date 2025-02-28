import React from 'react';

// Custom icons that resemble Vercel's icons
const PreviewsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AIIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 6v12M7 12h10M9 7.5L15 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FluidComputeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M6 8h12M6 12h12M6 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const RenderingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ObservabilityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 16l3-3 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 7v8M12 15l-3-3M12 15l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextjsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 8l-8 8M8 8l4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TurborepoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AISDKIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M8 9h8M8 12h5M8 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AIAppsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CommerceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 10h10l-1 7H8l-1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 10V8a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 8H8v8h8V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MultiTenantIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 9h4v6H7V9zM13 9h4v6h-4V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WebAppsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PlatformEngineersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 7v4M12 15v2M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DesignEngineersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ResourceCenterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MarketplaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 10h10l-1 7H8l-1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 10V8a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TemplatesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 10h10M10 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GuidesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M8 7h8M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PartnerFinderIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CustomersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 17c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ChangelogIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PressIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 16l3-3 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DefaultIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Map item names to their respective icons
export const getIconForItem = (name: string) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    'Previews': PreviewsIcon,
    'AI': AIIcon,
    'Fluid compute': FluidComputeIcon,
    'Rendering': RenderingIcon,
    'Observability': ObservabilityIcon,
    'Security': SecurityIcon,
    'Monitoring': SecurityIcon,
    'Next.js': NextjsIcon,
    'Turborepo': TurborepoIcon,
    'AI SDK': AISDKIcon,
    'AI Apps': AIAppsIcon,
    'Composable Commerce': CommerceIcon,
    'Marketing Sites': MarketingIcon,
    'Multi-tenant Platforms': MultiTenantIcon,
    'Web Apps': WebAppsIcon,
    'Platform Engineers': PlatformEngineersIcon,
    'Design Engineers': DesignEngineersIcon,
    'Resource Center': ResourceCenterIcon,
    'Marketplace': MarketplaceIcon,
    'Templates': TemplatesIcon,
    'Guides': GuidesIcon,
    'Partner Finder': PartnerFinderIcon,
    'Customers': CustomersIcon,
    'Blog': BlogIcon,
    'Changelog': ChangelogIcon,
    'Press': PressIcon,
  };

  return iconMap[name] || DefaultIcon;
};
