import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["about", "projects", "blog", "experience", "contact"];

const SKILLS = [
  { name: "JavaScript", level: 95 },
  { name: "React", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 82 },
  { name: "TypeScript", level: 85 },
  { name: "TailwindCSS", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "AWS", level: 75 },
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user auth, Stripe payments, and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    num: "01",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat powered by AI with smart responses and live language translation.",
    tech: ["React", "Python", "TensorFlow", "WebSocket"],
    link: "#",
    num: "02",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project tool with real-time updates and team collaboration features.",
    tech: ["React", "Firebase", "Redux", "Material-UI"],
    link: "#",
    num: "03",
  },
];

const BLOG_POSTS = [
  {
    title: "The Future of Web Development",
    date: "Mar 15, 2024",
    preview:
      "Exploring upcoming trends shaping the next generation of the internet.",
    readTime: "5 min",
  },
  {
    title: "Mastering React Hooks",
    date: "Mar 10, 2024",
    preview:
      "A comprehensive guide to using React Hooks effectively in production apps.",
    readTime: "8 min",
  },
  {
    title: "Building Scalable Applications",
    date: "Mar 5, 2024",
    preview:
      "Best practices for applications that grow gracefully with your user base.",
    readTime: "6 min",
  },
];

const EXPERIENCE = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "2022 — Present",
    description:
      "Led frontend development team, implemented major features, and improved performance by 40%.",
  },
  {
    company: "Digital Innovations Corp",
    role: "Frontend Developer",
    period: "2020 — 2022",
    description:
      "Developed responsive web applications and maintained client relationships.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content:
      "Gautam's work exceeded all expectations. His attention to detail and technical expertise made our project a huge success.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupX",
    content:
      "Working with Gautam was a game-changer for our startup. His innovative solutions are truly outstanding.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer, DesignCo",
    content:
      "Gautam transforms designs into pixel-perfect implementations with exceptional precision.",
    initials: "ER",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const lastScroll = useRef(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      setNavHidden(cur > lastScroll.current && cur > 80);
      lastScroll.current = cur;

      const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(Boolean);
      for (const s of sections.reverse()) {
        if (window.scrollY >= s.offsetTop - 120) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const d = darkMode;

  const bg = d ? "#0a0e1a" : "#f5f5f0";
  const surface = d ? "#111827" : "#ffffff";
  const surface2 = d ? "#1a2235" : "#f0ede8";
  const text = d ? "#e8e4d9" : "#1a1a2e";
  const sub = d ? "#8892a4" : "#666";
  const accent = "#00e5b0";
  const accent2 = "#ff6b35";

  return (
    <div
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        background: bg,
        color: text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${accent}55; border-radius: 2px; }

        .cursor-dot {
          width: 10px; height: 10px;
          background: ${accent};
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease, width 0.2s, height 0.2s, margin 0.2s;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          width: 36px; height: 36px;
          border: 1.5px solid ${accent}88;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          transition: transform 0.35s ease, width 0.3s, height 0.3s, margin 0.3s;
          transform: translate(-50%, -50%);
        }
        .cursor-hover .cursor-dot { width: 6px; height: 6px; }
        .cursor-hover .cursor-ring { width: 56px; height: 56px; border-color: ${accent}; }

        .nav-pill { 
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          z-index: 100; 
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s;
        }
        .nav-pill.hidden { transform: translateX(-50%) translateY(-120%); opacity: 0; }

        .hero-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(60px);
          animation: revealUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-14px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, ${accent}, ${accent}99);
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:hover .project-num { color: ${accent}; }
        .project-card:hover { border-color: ${accent}55; }
        .tilt-card { transition: transform 0.3s ease; }
        .tilt-card:hover { transform: translateY(-6px) rotate(-0.5deg); }
        a { text-decoration: none; color: inherit; }
        input, textarea { font-family: inherit; }
        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 1000;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }
      `}</style>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Custom Cursor */}
      <div
        className={`cursor-dot ${cursorHover ? "cursor-hover" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className={`cursor-ring ${cursorHover ? "cursor-hover" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* NAVBAR */}
      <nav
        className={`nav-pill ${navHidden ? "hidden" : ""}`}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
      >
        <div
          style={{
            background: d ? "rgba(17,24,39,0.85)" : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${d ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
            borderRadius: "100px",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            boxShadow: `0 20px 60px ${d ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.12)"}`,
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px", color: accent }}>GS</span>

          <div style={{ display: "flex", gap: "4px" }}>
            {NAV_LINKS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                style={{
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                  color: activeSection === s ? (d ? "#0a0e1a" : "#fff") : sub,
                  background: activeSection === s ? accent : "transparent",
                  transition: "all 0.25s",
                }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!d)}
            style={{
              width: "32px", height: "32px",
              borderRadius: "50%",
              border: `1px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              background: "transparent",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: text,
              fontSize: "14px",
            }}
          >
            {d ? "☀" : "●"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 6% 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorations */}
        <div style={{
          position: "absolute", top: "10%", right: "-5%",
          width: "600px", height: "600px",
          background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "pulse-ring 4s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-8%",
          width: "400px", height: "400px",
          background: `radial-gradient(circle, ${accent2}12 0%, transparent 70%)`,
          borderRadius: "50%",
        }} />

        {/* Floating tag */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: `${accent}18`,
          border: `1px solid ${accent}40`,
          borderRadius: "100px",
          padding: "6px 16px",
          marginBottom: "40px",
          width: "fit-content",
          opacity: heroVisible ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, animation: "blink 1.5s infinite" }} />
          <span style={{ fontSize: "12px", fontWeight: 500, color: accent, letterSpacing: "1px", textTransform: "uppercase" }}>Available for Work</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "60px" }}>
          <div style={{ maxWidth: "700px" }}>
            <div className="hero-title" style={{ marginBottom: "32px" }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(56px, 8vw, 110px)", fontWeight: 900, lineHeight: "0.95", letterSpacing: "-3px", color: text }}>
                <span style={{ animationDelay: "0.1s", display: "block" }}>Full</span>
                <span style={{ animationDelay: "0.25s", display: "block", color: "transparent", WebkitTextStroke: `2px ${accent}` }}>Stack</span>
                <span style={{ animationDelay: "0.4s", display: "block" }}>Dev.</span>
              </h1>
            </div>

            <p style={{
              fontSize: "17px", lineHeight: "1.7", color: sub, maxWidth: "480px", marginBottom: "48px",
              opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.7s",
            }}>
              Hi, I'm <strong style={{ color: text }}>Gautam Sharma</strong> — a full-stack developer crafting beautiful, scalable web experiences with modern technologies.
            </p>

            <div style={{
              display: "flex", gap: "16px", flexWrap: "wrap",
              opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease 0.9s",
            }}>
              <a
                href="#contact"
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
                style={{
                  background: accent,
                  color: "#0a0e1a",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = `0 0 30px ${accent}60`; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Hire Me ↗
              </a>
              <a
                href="/resume.pdf"
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
                style={{
                  border: `1.5px solid ${d ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                  color: text,
                  padding: "14px 32px",
                  borderRadius: "100px",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "border-color 0.2s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = accent; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = d ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"; }}
              >
                ↓ Resume
              </a>
            </div>
          </div>

          {/* Avatar + Stats */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "32px",
            opacity: heroVisible ? 1 : 0, transition: "opacity 0.8s ease 0.5s",
          }}>
            {/* Profile image placeholder */}
            <div style={{ position: "relative", animation: "float 6s ease-in-out infinite" }}>
              <div style={{
                width: "220px", height: "220px",
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                background: `linear-gradient(135deg, ${accent}30, ${accent2}20)`,
                border: `2px solid ${accent}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                <img src="/gautam.png" alt="Gautam" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `<span style="font-family:'Playfair Display',serif;font-size:72px;font-weight:900;color:${accent};opacity:0.8">GS</span>`;
                  }}
                />
              </div>
              {/* Spinning ring */}
              <svg style={{ position: "absolute", inset: "-20px", animation: "spin-slow 20s linear infinite" }} width="260" height="260" viewBox="0 0 260 260">
                <circle cx="130" cy="130" r="120" fill="none" stroke={`${accent}30`} strokeWidth="1" strokeDasharray="6 12" />
              </svg>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "20px" }}>
              {[["5+", "Years Exp."], ["30+", "Projects"], ["100%", "Delivery"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 900, color: accent }}>{num}</div>
                  <div style={{ fontSize: "11px", color: sub, textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social links */}
        <div style={{
          position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%)",
          display: "flex", flexDirection: "column", gap: "16px",
          opacity: heroVisible ? 1 : 0, transition: "opacity 0.8s ease 1s",
        }}>
          {[
            { icon: "⌂", href: "https://github.com/GautamSharma-coder", label: "gh" },
            { icon: "in", href: "https://linkedin.com", label: "li" },
            { icon: "✉", href: "mailto:gautamksharma45@gmail.com", label: "em" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              style={{
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "50%",
                border: `1px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                fontSize: "12px", fontWeight: 700,
                color: sub,
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; e.currentTarget.style.color = sub; }}
            >
              {icon}
            </a>
          ))}
          <div style={{ width: "1px", height: "60px", background: `linear-gradient(to bottom, ${accent}50, transparent)`, margin: "0 auto" }} />
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: heroVisible ? 0.5 : 0, transition: "opacity 0.8s ease 1.2s",
        }}>
          <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: sub }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${sub}, transparent)`, animation: "float 2s ease-in-out infinite" }} />
        </div>
      </header>

      {/* MARQUEE TICKER */}
      <div style={{
        overflow: "hidden",
        borderTop: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        borderBottom: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        padding: "16px 0",
        background: d ? "#0d1220" : "#eae8e3",
      }}>
        <div style={{ display: "flex", gap: "0", animation: "marquee 20s linear infinite", width: "max-content" }}>
          {[...Array(6)].flatMap(() =>
            ["React", "Node.js", "TypeScript", "Python", "MongoDB", "AWS", "Full Stack", "Freelancer", "Web Dev"].map((s, i) => (
              <span key={s + i} style={{ padding: "0 28px", fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: sub }}>
                {s} <span style={{ color: accent, marginLeft: "16px" }}>✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "80px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: accent, letterSpacing: "2px" }}>01</span>
              <div style={{ height: "1px", width: "60px", background: accent }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-2px" }}>About Me</h2>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <AnimSection delay={0.1}>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: sub, marginBottom: "32px" }}>
                I'm a passionate full-stack developer with <strong style={{ color: text }}>5+ years of experience</strong> building web applications that are both beautiful and performant.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: sub, marginBottom: "40px" }}>
                I specialize in React, Node.js, and modern web technologies. I love transforming complex problems into elegant, user-friendly solutions.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[["Email", "gautamksharma45@gmail.com"], ["Location", "India"], ["Availability", "Freelance / Full-time"], ["Experience", "5+ Years"]].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: accent, marginBottom: "4px" }}>{k}</div>
                    <div style={{ fontSize: "14px", color: text, fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
            </AnimSection>

            <AnimSection delay={0.2}>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: accent }}>Skills & Expertise</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "24px" }}>
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} accent={accent} d={d} delay={i * 0.05} />
                ))}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "120px 6%", background: d ? "#0d1220" : "#eae8e3" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: accent, letterSpacing: "2px" }}>02</span>
                <div style={{ height: "1px", width: "60px", background: accent }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-2px" }}>Projects</h2>
              </div>
              <a href="#" style={{ fontSize: "13px", color: accent, fontWeight: 600, letterSpacing: "0.5px" }}>View All ↗</a>
            </div>
          </AnimSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {PROJECTS.map((p, i) => (
              <AnimSection key={p.title} delay={i * 0.1}>
                <ProjectRow project={p} accent={accent} d={d} surface={surface} text={text} sub={sub} setCursorHover={setCursorHover} />
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "80px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: accent, letterSpacing: "2px" }}>03</span>
              <div style={{ height: "1px", width: "60px", background: accent }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-2px" }}>Writing</h2>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
            {BLOG_POSTS.map((post, i) => (
              <AnimSection key={post.title} delay={i * 0.1}>
                <BlogCard post={post} d={d} accent={accent} surface={surface} text={text} sub={sub} setCursorHover={setCursorHover} />
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "120px 6%", background: d ? "#0d1220" : "#eae8e3" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-2px", marginBottom: "16px" }}>
                What People Say
              </h2>
              <p style={{ color: sub, fontSize: "16px" }}>Kind words from clients and collaborators</p>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {TESTIMONIALS.map((t, i) => (
              <AnimSection key={t.name} delay={i * 0.1}>
                <div className="tilt-card" style={{
                  background: surface,
                  border: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                  borderRadius: "20px",
                  padding: "36px",
                }}>
                  <div style={{ fontSize: "36px", color: accent, marginBottom: "20px", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</div>
                  <p style={{ color: sub, lineHeight: "1.7", marginBottom: "28px", fontSize: "15px" }}>{t.content}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      background: `linear-gradient(135deg, ${accent}40, ${accent2}30)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontSize: "13px", color: accent,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "14px" }}>{t.name}</div>
                      <div style={{ fontSize: "12px", color: sub }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "80px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: accent, letterSpacing: "2px" }}>04</span>
              <div style={{ height: "1px", width: "60px", background: accent }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-2px" }}>Experience</h2>
            </div>
          </AnimSection>

          <div style={{ position: "relative", paddingLeft: "32px" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: `linear-gradient(to bottom, ${accent}, ${accent}20)` }} />
            {EXPERIENCE.map((exp, i) => (
              <AnimSection key={exp.company} delay={i * 0.15}>
                <div style={{ marginBottom: "60px", position: "relative" }}>
                  <div style={{
                    position: "absolute", left: "-40px", top: "6px",
                    width: "16px", height: "16px", borderRadius: "50%",
                    border: `2px solid ${accent}`,
                    background: d ? "#0a0e1a" : "#f5f5f0",
                  }} />
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "22px", fontWeight: 700 }}>{exp.role}</h3>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: accent }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: "14px", color: accent, fontWeight: 600, marginBottom: "12px" }}>{exp.company}</div>
                  <p style={{ color: sub, lineHeight: "1.7" }}>{exp.description}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 6%", background: d ? "#0d1220" : "#eae8e3" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-3px", lineHeight: 0.95, marginBottom: "24px" }}>
                Let's Work<br />
                <span style={{ color: "transparent", WebkitTextStroke: `2px ${accent}` }}>Together.</span>
              </h2>
              <p style={{ color: sub, fontSize: "17px" }}>Have a project in mind? I'd love to hear about it.</p>
            </div>
          </AnimSection>

          <AnimSection delay={0.2}>
            <div style={{
              background: surface,
              border: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              borderRadius: "24px",
              padding: "48px",
            }}>
              <ContactForm accent={accent} d={d} surface={surface} text={text} sub={sub} setCursorHover={setCursorHover} />
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "60px 6%",
        borderTop: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px",
      }}>
        <div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "22px", color: accent }}>Gautam Sharma</span>
          <p style={{ color: sub, fontSize: "13px", marginTop: "4px" }}>Full Stack Developer & Freelancer</p>
        </div>
        <p style={{ color: sub, fontSize: "13px" }}>© 2024 Gautam Sharma. Crafted with care.</p>
        <div style={{ display: "flex", gap: "12px" }}>
          {[["GitHub", "https://github.com/GautamSharma-coder"], ["LinkedIn", "https://linkedin.com"], ["Email", "mailto:gautamksharma45@gmail.com"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: "13px", color: sub, transition: "color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.color = accent}
              onMouseOut={(e) => e.currentTarget.style.color = sub}
            >{label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function SkillBar({ skill, accent, d, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600 }}>{skill.name}</span>
        <span style={{ fontSize: "12px", color: accent, fontFamily: "'DM Mono', monospace" }}>{skill.level}%</span>
      </div>
      <div style={{ height: "3px", background: d ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", borderRadius: "2px", overflow: "hidden" }}>
        <div className="skill-bar-fill" style={{ width: inView ? `${skill.level}%` : "0%", transitionDelay: `${delay}s` }} />
      </div>
    </div>
  );
}

function ProjectRow({ project, accent, d, surface, text, sub, setCursorHover }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.link}
      className="project-card"
      onMouseEnter={() => { setHovered(true); setCursorHover(true); }}
      onMouseLeave={() => { setHovered(false); setCursorHover(false); }}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        alignItems: "center",
        gap: "40px",
        padding: "32px 40px",
        background: hovered ? surface : "transparent",
        border: `1px solid ${hovered ? (d ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)") : "transparent"}`,
        borderRadius: "16px",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <span className="project-num" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "42px", fontWeight: 900,
        color: hovered ? accent : (d ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"),
        transition: "color 0.3s",
        lineHeight: 1,
      }}>{project.num}</span>

      <div>
        <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>{project.title}</h3>
        <p style={{ color: sub, fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>{project.description}</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "4px 12px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              background: `${accent}18`,
              color: accent,
              border: `1px solid ${accent}30`,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{
        width: "48px", height: "48px",
        borderRadius: "50%",
        border: `1.5px solid ${hovered ? accent : (d ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)")}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "18px",
        transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
        transition: "all 0.3s ease",
        color: hovered ? accent : sub,
      }}>↗</div>
    </a>
  );
}

function BlogCard({ post, d, accent, surface, text, sub, setCursorHover }) {
  return (
    <a
      href="#"
      className="tilt-card"
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}
      style={{
        display: "block",
        background: surface,
        border: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        borderRadius: "20px",
        padding: "32px",
        transition: "transform 0.3s ease, box-shadow 0.3s",
      }}
      onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 20px 60px ${d ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}`; }}
      onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: accent }}>{post.date}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: sub }}>{post.readTime} read</span>
      </div>
      <h3 style={{ fontSize: "20px", fontWeight: 700, lineHeight: "1.3", marginBottom: "14px" }}>{post.title}</h3>
      <p style={{ color: sub, fontSize: "14px", lineHeight: "1.7", marginBottom: "24px" }}>{post.preview}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: accent, fontSize: "13px", fontWeight: 600 }}>
        Read Article <span style={{ transition: "transform 0.2s" }}>→</span>
      </div>
    </a>
  );
}

