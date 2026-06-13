import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Zap,
  CheckCircle2,
  ChevronDown,
  Menu,
  X as XIcon,
  Send,
  Loader2,
  Quote,
  ArrowUpRight,
} from "lucide-react";

/* ─────────────── Navbar ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "What We Do", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-white">
            Info<span className="gold-text-gradient">Consulting</span>.io
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Book a Call
          </a>
        </div>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-sm font-medium text-zinc-400 hover:text-white py-3"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 gold-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────── Hero ─────────────── */
function Hero() {
  return (
    <section className="pt-36 pb-24 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_#d4a85308_0%,_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gold-light border border-gold/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-wide uppercase">
              Growth Advisory for High-Ticket Businesses
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            We Help Coaches & Consultants{" "}
            <span className="gold-text-gradient">Scale Past Plateaus</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We audit your marketing, funnels, sales teams, and operations to find
            what's holding you back — then fix it. Real-world experience.
            Measurable results.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gold-gradient text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Get Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 border border-zinc-700 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold/50 hover:text-gold transition-all text-base"
            >
              See Our Results
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-fade-up-d2">
          {[
            { value: "$10M+", label: "Revenue Generated" },
            { value: "2–3x", label: "Avg Revenue Increase" },
            { value: "30+", label: "Teams Optimized" },
            { value: "90 Days", label: "Avg Time to Results" },
          ].map((s) => (
            <div key={s.label} className="stat-card bg-card rounded-xl p-6 text-center border border-border">
              <p className="font-heading text-2xl md:text-3xl font-extrabold gold-text-gradient">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Clients Marquee ─────────────── */
function ClientsMarquee() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground mb-6">
          Trusted by industry leaders
        </p>
        <div className="clients-marquee-container">
          <div className="clients-marquee-track">
            {[...Array(4)].flatMap((_, rep) =>
              ["Tim Danilov", "Ariel Pryor", "Sean Frimpong", "Matt Par"].map((name, i) => (
                <span
                  key={`${name}-${rep}`}
                  className="font-heading text-lg md:text-xl font-bold text-zinc-600 whitespace-nowrap px-8 md:px-12"
                >
                  {name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── What We Do ─────────────── */
function Services() {
  const services = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Marketing & Funnel Audits",
      description:
        "We dissect your entire marketing machine — ads, landing pages, email sequences, and funnels — to find the leaks costing you money.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sales Team Building & Training",
      description:
        "From hiring the right closers to training your team on proven frameworks, we build sales operations that convert consistently.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lead Generation Systems",
      description:
        "We evaluate and optimize your lead gen — organic, paid, referral — to ensure a steady flow of qualified prospects into your pipeline.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Optimization",
      description:
        "We identify the highest-leverage changes across your business to maximize revenue without increasing ad spend.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Operational Efficiency",
      description:
        "Streamline your fulfillment, onboarding, and internal processes so you can scale without the chaos.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Growth Strategy",
      description:
        "A clear roadmap for where you are, where you want to go, and exactly what needs to happen to get there.",
    },
  ];

  return (
    <section className="py-24 relative" id="services">
      <div className="gold-line mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            End-to-End Growth{" "}
            <span className="gold-text-gradient">Consulting</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We don't just give advice — we get in the trenches with you. Every
            engagement starts with a deep audit and ends with real, measurable
            improvement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Results / Case Studies ─────────────── */
function Results() {
  const cases = [
    {
      name: "Matt Par",
      before: "$320K/mo",
      after: "$723K/mo",
      highlight: "2.3x revenue increase",
      description:
        "Optimized the sales team structure, scripts, and management processes. Identified bottlenecks in the closing process and implemented performance tracking that doubled output.",
    },
    {
      name: "Ariel Pryor",
      before: "<$30K/mo",
      after: "$220K/mo",
      highlight: "$220K in first 3 weeks",
      description:
        "Built the entire sales team from scratch — hiring, training, scripts, CRM setup, and KPI dashboards. They had never crossed $30K before; we hit $220K in the first 3 weeks.",
    },
  ];

  return (
    <section className="py-24" id="results">
      <div className="gold-line mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Proven Results
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Real Numbers.{" "}
            <span className="gold-text-gradient">Real Growth.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We don't deal in theory. Here's what happens when we step in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div
              key={c.name}
              className="glass-card rounded-2xl p-8 md:p-10 animate-pulse-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center text-gold font-bold text-sm">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-white">{c.name}</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Before</p>
                  <p className="font-heading text-2xl font-bold text-zinc-400 mt-1">{c.before}</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-gold" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">After</p>
                  <p className="font-heading text-2xl font-bold gold-text-gradient mt-1">{c.after}</p>
                </div>
              </div>

              <div className="bg-gold-light rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-6">
                <TrendingUp className="h-4 w-4 text-gold" />
                <span className="text-gold text-sm font-semibold">{c.highlight}</span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────── Process ─────────────── */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      description:
        "We learn about your business, your goals, and your current challenges. No fluff, just real talk about where you are.",
    },
    {
      num: "02",
      title: "Deep Audit",
      description:
        "We go through your marketing, funnels, sales team, and operations with a fine-tooth comb to find every opportunity.",
    },
    {
      num: "03",
      title: "Strategy & Roadmap",
      description:
        "You get a clear action plan with prioritized recommendations ranked by impact and effort.",
    },
    {
      num: "04",
      title: "Execution & Support",
      description:
        "We help you implement the changes — from team training to system setup — and track results every step of the way.",
    },
  ];

  return (
    <section className="py-24" id="process">
      <div className="gold-line mb-24" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Our Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            How We{" "}
            <span className="gold-text-gradient">Work</span>
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="glass-card rounded-2xl p-8 flex gap-6 items-start group hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl gold-gradient flex items-center justify-center">
                <span className="font-heading text-lg font-extrabold text-white">{s.num}</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── About / Why Us ─────────────── */
function About() {
  const points = [
    "Real experience building & managing sales teams",
    "Hands-on work, not just slide decks",
    "Focus on high-ticket coaching, consulting & education",
    "Data-driven decisions backed by real numbers",
    "Systems that scale — not band-aid fixes",
    "Results within 60 days or less",
  ];

  return (
    <section className="py-24">
      <div className="gold-line mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Why InfoConsulting
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              We've Been in{" "}
              <span className="gold-text-gradient">Your Shoes</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We're not academics or agency people. We've built sales teams, closed
              high-ticket deals, managed operations, and scaled businesses from the
              inside. That's why our recommendations actually work — they come from
              doing, not theorizing.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By combining real-world experience in sales, management, and client
              acquisition, we provide practical recommendations that help businesses
              improve conversion rates, increase revenue, and build stronger
              foundations for long-term success.
            </p>
          </div>
          <div className="space-y-4">
            {points.map((p) => (
              <div
                key={p}
                className="flex items-center gap-4 glass-card rounded-xl px-6 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm text-white font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who do you work with?",
      a: "We specialize in high-ticket coaching, consulting, and education companies — typically doing $30K+/mo and looking to scale to $100K–$1M+/mo.",
    },
    {
      q: "What does the audit include?",
      a: "We review your marketing campaigns, funnels, sales team structure and performance, lead generation systems, and operational processes. You get a detailed report with prioritized action items.",
    },
    {
      q: "How fast will I see results?",
      a: "Most clients see measurable improvements within 30–90 days. Some, like Ariel Pryor, see massive results in just weeks.",
    },
    {
      q: "Do you replace my team?",
      a: "No. We work alongside your existing team — or help you build one if you don't have one yet. Our goal is to make your people better.",
    },
    {
      q: "How is this different from other consultants?",
      a: "We've done the work ourselves — built sales teams, closed deals, managed operations. We don't give you a 50-page PDF and walk away. We get in the trenches with you.",
    },
  ];

  return (
    <section className="py-24" id="faq">
      <div className="gold-line mb-24" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Common{" "}
            <span className="gold-text-gradient">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-heading font-semibold text-white pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Contact / Intake Form ─────────────── */
function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    revenue: "",
    challenge: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(
      `Consulting Inquiry from ${formData.fullName} — ${formData.businessName}`
    );
    const body = encodeURIComponent(
      `New Consulting Inquiry\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name: ${formData.fullName}\n` +
      `Business: ${formData.businessName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Current Monthly Revenue: ${formData.revenue}\n` +
      `Biggest Challenge: ${formData.challenge}\n\n` +
      `Additional Details:\n${formData.message || "None"}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=aamir@crestalisgroup.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setStatus("sent");
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      revenue: "",
      challenge: "",
      message: "",
    });
  };

  if (status === "sent") {
    return (
      <section className="py-24" id="contact">
        <div className="gold-line mb-24" />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 text-gold" />
          </div>
          <h2 className="font-heading text-4xl font-extrabold text-white">
            We'll Be in Touch
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Check your Gmail — a draft is ready to send. We'll respond within 24
            hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-gold underline underline-offset-4 hover:opacity-80"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,_#9b233510_0%,_transparent_70%)] pointer-events-none" />
      <div className="gold-line mb-24" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-5 gap-0 overflow-hidden rounded-3xl border border-border">
          {/* Left side — info panel */}
          <div className="md:col-span-2 gold-gradient p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">
                Get Started
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Let's Scale Your Business
              </h2>
              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                Tell us about your business and we'll show you exactly what's
                possible. Every engagement starts with a free audit.
              </p>
            </div>
            <div className="relative mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">Free, no-obligation audit</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">100% confidential</span>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="md:col-span-3 bg-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Monthly Revenue
                  </label>
                  <select
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-card">Select range...</option>
                    <option value="under-30k" className="bg-card">Under $30K/mo</option>
                    <option value="30k-50k" className="bg-card">$30K – $50K/mo</option>
                    <option value="50k-100k" className="bg-card">$50K – $100K/mo</option>
                    <option value="100k-250k" className="bg-card">$100K – $250K/mo</option>
                    <option value="250k-500k" className="bg-card">$250K – $500K/mo</option>
                    <option value="500k+" className="bg-card">$500K+/mo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Biggest Challenge
                  </label>
                  <select
                    name="challenge"
                    required
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-card">Select challenge...</option>
                    <option value="sales-team" className="bg-card">Sales team performance</option>
                    <option value="lead-gen" className="bg-card">Lead generation</option>
                    <option value="funnel" className="bg-card">Funnel conversion rates</option>
                    <option value="scaling" className="bg-card">Scaling operations</option>
                    <option value="revenue-plateau" className="bg-card">Revenue plateau</option>
                    <option value="other" className="bg-card">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Tell us more
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are your goals? What have you tried?"
                  className="w-full bg-transparent border-b-2 border-border px-0 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold transition-colors resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full gold-gradient text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all text-base flex items-center justify-center gap-3 disabled:opacity-60 mt-2 shadow-lg shadow-gold/20"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-5 w-5" />
                    Request Your Free Audit
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm font-bold text-zinc-600">
          Info<span className="text-gold">Consulting</span>.io
        </span>
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} InfoConsulting.io. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────── App ─────────────── */
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <Services />
      <Results />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
