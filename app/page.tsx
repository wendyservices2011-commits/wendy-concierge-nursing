import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>

        {/* ── Split Hero ───────────────────────────────────────── */}
        <section className="splitHero">
          <div className="splitHeroLeft">
            <div className="splitHeroInner">
              <div className="credBar">
                <span>RN · Licensed 2019</span>
                <span className="credDot">·</span>
                <span>LPN Since 2010</span>
                <span className="credDot">·</span>
                <span>Palm Beach County</span>
                <span className="credDot">·</span>
                <span>Private Pay</span>
              </div>
              <h1>
                Private duty nursing.<br />
                One nurse.<br />
                <em>Your home.</em>
              </h1>
              <p>
                Not an agency. Not a rotating roster of strangers. A single
                registered nurse — with fifteen years of experience — who comes
                to you, knows your situation, and stays.
              </p>
              <div className="splitHeroActions">
                <Link href="/consultation" className="silverButton">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="ghostLink">
                  View Services →
                </Link>
              </div>
            </div>
          </div>
          <div className="splitHeroRight">
            <Image
              src="/hero-nursing.jpg"
              alt="Private duty nursing care at home"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className="splitHeroOverlay" />
          </div>
        </section>

        {/* ── Credentials Strip ────────────────────────────────── */}
        <div className="credStrip">
          <div className="credStripItem">
            <span className="credStripNum">15+</span>
            <span className="credStripLabel">Years of clinical experience</span>
          </div>
          <div className="credStripDivider" />
          <div className="credStripItem">
            <span className="credStripNum">1</span>
            <span className="credStripLabel">Nurse. One client at a time.</span>
          </div>
          <div className="credStripDivider" />
          <div className="credStripItem">
            <span className="credStripNum">RN</span>
            <span className="credStripLabel">Florida Licensed Registered Nurse</span>
          </div>
          <div className="credStripDivider" />
          <div className="credStripItem">
            <span className="credStripNum">24/7</span>
            <span className="credStripLabel">Available for urgent situations</span>
          </div>
        </div>

        {/* ── What I Do ────────────────────────────────────────── */}
        <section className="whatIDo">
          <div className="whatIDoHeader">
            <p className="eyebrow">What I Do</p>
            <h2>Skilled nursing care that<br /><em>goes where you go.</em></h2>
          </div>
          <div className="serviceCardGrid">
            <Link href="/services#post-surgical" className="serviceCard">
              <span className="serviceCardNum">01</span>
              <h3>Post-Surgical Recovery</h3>
              <p>Wound care, vital sign monitoring, discharge follow-through, and early complication detection — in your own home.</p>
              <span className="serviceCardArrow">→</span>
            </Link>
            <Link href="/services#chronic" className="serviceCard">
              <span className="serviceCardNum">02</span>
              <h3>Chronic Disease Management</h3>
              <p>Medication management, blood sugar monitoring, cardiac observation, and coordination with your care team.</p>
              <span className="serviceCardArrow">→</span>
            </Link>
            <Link href="/services#specialty" className="serviceCard">
              <span className="serviceCardNum">03</span>
              <h3>Specialty &amp; Complex Care</h3>
              <p>G-tube, tracheostomy, catheter, ostomy care, and IV therapy — clinical skills most caregivers aren't licensed to provide.</p>
              <span className="serviceCardArrow">→</span>
            </Link>
            <Link href="/services#palliative" className="serviceCard">
              <span className="serviceCardNum">04</span>
              <h3>Palliative &amp; Comfort Care</h3>
              <p>Skilled nursing support focused on comfort, symptom management, and dignity — alongside your hospice team.</p>
              <span className="serviceCardArrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── Statement ────────────────────────────────────────── */}
        <section className="statement">
          <div className="statementInner">
            <p>
              "The difference between a good outcome and a bad one often comes
              down to who is paying attention. I show up, I stay present, and
              I notice what others miss."
            </p>
            <cite>— Wendy Bien-Aime, RN · Founder</cite>
          </div>
        </section>

        {/* ── About Preview ────────────────────────────────────── */}
        <section className="aboutPreview">
          <div className="aboutPreviewPhoto">
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="aboutPreviewContent">
            <p className="eyebrow">About Wendy</p>
            <h2>A nurse who built a practice<br /><em>around one idea.</em></h2>
            <p>
              Fifteen years of hands-on nursing — LPN since 2010, RN since 2019.
              She's worked post-surgical floors, chronic care settings, and
              home-based environments where the stakes are high and the margin
              for inattention is zero.
            </p>
            <p>
              Wendy Concierge Nursing is a private practice, not an agency. That
              means one nurse, direct access, and care that never gets handed off
              to whoever is available that day.
            </p>
            <Link href="/about" className="outlineButton">
              Read Her Story →
            </Link>
          </div>
        </section>

        {/* ── Why Private Duty ─────────────────────────────────── */}
        <section className="whySection">
          <p className="eyebrow">Why Private Duty Nursing</p>
          <div className="whyGrid">
            <div className="whyItem">
              <h3>When home health ends but care doesn't.</h3>
              <p>Medicare home health is time-limited and tied to specific diagnoses. When the episode ends, the nurse stops coming — even if your loved one still needs skilled care. Private duty doesn't have that clock.</p>
            </div>
            <div className="whyItem">
              <h3>When a caregiver isn't enough.</h3>
              <p>A home health aide or companion can provide comfort and company. They cannot administer medications, assess wounds, monitor a cardiac rhythm, or manage a feeding tube. A registered nurse can.</p>
            </div>
            <div className="whyItem">
              <h3>When you need someone to be accountable.</h3>
              <p>An agency sends whoever is available. I give you my direct number. When something changes with your loved one, you hear it from me — not a coordinator who's reading from a chart.</p>
            </div>
          </div>
        </section>

        {/* ── Cross Reference ───────────────────────────────────── */}
        <section className="crossRef">
          <p>
            <strong>Need homemaker or companion support instead?</strong>{" "}
            Wendy also owns <strong>Velvet Concierge Care</strong> — a separate,
            AHCA-licensed homemaker and companion service serving Palm Beach County.
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
        <section className="finalCta">
          <div className="finalCtaLeft">
            <h2>Ready to talk?</h2>
            <p>
              No intake form, no call center. Schedule a free consultation and
              speak directly with Wendy. She'll tell you honestly whether private
              duty nursing is the right fit — and if it's not, she'll point you
              in the right direction.
            </p>
          </div>
          <div className="finalCtaRight">
            <Link href="/consultation" className="silverButton">
              Schedule a Free Consultation
            </Link>
            <p className="finalCtaContact">
              Or call directly:<br />
              <a href="tel:+18435327181">(843) 532-7181</a>
            </p>
            <p className="finalCtaContact">
              <a href="mailto:wendy@wendyconciergenursing.com">
                wendy@wendyconciergenursing.com
              </a>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
