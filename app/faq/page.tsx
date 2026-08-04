import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Link from "next/link";
import FaqAccordion from "@/app/components/FaqAccordion";

export const metadata = {
  title: "FAQ — Wendy Concierge Nursing",
  description:
    "Common questions about private duty nursing, what's covered, how it differs from home health agencies, and what to expect working with Wendy Concierge Nursing.",
};

export default function FAQPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="faqEditorial">
          <FaqAccordion />
        </section>

        <section className="faqDarkCta">
          <h2>
            Still have questions?<br />
            <em style={{ fontStyle: "italic", color: "var(--silver-light)" }}>Let's talk.</em>
          </h2>
          <p>
            Every situation is different. If you didn't see what you were
            looking for, call or schedule a free consultation — I'll give you a
            straight answer.
          </p>
          <Link href="/consultation" className="creamButton">
            Schedule a Consultation
          </Link>
          <p className="faqDarkCtaContact">
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
