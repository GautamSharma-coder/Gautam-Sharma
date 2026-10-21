import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

// ─── 3D GLASS ORNAMENT COMPONENTS ─────────────────────────────────────────────

function GlassTorusTop() {
  return (
    <div className="glass-ornament glass-torus-top" aria-hidden="true">
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="torusShadow" x="-25%" y="-25%" width="150%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="9" />
            <feOffset dx="0" dy="14" />
            <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="torusGlassGrad" x1="20" y1="15" x2="130" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
            <stop offset="25%" stopColor="#f7ece3" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#e8d2c2" stopOpacity="0.22" />
            <stop offset="85%" stopColor="#f5e4d8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="outerRimGlow" x1="30" y1="10" x2="120" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#d5bba8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="innerRimGlow" x1="50" y1="35" x2="100" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8c6d58" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="75" cy="80" rx="54" ry="18" fill="rgba(80, 50, 35, 0.12)" filter="blur(8px)" />

        {/* Torus body */}
        <path
          d="M 75 14 C 112 14 140 28 140 54 C 140 80 112 94 75 94 C 38 94 10 80 10 54 C 10 28 38 14 75 14 Z M 75 34 C 55 34 38 43 38 54 C 38 65 55 74 75 74 C 95 74 112 65 112 54 C 112 43 95 34 75 34 Z"
          fill="url(#torusGlassGrad)"
          fillRule="evenodd"
          stroke="url(#outerRimGlow)"
          strokeWidth="1.6"
          filter="url(#torusShadow)"
        />

        {/* Specular Glint Arc on Top Outer Edge */}
        <path
          d="M 28 42 C 40 24 95 20 122 36"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.92"
        />

        {/* Secondary Glint Arc on Inner Lower Edge */}
        <path
          d="M 52 64 C 65 71 85 71 98 64"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Hole inner rim */}
        <ellipse cx="75" cy="54" rx="28" ry="14" stroke="url(#innerRimGlow)" strokeWidth="1.2" fill="none" opacity="0.75" />
      </svg>
    </div>
  );
}

