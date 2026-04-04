export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: ['Java 25', 'Kotlin', 'Spring Boot', 'Spring Cloud', 'Spring AI'],
  },
  {
    name: 'AI & Agents',
    skills: ['Spring AI', 'Embabel Agent Framework', 'Ollama', 'GOAP Orchestration'],
  },
  {
    name: 'Data & Messaging',
    skills: ['PostgreSQL', 'Apache Kafka', 'Redis', 'Elasticsearch', 'Cassandra', 'Amazon Kinesis'],
  },
  {
    name: 'Blockchain & Payments',
    skills: ['EVM', 'Ethereum', 'Solana', 'Base L2', 'USDC', 'web3j', 'Temporal'],
  },
  {
    name: 'Cloud & Infra',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'OpenShift', 'GitHub Actions'],
  },
  {
    name: 'Observability',
    skills: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Testcontainers'],
  },
  {
    name: 'Architecture',
    skills: ['Hexagonal', 'DDD', 'Event-Driven', 'CQRS', 'Outbox Pattern', 'Resilience4j'],
  },
];

export const certifications = [
  'AWS Certified Developer – Associate',
  'Microsoft Certified: Azure Developer Associate',
  'Azure Cloud Fundamentals',
  'GitOps Foundations',
  'Sun Certified Java Developer',
];
