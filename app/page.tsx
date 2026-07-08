import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* Hero */}
        <section className="hero">
          <div className="heroLeft">
            <p className="heroEyebrow">Private Duty RN · Palm Beach County, FL</p>
            <h1>
              Skilled nursing care.<br />
              <em>In the comfort of home.</em>
            </h1>
            <p>
              When someone you love needs more than a companion — medication
              management, wound care, complex condition monitoring — I come to
              you. One nurse. Continuous attention. No agency in between.
            </p>
            <Link href="/consultation" className="silverButton">
              Schedule a Consultation
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="intro">
          <p className="eyebrow">Why Private Duty Nursing</p>
          <h2>
            Some situations call for a nurse,<br />
            not just a <em>caregiver.</em>
          </h2>
          <p>
            There's a difference between someone who can remind your loved one
            to take a pill and a registered nurse who understands what happens
            when they don't — or when the pill is wrong. I bring fifteen years
            of hands-on nursing experience directly to your home, without the
            overhead of a large agency.
          </p>
        </section>

        {/* What I Do */}
        <section className="difference">
          <div className="differenceContent">
            <p className="eyebrow">What Makes This Different</p>
            <h2>
              Nursing expertise.<br />
              <em>Personal attention.</em>
            </h2>
            <div className="differenceList">
              <div className="differenceItem">
                <span className="itemNum">01</span>
                <div>
                  <h3>One nurse. One client.</h3>
                  <p>No rotating staff, no strangers. You know exactly who is walking through the door — and so do I, because I took the time to understand your loved one before I ever showed up.</p>
                </div>
              </div>
              <div className="differenceItem">
                <span className="itemNum">02</span>
                <div>
                  <h3>Clinical eyes in the home</h3>
                  <p>I notice what a caregiver might miss — changes in breathing, skin integrity, medication interactions, subtle signs that something is shifting. Early recognition changes outcomes.</p>
                </div>
              </div>
              <div className="differenceItem">
                <span className="itemNum">03</span>
                <div>
                  <h3>Direct family communication</h3>
                  <p>No layers, no call centers. When something changes, I call you. When you have questions, I answer them — with the clinical context to help you understand what matters and what doesn't.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="intro" style={{ background: "var(--navy)" }}>
          <p className="eyebrow">Services</p>
          <h2>
            From post-surgical recovery<br />
            to <em>complex ongoing care.</em>
          </h2>
          <p style={{ marginBottom: "40px" }}>
            Private duty nursing covers a wide range of clinical needs that fall
            outside what a homemaker or certified aide can legally or safely
            provide. If you're not sure what you need, we'll figure it out
            together.
          </p>
          <Link href="/services" className="outlineButton">
            View All Services
          </Link>
        </section>

        {/* Cross-reference */}
        <section className="crossRef">
          <p>
            <strong>Need homemaker or companion support instead?</strong>{" "}
            Wendy also owns Velvet Concierge Care — a separate, AHCA-licensed
            homemaker and companion service serving the same families across
            Palm Beach County.
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

        {/* CTA */}
        <section className="siteContactCta">
          <h2>
            Not sure if private duty nursing<br />
            is what you <em>need?</em>
          </h2>
          <p>
            Call or schedule a free consultation. I'll listen to what's
            happening and give you an honest answer — even if that answer is
            that another service is a better fit.
          </p>
          <Link href="/consultation" className="silverButton">
            Schedule a Free Consultation
          </Link>
          <p className="siteContactAlt">
            Or call: <a href="tel:+18435327181">(843) 532-7181</a>
          </p>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
