import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  ExternalLink,
  Mail,
  Phone,
  Radar,
  ServerCog,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";

const socialLinks = {
  email: "mailto:contact.bhavesh.sharma@gmail.com",
  phone: "tel:+918349797058",
  linkedin: "https://www.linkedin.com/in/thebhaveshsharma",
  github: "https://github.com/thebhaveshsharma",
  calendar: "https://calendar.app.google/MeS7jXzE1Eh2QUDj8",
  devto: "https://dev.to/thebhaveshsharma",
  medium: "https://medium.com/@thebhaveshsharma",
  topmate: "https://topmate.io/thebhaveshsharma/",
};

const navItems = [
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Certifications", href: "#certifications" },
];

const stats = [
  { value: "7+", label: "Years in Elastic architecture" },
  { value: "2-3 TB per day", label: "Production ingestion at scale" },
  { value: "30+ nodes", label: "Large clusters stabilized" },
  { value: "50+", label: "Enterprise transformations delivered" },
];

const expertise = [
  "Elastic architecture for search, logging, APM, and observability",
  "Zero-downtime major upgrades across self-managed, cloud, and ECK",
  "Shard optimization, ILM/SLM strategy, and large-scale reindexing",
  "Elastic on Kubernetes, Terraform automation, and multi-cloud operations",
  "Kafka and OpenTelemetry based ingestion pipelines",
  "Production incident stabilization in high-throughput environments",
];

const caseStudies = [
  {
    title: "Upgrade Orchestration Platform",
    summary:
      "Designed an automated Elasticsearch and Kibana upgrade system with compatibility checks, tier-aware sequencing, and checkpoint-based recovery.",
    outcome:
      "Enabled safer 7.x to 9.x production upgrades across self-managed, cloud, and Kubernetes deployments.",
  },
  {
    title: "Splunk to Elastic Migration Framework",
    summary:
      "Architected a migration platform that scored feasibility, translated SPL to ES|QL, converted mappings, and generated ingestion pipelines.",
    outcome:
      "Turned complex platform migration into a repeatable enterprise workflow.",
  },
  {
    title: "Multi-Account Observability at Scale",
    summary:
      "Consolidated logs from 50+ AWS accounts with centralized ingestion, PrivateLink, Elastic Lambda Forwarder, APM, and OTel.",
    outcome:
      "Delivered resilient observability with 99.9%+ uptime across cloud and hybrid environments.",
  },
  {
    title: "AI-Assisted Elastic Analytics",
    summary:
      "Built an NLP-driven query layer using LangChain and Elasticsearch vector store to simplify analytics on operational data.",
    outcome:
      "Created a modern interface for faster, more accessible Elastic-based insights.",
  },
];

const experience = [
  {
    company: "HyperFlex",
    role: "Elastic Solution Architect | Elastic Consultant",
    period: "Nov 2023 - Present",
    highlights: [
      "Led enterprise Elastic modernization programs inside the official Elastic Partner ecosystem.",
      "Stabilized multi-node clusters ingesting 2-3TB/day and resolved oversharding, heap pressure, and mapping explosion in production.",
      "Designed disaster recovery workflows with SLM and cross-cloud restore strategies aligned to RPO and RTO targets.",
    ],
  },
  {
    company: "Consultadd Inc.",
    role: "Team Lead & Software Engineer 3",
    period: "Jul 2022 - Present",
    highlights: [
      "Built and mentored a 22-member Elastic engineering team through an Observability Center of Excellence.",
      "Operated enterprise observability platforms across AWS, GCP, VMware Cloud, and on-prem systems.",
      "Integrated APM, Synthetic Monitoring, and OpenTelemetry across 250+ servers and 20+ applications.",
    ],
  },
  {
    company: "Consultadd Inc.",
    role: "Senior Software Engineer",
    period: "Jan 2021 - Jun 2022",
    highlights: [
      "Managed 2TB/day ingestion for a global telecom provider with zero major downtime incidents.",
      "Deployed ELK on Kubernetes with ECK and automated provisioning, validation, and lifecycle tasks using Python, Bash, and Terraform.",
      "Improved monitoring and incident response using Prometheus and Grafana.",
    ],
  },
  {
    company: "Visuotech IT Services",
    role: "Associate Software Engineer",
    period: "Jun 2018 - Dec 2019",
    highlights: [
      "Developed secure and scalable web applications with PHP and Python-based frameworks.",
      "Delivered digital systems for public-sector and educational institutions.",
      "Contributed to workflow automation and maintainable application architecture.",
    ],
  },
];

const certifications = [
  {
    title: "Elastic Certified Engineer",
    href: "https://certified.elastic.co/d7bbbc4d-5631-4dc5-b94a-fd6e0fe17d3b#acc.UzWg7QRO",
  },
  {
    title: "Elastic Certified Analyst",
    href: "https://certified.elastic.co/247c96b8-f266-4988-ac60-700e48faab63#acc.mdeFAIKB",
  },
  {
    title: "Elastic Certified Observability Engineer",
    href: "https://certified.elastic.co/751ba5cf-f63a-4843-beea-f768c3a1b39c#acc.vUqVDzFS",
  },
  {
    title: "Elastic Certified SIEM Analyst",
    href: "https://certified.elastic.co/ef4ad0fb-892d-4afa-98f1-c8e5024cf2dc#acc.DFnE6YH4",
  },
];

