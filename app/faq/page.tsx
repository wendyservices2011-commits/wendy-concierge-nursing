import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Wendy Concierge Nursing",
  description:
    "Common questions about private duty nursing, what's covered, how it differs from home health agencies, and what to expect working with Wendy Concierge Nursing.",
};

export default function FAQPage() {
  return (
    <>
      <SiteNav />
      <main className="lightMain">

        <section className="ipHero">
          <p className="lhLabel">Frequently Asked Questions</p>
          <h1>
            Questions worth<br />
            <em>asking out loud.</em>
          </h1>
          <p>
            Private duty nursing is something many families don't fully understand
            until they need it. Here's what most people want to know.
          </p>
        </section>

        <section className="ipFaqSection">
          <div className="ipFaqSidebar">
            <p className="lhLabel">Still have questions?</p>
            <h3>A conversation is the fastest way to get an answer.</h3>
            <p>Every situation is different. If you don't see what you're looking for, call or schedule a free consultation.</p>
            <Link href="/consultation" className="navyButton">Schedule a Consultation</Link>
          </div>

          <div className="ipFaqList">
            <details>
              <summary>What is private duty nursing?</summary>
              <div className="ipFaqAnswer">
                <p>Private duty nursing means hiring a licensed registered nurse directly to care for someone in their home — not through a home health agency, and not tied to a specific diagnosis or Medicare episode. It's nursing care that continues for as long as you need it, with no arbitrary limits.</p>
                <p>The "private duty" in the name simply means the nurse is engaged privately — by the client or family — rather than assigned by a hospital or agency. It gives families far more control over who provides care, how often, and for how long.</p>
              </div>
            </details>

            <details>
              <summary>How is this different from a home health agency?</summary>
              <div className="ipFaqAnswer">
                <p>Home health agencies are staffing businesses. They employ nurses and aides and send whoever is available. The nurse who comes Monday may not be the nurse who comes Wednesday. Care is often tied to a specific Medicare-covered episode, meaning it ends when the episode ends — not when your loved one is ready.</p>
                <p>Wendy Concierge Nursing is a private practice. You work directly with me. I get to know your loved one, their baseline, their preferences, and their clinical picture. That continuity is what makes private duty nursing valuable — and what agencies, by design, can't replicate.</p>
              </div>
            </details>

            <details>
              <summary>Does Medicare or insurance cover private duty nursing?</summary>
              <div className="ipFaqAnswer">
                <p>Medicare does not cover private duty nursing. Medicare's home health benefit covers skilled nursing tied to specific criteria and is time-limited.</p>
                <p>Long-term care insurance policies sometimes cover private duty nursing depending on the policy terms. I provide detailed invoices that clients may submit to their long-term care insurance for potential reimbursement. All fees are paid privately and directly.</p>
              </div>
            </details>

            <details>
              <summary>What conditions or situations do you work with?</summary>
              <div className="ipFaqAnswer">
                <p>I work with a wide range of clinical situations including post-surgical recovery, chronic disease management (diabetes, heart failure, COPD, Parkinson's, dementia), wound care, IV therapy, feeding tube and tracheostomy management, catheter care, and palliative or comfort-focused care.</p>
                <p>I also work with families who simply want a registered nurse present — for medication management, regular monitoring, or the peace of mind that comes from knowing someone clinically qualified is keeping watch.</p>
              </div>
            </details>

            <details>
              <summary>How do we get started?</summary>
              <div className="ipFaqAnswer">
                <p>We start with a conversation. You can schedule a free consultation or call me directly. I'll ask about your loved one's situation, their current care needs, and what you're hoping to accomplish. From there, if we're a good fit, I'll come to the home for an in-person assessment before we begin care.</p>
                <p>I don't have a long intake form or a bureaucratic process. I have a phone number and I answer it.</p>
              </div>
            </details>

            <details>
              <summary>What are your hours?</summary>
              <div className="ipFaqAnswer">
                <p>Scheduling is arranged directly and is flexible based on your needs. I offer daytime visits, extended hours, and overnight skilled nursing. Because this is a private practice with a limited client base, availability varies — the sooner you reach out, the better.</p>
              </div>
            </details>

            <details>
              <summary>What's the difference between Wendy Concierge Nursing and Velvet Concierge Care?</summary>
              <div className="ipFaqAnswer">
                <p>They are two separate businesses I founded. Wendy Concierge Nursing is a private duty RN practice — for clients who need skilled nursing care that can only be provided by a licensed registered nurse.</p>
                <p>Velvet Concierge Care is an AHCA-licensed homemaker and companion service — for clients who need non-clinical in-home support: companionship, personal care assistance, medication reminders, meal preparation, errands, and transportation. Many families use both. If you're not sure which fits, reach out — I'll help you figure it out.</p>
              </div>
            </details>

            <details>
              <summary>What areas do you serve?</summary>
              <div className="ipFaqAnswer">
                <p>I serve Palm Beach County, Florida — including Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton. If you're just outside this area, reach out and I'll let you know if I can accommodate you.</p>
              </div>
            </details>
          </div>
        </section>

        <section className="ipCta">
          <h2>Didn't find your answer?</h2>
          <p>Call or schedule a free consultation. I'll answer directly.</p>
          <Link href="/consultation" className="navyButton">Schedule a Consultation</Link>
          <p className="lhCtaContact" style={{ marginTop: "16px" }}>
            <a href="tel:+18435327181">(843) 532-7181</a>
            {" · "}
            <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
          </p>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
