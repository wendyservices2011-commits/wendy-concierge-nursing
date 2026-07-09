"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What is private duty nursing?",
    a: [
      "Private duty nursing means hiring a licensed registered nurse directly to care for someone in their home — not through a home health agency, and not tied to a specific diagnosis or Medicare episode. It's nursing care that continues for as long as you need it, with no arbitrary limits.",
      "The \"private duty\" in the name simply means the nurse is engaged privately — by the client or family — rather than assigned by a hospital or agency. It gives families far more control over who provides care, how often, and for how long.",
    ],
  },
  {
    q: "How is this different from a home health agency?",
    a: [
      "Home health agencies are staffing businesses. They employ nurses and aides and send whoever is available. The nurse who comes Monday may not be the nurse who comes Wednesday. Care is often tied to a specific Medicare-covered episode, meaning it ends when the episode ends — not when your loved one is ready.",
      "I am a private practice. You work directly with me. I get to know your loved one, their baseline, their preferences, and their clinical picture. That continuity is what makes private duty nursing valuable — and what agencies, by design, can't replicate.",
    ],
  },
  {
    q: "Does Medicare or insurance cover this?",
    a: [
      "Medicare does not cover private duty nursing. Medicare's home health benefit covers skilled nursing tied to specific criteria and is time-limited.",
      "Long-term care insurance policies sometimes cover private duty nursing depending on the policy terms. I provide detailed invoices that clients may submit to their long-term care insurance for potential reimbursement. All fees are paid privately and directly.",
    ],
  },
  {
    q: "What conditions and situations do you work with?",
    a: [
      "I work with post-surgical recovery, chronic disease management (diabetes, heart failure, COPD, Parkinson's, dementia), wound care, IV therapy, feeding tube and tracheostomy management, catheter care, and palliative or comfort-focused care.",
      "I also work with families who simply want a registered nurse present — for medication management, regular monitoring, or the peace of mind that comes from knowing someone clinically qualified is keeping watch.",
    ],
  },
  {
    q: "How do we get started?",
    a: [
      "We start with a conversation. Schedule a free consultation or call me directly. I'll ask about your loved one's situation, their current care needs, and what you're hoping to accomplish. From there, if we're a good fit, I'll come to the home for an in-person assessment before we begin.",
      "I don't have a long intake form or a bureaucratic process. I have a phone number and I answer it.",
    ],
  },
  {
    q: "What are your hours?",
    a: [
      "Scheduling is arranged directly and is flexible based on your needs. I offer daytime visits, extended hours, and overnight skilled nursing. Because this is a private practice with a limited client base, availability varies — the sooner you reach out, the better.",
    ],
  },
  {
    q: "What's the difference between Wendy Concierge Nursing and Velvet Concierge Care?",
    a: [
      "Two separate businesses, both founded by me. Wendy Concierge Nursing is a private duty RN practice — for clients who need skilled nursing care that can only be provided by a licensed registered nurse.",
      "Velvet Concierge Care is an AHCA-licensed homemaker and companion service — for non-clinical in-home support: companionship, personal care assistance, medication reminders, meal preparation, errands, and transportation. Many families use both. If you're not sure which fits, reach out — I'll help you figure it out.",
    ],
  },
  {
    q: "What areas do you serve?",
    a: [
      "Palm Beach County, Florida — including Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton. If you're just outside this area, reach out and I'll let you know if I can accommodate you.",
    ],
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faqEditorialInner">
      {/* Tilted photo — sticky as you scroll */}
      <div className="faqPhotoSticky">
        <div className="faqPhotoFrame">
          <Image
            src="/wendy.jpg"
            alt="Wendy Bien-Aime, RN"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>

      {/* Accordion */}
      <div className="faqAccordionCol">
        <h2 className="faqAccordionHead">
          Questions worth<br />
          <em>asking out loud.</em>
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faqAccItem${open === i ? " faqAccOpen" : ""}`}
          >
            <button
              className="faqAccBtn"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <span className="faqAccIcon">+</span>
            </button>
            <div className="faqAccAnswer">
              <div className="faqAccAnswerInner">
                {faq.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
