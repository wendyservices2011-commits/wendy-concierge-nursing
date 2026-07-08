import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="hpHero">
          <div className="hpHeroBg">
            <Image
              src="/hero-nursing.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
            <div className="hpHeroScrim" />
          </div>
          <div className="hpHeroContent">
            <p className="hpHeroEye">Private Duty RN · Palm Beach County</p>
            <h1>
              One nurse.<br />
              Your home.<br />
              <em>No agency.</em>
            </h1>
          </div>
          <div className="hpHeroFooter">
            <p>
              Skilled nursing care delivered personally — medication management,
              wound care, complex condition monitoring — by a registered nurse
              with fifteen years of experience.
            </p>
            <Link href="/consultation" className="silverButton">
              Schedule a Consultation
            </Link>
          </div>
        </section>

        {/* ── Opening Statement ─────────────────────────────────── */}
        <section className="hpStatement">
          <div className="hpStatementLeft">
            <span className="hpStatCred">Wendy Bien-Aime, RN</span>
            <span className="hpStatCred">Licensed Practical Nurse · 2010</span>
            <span className="hpStatCred">Registered Nurse · 2019</span>
            <span className="hpStatCred">Palm Beach County, FL</span>
          </div>
          <div className="hpStatementRight">
            <p>
              Most people don't realize there's a difference between a caregiver
              and a nurse until something goes wrong. I started this practice
              because I've seen what happens when the person in the room isn't
              qualified to notice — and what's possible when they are.
            </p>
            <p>
              This is a private practice. Not an agency. You get one nurse,
              direct access, and care that never gets handed off to whoever is
              available that day.
            </p>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="hpServices">
          <p className="eyebrow">What I Do</p>
          <div className="hpServiceList">
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Post-Surgical Recovery</span>
              <span className="hpServiceDesc">Wound care, monitoring, discharge follow-through</span>
              <span className="hpServiceArrow">→</span>
            </Link>
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Chronic Disease Management</span>
              <span className="hpServiceDesc">Medication, blood sugar, cardiac observation</span>
              <span className="hpServiceArrow">→</span>
            </Link>
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Complex &amp; Specialty Care</span>
              <span className="hpServiceDesc">G-tube, trach, catheter, IV therapy</span>
              <span className="hpServiceArrow">→</span>
            </Link>
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Palliative &amp; Comfort Care</span>
              <span className="hpServiceDesc">Symptom management, dignity, alongside hospice</span>
              <span className="hpServiceArrow">→</span>
            </Link>
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Overnight Skilled Nursing</span>
              <span className="hpServiceDesc">Continuous RN presence through the night</span>
              <span className="hpServiceArrow">→</span>
            </Link>
            <Link href="/services" className="hpServiceRow">
              <span className="hpServiceName">Family Consultation &amp; Education</span>
              <span className="hpServiceDesc">Translate clinical language into clear answers</span>
              <span className="hpServiceArrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── About / Photo Section ─────────────────────────────── */}
        <section className="hpAbout">
          <div className="hpAboutPhoto">
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="hpAboutText">
            <p className="eyebrow">About Wendy</p>
            <blockquote>
              "The difference between a good outcome and a bad one often comes
              down to who is paying attention."
            </blockquote>
            <p>
              Fifteen years. Acute settings, chronic care, home-based nursing.
              She's been the person in the room at 2am when families didn't know
              what was happening. She's caught things that others missed.
            </p>
            <Link href="/about" className="ghostLink" style={{ fontSize: "0.78rem", letterSpacing: "0.14em" }}>
              Read her story →
            </Link>
          </div>
        </section>

        {/* ── Why it matters ────────────────────────────────────── */}
        <section className="hpWhy">
          <h2>
            Some situations need a nurse,<br />
            not just <em>someone to help.</em>
          </h2>
          <div className="hpWhyBody">
            <p>
              A caregiver can provide comfort and company. They cannot administer
              medications, assess a wound, manage a feeding tube, or recognize the
              early signs of sepsis. A registered nurse can — and does.
            </p>
            <p>
              Medicare home health ends when the episode ends, not when your loved
              one no longer needs skilled care. Private duty nursing doesn't have
              that clock. Care continues for as long as you need it.
            </p>
            <Link href="/faq" className="outlineButton" style={{ marginTop: "16px" }}>
              Common Questions →
            </Link>
          </div>
        </section>

        {/* ── Cross Reference ───────────────────────────────────── */}
        <section className="crossRef">
          <p>
            <strong>Need homemaker or companion support instead?</strong>{" "}
            Wendy also owns Velvet Concierge Care — a separate, AHCA-licensed
            homemaker and companion service for non-clinical in-home support.
            Many families use both.
          </p>
          <a
            href="https://velvetconciergecare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="crossRefLink"
          >
            Visit Velvet Concierge Care →
          </a>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="hpCta">
          <h2>Let's talk.</h2>
          <p>
            Schedule a free consultation. No intake form, no call center —
            just a direct conversation with Wendy about what you need.
          </p>
          <Link href="/consultation" className="silverButton">
            Schedule a Free Consultation
          </Link>
          <div className="hpCtaContact">
            <a href="tel:+18435327181">(843) 532-7181</a>
            <span>·</span>
            <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
