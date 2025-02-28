import { NavLinkType } from '../types/navbar';

export const navLinks: NavLinkType[] = [
  {
    name: 'Products',
    url: '#products',
    hasDropdown: true,
    dropdownColumns: [
      {
        title: 'DX PLATFORM',
        items: [
          {
            name: 'Previews',
            url: '#previews',
            description: 'Zero-config preview deployments for every branch and PR',
          },
          {
            name: 'AI',
            url: '#ai',
            description: 'Integrate AI into your apps with ease',
          },
          {
            name: 'Fluid compute',
            url: '#fluid-compute',
            description: 'Autoscaling compute for every workload',
          },
          {
            name: 'Rendering',
            url: '#rendering',
            description: 'Optimized rendering for every use case',
          },
          {
            name: 'Observability',
            url: '#observability',
            description: 'Insights and analytics for your applications',
          },
          {
            name: 'Security',
            url: '#security',
            description: 'Enterprise-grade security for your applications',
          },
        ],
      },
      {
        title: 'MANAGED INFRASTRUCTURE',
        items: [
          {
            name: 'Monitoring',
            url: '#monitoring',
            description: 'Real-time monitoring and alerts',
          },
          {
            name: 'Rendering',
            url: '#rendering',
            description: 'Optimized rendering for every use case',
          },
          {
            name: 'Observability',
            url: '#observability',
            description: 'Insights and analytics for your applications',
          },
        ],
      },
      {
        title: 'OPEN SOURCE',
        items: [
          {
            name: 'Next.js',
            url: '#nextjs',
            description: 'The React framework for production',
          },
          {
            name: 'Turborepo',
            url: '#turborepo',
            description: 'High-performance build system for JavaScript and TypeScript',
          },
          {
            name: 'AI SDK',
            url: '#ai-sdk',
            description: 'Build AI-powered applications with ease',
          },
        ],
      },
    ],
  },
  {
    name: 'Solutions',
    url: '#solutions',
    hasDropdown: true,
    dropdownColumns: [
      {
        title: 'USE CASES',
        items: [
          {
            name: 'AI Apps',
            url: '#ai-apps',
            description: 'Build and deploy AI-powered applications',
          },
          {
            name: 'Composable Commerce',
            url: '#commerce',
            description: 'Build modern e-commerce experiences',
          },
          {
            name: 'Marketing Sites',
            url: '#marketing',
            description: 'Create high-performance marketing websites',
          },
          {
            name: 'Multi-tenant Platforms',
            url: '#multi-tenant',
            description: 'Build SaaS platforms that scale',
          },
          {
            name: 'Web Apps',
            url: '#web-apps',
            description: 'Build web applications that scale',
          },
        ],
      },
      {
        title: 'USERS',
        items: [
          {
            name: 'Platform Engineers',
            url: '#platform-engineers',
            description: 'Build and maintain developer platforms',
          },
          {
            name: 'Design Engineers',
            url: '#design-engineers',
            description: 'Create beautiful, functional interfaces',
          },
        ],
      },
    ],
  },
  {
    name: 'Resources',
    url: '#resources',
    hasDropdown: true,
    dropdownColumns: [
      {
        title: 'TOOLS',
        items: [
          {
            name: 'Resource Center',
            url: '#resource-center',
            description: 'Guides, tutorials, and resources',
          },
          {
            name: 'Marketplace',
            url: '#marketplace',
            description: 'Discover integrations and tools',
          },
          {
            name: 'Templates',
            url: '#templates',
            description: 'Start your project with a template',
          },
          {
            name: 'Guides',
            url: '#guides',
            description: 'Learn how to build with Vercel',
          },
          {
            name: 'Partner Finder',
            url: '#partner-finder',
            description: 'Find a partner to help with your project',
          },
        ],
      },
      {
        title: 'COMPANY',
        items: [
          {
            name: 'Customers',
            url: '#customers',
            description: 'See how companies build with Vercel',
          },
          {
            name: 'Blog',
            url: '#blog',
            description: 'News, updates, and insights',
          },
          {
            name: 'Changelog',
            url: '#changelog',
            description: 'Latest updates and new features',
          },
          {
            name: 'Press',
            url: '#press',
            description: 'Press releases and media kit',
          },
        ],
      },
    ],
  },
  {
    name: 'Enterprise',
    url: '#enterprise',
    hasDropdown: false,
  },
  {
    name: 'Docs',
    url: '#docs',
    hasDropdown: false,
  },
  {
    name: 'Pricing',
    url: '#pricing',
    hasDropdown: false,
  },
];
