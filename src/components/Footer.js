import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/GautamSharma-coder" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gautam-sharma-a7b364289/" },
  { label: "Email", href: "mailto:gautamksharma45@gmail.com" },
];

export default function Footer() {
  return (
    <motion.footer
      className="editorial-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="footer-logo">Gautam Sharma</div>
        <p className="footer-sub">Creative Developer & Designer</p>
      </div>

      <p className="footer-copy">© 2024 Gautam Sharma — Crafted with care.</p>

      <div className="footer-links">
        {FOOTER_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="footer-link"
          >
            {label}
          </a>
        ))}
      </div>
    </motion.footer>
  );
}
