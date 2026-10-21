import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = ["about", "projects", "blog", "experience", "contact"];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const cur = window.scrollY;
        const nextHidden = cur > lastScroll.current && cur > 80 && !mobileOpen;
        lastScroll.current = cur;
        setHidden((value) => value === nextHidden ? value : nextHidden);

        const sections = NAV_LINKS
          .map((id) => document.getElementById(id))
          .filter(Boolean);
        let nextActive = '';
        for (const section of sections) {
          if (cur >= section.offsetTop - 140) nextActive = section.id;
        }
        setActiveSection((value) => value === nextActive ? value : nextActive);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`editorial-nav ${hidden ? 'nav-hidden' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="nav-logo">GS</a>

        {/* Desktop Links */}
        <div className="nav-links">
          {NAV_LINKS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <a href="#contact" className="btn-outline" style={{ padding: '8px 24px', fontSize: '12px' }}>
            Let's Talk
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        {NAV_LINKS.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className={activeSection === s ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            {s}
          </a>
        ))}
      </div>
    </>
  );
}
