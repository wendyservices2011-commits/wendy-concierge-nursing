"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " navScrolled" : ""}`}>
        <Link href="/" className="logo">
          <span>Wendy Concierge Nursing</span>
          <small>Private Duty RN · Palm Beach County</small>
        </Link>

        <nav>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/consultation" className="navCta">
            Schedule a Consultation
          </Link>
        </nav>

        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/consultation" className="mobileMenuCta" onClick={() => setOpen(false)}>
            Schedule a Consultation
          </Link>
        </div>
      )}
    </>
  );
}
