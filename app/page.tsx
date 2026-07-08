import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="lightMain">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="lhHero">
          <div className="lhHeroText">
            <p className="lhEyebrow">Private Duty RN · Palm Beach County, FL</p>
            <h1>
              Skilled nursing care,<br />
              <em>delivered at home.</em>
            </h1>
            <p className="lhHeroSub">
              Not an agency. One registered nurse — fifteen years of experience —
              who comes to you, learns your situation, and stays.
            </p>
            <div className="lhHeroActions">
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
        <div className="lhCredBar">
          <span>Wendy Bien-Aime, RN</span>
          <span className="lhCredSep" />
          <span>Licensed Practical Nurse · 2010</span>
          <span className="lhCredSep" />
          <span>Registered Nurse · 2019</span>
          <span className="lhCredSep" />
          <span>Palm Beach County, FL</span>
          <span className="lhCredSep" />
          <span>Private Pay Only</span>
        </div>

        {/* ── Intro ─────────────────────────────────────────────── */}
        <section className="lhIntro">
          <div className="lhIntroLeft">
            <p className="lhLabel">Why private duty nursing</p>
            <h2>
              There's a difference between<br />
              a caregiver and a nurse.
            </h2>
          </div>
          <div className="lhIntroRight">
            <p>
              A caregiver provides comfort and company. A registered nurse can
              administer medications, assess a surgical wound, manage a feeding
              tube, monitor a cardiac rhythm, and recognize the early signs of
              something going wrong.
            </p>
            <p>
              Most people don't realize they need that difference until they're
              in the middle of a situation where it matters. I started this
              practice because I've seen what happens when the person in the
              room isn't qualified to notice — and what's possible when they are.
            </p>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="lhServices">
          <div className="lhServicesHeader">
            <p className="lhLabel">Services</p>
            <h2>What I do.</h2>
          </div>
          <div className="lhServiceItems">
            <div className="lhServiceItem">
              <span className="lhServiceN">01</span>
              <div>
                <h3>Post-Surgical Recovery</h3>
                <p>Wound care, vital sign monitoring, discharge follow-through, and early detection of complications — at home, after the hospital says you're ready to go.</p>
              </div>
            </div>
            <div className="lhServiceItem">
              <span className="lhServiceN">02</span>
              <div>
                <h3>Chronic Disease Management</h3>
                <p>Medication administration, blood sugar monitoring, cardiac observation, and ongoing coordination with your loved one's physicians.</p>
              </div>
            </div>
            <div className="lhServiceItem">
              <span className="lhServiceN">03</span>
              <div>
                <h3>Complex &amp; Specialty Care</h3>
                <p>G-tube and tracheostomy management, catheter care, ostomy care, IV therapy — skills that require a licensed RN, handled with experience and care.</p>
              </div>
            </div>
            <div className="lhServiceItem">
              <span className="lhServiceN">04</span>
              <div>
                <h3>Overnight Skilled Nursing</h3>
                <p>Continuous RN presence through the night for clients who need monitoring, medication administration, or simply the peace of mind of a nurse in the home.</p>
              </div>
            </div>
            <div className="lhServiceItem">
              <span className="lhServiceN">05</span>
              <div>
                <h3>Palliative &amp; Comfort Care</h3>
                <p>Skilled nursing focused on dignity, symptom management, and quality of life — working alongside your hospice or palliative care team.</p>
              </div>
            </div>
            <div className="lhServiceItem">
              <span className="lhServiceN">06</span>
              <div>
                <h3>Family Consultation</h3>
                <p>I attend appointments, translate clinical language into plain answers, and help families understand what's happening and what to watch for.</p>
              </div>
            </div>
          </div>
          <Link href="/services" className="lhTextLink" style={{ marginTop: "40px", display: "inline-block" }}>
            Full list of services →
          </Link>
        </section>

        {/* ── About / Wendy ─────────────────────────────────────── */}
        <section className="lhAbout">
          <div className="lhAboutPhoto">
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="lhAboutContent">
            <p className="lhLabel">About Wendy</p>
            <blockquote className="lhQuote">
              "The difference between a good outcome and a bad one often comes
              down to who is paying attention."
            </blockquote>
            <p>
              Fifteen years of clinical nursing — acute settings, home-based care,
              complex conditions. She's been the person in the room at 2am. She's
              caught things that others missed. She's made the call that mattered.
            </p>
            <p>
              This practice is small by design. Wendy is not building a staffing
              agency. She's building a practice where every client gets her —
              her eyes, her hands, her judgment, her number.
            </p>
            <Link href="/about" className="navyButton" style={{ marginTop: "8px" }}>
              Her story
            </Link>
          </div>
        </section>

        {/* ── Pull statement ────────────────────────────────────── */}
        <section className="lhPull">
          <p>
            Private duty nursing is what happens when someone decides that
            "good enough" isn't good enough for the person they love.
          </p>
        </section>

        {/* ── Cross reference ───────────────────────────────────── */}
        <section className="lhCross">
          <div className="lhCrossInner">
            <p className="lhLabel">Also by Wendy</p>
            <p className="lhCrossText">
              Need homemaker or companion support instead of clinical nursing?
              Wendy also founded <strong>Velvet Concierge Care</strong> — an
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
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="lhCta">
          <div className="lhCtaInner">
            <h2>
              Not sure if private duty nursing<br />
              is what you need?
            </h2>
            <p>
              Schedule a free consultation and talk directly with Wendy. She'll
              listen to what's going on and give you an honest answer — even if
              that answer is that a different kind of support is a better fit.
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
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
