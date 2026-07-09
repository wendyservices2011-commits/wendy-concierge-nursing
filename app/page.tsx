import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="lightMain">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="lhHero">
          <div className="lhHeroText">
            <p className="lhEyebrow heroEyebrowAnim">Private Duty RN · Palm Beach County, FL</p>
            <h1>
              <span className="heroLine">Skilled nursing care.</span>
              <span className="heroLine"><em>At home.</em></span>
            </h1>
            <p className="lhHeroSub heroSubAnim">
              I'm not an agency. I'm one registered nurse — with fifteen years
              of experience — who comes to you, learns your situation, and stays.
            </p>
            <div className="lhHeroActions heroActionsAnim">
              <Link href="/consultation" className="navyButton">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="lhTextLink">
                See what I offer →
              </Link>
            </div>
          </div>
          <div className="lhHeroPhoto">
            <Image
              src="/hero-nursing.jpg"
              alt="In-home nursing care"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </div>
        </section>

        {/* ── Credentials bar ───────────────────────────────────── */}
        <div className="lhCredBar credBarAnim">
          <span>Wendy Bien-Aime, RN</span>
          <span className="lhCredSep" />
          <span>Registered Nurse</span>
          <span className="lhCredSep" />
          <span>15+ Years of Clinical Experience</span>
          <span className="lhCredSep" />
          <span>Palm Beach County, FL</span>
        </div>

        {/* ── Intro ─────────────────────────────────────────────── */}
        <section className="lhIntro">
          <ScrollReveal className="lhIntroLeft">
            <p className="lhLabel">Why private duty nursing</p>
            <h2>
              There's a difference between<br />
              a caregiver and a nurse.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lhIntroRight" delay={150}>
            <p>
              A caregiver provides comfort and company. As a registered nurse,
              I can administer medications, assess a surgical wound, manage a
              feeding tube, monitor a cardiac rhythm, and recognize the early
              signs of something going wrong.
            </p>
            <p>
              Most people don't realize they need that difference until they're
              in the middle of a situation where it matters. I started this
              practice because I've seen what happens when the person in the
              room isn't qualified to notice — and what's possible when they are.
            </p>
          </ScrollReveal>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="lhServices">
          <ScrollReveal className="lhServicesHeader">
            <p className="lhLabel">Services</p>
            <h2>What I do.</h2>
          </ScrollReveal>
          <div className="lhServiceItems">
            {[
              { n: "01", title: "Post-Surgical Recovery", desc: "Wound care, vital sign monitoring, discharge follow-through, and early detection of complications — at home, after the hospital says you're ready to go." },
              { n: "02", title: "Chronic Disease Management", desc: "Medication administration, blood sugar monitoring, cardiac observation, and ongoing coordination with your physicians." },
              { n: "03", title: "Complex & Specialty Care", desc: "G-tube and tracheostomy management, catheter care, ostomy care, IV therapy — skills that require a licensed RN, handled with experience and care." },
              { n: "04", title: "Overnight Skilled Nursing", desc: "I stay through the night for clients who need monitoring, medication administration, or simply the reassurance of having a nurse in the home." },
              { n: "05", title: "Palliative & Comfort Care", desc: "Nursing care focused on dignity, symptom management, and quality of life — I work alongside your hospice or palliative care team." },
              { n: "06", title: "Family Consultation", desc: "I attend appointments with you, translate clinical language into plain answers, and make sure you understand what's happening every step of the way." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} className="lhServiceItem" delay={i * 80}>
                <span className="lhServiceN">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <Link href="/services" className="lhTextLink" style={{ marginTop: "40px", display: "inline-block" }}>
              Full list of services →
            </Link>
          </ScrollReveal>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <ScrollReveal className="lhAboutText lhAboutNoPhoto">
          <p className="lhLabel">About Me</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 2.8vw, 3rem)", fontWeight: 400, lineHeight: 1.2, color: "var(--navy)", marginBottom: "20px" }}>
            Wendy Bien-Aime, RN
          </h2>
          <p>
            I'm a registered nurse with over fifteen years of clinical experience.
            I founded Wendy Concierge Nursing because I believe you deserve a
            nurse who actually knows you — not whoever happens to be available
            that day.
          </p>
          <Link href="/about" className="navyButton" style={{ marginTop: "20px", alignSelf: "flex-start" }}>
            More About Me
          </Link>
        </ScrollReveal>

        {/* ── Pull statement ────────────────────────────────────── */}
        <ScrollReveal className="lhPull">
          <p>
            Private duty nursing is what happens when someone decides that
            "good enough" isn't good enough for the person they love.
          </p>
        </ScrollReveal>

        {/* ── Cross reference ───────────────────────────────────── */}
        <ScrollReveal className="lhCross">
          <div className="lhCrossInner">
            <p className="lhLabel">Also by Me</p>
            <p className="lhCrossText">
              Need homemaker or companion support instead of clinical nursing?
              I also founded <strong>Velvet Concierge Care</strong> — an
              AHCA-licensed homemaker and companion service for Palm Beach County.
              Many families use both.
            </p>
            <a
              href="https://velvetconciergecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lhTextLink"
            >
              Visit Velvet Concierge Care →
            </a>
          </div>
        </ScrollReveal>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <ScrollReveal className="lhCta">
          <div className="lhCtaInner">
            <h2>
              Not sure if private duty nursing<br />
              is what you need?
            </h2>
            <p>
              Let's talk. I'll listen to what's going on and give you an honest
              answer — even if that answer is that a different kind of support
              is a better fit.
            </p>
            <Link href="/consultation" className="navyButton">
              Schedule a Free Consultation
            </Link>
            <p className="lhCtaContact">
              <a href="tel:+18435327181">(843) 532-7181</a>
              {" · "}
              <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
            </p>
          </div>
        </ScrollReveal>

      </main>
      <SiteFooter />
    </>
  );
}
