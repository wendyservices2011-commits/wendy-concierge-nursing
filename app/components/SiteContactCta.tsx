import Link from "next/link";

export default function SiteContactCta() {
  return (
    <section className="siteContactCta">
      <h2>Ready to talk about<br /><em>what you need?</em></h2>
      <p>
        A conversation costs nothing. Share what's going on and I'll tell you
        honestly whether private duty nursing is the right fit.
      </p>
      <Link href="/consultation" className="silverButton">
        Schedule a Consultation
      </Link>
      <p className="siteContactAlt">
        Or call directly:{" "}
        <a href="tel:+18435327181">(843) 532-7181</a> · <a href="mailto:wendy@wendyconciergenursing.com">wendy@wendyconciergenursing.com</a>
      </p>
    </section>
  );
}
