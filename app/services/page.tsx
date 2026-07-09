import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Services — Wendy Concierge Nursing",
  description:
    "Private duty RN services in Palm Beach County: medication management, wound care, post-surgical nursing, IV therapy, chronic disease monitoring, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="lightMain">

        <section className="ipHero">
          <p className="lhLabel">Services</p>
          <h1>
            Clinical nursing care,<br />
            <em>at home.</em>
          </h1>
          <p>
            Every engagement starts with a private consultation. What follows is
            nursing care designed entirely around your loved one — not a package,
            not a template, and not a rotating roster of strangers.
          </p>
        </section>

        <section className="ipServicesSection">

          <div className="ipServiceBlock">
            <div className="ipServiceBlockHeader">
              <p className="lhLabel">Post-Surgical &amp; Acute Recovery</p>
              <h2>Skilled nursing support<br /><em>after discharge.</em></h2>
            </div>
            <div className="ipServiceList">
              <div className="ipServiceRow">
                <h3>Wound Care &amp; Dressing Changes</h3>
                <p>Proper wound assessment, cleaning, and dressing changes performed by a licensed RN — reducing infection risk and supporting healing at home.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Post-Surgical Monitoring</h3>
                <p>Vital signs monitoring, surgical site assessment, pain management observation, and early detection of complications — the kind of watch that prevents re-hospitalization.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Discharge Transition Support</h3>
                <p>I review discharge instructions with you and your loved one, coordinate follow-up care, and ensure nothing is lost in the handoff from hospital to home.</p>
              </div>
              <div className="ipServiceRow">
                <h3>IV Therapy &amp; Infusion Support</h3>
                <p>IV line management, hydration therapy, and antibiotic infusions ordered by a physician — administered safely in the home setting.</p>
              </div>
            </div>
          </div>

          <div className="ipServiceBlock ipServiceBlockAlt">
            <div className="ipServiceBlockHeader">
              <p className="lhLabel">Chronic Disease Management</p>
              <h2>Ongoing monitoring for<br /><em>complex conditions.</em></h2>
            </div>
            <div className="ipServiceList">
              <div className="ipServiceRow">
                <h3>Medication Management</h3>
                <p>Full medication reconciliation, administration, and monitoring for side effects or interactions — critical for clients managing multiple diagnoses and complex regimens.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Vital Signs &amp; Health Monitoring</h3>
                <p>Regular blood pressure, heart rate, oxygen saturation, blood glucose, and weight monitoring — tracked and communicated to the care team.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Diabetes &amp; Cardiac Care</h3>
                <p>Blood sugar monitoring, insulin administration, cardiac observation, and coordination with your loved one's physician when values are outside target range.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Catheter &amp; Ostomy Care</h3>
                <p>Professional management of urinary catheters, colostomies, ileostomies, and related equipment — handled with skill and dignity.</p>
              </div>
            </div>
          </div>

          <div className="ipServiceBlock">
            <div className="ipServiceBlockHeader">
              <p className="lhLabel">Specialty &amp; Complex Care</p>
              <h2>For situations that require<br /><em>a registered nurse.</em></h2>
            </div>
            <div className="ipServiceList">
              <div className="ipServiceRow">
                <h3>G-Tube &amp; Feeding Tube Management</h3>
                <p>Enteral feeding administration, tube flushing, site care, and monitoring for complications — including coordination with gastroenterology.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Tracheostomy Care</h3>
                <p>Tracheostomy suctioning, inner cannula changes, and site care for clients requiring airway management at home.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Palliative &amp; Comfort-Focused Care</h3>
                <p>Skilled nursing support focused on comfort, symptom management, and quality of life — working alongside hospice or palliative care teams as needed.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Care Coordination</h3>
                <p>Liaison between your loved one, their physicians, specialists, and other care providers — so nothing is missed and the left hand always knows what the right hand is doing.</p>
              </div>
            </div>
          </div>

          <div className="ipServiceBlock ipServiceBlockAlt">
            <div className="ipServiceBlockHeader">
              <p className="lhLabel">Support &amp; Presence</p>
              <h2>Clinical care paired with<br /><em>genuine attention.</em></h2>
            </div>
            <div className="ipServiceList">
              <div className="ipServiceRow">
                <h3>Medical Appointment Accompaniment</h3>
                <p>I attend physician visits alongside your loved one — taking notes, asking informed clinical questions, and communicating findings to family members who couldn't be there.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Family Consultation &amp; Education</h3>
                <p>I help families understand diagnoses, medication regimens, and what to watch for — translating clinical language into clear, actionable information.</p>
              </div>
              <div className="ipServiceRow">
                <h3>Overnight Skilled Nursing</h3>
                <p>Continuous skilled nursing presence through the night — for clients who need ongoing monitoring, medication administration, or simply the reassurance of a nurse in the home.</p>
              </div>
            </div>
          </div>

          <div className="ipServiceNote">
            <div>
              <h4>Private Pay · Licensed RN</h4>
              <p>Wendy Concierge Nursing operates on a private-pay basis, which means care is never dictated by insurance limitations. Detailed invoices are provided for clients who wish to submit for long-term care insurance reimbursement.</p>
            </div>
            <div>
              <h4>Service Area</h4>
              <p>Serving Palm Beach County — Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton.</p>
            </div>
          </div>

        </section>

        <section className="ipCta">
          <h2>Have questions about a specific situation?</h2>
          <p>Call or schedule a free consultation. I'll tell you honestly whether what I do is the right fit.</p>
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
