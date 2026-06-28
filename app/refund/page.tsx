import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import LegalSection, {
  LegalH2, LegalH3, LegalP, LegalUl, LegalLi, LegalBlock,
} from '@/components/sections/LegalSection';

export const metadata: Metadata = {
  title: 'Refund Policy — NexivoStudio',
  description: 'Understand NexivoStudio\'s refund and cancellation policy for digital services.',
};

export default function RefundPage() {
  return (
    <>
      <PageHero
        breadcrumb="Refund Policy"
        icon="Tag"
        label="Legal"
        title="Refund"
        highlight="Policy"
        subtitle="We stand behind our work and are committed to fair outcomes. Here's exactly how refunds and cancellations work."
        pills={['Transparent Process', 'Fair Resolution', '24-Hour Response']}
      />

      <LegalSection lastUpdated="June 28, 2026">
        <LegalBlock>
          <LegalH2>1. Overview</LegalH2>
          <LegalP>
            At NexivoStudio, we take pride in the quality of our work and aim for every client
            to be satisfied. Because our services are custom, creative, and labour-intensive,
            our refund policy reflects the nature of digital work — not physical goods. Please read
            this policy carefully before engaging our services.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>2. Deposits</LegalH2>
          <LegalP>
            All projects require a non-refundable deposit (typically 50% of the total project
            value) before work begins. This deposit covers initial discovery, planning, and the
            allocation of our team&apos;s time to your project. Deposits are not refundable under
            any circumstances once work has commenced.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>3. Project Cancellation</LegalH2>
          <LegalH3>3.1 Cancelled Before Work Begins</LegalH3>
          <LegalP>
            If you cancel a project after paying the deposit but before any work has started
            (within 48 hours of payment), we will refund 50% of the deposit as a goodwill gesture.
            After 48 hours, the full deposit is non-refundable.
          </LegalP>
          <LegalH3>3.2 Cancelled During Active Work</LegalH3>
          <LegalP>
            If you cancel a project while work is in progress:
          </LegalP>
          <LegalUl>
            <LegalLi>The deposit is non-refundable.</LegalLi>
            <LegalLi>You will be invoiced for all work completed beyond the deposit value, calculated at our hourly rate.</LegalLi>
            <LegalLi>All completed deliverables to the cancellation date will be handed over upon receipt of final payment.</LegalLi>
          </LegalUl>
          <LegalH3>3.3 Cancelled After Completion</LegalH3>
          <LegalP>
            Once a project has been delivered, approved, and/or launched, no refund is available
            on the completed work.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>4. Refund Eligibility</LegalH2>
          <LegalP>
            A refund may be considered in the following limited circumstances:
          </LegalP>
          <LegalUl>
            <LegalLi>
              <strong className="text-white/80">Duplicate payment:</strong> If you were charged twice for the same invoice,
              the duplicate charge will be refunded in full within 5 business days.
            </LegalLi>
            <LegalLi>
              <strong className="text-white/80">Service not delivered:</strong> If NexivoStudio fails to deliver the
              agreed service and cannot remedy the issue within a reasonable timeframe, a
              proportional refund of the amount paid beyond the deposit will be issued.
            </LegalLi>
            <LegalLi>
              <strong className="text-white/80">Material deviation from agreed scope:</strong> If our final deliverable
              substantially deviates from the documented project scope and we are unable to
              revise it to match the agreed brief, a partial refund may be negotiated.
            </LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>5. Non-Refundable Items</LegalH2>
          <LegalP>The following are not eligible for refunds under any circumstances:</LegalP>
          <LegalUl>
            <LegalLi>Project deposits once work has commenced.</LegalLi>
            <LegalLi>Domain registration fees (charged by third-party registrars and non-recoverable).</LegalLi>
            <LegalLi>Third-party hosting, software licences, or plugin fees paid on your behalf.</LegalLi>
            <LegalLi>Completed and approved design or development work.</LegalLi>
            <LegalLi>Monthly retainer fees for active maintenance or SEO services already rendered.</LegalLi>
            <LegalLi>Rush fees or expedited delivery surcharges.</LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>6. Monthly Retainer &amp; Subscription Cancellation</LegalH2>
          <LegalP>
            Monthly retainer services (maintenance, SEO, social media management) may be cancelled
            with 30 days written notice. Cancellation takes effect at the end of the current billing
            cycle — we do not offer pro-rated refunds for partial months. No refund is issued for
            the current month&apos;s retainer once the billing date has passed.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>7. Quality Guarantee</LegalH2>
          <LegalP>
            We are committed to delivering quality work. If you are not satisfied with a deliverable,
            we encourage you to raise your concerns before the project is marked complete. We will
            work with you through the agreed revision process to address any issues. Our goal is
            always a happy client — please communicate early rather than requesting a refund.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>8. How to Request a Refund</LegalH2>
          <LegalP>
            To request a refund or raise a billing concern, please contact us within 14 days of
            the invoice date:
          </LegalP>
          <LegalUl>
            <LegalLi>Email: <a href="mailto:info@nexivostudio.io" className="text-brand-orange hover:underline">info@nexivostudio.io</a></LegalLi>
            <LegalLi>Include your full name, project name, invoice number, and reason for the request.</LegalLi>
          </LegalUl>
          <LegalP>
            We will acknowledge your request within 1 business day and aim to resolve all refund
            requests within 7 business days. Approved refunds are processed back to the original
            payment method within 5–10 business days depending on your bank.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>9. Disputes</LegalH2>
          <LegalP>
            If you are dissatisfied with our resolution of a refund request, we encourage you to
            escalate in writing to our management team. We will always attempt to resolve disputes
            fairly and amicably. If an agreement cannot be reached, disputes shall be handled in
            accordance with the governing law clause in our Terms of Service.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>10. Changes to This Policy</LegalH2>
          <LegalP>
            NexivoStudio reserves the right to update this Refund Policy at any time. The policy
            in effect at the time of your project agreement governs that engagement. Updates will
            be published on this page with a revised &quot;Last updated&quot; date.
          </LegalP>
        </LegalBlock>
      </LegalSection>
    </>
  );
}
