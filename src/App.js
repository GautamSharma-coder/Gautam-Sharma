import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import useGsapAnimations from "./hooks/useGsapAnimations";

import Navbar from "./components/Navbar";
import HeroPoster from "./components/Hero";
import Footer from "./components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

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
    title: "Festiverse'26",
    description:
      "Digital infrastructure platform for UDAAN Cultural Club's annual festival, covering event discovery, student registration, secure payments, UTR verification, and coordinator operations.",
    tech: ["React", "Node.js", "Payment Gateway", "Admin Dashboard"],
    link: "https://udaangecsamastipur.in/",
    status: "Live",
    num: "01",
  },
  {
    title: "Bihar Yaatra",
    description:
      "AI-powered Bihar tourism companion with personalized itineraries, AR heritage overlays, village homestay bookings, real-time travel updates, and dynamic destination content.",
    tech: ["AI", "AR", "React", "Full Stack"],
    link: "https://biharyaatra.com/",
    status: "In Development",
    num: "02",
  },
  {
    title: "LaunchLog",
    description:
      "Developer-centric documentation platform for indie hackers and SaaS founders to track public progress, organize launch narratives, and share transparent product updates.",
    tech: ["React", "TailwindCSS", "SaaS", "Documentation"],
    link: "#!",
    status: "In Development",
    num: "03",
  },
  {
    title: "Elite Associate",
    description:
      "Responsive business website built with a clean front-end stack, focused on clear service presentation, fast loading, and polished user experience.",
    tech: ["HTML", "JavaScript", "TailwindCSS"],
    link: "https://eliteassociates.vercel.app/",
    status: "Live",
    num: "04",
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

const MARQUEE_ITEMS = [
  "React", "Node.js", "TypeScript", "Python", "MongoDB",
  "AWS", "Full Stack", "Freelancer", "Web Dev", "Creative"
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── MAIN APP ──────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const rootRef = useRef(null);
  useGsapAnimations(rootRef);

  return (
    <div ref={rootRef} style={{ background: "#f5ede0", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Global font-face injection (avoids CRA css-loader path issues) */}
      <style>{`
        @font-face {
          font-family: "BrushDisplay";
          src: url("/Higher Jump.ttf") format("truetype");
          font-weight: 900;
          font-display: swap;
        }
        @font-face {
          font-family: "Rckybilly";
          src: url("/Rockybilly.ttf") format("truetype");
          font-weight: 700;
          font-display: swap;
        }
      `}</style>

      {/* Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* SVG Brush Filter (shared) */}
      <svg
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="brushFilter" x="-4%" y="-4%" width="108%" height="108%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025 0.1"
              numOctaves="4"
              seed="9"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="7"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <Navbar />
      <HeroPoster />

      {/* ═══ MARQUEE TICKER ═══ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(6)].flatMap((_, rep) =>
            MARQUEE_ITEMS.map((item, i) => (
              <span className="marquee-item" key={`${rep}-${i}`}>
                {item} <span className="marquee-dot">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="section">
        <div className="section-inner">
          <SectionHeader num="01" title="About Me" subtitle="who I am" />

          <div className="grid-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
            >
              <p style={{
                fontSize: "18px", lineHeight: "1.9", color: "#7a6b5a",
                marginBottom: "28px", fontFamily: "'Georgia', serif"
              }}>
                I'm a passionate full-stack developer with{" "}
                <strong style={{ color: "#2a1a0e" }}>5+ years of experience</strong>{" "}
                building web applications that are both beautiful and performant.
              </p>
              <p style={{
                fontSize: "16px", lineHeight: "1.9", color: "#7a6b5a",
                marginBottom: "40px", fontFamily: "'Georgia', serif"
              }}>
                {"I specialize in React, Node.js, and modern web technologies. I love transforming complex problems into elegant, user-friendly solutions."}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "24px",
              }}>
                {[
                  ["Email", "gautamksharma45@gmail.com"],
                  ["Location", "India"],
                  ["Availability", "Freelance / Full-time"],
                  ["Experience", "5+ Years"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="about-detail-label">{k}</div>
                    <div className="about-detail-value">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.25}
            >
              <span style={{
                fontSize: "12px", textTransform: "uppercase",
                letterSpacing: "2px", color: "#9b1a1a", fontWeight: 600,
              }}>
                {"Skills & Expertise"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "28px" }}>
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.06} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <SectionHeader num="02" title="Projects" subtitle="selected works" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {PROJECTS.map((p) => (
              <motion.div key={p.title} variants={staggerChild}>
                <ProjectRow project={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section id="blog" className="section">
        <div className="section-inner">
          <SectionHeader num="03" title="Writing" subtitle="thoughts & insights" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {BLOG_POSTS.map((post) => (
              <motion.div key={post.title} variants={staggerChild}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section section-alt">
        <div className="section-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              {"What People Say"}
            </h2>
            <p style={{
              color: "#7a6b5a", fontSize: "16px",
              fontFamily: "'Georgia', serif", fontStyle: "italic"
            }}>
              {"Kind words from clients and collaborators"}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={staggerChild}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.content}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="section">
        <div className="section-inner">
          <SectionHeader num="04" title="Experience" subtitle="my journey" />

          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i * 0.15}
              >
                <div className="timeline-dot" />
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section section-alt">
        <div className="section-inner" style={{ maxWidth: "800px" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h2 style={{
              fontFamily: "'BrushDisplay', 'Playfair Display', serif",
              fontSize: "clamp(40px, 7vw, 86px)",
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              marginBottom: "24px",
              color: "#2a1a0e",
            }}>
              {"Let's Work"}<br />
              <span style={{
                color: "transparent",
                WebkitTextStroke: "2px #9b1a1a",
              }}>
                {"Together."}
              </span>
            </h2>
            <p style={{
              color: "#7a6b5a", fontSize: "17px",
              fontFamily: "'Georgia', serif", fontStyle: "italic"
            }}>
              {"Have a project in mind? I'd love to hear about it."}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            style={{
              background: "#f5ede0",
              border: "1px solid rgba(155, 26, 26, 0.1)",
              borderRadius: "24px",
              padding: "48px 6%",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function SectionHeader({ num, title, subtitle }) {
  return (
    <motion.div
      className="section-header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="section-num">{num}</span>
      <div className="section-line" />
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <div className="section-subtitle">{subtitle}</div>}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, delay }) {
  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: delay + 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);
  const statusClass = project.status === "Live" ? "status-live" : "status-dev";

  return (
    <a
      href={project.link}
      target={project.link.startsWith("http") ? "_blank" : undefined}
      rel={project.link.startsWith("http") ? "noreferrer" : undefined}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(155, 26, 26, 0.04)" : "transparent",
        borderColor: hovered ? "rgba(155, 26, 26, 0.12)" : "transparent",
      }}
    >
      <span className="project-num">{project.num}</span>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
          <h3 className="project-title" style={{ marginBottom: 0 }}>{project.title}</h3>
          <span className={`project-status ${statusClass}`}>{project.status}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-arrow">↗</div>
    </a>
  );
}

function BlogCard({ post }) {
  return (
    <a href="#!" className="blog-card">
      <div className="blog-meta">
        <span className="blog-date">{post.date}</span>
        <span className="blog-time">{post.readTime} read</span>
      </div>
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-preview">{post.preview}</p>
      <div className="blog-read">
        {"Read Article "}<span>→</span>
      </div>
    </a>
  );
}

function ContactForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div className="contact-grid">
        <div>
          <label className="form-label">{"Name"}</label>
          <input type="text" placeholder="Your Name" className="form-input" />
        </div>
        <div>
          <label className="form-label">{"Email"}</label>
          <input type="email" placeholder="hello@example.com" className="form-input" />
        </div>
      </div>
      <div>
        <label className="form-label">{"Subject"}</label>
        <input type="text" placeholder="Project Inquiry" className="form-input" />
      </div>
      <div>
        <label className="form-label">{"Message"}</label>
        <textarea
          placeholder="Tell me about your project..."
          rows={5}
          className="form-input"
          style={{ resize: "vertical" }}
        />
      </div>
      <motion.button
        className="btn-primary"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        style={{ alignSelf: "flex-start" }}
      >
        {"Send Message ↗"}
      </motion.button>
    </div>
  );
}
