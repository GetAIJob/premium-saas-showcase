/**
 * Centralized content for Lumen landing page.
 * All copy lives here — components import from this file.
 */

export const brand = {
  name: "Lumen",
  domain: "lumen.risesitelab.com",
  tagline: "The operating system for AI-native teams.",
  description:
    "Orchestrate agents, knowledge, and workflows in one beautifully simple interface. Built for teams that ship at the speed of thought.",
};

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customers", href: "#customers" },
  ],
  cta: { label: "Start free", href: "#cta" },
  signin: { label: "Sign in", href: "#" },
};

export const hero = {
  eyebrow: "Now in private preview",
  headline: ["Your team's", "AI command center."],
  subheadline:
    "Orchestrate agents, knowledge, and workflows in one beautifully simple interface. Built for teams that ship at the speed of thought.",
  primaryCta: { label: "Start free", href: "#cta" },
  secondaryCta: { label: "See it in action", href: "#how-it-works" },
  trustLine: "Free 14-day trial · No credit card · Setup in 2 minutes",
};

export const trustLogos = [
  { name: "Northwind", path: "M2 18 L10 4 L18 18 L26 4 L34 18" },
  { name: "Helios", path: "M4 18 a8 8 0 1 1 16 0 M12 4 v14" },
  { name: "Vertex Labs", path: "M2 16 L10 4 L18 16 H2 Z" },
  { name: "Quanta", path: "M3 10 a7 7 0 1 1 14 0 a7 7 0 1 1 -14 0 M14 14 L19 19" },
  { name: "Forge", path: "M3 4 H17 V8 H7 V14 H15 V18 H3 Z" },
  { name: "Stratus", path: "M3 14 a5 5 0 1 1 10 0 H17 a3 3 0 0 1 0 6 H6 a3 3 0 0 1 -3 -6 z" },
];

export const features = [
  {
    title: "Multi-agent orchestration",
    description:
      "Compose specialized agents into pipelines. Watch them collaborate, hand off context, and resolve in real time.",
    span: "lg:col-span-2 lg:row-span-1",
    icon: "graph",
  },
  {
    title: "Team knowledge graph",
    description:
      "Every doc, conversation, and decision — instantly retrievable by any agent on your team.",
    span: "",
    icon: "network",
  },
  {
    title: "Workflow automation",
    description:
      "From trigger to delivery in seconds. Branching, retries, observability — all built in.",
    span: "",
    icon: "stepper",
  },
  {
    title: "Multi-model routing",
    description:
      "Claude, GPT, Llama, your private models. Lumen picks the right one for the task.",
    span: "",
    icon: "stack",
  },
  {
    title: "Audit & guardrails",
    description:
      "Every action traced. Every output policy-checked. SOC 2 ready from day one.",
    span: "",
    icon: "shield",
  },
  {
    title: "Live collaboration",
    description:
      "Cursors, comments, and shared sessions across every agent and workflow.",
    span: "",
    icon: "cursors",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect",
    description:
      "Plug in your data sources, tools, and models. Lumen indexes everything in minutes.",
  },
  {
    step: "02",
    title: "Orchestrate",
    description:
      "Drag-and-drop agents into pipelines. Configure routing, fallbacks, and policies.",
  },
  {
    step: "03",
    title: "Ship",
    description:
      "One-click deploy to production. Observe, iterate, and scale with full confidence.",
  },
];

export const testimonials = [
  {
    quote:
      "We replaced four separate tools with one Lumen workspace. Our agents now hand off context instead of losing it.",
    name: "Mira Adeyemi",
    role: "Head of AI Ops",
    company: "Northwind",
    initials: "MA",
  },
  {
    quote:
      "Lumen turned our 'should we build internal AI infrastructure?' debate into a one-day setup.",
    name: "Lukas Chen",
    role: "CTO",
    company: "Vertex Labs",
    initials: "LC",
  },
  {
    quote:
      "The audit trail alone is worth the price. Compliance signed off in a week — not a quarter.",
    name: "Priya Shah",
    role: "VP Engineering",
    company: "Stratus",
    initials: "PS",
  },
];

export type Tier = {
  name: string;
  monthly: number | "custom";
  yearly: number | "custom";
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

export const pricing: Tier[] = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 15,
    description: "For solo operators and small teams getting started.",
    features: [
      "Up to 3 agents",
      "10,000 actions / month",
      "Community support",
      "Standard models",
      "Basic audit log",
    ],
    highlight: false,
    cta: "Start free trial",
  },
  {
    name: "Team",
    monthly: 79,
    yearly: 63,
    description: "For growing teams shipping AI workflows in production.",
    features: [
      "Unlimited agents",
      "250,000 actions / month",
      "Priority support",
      "All models including private",
      "Advanced audit + RBAC",
      "Workflow templates",
      "Custom integrations",
      "SLA-backed uptime",
    ],
    highlight: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    monthly: "custom",
    yearly: "custom",
    description: "For organizations that need security, scale, and bespoke workflows.",
    features: [
      "Everything in Team",
      "Unlimited actions",
      "Dedicated success engineer",
      "SSO / SAML / SCIM",
      "SOC 2 Type II + DPA",
      "Self-hosted deployment option",
      "Custom contracts",
    ],
    highlight: false,
    cta: "Talk to sales",
  },
];

export const finalCta = {
  headline: "Ready to ship at the speed of thought?",
  sub: "Set up your first agent in two minutes. No credit card. No commitment.",
  primary: { label: "Start your free 14-day trial", href: "#" },
  secondary: { label: "Talk to sales", href: "#" },
};

export const footer = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Customers", href: "#customers" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  resources: [
    { label: "Docs", href: "#" },
    { label: "API", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "#" },
    { label: "DPA", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} Lumen Labs · All rights reserved.`,
  social: [
    { label: "X", href: "#", icon: "x" },
    { label: "GitHub", href: "#", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
};