function GlassTorusBottom() {
  return (
    <div className="glass-ornament glass-torus-bottom" aria-hidden="true">
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="torusVertGrad" x1="15" y1="15" x2="105" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#f3e5db" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#dfcbbe" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.78" />
          </linearGradient>
          <linearGradient id="torusVertStroke" x1="20" y1="10" x2="100" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d5bba8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <ellipse cx="60" cy="115" rx="36" ry="14" fill="rgba(60, 40, 30, 0.14)" filter="blur(7px)" />

        <path
          d="M 60 12 C 86 12 106 36 106 68 C 106 100 86 124 60 124 C 34 124 14 100 14 68 C 14 36 34 12 60 12 Z M 60 36 C 45 36 34 50 34 68 C 34 86 45 100 60 100 C 75 100 86 86 86 68 C 86 50 75 36 60 36 Z"
          fill="url(#torusVertGrad)"
          fillRule="evenodd"
          stroke="url(#torusVertStroke)"
          strokeWidth="1.5"
        />

        <path
          d="M 28 42 C 34 22 70 18 88 32"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 44 88 C 54 96 68 96 78 88"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}

export default function HeroPoster() {
  return (
    <section className="modern-hero" id="hero" aria-labelledby="hero-title">
      {/* ── AMBIENT GLOW ORBS & BACKGROUND SHAPES ── */}
      <div className="hero-mesh-bg" aria-hidden="true">
        {/* Top-right vibrant warm terracotta-peach orb */}
        <div className="hero-glow-orb orb-warm" />
        {/* Deep dark charcoal/slate shadow cloud */}
        <div className="hero-glow-orb orb-dark" />
        {/* Center warm radiance */}
        <div className="hero-glow-orb orb-center" />
        {/* Top-left aura ring */}
        <div className="hero-aura-ring" />

        {/* Scattered background starburst sparkles */}
        <span className="hero-bg-sparkle sparkle-pos-1">✦</span>
        <span className="hero-bg-sparkle sparkle-pos-2">✦</span>
        <span className="hero-bg-sparkle sparkle-pos-3">✧</span>
      </div>

      <div className="hero-inner">
        {/* ═══ LEFT FROSTED GLASS CARD CONTAINER ═══ */}
        <div className="hero-glass-panel">
          {/* Status Pill */}
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <span>Available for select projects</span>
          </div>

          {/* Greeting */}
          <p className="hero-kicker">Hello, I’m Gautam Sharma</p>

          {/* Main Headline */}
          <h1 id="hero-title">
            I build thoughtful<br />
            <span className="hero-highlight">digital<br />experiences.</span>
          </h1>

          {/* Paragraph */}
          <p className="hero-description">
            Full-stack developer turning ambitious ideas into polished, useful
            products — from the first sketch to the final line of code.
          </p>

          {/* Actions Button Row */}
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="hero-button hero-button-secondary" href="#contact">
              Let’s talk <Mail size={16} />
            </a>
            {/* Hand-drawn style decorative sparkles */}
            <span className="hero-btn-sparkles" aria-hidden="true">✧ ✦</span>
          </div>

          {/* Meta / Social Row */}
          <div className="hero-socials" aria-label="Social links">
            <a
              href="https://github.com/GautamSharma-coder"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              aria-label="GitHub"
            >
              {/* Location pin / marker icon like in image */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              aria-label="LinkedIn"
            >
              <span className="hero-in-text">in</span>
            </a>
            <span className="hero-social-rule" />
            <span className="hero-location-text">Based in India · Working worldwide</span>
          </div>
        </div>

        {/* ═══ RIGHT PHOTO SHOWCASE & 3D GLASS COMPOSITION ═══ */}
        <div className="hero-visual">
          {/* Background Layered Frosted Card (creates depth stack) */}
          <div className="hero-card-layer-back" aria-hidden="true" />

          {/* 3D Floating Glass Toruses & Droplets */}
          <GlassTorusTop />
          <GlassTorusBottom />
          {/* Glass Bubble / Sphere */}
          <div className="glass-ornament glass-sphere" aria-hidden="true">
            <div className="glass-sphere-body" />
          </div>
          {/* Glass Vertical Capsule */}
          <div className="glass-ornament glass-capsule" aria-hidden="true" />

          {/* Sparkle burst tick marks above top right */}
          <div className="sparkle-burst" aria-hidden="true">
            <span className="burst-tick tick-1" />
            <span className="burst-tick tick-2" />
            <span className="burst-tick tick-3" />
          </div>

          {/* Foreground Main Photo Card */}
          <div className="hero-glass-card">
            {/* Top Bar inside card */}
            <div className="hero-card-top">
              <span>
                <Sparkles size={13} /> CREATIVE DEVELOPER
              </span>
              <span>01 / 04</span>
            </div>

            {/* Photo Container with warm glow backdrop */}
            <div className="hero-image-wrap">
              <img src="/gk1.png" alt="Gautam Sharma" />
            </div>

            {/* Bottom Bar inside card */}
            <div className="hero-card-bottom">
              <div>
                <span className="hero-card-label">CURRENTLY CRAFTING</span>
                <strong>Ideas into interfaces</strong>
              </div>
              <span className="hero-card-arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>

          {/* Floating Chip Top-Right: Design minded Developer */}
          <div className="hero-float-chip hero-chip-top">
            <span className="hero-chip-icon">✳</span>
            <div>
              <span className="hero-chip-sub">Design minded</span>
              <strong className="hero-chip-title">Developer</strong>
            </div>
          </div>

          {/* Floating Chip Lower-Left: Open to opportunities */}
          <div className="hero-float-chip hero-chip-bottom">
            <span className="hero-chip-pulse" />
            <span>Open to opportunities</span>
          </div>

          {/* Bottom Index & Pagination Dots below card */}
          <div className="hero-visual-footer">
            <div className="hero-visual-index">05 — 2026</div>
            <div className="hero-pagination-dots" aria-hidden="true">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SCROLL TO EXPLORE WITH PLAYFUL CURVED ARROW ═══ */}
      <a className="hero-scroll" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6 C5 15 10 19 19 19" stroke="#9e3b2e" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 14 L19 19 L14 24" stroke="#9e3b2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
