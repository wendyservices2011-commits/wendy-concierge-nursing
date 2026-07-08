import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <footer className="siteFooter">
        <div className="footerLogo">
          <span>Wendy Concierge Nursing</span>
          <small>Private Duty RN · Palm Beach County</small>
          <p>
            Private duty registered nurse services for individuals and families
            across Palm Beach County, Florida. Licensed RN. Private pay.
          </p>
        </div>

        <nav className="footerLinks">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Wendy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/consultation">Schedule a Consultation</Link>
        </nav>

        <div className="footerContact">
          <p>
            Palm Beach County, FL<br />
            <a href="tel:+18435327181">(843) 532-7181</a><br />
            <a href="mailto:wendy@wendyconciergenursing.com">
              wendy@wendyconciergenursing.com
            </a>
          </p>
          <p style={{ marginTop: "20px" }}>
            Also offering homemaker &amp; companion services:<br />
            <a
              href="https://velvetconciergecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footerVelvetLink"
            >
              Velvet Concierge Care →
            </a>
          </p>
        </div>
      </footer>
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Wendy Concierge Nursing LLC · All rights reserved</p>
        <p>Royal Palm Beach, FL · Serving Palm Beach County</p>
      </div>
    </>
  );
}
