"use client";

import { useState } from "react";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", relation: "",
    clientName: "", clientAge: "", city: "",
    situation: "", urgency: "", howHeard: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SiteNav />
        <main className="lightMain">
          <section className="ipThankYou">
            <p className="lhLabel">Request Received</p>
            <h1>Thank you, {form.name.split(" ")[0]}.</h1>
            <p>I'll be in touch within one business day.</p>
            <p>
              If your situation is urgent, please call directly:{" "}
              <a href="tel:+115615240011">(561) 524-0011</a>
            </p>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteNav />
      <main className="lightMain">

        <section className="ipHero">
          <p className="lhLabel">Schedule a Consultation</p>
          <h1>
            Let's talk about<br />
            <em>what you need.</em>
          </h1>
          <p>
            This takes about two minutes. No obligation, no sales pitch — just
            a starting point for a real conversation.
          </p>
        </section>

        <section className="ipConsultSection">
          <div className="ipConsultCard">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <p className="ipConsultStep">Step 1 of 2 — About You</p>
                  <h2>First, tell me a little<br /><em>about yourself.</em></h2>

                  <div className="ipFormRow">
                    <div className="ipFormGroup">
                      <label>Your Name *</label>
                      <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" required />
                    </div>
                    <div className="ipFormGroup">
                      <label>Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(___) ___-____" required />
                    </div>
                  </div>

                  <div className="ipFormGroup">
                    <label>Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
                  </div>

                  <div className="ipFormGroup">
                    <label>Your relationship to the person needing care</label>
                    <select value={form.relation} onChange={(e) => update("relation", e.target.value)}>
                      <option value="">Select one</option>
                      <option>I am the patient</option>
                      <option>Spouse or partner</option>
                      <option>Adult child</option>
                      <option>Sibling</option>
                      <option>Parent</option>
                      <option>Other family member</option>
                      <option>Friend or neighbor</option>
                      <option>Healthcare provider</option>
                    </select>
                  </div>

                  <div className="ipConsultNav">
                    <span />
                    <button type="button" className="navyButton" onClick={() => { if (form.name && form.phone) setStep(2); }}>
                      Continue →
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="ipConsultStep">Step 2 of 2 — About the Situation</p>
                  <h2>Tell me about your<br /><em>loved one's needs.</em></h2>

                  <div className="ipFormRow">
                    <div className="ipFormGroup">
                      <label>Client's First Name</label>
                      <input type="text" value={form.clientName} onChange={(e) => update("clientName", e.target.value)} placeholder="First name" />
                    </div>
                    <div className="ipFormGroup">
                      <label>Approximate Age</label>
                      <input type="text" value={form.clientAge} onChange={(e) => update("clientAge", e.target.value)} placeholder="e.g. 72" />
                    </div>
                  </div>

                  <div className="ipFormGroup">
                    <label>City or area in Palm Beach County</label>
                    <input type="text" value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Wellington, West Palm Beach" />
                  </div>

                  <div className="ipFormGroup">
                    <label>Describe the situation *</label>
                    <textarea value={form.situation} onChange={(e) => update("situation", e.target.value)} placeholder="Share as much or as little as you'd like. There's no wrong answer here." required />
                  </div>

                  <div className="ipFormGroup">
                    <label>How soon do you need support?</label>
                    <select value={form.urgency} onChange={(e) => update("urgency", e.target.value)}>
                      <option value="">Select one</option>
                      <option>Immediately / within days</option>
                      <option>Within the next 1–2 weeks</option>
                      <option>Within the next month</option>
                      <option>Planning ahead — no immediate urgency</option>
                    </select>
                  </div>

                  <div className="ipFormGroup">
                    <label>How did you hear about Wendy Concierge Nursing?</label>
                    <input type="text" value={form.howHeard} onChange={(e) => update("howHeard", e.target.value)} placeholder="Google, referral, Velvet Concierge Care, etc." />
                  </div>

                  <div className="ipConsultNav">
                    <button type="button" className="ipConsultBack" onClick={() => setStep(1)}>← Back</button>
                    <button type="submit" className="navyButton">Submit Request</button>
                  </div>
                </>
              )}
            </form>

            <p className="ipConsultPrivacy">
              Your information is used only to respond to your inquiry. It is never sold or shared.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