const creatorLinks = [
  { label: "Topmate", href: socialLinks.topmate },
  { label: "Dev.to", href: socialLinks.devto },
  { label: "Medium", href: socialLinks.medium },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const profileLinks = [
    socialLinks.linkedin
      ? { label: "LinkedIn", href: socialLinks.linkedin }
      : null,
    socialLinks.github ? { label: "GitHub", href: socialLinks.github } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute right-[-6rem] top-48 h-80 w-80 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 sm:px-10 lg:px-12">
        <header className="sticky top-0 z-20 -mx-6 bg-white/75 px-6 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
            <Link href="/" className="text-base font-semibold tracking-[0.18em] text-slate-950 uppercase">
              Bhavesh Sharma
            </Link>
            <div className="flex items-center gap-3">
              <nav className="hidden gap-7 text-base font-medium text-slate-600 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-slate-950"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="relative grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-100 px-4 py-2 text-sm text-cyan-800">
              <Sparkles className="h-4 w-4" />
              Elastic Solution Architect | 4x Elastic Certified
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building resilient Elastic platforms for high-scale enterprise systems.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              I design, modernize, and stabilize search and observability
              platforms across hybrid cloud environments, from Kubernetes-based
              Elastic deployments to zero-downtime upgrades and disaster
              recovery strategy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={socialLinks.email}
                className="theme-solid-cta inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-cyan-400/50 hover:bg-white"
              >
                Explore Case Studies
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/65 px-4 py-2">
                <Phone className="h-4 w-4 text-cyan-700" />
                +91 8349797058
              </span>
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300/80 bg-white/65 px-4 py-2 transition hover:border-cyan-400/50 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              {creatorLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/65 px-4 py-2 transition hover:border-cyan-400/50 hover:bg-white"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-2xl shadow-cyan-100/80 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-cyan-300/40 bg-white/85">
              <div className="relative aspect-[4/4.7] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                <Image
                  src="/bhavesh-photo.png"
                  alt="Bhavesh Sharma"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="border-t border-slate-200 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-700">
                  Bhavesh Sharma
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  Elastic Solution Architect
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Designing scalable search, observability, and platform
                  modernization systems for enterprise environments.
                </p>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-300/40 bg-white/85 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-700">
                Signature Strengths
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <ServerCog className="mt-1 h-5 w-5 text-cyan-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Elastic at Enterprise Scale
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Production clusters, workload isolation, shard strategy,
                      performance tuning, and incident recovery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="mt-1 h-5 w-5 text-cyan-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Hybrid Cloud Architecture
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      AWS, GCP, Kubernetes, ECK, Terraform, and resilient
                      multi-environment deployment design.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Radar className="mt-1 h-5 w-5 text-cyan-700" />
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Observability Leadership
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      CoE leadership, APM rollouts, OpenTelemetry integration,
                      and architecture workshops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-5"
                >
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <SectionIntro
            eyebrow="Core Impact"
            title="A portfolio built around outcomes, not just tools."
            description="Your resume already tells a compelling story: you solve difficult distributed systems problems in environments where downtime, data loss, and poor observability are not acceptable."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                  <BadgeCheck className="h-5 w-5 text-cyan-700" />
                </div>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="py-20">
          <SectionIntro
            eyebrow="Featured Work"
            title="Case studies that make your portfolio feel senior and credible."
            description="Instead of listing unnamed projects, the site frames your strongest architecture work as business-impact stories with clear technical depth."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white/82 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-700">
                  Case Study
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {study.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {study.summary}
                </p>
                <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <p className="text-sm font-medium text-cyan-800">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {study.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="grid gap-10 py-20 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <SectionIntro
            eyebrow="Career Journey"
            title="From software engineering foundations to enterprise Elastic leadership."
            description="The experience section is positioned to show progression: hands-on engineering, platform ownership, team leadership, and architecture strategy."
          />
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-[1.75rem] border border-slate-200 bg-white/75 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-700">
                      {item.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                      {item.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-slate-300/80 bg-white/65 px-4 py-2 text-sm text-slate-600">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <BriefcaseBusiness className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <SectionIntro
            eyebrow="Authority Signals"
            title="Certifications, speaking, and technical leadership."
            description="This section reinforces credibility beyond delivery experience, showing that you also teach, communicate, and lead within the Elastic ecosystem."
          />
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-cyan-700" />
                <h3 className="text-xl font-semibold text-slate-950">
                  4x Elastic Certified Professional
                </h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {certifications.map((item) =>
                  item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 transition hover:border-cyan-400/40 hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span>{item.title}</span>
                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700 transition group-hover:translate-x-0.5" />
                      </div>
                    </a>
                  ) : (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                    >
                      {item.title}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/75 p-6">
                <div className="flex items-center gap-3">
                  <AudioLines className="h-5 w-5 text-cyan-700" />
                  <h3 className="text-xl font-semibold text-slate-950">
                    Thought Leadership
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Host of the HyperFlex Podcast and contributor to Elastic-focused
                  webinars, workshops, and technical architecture discussions.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/75 p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-cyan-700" />
                  <h3 className="text-xl font-semibold text-slate-950">
                    What Recruiters See
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Deep Elastic specialization, large-scale reliability
                  engineering, cloud architecture maturity, and visible technical
                  leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-100 via-white to-sky-100 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
              Let&apos;s Build Search Platforms That Scale
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Available for Elastic architecture, modernization, migrations,
                  and observability transformations.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  If you need help upgrading, stabilizing, or scaling Elastic
                  across cloud or Kubernetes environments, I&apos;d love to connect.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={socialLinks.email}
                  className="theme-solid-cta inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  <Mail className="h-4 w-4" />
                  Email Bhavesh
                </a>
                <a
                  href={socialLinks.calendar}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Book via Calendar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
