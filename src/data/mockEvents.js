import hackathonImg from '../assets/images/hackathon_banner_1791395332752.jpg';
import conferenceImg from '../assets/images/cloud_conference_1791395344458.jpg';
import workshopImg from '../assets/images/workshop_hands_on_1791395356682.jpg';
import symposiumImg from '../assets/images/ai_symposium_1791395370871.jpg';

export const MOCK_EVENTS = [
  {
    id: 'evt-001',
    title: 'Global Agentic AI Hackathon 2026',
    slug: 'global-agentic-ai-hackathon-2026',
    category: 'Hackathon',
    format: 'Hybrid',
    date: '2026-10-18',
    endDate: '2026-10-20',
    time: '09:00 AM',
    endTime: '06:00 PM',
    location: 'San Francisco, CA & Online',
    venueAddress: 'Moscone Center West, 800 Howard St, San Francisco, CA',
    virtualUrl: 'https://discord.gg/devboard-hackathon',
    shortDescription: '48-hour sprint building autonomous agents and multimodal tools with prizes up to $50,000.',
    description: 'Join over 1,200 developers, AI researchers, and designers in an intensive 48-hour challenge. Teams will build production-grade agentic workflows, tooling integrations, and multimodal human-in-the-loop applications. Mentors from top AI labs will be on site to provide architecture guidance and API access credits.',
    organizer: 'Open Agent Foundation',
    organizerUrl: 'https://openagent.foundation',
    image: hackathonImg,
    tags: ['AI Agents', 'LLMs', 'Python', 'TypeScript', 'Autonomous Systems'],
    attendeesCount: 840,
    capacity: 1000,
    price: 'Free',
    featured: true,
    registrationOpen: true,
    speakers: [
      { name: 'Dr. Elena Vance', role: 'Principal Research Scientist', company: 'DeepCognition AI' },
      { name: 'Marcus Sterling', role: 'Head of Infrastructure', company: 'AgentStack' },
      { name: 'Priya Patel', role: 'Director of Developer Relations', company: 'VectorBase' }
    ],
    agenda: [
      { time: 'Day 1 · 09:00 AM', title: 'Opening Keynote & Problem Statements Unveiled' },
      { time: 'Day 1 · 11:30 AM', title: 'Team Formation & Mentorship Matchmaking' },
      { time: 'Day 2 · 02:00 PM', title: 'Mid-Hack Progress Check-in & Architecture Review' },
      { time: 'Day 3 · 03:00 PM', title: 'Top 10 Finalist Demos & Awards Ceremony' }
    ],
    requirements: [
      'Laptop with active development environment',
      'GitHub account for code submission',
      'Discord account for announcements and team channels'
    ]
  },
  {
    id: 'evt-002',
    title: 'Cloud Native Distributed Systems Summit',
    slug: 'cloud-native-distributed-systems-summit',
    category: 'Conference',
    format: 'In-Person',
    date: '2026-10-24',
    endDate: '2026-10-25',
    time: '08:30 AM',
    endTime: '05:30 PM',
    location: 'Seattle, WA',
    venueAddress: 'Bell Harbor International Conference Center, Seattle, WA',
    shortDescription: 'Deep dive into Kubernetes internals, zero-trust service meshes, and eBPF observability.',
    description: 'The premier technical conference for platform engineers and backend architects tackling large-scale distributed systems. Two full days of peer-reviewed engineering case studies, deep dives into kernel-level observability with eBPF, and real-world failure post-mortems.',
    organizer: 'Cloud Scale Guild',
    organizerUrl: 'https://cloudscaleguild.org',
    image: conferenceImg,
    tags: ['Kubernetes', 'eBPF', 'Distributed Systems', 'Go', 'Observability'],
    attendeesCount: 1450,
    capacity: 1600,
    price: 'Paid',
    priceDetail: '$299 Early Bird',
    featured: true,
    registrationOpen: true,
    speakers: [
      { name: 'Lars Lindqvist', role: 'Staff SRE', company: 'Nordic Cloud' },
      { name: 'Maya Lin', role: 'Core Maintainer', company: 'Cilium Project' },
      { name: 'David Zhao', role: 'VP of Platform Engineering', company: 'ScaleWave' }
    ],
    agenda: [
      { time: '09:00 AM', title: 'The Next Decade of Cloud Primitives' },
      { time: '11:15 AM', title: 'Demystifying eBPF in Production Clusters' },
      { time: '02:00 PM', title: 'Architecting for Multi-Region Data Consistency' },
      { time: '04:15 PM', title: 'Panel: What We Learned from Massive Scale Outages' }
    ],
    requirements: [
      'Foundational understanding of containers and Linux networking'
    ]
  },
  {
    id: 'evt-003',
    title: 'High-Performance React & Vite Architecture Workshop',
    slug: 'high-performance-react-vite-workshop',
    category: 'Workshop',
    format: 'Virtual',
    date: '2026-10-15',
    time: '10:00 AM',
    endTime: '02:00 PM',
    location: 'Live Interactive Stream',
    virtualUrl: 'https://zoom.us/j/devboard-react-workshop',
    shortDescription: 'Hands-on live coding mastering React 19 compiler internals, custom hooks, and state discipline.',
    description: 'An interactive 4-hour hands-on masterclass designed for senior frontend engineers. Learn how to profile bundle sizes, master memoization and concurrent rendering, implement robust type-safe state architecture, and achieve 60fps interaction budgets on complex data-heavy surfaces.',
    organizer: 'Modern Frontend Institute',
    organizerUrl: 'https://frontendinstitute.dev',
    image: workshopImg,
    tags: ['React 19', 'JavaScript', 'Vite', 'Frontend Architecture', 'Web Vitals'],
    attendeesCount: 310,
    capacity: 350,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Sarah Jenkins', role: 'Frontend Architect', company: 'UI Core Systems' },
      { name: 'Alex Rivera', role: 'Author of Mastering Web Performance', company: 'FastWeb Labs' }
    ],
    agenda: [
      { time: '10:00 AM', title: 'React 19 Compiler & Render Tree Deep Dive' },
      { time: '11:15 AM', title: 'Hands-on Lab: Profiling Memory Leaks with Chrome DevTools' },
      { time: '12:30 PM', title: 'Designing Clean Modular State Without Re-Render Thrash' },
      { time: '01:30 PM', title: 'Live Code Review & Q&A Session' }
    ],
    requirements: [
      'Intermediate React and JavaScript experience',
      'Node.js 20+ and VS Code installed'
    ]
  },
  {
    id: 'evt-004',
    title: 'Silicon Valley AI Safety & Alignment Symposium',
    slug: 'sv-ai-safety-alignment-symposium',
    category: 'Conference',
    format: 'In-Person',
    date: '2026-11-04',
    endDate: '2026-11-05',
    time: '09:00 AM',
    endTime: '05:00 PM',
    location: 'Palo Alto, CA',
    venueAddress: 'Stanford Faculty Club Auditorium, Stanford, CA',
    shortDescription: 'Gathering leading researchers to discuss mechanistic interpretability and governance protocols.',
    description: 'A focused academic and industrial symposium dedicated to the hardest problems in AI safety. Topics include mechanistic interpretability of frontier reasoning models, evaluation benchmarks for autonomous agents, red-teaming methodologies, and open safety benchmarks.',
    organizer: 'Alignment Research Network',
    organizerUrl: 'https://alignmentresearch.org',
    image: symposiumImg,
    tags: ['AI Safety', 'Interpretability', 'Neural Networks', 'Ethics', 'Research'],
    attendeesCount: 420,
    capacity: 500,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Dr. Arthur Pendelton', role: 'Director of AI Alignment', company: 'Institute for Safe Tech' },
      { name: 'Claire Dubois', role: 'Senior Research Fellow', company: 'Frontier AI Labs' }
    ],
    agenda: [
      { time: '09:30 AM', title: 'Mapping Hidden Activation Vectors in Large Models' },
      { time: '11:00 AM', title: 'Automated Red-Teaming for Autonomous Tool Execution' },
      { time: '02:00 PM', title: 'Technical Governance and Auditable System Sandboxes' }
    ]
  },
  {
    id: 'evt-005',
    title: 'Rust for Production Systems: Concurrency & Memory Safety',
    slug: 'rust-for-production-systems-concurrency',
    category: 'Workshop',
    format: 'Hybrid',
    date: '2026-10-28',
    time: '01:00 PM',
    endTime: '05:00 PM',
    location: 'Austin, TX & Online',
    venueAddress: 'Capital Factory Austin, 701 Brazos St, Austin, TX',
    virtualUrl: 'https://stream.rustguild.org/live',
    shortDescription: 'Build high-throughput async microservices using Tokio, Axum, and zero-cost abstractions.',
    description: 'Transition from intermediate Rust to writing production-hardened concurrent services. We will build an event-driven message queue from scratch, benchmark throughput with wrk, debug lock contention, and configure production-grade tracing instrumentation.',
    organizer: 'Lone Star Rustaceans',
    organizerUrl: 'https://austinrust.dev',
    image: workshopImg,
    tags: ['Rust', 'Async', 'Tokio', 'Systems Programming', 'Backend'],
    attendeesCount: 275,
    capacity: 300,
    price: 'Paid',
    priceDetail: '$85 Standard',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Nathanial Thorne', role: 'Principal Systems Architect', company: 'ByteForge Engine' }
    ],
    agenda: [
      { time: '01:00 PM', title: 'The Rust Ownership Model in Multi-Threaded Contexts' },
      { time: '02:15 PM', title: 'Building a High-Concurrency Queue with Tokio & Channels' },
      { time: '03:45 PM', title: 'Benchmarking and Memory Profiling with Valgrind & Flamegraphs' }
    ]
  },
  {
    id: 'evt-006',
    title: 'DevOps & GitOps Community Meetup',
    slug: 'devops-gitops-community-meetup',
    category: 'Meetup',
    format: 'In-Person',
    date: '2026-10-16',
    time: '06:30 PM',
    endTime: '09:00 PM',
    location: 'New York, NY',
    venueAddress: 'TechHub NYC, 150 W 28th St, New York, NY',
    shortDescription: 'Casual evening of lightning talks on ArgoCD, Terraform drift detection, and CI pipelines.',
    description: 'Join local DevOps practitioners and platform engineers for an evening of technical discussions, lightning talks, pizza, and networking. Three 15-minute case studies on how enterprise teams manage infrastructure as code across multi-tenant clusters.',
    organizer: 'NYC DevOps Chapter',
    organizerUrl: 'https://meetup.com/nyc-devops',
    image: symposiumImg,
    tags: ['DevOps', 'GitOps', 'Terraform', 'CI/CD', 'ArgoCD'],
    attendeesCount: 160,
    capacity: 180,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Carlos Ramos', role: 'Lead DevOps Specialist', company: 'FinTech Cloud Inc' },
      { name: 'Tara Simmons', role: 'Staff Infrastructure Engineer', company: 'MediaStream' }
    ],
    agenda: [
      { time: '06:30 PM', title: 'Doors Open, Food & Networking' },
      { time: '07:15 PM', title: 'Lightning Talks: 3 Real-World GitOps Stories' },
      { time: '08:15 PM', title: 'Open Floor Q&A and Engineering Social' }
    ]
  },
  {
    id: 'evt-007',
    title: 'Fullstack Web & Server Actions Masterclass',
    slug: 'fullstack-web-server-actions-masterclass',
    category: 'Webinar',
    format: 'Virtual',
    date: '2026-10-22',
    time: '11:00 AM',
    endTime: '12:30 PM',
    location: 'Online Webinar',
    virtualUrl: 'https://youtube.com/live/devboard-nextjs',
    shortDescription: 'Architecture patterns for optimistic updates, progressive enhancement, and edge caching.',
    description: 'Learn how modern fullstack web frameworks handle mutations without hydration overhead. We will examine Server Actions, optimistic UI states, server-sent streaming, and edge caching invalidation rules through live-coded examples.',
    organizer: 'Vercel Community Advocates',
    organizerUrl: 'https://nextjs.org',
    image: workshopImg,
    tags: ['JavaScript', 'React', 'Fullstack', 'Web Performance', 'Server Actions'],
    attendeesCount: 920,
    capacity: 1200,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Dominic Sterling', role: 'Frontend Evangelist', company: 'Vercel Ecosystem' }
    ],
    agenda: [
      { time: '11:00 AM', title: 'The Anatomy of a Server Action Lifecycle' },
      { time: '11:45 AM', title: 'Optimistic UI Patterns with useOptimistic and useActionState' },
      { time: '12:15 PM', title: 'Audience Q&A & Code Repository Walkthrough' }
    ]
  },
  {
    id: 'evt-008',
    title: 'Decentralized Web & Zero-Knowledge Hackathon',
    slug: 'decentralized-web-zk-hackathon',
    category: 'Hackathon',
    format: 'Virtual',
    date: '2026-11-12',
    endDate: '2026-11-15',
    time: '12:00 PM',
    endTime: '08:00 PM',
    location: 'Virtual Worldwide',
    virtualUrl: 'https://zk-hackathon.eth.limo',
    shortDescription: 'Build privacy-preserving applications using zk-SNARKs, Circom, and decentralized identity.',
    description: 'A 72-hour virtual buildathon inviting developers and cryptographers to craft zero-knowledge proofs for identity verification, voting, verifiable computation, and anonymous reputation protocols. $40,000 bounty pool distributed across 4 project tracks.',
    organizer: 'ZK Collective',
    organizerUrl: 'https://zkcollective.org',
    image: hackathonImg,
    tags: ['Cryptography', 'Zero Knowledge', 'Web3', 'JavaScript', 'Circom'],
    attendeesCount: 650,
    capacity: 800,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Dr. Xiao Chen', role: 'Cryptographic Researcher', company: 'ZK Labs' },
      { name: 'Jessica Bloom', role: 'Privacy Protocol Lead', company: 'ShieldNet' }
    ],
    agenda: [
      { time: 'Day 1 · 12:00 PM', title: 'Opening Brief & Bounty Track Announcements' },
      { time: 'Day 2 · 03:00 PM', title: 'Live Circuit Debugging Office Hours' },
      { time: 'Day 3 · 06:00 PM', title: 'Submission Deadline & Community Voting' }
    ]
  },
  {
    id: 'evt-009',
    title: 'Advanced JavaScript Performance & V8 Internals',
    slug: 'advanced-javascript-performance-v8-internals',
    category: 'Workshop',
    format: 'Virtual',
    date: '2026-10-30',
    time: '02:00 PM',
    endTime: '04:30 PM',
    location: 'Live Stream & CodeSandbox',
    virtualUrl: 'https://meet.google.com/dev-type-meet',
    shortDescription: 'Master memory profiling, hidden classes, JIT compilation, and event loop optimization.',
    description: 'Learn how modern JavaScript engines execute your code under the hood. We explore deoptimizations, garbage collection pauses, memory leak hunting, and microtask queues to write blazingly fast web code.',
    organizer: 'JS Engine Guild',
    organizerUrl: 'https://js-guild.dev',
    image: workshopImg,
    tags: ['JavaScript', 'V8', 'Performance', 'Node.js', 'Frontend'],
    attendeesCount: 480,
    capacity: 500,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Oliver Scott', role: 'Compiler & Tooling Engineer', company: 'MetaType Systems' }
    ],
    agenda: [
      { time: '02:00 PM', title: 'How V8 Compiles JavaScript (Ignition & TurboFan)' },
      { time: '03:00 PM', title: 'Interactive Challenge: Memory Profiling and Leak Hunting' },
      { time: '04:00 PM', title: 'Event Loop Deep Dive and Microtask Traps' }
    ]
  },
  {
    id: 'evt-010',
    title: 'Design Systems & Accessible UI Engineering Conference',
    slug: 'design-systems-accessible-ui-conference',
    category: 'Conference',
    format: 'Hybrid',
    date: '2026-11-18',
    endDate: '2026-11-19',
    time: '09:00 AM',
    endTime: '05:30 PM',
    location: 'Chicago, IL & Virtual',
    venueAddress: 'The Radisson Blu Aqua Hotel, 221 N Columbus Dr, Chicago, IL',
    virtualUrl: 'https://designsystemsconf.com/stream',
    shortDescription: 'Bridging Figma tokens to React code with strict WCAG AA compliance and headless primitives.',
    description: 'The annual gathering for design system leads, accessibility auditors, and component authors. Featuring case studies from Spotify, GitHub, and Airbnb on maintaining multi-brand design tokens, headless ARIA behaviors, and automated contrast verification.',
    organizer: 'Design Systems Alliance',
    organizerUrl: 'https://designsystemsconf.com',
    image: conferenceImg,
    tags: ['Design Systems', 'Accessibility', 'Figma Tokens', 'CSS', 'WCAG'],
    attendeesCount: 780,
    capacity: 900,
    price: 'Paid',
    priceDetail: '$190 Virtual / $390 In-Person',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Amara Okafor', role: 'Design Systems Lead', company: 'Palette Digital' },
      { name: 'Benjamin Cole', role: 'Accessibility Architect', company: 'Inclusive Web Org' }
    ],
    agenda: [
      { time: '09:30 AM', title: 'Token Harmonization from Design to Production' },
      { time: '11:30 AM', title: 'Writing Headless Dialogs and Keyboard Traps that Pass Any Audit' },
      { time: '02:30 PM', title: 'Component Versioning Across 40+ Internal Teams' }
    ]
  },
  {
    id: 'evt-011',
    title: 'PostgreSQL Internals & Query Optimization Meetup',
    slug: 'postgresql-internals-query-optimization-meetup',
    category: 'Meetup',
    format: 'In-Person',
    date: '2026-10-21',
    time: '06:00 PM',
    endTime: '08:30 PM',
    location: 'Boston, MA',
    venueAddress: 'Cambridge Innovation Center, 1 Broadway, Cambridge, MA',
    shortDescription: 'EXPLAIN ANALYZE teardowns, indexing strategies (B-Tree vs GiST/GIN), and connection pooling.',
    description: 'Join fellow backend engineers and database administrators for an evening dedicated to high-concurrency PostgreSQL performance tuning. Bring your toughest slow query logs for our live teardown session.',
    organizer: 'Boston Data & Database Enthusiasts',
    organizerUrl: 'https://meetup.com/boston-postgres',
    image: symposiumImg,
    tags: ['PostgreSQL', 'Databases', 'SQL', 'Performance', 'Backend'],
    attendeesCount: 140,
    capacity: 150,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Rachel Goldberg', role: 'Database Infrastructure Lead', company: 'FinData Engine' }
    ],
    agenda: [
      { time: '06:00 PM', title: 'Refreshments & Postgres Networking' },
      { time: '06:45 PM', title: 'Reading EXPLAIN ANALYZE Like an Engine Architect' },
      { time: '07:45 PM', title: 'Audience Slow Query Teardowns' }
    ]
  },
  {
    id: 'evt-012',
    title: 'Zero to Production with GraphQL & Federation Webinar',
    slug: 'zero-to-production-graphql-federation-webinar',
    category: 'Webinar',
    format: 'Virtual',
    date: '2026-11-08',
    time: '01:00 PM',
    endTime: '02:15 PM',
    location: 'Online Webinar',
    virtualUrl: 'https://zoom.us/webinar/devboard-graphql',
    shortDescription: 'Federated supergraphs, schema stitching, caching strategies, and N+1 prevention with DataLoader.',
    description: 'A practical, engineering-first webinar showing how modern microservice architectures unite siloed backends into a unified GraphQL supergraph. Learn how to solve the N+1 problem permanently, handle distributed authentication, and write schema contracts.',
    organizer: 'API Architecture Guild',
    organizerUrl: 'https://apiguild.dev',
    image: workshopImg,
    tags: ['GraphQL', 'Apollo Federation', 'Node.js', 'Microservices', 'API Design'],
    attendeesCount: 520,
    capacity: 700,
    price: 'Free',
    featured: false,
    registrationOpen: true,
    speakers: [
      { name: 'Kenneth Brooks', role: 'Principal API Architect', company: 'Mesh Networks' }
    ],
    agenda: [
      { time: '01:00 PM', title: 'The Evolution of Unified API Gateways' },
      { time: '01:30 PM', title: 'Federation Subgraphs & Schema Stitching in Practice' },
      { time: '02:00 PM', title: 'Q&A and Sample Starter Repo Walkthrough' }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Hackathon',
  'Workshop',
  'Conference',
  'Meetup',
  'Webinar'
];
