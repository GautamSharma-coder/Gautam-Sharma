import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function HeroPoster() {
  return (
    <section className="modern-hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="hero-status-dot" /> Available for select projects</div>
          <p className="hero-kicker">Hello, I’m Gautam Sharma</p>
          <h1 id="hero-title">I build thoughtful<br /><span>digital experiences.</span></h1>
          <p className="hero-description">Full-stack developer turning ambitious ideas into polished, useful products — from the first sketch to the final line of code.</p>
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="hero-button hero-button-secondary" href="#contact">Let’s talk <Mail size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/GautamSharma-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <span className="hero-social-rule" />
            <span>Based in India · Working worldwide</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glass-card">
            <div className="hero-card-top"><span><Sparkles size={14} /> CREATIVE DEVELOPER</span><span>01 / 04</span></div>
            <div className="hero-image-wrap"><img src="/gk1.png" alt="Gautam Sharma" /></div>
            <div className="hero-card-bottom"><div><span className="hero-card-label">CURRENTLY CRAFTING</span><strong>Ideas into interfaces</strong></div><span className="hero-card-arrow"><ArrowUpRight size={19} /></span></div>
          </div>
          <div className="hero-float-chip hero-chip-top"><span className="hero-chip-icon">✳</span><span>Design minded<br /><strong>Developer</strong></span></div>
          <div className="hero-float-chip hero-chip-bottom"><span className="hero-chip-pulse" /> Open to opportunities</div>
          <div className="hero-visual-index">GS<span>—</span>2026</div>
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}
