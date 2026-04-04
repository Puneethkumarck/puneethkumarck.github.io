export const SITE = {
  name: 'Puneethkumar CK',
  title: 'Puneethkumar CK — Backend Engineer',
  description:
    'Backend engineer building blockchain payment infrastructure and AI agents. Writing about payments, distributed systems, and agentic engineering.',
  url: 'https://puneethkumarck.dev',
  author: 'Puneethkumar CK',
  locale: 'en-US',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/puneethkumarck',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/puneethkumarck',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/puneethkumarck',
    icon: 'twitter',
  },
] as const;
