import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "About Wendy — Wendy Concierge Nursing",
  description:
    "Wendy Bien-Aime, RN has over fifteen years of hands-on nursing experience. Learn about her background and why she founded Wendy Concierge Nursing.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="lightMain">

        <section className="ipHero">
          <p className="lhLabel">About Wendy</p>
          <h1>
            Fifteen years of nursing.<br />
            <em>All of it hands-on.</em>
          </h1>
          <p>
            I became a nurse because I wanted to make a real difference in
            people's lives — not in the abstract, but in the room, in the
            moment, with the person in front of me.
          </p>
        </section>

        <section className="ipStory">
          <div className="ipStoryPhoto">
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN — Founder of Wendy Concierge Nursing"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="ipStoryContent">
            <p className="lhLabel">Wendy Bien-Aime, RN</p>
            <div className="ipCredential">
              Registered Nurse<br />
              Fifteen Years of Clinical Experience<br />
              Palm Beach County, Florida
            </div>
            <p>
              I've spent fifteen years in clinical nursing — in environments where
              the difference between a good outcome and a bad one often comes down
              to who is paying attention. I became a registered nurse because I
              wanted more — more knowledge, more skill, more ability to help the
              people in front of me.
            </p>
            <p>
              Over those years I've worked with patients recovering from major
              surgery, managing multiple chronic conditions, navigating new
              diagnoses, and approaching end of life. I've sat with families at
              2am when they didn't know what was happening. I've caught things
              that others missed. I've been the person who made the call that
              mattered.
            </p>
            <p>
              I founded Wendy Concierge Nursing because I believe private duty
              nursing should exist at the same level of quality as the best
              hospital you've ever been in — delivered in your own home, by
              someone who knows you by name.
            </p>
            <p>
              This practice is small by design. I am not building a staffing
              agency. I am building a nursing practice where every client gets
              me — my eyes, my hands, my judgment, my phone number.
            </p>
            <div className="ipSignature">— Wendy Bien-Aime, RN</div>
          </div>
        </section>

        <section className="ipPhilosophy">
          <p className="lhLabel">Philosophy</p>
          <blockquote className="ipPhilosophyQuote">
            Skilled nursing should never feel like a transaction. It should feel
            like someone <em>who genuinely cares</em> and genuinely knows what
            they're doing.
          </blockquote>
        </section>

        <section className="ipValues">
          <p className="lhLabel">What You Can Expect</p>
          <div className="ipValuesGrid">
            <div className="ipValue">
              <h3>Clinical Excellence</h3>
              <p>
                Fifteen years of experience across acute and home-based settings.
                I bring clinical rigor to every visit — not because I have to,
                but because your loved one deserves nothing less.
              </p>
            </div>
            <div className="ipValue">
              <h3>Complete Transparency</h3>
              <p>
                You will always know what I observed, what I did, and what I
                think you should know. No summaries softened for comfort. Clear,
                honest communication is part of the care.
              </p>
            </div>
            <div className="ipValue">
              <h3>Genuine Presence</h3>
              <p>
                I am not managing a caseload of fifty clients. I am present —
                really present — with each person I work with. That's the entire
                point of this practice.
              </p>
            </div>
          </div>
        </section>

        <section className="ipCta">
          <h2>Ready to talk?</h2>
          <p>Schedule a free consultation — no forms, no call centers, just a direct conversation.</p>
          <Link href="/consultation" className="navyButton">Schedule a Consultation</Link>
          <p className="lhCtaContact" style={{ marginTop: "16px" }}>
            <a href="tel:+115615240011">(561) 524-0011</a>
            {" · "}
            <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
          </p>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
