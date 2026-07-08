import Image from "next/image";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "About Wendy — Wendy Concierge Nursing",
  description:
    "Wendy Bien-Aime, RN has over fifteen years of hands-on nursing experience. Learn about her background and why she founded Wendy Concierge Nursing.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">About Wendy</p>
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

        <section className="aboutStory">
          <div className="aboutStoryLeft">
            <p className="eyebrow">Wendy Bien-Aime, RN</p>
            <Image
              src="/wendy.jpg"
              alt="Wendy Bien-Aime, RN — Founder of Wendy Concierge Nursing"
              width={480}
              height={560}
              className="aboutPhoto"
            />
            <div className="aboutCredential">
              Licensed Practical Nurse · Since 2010<br />
              Registered Nurse · Since 2019<br />
              Fifteen Years of Clinical Experience<br />
              Palm Beach County, Florida
            </div>
          </div>

          <div className="aboutStoryRight">
            <p>
              I started my career as an LPN in 2010, working in environments
              where I learned quickly that the difference between a good outcome
              and a bad one often comes down to who is paying attention. I went
              back for my RN in 2019, not because I had to, but because I wanted
              more — more knowledge, more skill, more ability to help the people
              in front of me.
            </p>
            <p>
              Over fifteen years, I've worked with patients recovering from
              major surgery, managing multiple chronic conditions, navigating
              new diagnoses, and approaching end of life. I've sat with families
              at 2 in the morning when they didn't know what was happening. I've
              caught things that others missed. I've been the person who made the
              call that mattered.
            </p>
            <p>
              I founded Wendy Concierge Nursing because I believe private duty
              nursing should exist at the same level of quality and care as the
              best hospital you've ever been in — delivered in your own home, by
              someone who knows you by name.
            </p>
            <p>
              This practice is small by design. I am not building a staffing
              agency. I am building a nursing practice where every client gets
              me — my eyes, my hands, my judgment, my phone number.
            </p>
            <div className="aboutSignature">— Wendy Bien-Aime, RN</div>
          </div>
        </section>

        <section className="aboutMission">
          <p className="eyebrow">Philosophy</p>
          <h2>
            Skilled nursing should never feel like a transaction.
            It should feel like someone{" "}
            <em>who genuinely cares</em>{" "}
            and genuinely knows what they're doing.
          </h2>
        </section>

        <section className="aboutValues">
          <p className="eyebrow">What You Can Expect</p>
          <div className="aboutValuesGrid">
            <div className="aboutValue">
              <p className="eyebrow">Clinical Excellence</p>
              <p>
                Fifteen years of experience across acute and home-based settings.
                I bring clinical rigor to every visit — not because I have to,
                but because your loved one deserves nothing less.
              </p>
            </div>
            <div className="aboutValue">
              <p className="eyebrow">Complete Transparency</p>
              <p>
                You will always know what I observed, what I did, and what I
                think you should know. No summaries softened for comfort. Clear,
                honest communication is part of the care.
              </p>
            </div>
            <div className="aboutValue">
              <p className="eyebrow">Genuine Presence</p>
              <p>
                I am not managing a caseload of fifty clients. I am present —
                really present — with each person I work with. That's the entire
                point of this practice.
              </p>
            </div>
          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