function ContactForm({ accent, d, surface, text, sub, setCursorHover }) {
  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: `1.5px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    background: d ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    color: text,
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", color: accent, marginBottom: "8px" }}>Name</label>
          <input type="text" placeholder="Gautam Sharma" style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = accent}
            onBlur={(e) => e.target.style.borderColor = d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", color: accent, marginBottom: "8px" }}>Email</label>
          <input type="email" placeholder="hello@example.com" style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = accent}
            onBlur={(e) => e.target.style.borderColor = d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
          />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", color: accent, marginBottom: "8px" }}>Subject</label>
        <input type="text" placeholder="Project Inquiry" style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = accent}
          onBlur={(e) => e.target.style.borderColor = d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
        />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", color: accent, marginBottom: "8px" }}>Message</label>
        <textarea placeholder="Tell me about your project..." rows={5} style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => e.target.style.borderColor = accent}
          onBlur={(e) => e.target.style.borderColor = d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
        />
      </div>
      <button
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        style={{
          background: accent,
          color: "#0a0e1a",
          border: "none",
          padding: "16px 40px",
          borderRadius: "100px",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          cursor: "pointer",
          alignSelf: "flex-start",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = `0 0 40px ${accent}60`; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        Send Message ↗
      </button>
    </div>
  );
}