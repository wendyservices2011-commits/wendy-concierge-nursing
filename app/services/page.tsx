import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";
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
      <main>
        <section className="pageHero">
          <p className="eyebrow">Services</p>
          <h1>
            Clinical nursing care,<br />
            <em>delivered at home.</em>
          </h1>
          <p>
            Every engagement starts with a private consultation. What follows is
            nursing care designed entirely around your loved one — not a
            package, not a template, and not a rotating roster of strangers.
          </p>
        </section>

        <section className="servicesSection">
          <div className="servicesGrid">

            <div className="serviceCategory">
              <p className="eyebrow">Post-Surgical &amp; Acute Recovery</p>
              <h3>
                Skilled nursing support<br />
                <em>after discharge.</em>
              </h3>
              <div className="serviceDivider" />
              <div className="serviceItem">
                <h4>Wound Care &amp; Dressing Changes</h4>
                <p>Proper wound assessment, cleaning, and dressing changes performed by a licensed RN — reducing infection risk and supporting healing at home.</p>
              </div>
              <div className="serviceItem">
                <h4>Post-Surgical Monitoring</h4>
                <p>Vital signs monitoring, surgical site assessment, pain management observation, and early detection of complications — the kind of watch that prevents re-hospitalization.</p>
              </div>
              <div className="serviceItem">
                <h4>Discharge Transition Support</h4>
                <p>I review discharge instructions with you and your loved one, coordinate follow-up care, and ensure nothing is lost in the handoff from hospital to home.</p>
              </div>
              <div className="serviceItem">
                <h4>IV Therapy &amp; Infusion Support</h4>
                <p>IV line management, hydration therapy, and antibiotic infusions ordered by a physician — administered safely in the home setting.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Chronic Disease Management</p>
              <h3>
                Ongoing monitoring for<br />
                <em>complex conditions.</em>
              </h3>
              <div className="serviceDivider" />
              <div className="serviceItem">
                <h4>Medication Management</h4>
                <p>Full medication reconciliation, administration, and monitoring for side effects or interactions — critical for clients managing multiple diagnoses and complex regimens.</p>
              </div>
              <div className="serviceItem">
                <h4>Vital Signs &amp; Health Monitoring</h4>
                <p>Regular blood pressure, heart rate, oxygen saturation, blood glucose, and weight monitoring — tracked and communicated to the care team.</p>
              </div>
              <div className="serviceItem">
                <h4>Diabetes &amp; Cardiac Care</h4>
                <p>Blood sugar monitoring, insulin administration, cardiac telemetry observation, and coordination with your loved one's physician when values are outside target range.</p>
              </div>
              <div className="serviceItem">
                <h4>Catheter &amp; Ostomy Care</h4>
                <p>Professional management of urinary catheters, colostomies, ileostomies, and related equipment — handled with skill and dignity.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Specialty &amp; Complex Care</p>
              <h3>
                For situations that require<br />
                <em>a registered nurse.</em>
              </h3>
              <div className="serviceDivider" />
              <div className="serviceItem">
                <h4>G-Tube &amp; Feeding Tube Management</h4>
                <p>Enteral feeding administration, tube flushing, site care, and monitoring for complications — including coordination with gastroenterology.</p>
              </div>
              <div className="serviceItem">
                <h4>Tracheostomy Care</h4>
                <p>Tracheostomy suctioning, inner cannula changes, and site care for clients requiring airway management at home.</p>
              </div>
              <div className="serviceItem">
                <h4>Palliative &amp; Comfort-Focused Care</h4>
                <p>Skilled nursing support focused on comfort, symptom management, and quality of life — working alongside hospice or palliative care teams as needed.</p>
              </div>
              <div className="serviceItem">
                <h4>Care Coordination</h4>
                <p>Liaison between your loved one, their physicians, specialists, and other care providers — so nothing is missed and the left hand always knows what the right hand is doing.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Companion &amp; Support Services</p>
              <h3>
                Clinical care paired with<br />
                <em>genuine presence.</em>
              </h3>
              <div className="serviceDivider" />
              <div className="serviceItem">
                <h4>Medical Appointment Accompaniment</h4>
                <p>I attend physician visits alongside your loved one — taking notes, asking informed clinical questions, and communicating findings to family members who couldn't be there.</p>
              </div>
              <div className="serviceItem">
                <h4>Family Consultation &amp; Education</h4>
                <p>I help families understand diagnoses, medication regimens, and what to watch for — translating clinical language into clear, actionable information.</p>
              </div>
              <div className="serviceItem">
                <h4>Overnight Skilled Nursing</h4>
                <p>Continuous skilled nursing presence through the night — for clients who need ongoing monitoring, medication administration, or simply the reassurance of a nurse in the home.</p>
              </div>
            </div>

          </div>

          <div className="serviceNote">
            <div>
              <h4>Private Pay · Licensed RN</h4>
              <p>Wendy Concierge Nursing operates on a private-pay basis, which means care is never dictated by insurance limitations. Detailed invoices are provided for clients who wish to submit for long-term care insurance reimbursement.</p>
            </div>
            <div>
              <h4>Service Area</h4>
              <p>Serving Palm Beach County — including Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton.</p>
            </div>
          </div>

          <div className="crossRef" style={{ marginTop: "60px" }}>
            <p>
              <strong>Looking for homemaker or companion services?</strong>{" "}
              Wendy also operates Velvet Concierge Care — a separate,
              AHCA-licensed homemaker and companion service for clients who
              need non-clinical in-home support.
            </p>
            <a
              href="https://velvetconciergecare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="crossRefLink"
            >
              Visit Velvet Concierge Care →
            </a>
          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
