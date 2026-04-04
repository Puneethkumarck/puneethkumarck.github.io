export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'Too Good To Go',
    role: 'Backend Engineer',
    location: 'Paris, France',
    period: '2024 — Present',
    description: 'Food waste reduction platform serving 100M+ users across 17 countries.',
    highlights: [
      'Backend services for marketplace operations',
      'High-throughput systems handling millions of daily transactions',
    ],
  },
  {
    company: 'Stablecoin Infrastructure Company',
    role: 'Backend Engineer',
    location: 'London, UK',
    period: '2022 — 2024',
    description:
      'Stablecoin payment infrastructure enabling cross-border merchant payouts.',
    highlights: [
      'Built merchant payout engine processing multi-currency settlements',
      'Designed approval workflow engine with configurable compliance rules',
      'Settlement reconciliation across fiat rails and blockchain networks',
    ],
  },
  {
    company: 'ING Bank',
    role: 'Senior Software Engineer',
    location: 'Amsterdam, Netherlands',
    period: '2019 — 2022',
    description: 'Core banking platform modernization at a global financial institution.',
    highlights: [
      'Core banking platform services and account management',
      'Microservices migration from monolithic systems',
    ],
  },
  {
    company: 'Bank of America',
    role: 'Software Engineer',
    location: 'London, UK',
    period: '2016 — 2019',
    description: 'Trading systems and real-time data pipelines for capital markets.',
    highlights: [
      'Real-time trading data pipelines',
      'High-frequency event processing systems',
    ],
  },
  {
    company: 'TCS (Lloyds Banking / Best Buy)',
    role: 'Software Engineer',
    location: 'Various',
    period: '2010 — 2016',
    description: 'Enterprise systems for financial services and retail.',
    highlights: [
      'Enterprise banking systems for Lloyds Banking Group',
      'E-commerce platform services for Best Buy',
    ],
  },
];
