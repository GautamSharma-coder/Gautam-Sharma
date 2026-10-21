import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapAnimations
 * Attach to the root wrapper ref. Sets up all GSAP ScrollTrigger animations
 * for the portfolio sections once the DOM is ready.
 */
export default function useGsapAnimations(rootRef) {
  const ctx = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    // Create a GSAP context scoped to the root so cleanup is automatic
    ctx.current = gsap.context(() => {
      // ─── HERO PARALLAX ──────────────────────────────────────────────
      const heroSection = document.querySelector(".poster-hero");
      if (heroSection) {
        const bgText = heroSection.querySelector(".poster-bg-text");
        const photo = heroSection.querySelector(".poster-photo");
        const role = heroSection.querySelector(".poster-role");

        if (bgText) {
          gsap.to(bgText, {
            yPercent: -30,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        if (photo) {
          gsap.to(photo, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (role) {
          gsap.to(role, {
            x: -60,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "60% top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      // ─── MARQUEE SCROLL-VELOCITY ────────────────────────────────────
      const marqueeTrack = document.querySelector(".marquee-track");
      if (marqueeTrack) {
        // Speed up marquee when scrolling fast
        gsap.to(marqueeTrack, {
          x: "-=300",
          ease: "none",
          scrollTrigger: {
            trigger: ".marquee-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

      // ─── SECTION HEADERS ────────────────────────────────────────────
      gsap.utils.toArray(".section-header").forEach((header) => {
        const line = header.querySelector(".section-line");
        const num = header.querySelector(".section-num");
        const title = header.querySelector(".section-title");
        const subtitle = header.querySelector(".section-subtitle");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });

        if (num) {
          tl.from(num, {
            opacity: 0,
            x: -20,
            duration: 0.5,
            ease: "power3.out",
          });
        }
        if (line) {
          tl.from(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.8,
              ease: "power3.inOut",
            },
            "-=0.3"
          );
        }
        if (title) {
          tl.from(
            title,
            {
              opacity: 0,
              y: 30,
              skewY: 3,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.5"
          );
        }
        if (subtitle) {
          tl.from(
            subtitle,
            {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }
      });

      // ─── ABOUT SECTION — SPLIT REVEAL ───────────────────────────────
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        // Skill bars — fill on scroll
        const skillFills = aboutSection.querySelectorAll(".skill-fill");
        skillFills.forEach((fill) => {
          // Get the target width from the inline style set by Framer Motion
          // We'll animate via GSAP for a scrub feel
          gsap.from(fill, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: fill,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });
      }

      // ─── PROJECT CARDS — STAGGERED HORIZONTAL SLIDE ─────────────────
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        const cards = projectSection.querySelectorAll(".project-card");
        cards.forEach((card, i) => {
          const direction = i % 2 === 0 ? -1 : 1;
          gsap.from(card, {
            opacity: 0,
            x: 80 * direction,
            rotateY: 4 * direction,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });
      }

      // ─── BLOG CARDS — SCALE + ROTATE REVEAL ─────────────────────────
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        const blogCards = blogSection.querySelectorAll(".blog-card");
        blogCards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            scale: 0.85,
            y: 50,
            rotation: -2 + i * 2,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            delay: i * 0.12,
          });
        });
      }

      // ─── TESTIMONIAL CARDS — 3D TILT REVEAL ─────────────────────────
      const testimonialCards = document.querySelectorAll(".testimonial-card");
      testimonialCards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          rotateX: 15,
          scale: 0.9,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          delay: i * 0.15,
        });
      });

      // ─── EXPERIENCE TIMELINE — LINE DRAW + ITEMS ────────────────────
      const timeline = document.querySelector(".timeline");
      if (timeline) {
        const timelineLine = timeline.querySelector("::before");

        // Animate the pseudo-element via a custom CSS variable
        gsap.fromTo(
          timeline,
          { "--timeline-progress": "0%" },
          {
            "--timeline-progress": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timeline,
              start: "top 70%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );

        const timelineItems = timeline.querySelectorAll(".timeline-item");
        timelineItems.forEach((item, i) => {
          const dot = item.querySelector(".timeline-dot");

          gsap.from(item, {
            opacity: 0,
            x: -60,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });

          if (dot) {
            gsap.from(dot, {
              scale: 0,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          }
        });
      }

      // ─── CONTACT SECTION — DRAMATIC TEXT REVEAL ─────────────────────
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const heading = contactSection.querySelector("h2");
        if (heading) {
          gsap.from(heading, {
            opacity: 0,
            y: 80,
            scale: 0.8,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        const formWrap = contactSection.querySelector(
          '[style*="borderRadius"]'
        );
        if (formWrap) {
          gsap.from(formWrap, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formWrap,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }
      }

      // ─── FOOTER — SLIDE UP ──────────────────────────────────────────
      const footer = document.querySelector(".editorial-footer");
      if (footer) {
        gsap.from(footer, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }

      // Section-wide scrub animations update continuously during scrolling;
      // the one-time reveal animations above keep the page lively at lower cost.
    }, rootRef);

    return () => {
      if (ctx.current) ctx.current.revert();
    };
  }, [rootRef]);
}
