import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export default function HeroPoster() {
  const marqueeItems = [
    "AWS",
    "FULL STACK",
    "FREELANCER",
    "WEB DEV",
    "CREATIVE",
    "REACT",
    "NODE.JS",
    "TYPESCRIPT",
    "PYTHON",
  ];

  return (
    <section className="modern-hero" id="hero" aria-labelledby="hero-title">
      {/* ── Ambient Glow Orbs & Background Accents ── */}
      <div className="hero-ambient-glow">
        <div className="hero-glow-terracotta" aria-hidden="true" />
        <div className="hero-glow-charcoal" aria-hidden="true" />
        <div className="hero-glow-peach" aria-hidden="true" />
        <div className="hero-bg-ring" aria-hidden="true" />
      </div>

      {/* Scattered sparkle stars */}
      <span className="hero-star hero-star-1" aria-hidden="true">✦</span>
      <span className="hero-star hero-star-2" aria-hidden="true">✦</span>
      <span className="hero-star hero-star-3" aria-hidden="true">✦</span>
      <span className="hero-star hero-star-4" aria-hidden="true">✦</span>

      <div className="hero-container">
        {/* ═══ LEFT FROSTED GLASS CARD ═══ */}
        <div className="hero-left-card">
          {/* Top Status Pill */}
          <div className="hero-status-pill">
            <span className="hero-status-pulse" />
            <span>Available for select projects</span>
          </div>

          {/* Kicker Greeting */}
          <p className="hero-greeting">Hello, I'm Gautam Sharma</p>

          {/* Headline */}
          <h1 id="hero-title" className="hero-headline">
            I build thoughtful
            <span className="hero-accent-block">
              digital
              <br />
              experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-summary">
            Full-stack developer turning ambitious ideas into polished, useful products
            — from the first sketch to the final line of code.
          </p>

          {/* Action Buttons */}
          <div className="hero-btn-group">
            <a className="hero-btn-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} className="hero-btn-arrow" />
            </a>

            <div className="hero-secondary-wrap">
              <a className="hero-btn-secondary" href="#contact">
                Let's talk <Mail size={16} />
              </a>
              {/* Decorative sparkle next to secondary button */}
              <div className="hero-btn-sparkle" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Socials / Location Row */}
          <div className="hero-footer-meta" aria-label="Social links & location">
            <a
              href="https://github.com/GautamSharma-coder"
              target="_blank"
              rel="noreferrer"
              className="hero-social-bubble"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hero-social-bubble"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <span className="hero-meta-divider" />
            <span className="hero-location-text">Based in India · Working worldwide</span>
          </div>
        </div>

        {/* ═══ RIGHT PHOTO PRESENTATION WITH 3D BLENDER ELEMENTS ═══ */}
        <div className="hero-visual-showcase">
          {/* Layered Card Stack (Background card for depth) */}
          <div className="hero-stack-underlayer" aria-hidden="true" />

          {/* Main Polaroid Photo Card */}
          <div className="hero-photo-frame">
            {/* Frame Top Header */}
            <div className="hero-frame-header">
              <span className="hero-frame-tag">
                <Sparkles size={13} className="hero-sparkle-icon" /> CREATIVE DEVELOPER
              </span>
              <span className="hero-frame-index">01 / 04</span>
            </div>

            {/* Photo Container */}
            <div className="hero-photo-wrapper">
              <div className="hero-photo-bg-glow" />
              <img
                src="/gk1.png"
                alt="Gautam Sharma - Creative Developer"
                className="hero-portrait-img"
              />
            </div>

            {/* Frame Bottom Caption */}
            <div className="hero-frame-footer">
              <div className="hero-footer-info">
                <span className="hero-craft-label">COMMUNITY CRAFTING</span>
                <strong className="hero-craft-title">Ideas into interfaces</strong>
              </div>
              <a href="#projects" className="hero-frame-arrow" aria-label="View project">
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Floating Chip Top-Right: Design minded Developer */}
          <div className="hero-chip-design">
            <span className="hero-chip-flower">✳</span>
            <div className="hero-chip-text">
              <span>Design minded</span>
              <strong>Developer</strong>
            </div>
          </div>

          {/* Floating Chip Bottom-Left: Open to opportunities */}
          <div className="hero-chip-opportunity">
            <span className="hero-chip-green-dot" />
            <span>Open to opportunities</span>
          </div>

          {/* 3 Accent burst lines at top-right */}
          <div className="hero-burst-lines" aria-hidden="true">
            <span className="burst-line burst-1" />
            <span className="burst-line burst-2" />
            <span className="burst-line burst-3" />
          </div>

          {/* ── 3D BLENDER RENDERED ELEMENTS ── */}
          {/* 1. Top-Left Floating Glass Torus */}
          <div className="hero-3d-element hero-3d-torus-top" aria-hidden="true">
            <img src="/glass_torus_top.png" alt="" />
          </div>

          {/* 2. Lower-Right Floating Glass Torus */}
          <div className="hero-3d-element hero-3d-torus-right" aria-hidden="true">
            <img src="/glass_torus_right.png" alt="" />
          </div>

          {/* 3. Bottom-Left Floating Glass Sphere */}
          <div className="hero-3d-element hero-3d-sphere-left" aria-hidden="true">
            <img src="/glass_sphere.png" alt="" />
          </div>

          {/* 4. Right Floating Glass Capsule */}
          <div className="hero-3d-element hero-3d-capsule-right" aria-hidden="true">
            <img src="/glass_capsule.png" alt="" />
          </div>

          {/* Bottom Card Meta: 05 - 2026 & Dots */}
          <div className="hero-card-meta-bottom">
            <span className="hero-meta-date">05 — 2026</span>
            <div className="hero-meta-dots" aria-hidden="true">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
        <svg
          className="hero-scroll-curved-arrow"
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 10 C 14 8, 22 14, 20 24" />
          <path d="M15 22 L 20 25 L 24 20" />
        </svg>
      </div>

      {/* ═══ BOTTOM FLOATING GLASS DOCK / MARQUEE ═══ */}
      <div className="hero-dock-wrap">
        <div className="hero-dock-pill">
          <div className="hero-dock-track">
            {marqueeItems.concat(marqueeItems).map((tech, idx) => (
              <React.Fragment key={`${tech}-${idx}`}>
                <span className="hero-dock-tag">{tech}</span>
                <span className="hero-dock-spark">✦</span>
                <span className="hero-dock-sep">|</span>
              </React.Fragment>
            ))}
          </div>
          <div className="hero-dock-corner-star" aria-hidden="true">
            ✦
          </div>
        </div>
      </div>
    </section>
  );
}
