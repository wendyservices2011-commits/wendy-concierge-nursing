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
        <section className="wncHero">
          <div className="wncHeroOverlay" />
          <div className="wncHeroContent">
            <p className="wncHeroEyebrow">Private Duty RN · Palm Beach County, FL</p>
            <h1 className="wncHeroH1">
              Skilled nursing,<br />
              at home,<br />
              <em>when it matters most.</em>
            </h1>
            <Link href="/consultation" className="wncHeroBtn">
              Book a Consultation
            </Link>
          </div>
        </section>

        {/* ── Trust bar ─────────────────────────────────────────── */}
        <div className="wncTrustBar">
          <span>Licensed RN</span>
          <span className="wncTrustSep" />
          <span>One-on-One Care</span>
          <span className="wncTrustSep" />
          <span>In-Home Visits</span>
          <span className="wncTrustSep" />
          <span>Palm Beach County, FL</span>
        </div>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="wncServices">
          <div className="wncServicesLeft">
            <p className="wncLabel">What I Offer</p>
            <h2 className="wncServicesH2">
              Clinical nursing care.<br />
              <em>In your home.</em>
            </h2>
            <p className="wncServicesIntro">
              I'm not an agency. I'm one registered nurse — with fifteen years
              of experience — who comes to you, learns your situation, and stays.
            </p>
            <Link href="/services" className="wncTextLink">
              Full list of services →
            </Link>
          </div>
          <div className="wncServicesRight">
            {[
              { n: "01", title: "Post-Surgical Recovery", desc: "Wound care, vital sign monitoring, discharge follow-through, and early detection of complications — at home, after the hospital says you're ready to go." },
              { n: "02", title: "Chronic Disease Management", desc: "Medication administration, blood sugar monitoring, cardiac observation, and ongoing coordination with your physicians." },
              { n: "03", title: "Complex & Specialty Care", desc: "G-tube and tracheostomy management, catheter care, ostomy care, IV therapy — skills that require a licensed RN, handled with experience and care." },
              { n: "04", title: "Palliative & Comfort Care", desc: "Nursing care focused on dignity, symptom management, and quality of life — I work alongside your hospice or palliative care team." },
              { n: "05", title: "Family Consultation", desc: "I attend appointments with you, translate clinical language into plain answers, and make sure you understand what's happening every step of the way." },
            ].map((s) => (
              <div key={s.n} className="wncServiceItem">
                <span className="wncServiceN">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <section className="wncAbout">
          <div className="wncAboutPhoto">
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="wncAboutText">
            <p className="wncLabel">About Me</p>
            <h2 className="wncAboutH2">Wendy Bien-Aime, RN</h2>
            <p>
              I'm a registered nurse with over fifteen years of clinical experience.
              I founded Wendy Concierge Nursing because I believe you deserve a
              nurse who actually knows you — not whoever happens to be available
              that day.
            </p>
            <p>
              The kind of nursing that prevents re-hospitalization isn't just
              about clinical skill. It's about attention — noticing what's
              changing, asking the right questions, and acting before a small
              problem becomes a serious one.
            </p>
            <Link href="/about" className="wncOutlineBtn">
              More About Me
            </Link>
          </div>
        </section>

        {/* ── Contact form ─────────────────────────────────────── */}
        <section className="wncContact">
          <div className="wncContactLeft">
            <p className="wncLabel">Get In Touch</p>
            <h2 className="wncContactH2">
              Not sure if private duty<br />
              nursing is what you need?
            </h2>
            <p className="wncContactSub">
              Let's talk. I'll listen to what's going on and give you an honest
              answer — even if that answer is that a different kind of support
              is a better fit.
            </p>
            <p className="wncContactInfo">
              <a href="tel:+18435327181">(843) 532-7181</a>
              <br />
              <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
            </p>
          </div>
          <form className="wncForm" action="/consultation">
            <div className="wncFormRow">
              <div className="wncFormGroup">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Smith" />
              </div>
              <div className="wncFormGroup">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
              </div>
            </div>
            <div className="wncFormGroup">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className="wncFormGroup">
              <label htmlFor="patient">Patient's Name &amp; Relation</label>
              <input id="patient" name="patient" type="text" placeholder="e.g. Robert Smith, Father" />
            </div>
            <div className="wncFormGroup">
              <label htmlFor="care">What Kind of Care Is Needed?</label>
              <textarea id="care" name="care" rows={4} placeholder="Tell me a bit about the situation…" />
            </div>
            <button type="submit" className="wncFormBtn">Request a Consultation</button>
            <p className="wncFormDisclaimer">
              No commitment required. I'll respond within one business day.
            </p>
          </form>
        </section>

        {/* ── Cross reference ───────────────────────────────────── */}
        <div className="wncCross">
          <p>
            Need homemaker or companion support instead of clinical nursing?
            I also founded <strong>Velvet Concierge Care</strong> — an AHCA-licensed
            homemaker and companion service for Palm Beach County.{" "}
            <a href="https://velvetconciergecare.com" target="_blank" rel="noopener noreferrer">
              Visit Velvet Concierge Care →
            </a>
          </p>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}
