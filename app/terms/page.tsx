import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import LegalSection, {
  LegalH2, LegalH3, LegalP, LegalUl, LegalLi, LegalBlock,
} from '@/components/sections/LegalSection';

export const metadata: Metadata = {
  title: 'Terms of Service — NexivoStudio',
  description: 'Read the Terms of Service governing your use of NexivoStudio\'s website and digital services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms of Service"
        icon="BookOpen"
        label="Legal"
        title="Terms of"
        highlight="Service"
        subtitle="Please read these terms carefully before engaging our services or using our website."
        pills={['Clear & Fair', 'No Hidden Clauses', 'Plain Language']}
      />

      <LegalSection lastUpdated="June 28, 2026">
        <LegalBlock>
          <LegalH2>1. Agreement to Terms</LegalH2>
          <LegalP>
            By accessing nexivostudio.io or engaging NexivoStudio for any service, you agree to be
            bound by these Terms of Service and all applicable laws and regulations. If you do not
            agree with any of these terms, you may not use our website or services. These terms
            form a legally binding agreement between you and NexivoStudio.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>2. Services</LegalH2>
          <LegalP>
            NexivoStudio provides digital services including, but not limited to, web design, web
            development, search engine optimisation (SEO), social media marketing, hosting &amp;
            domain management, and website maintenance. The specific scope, deliverables, timeline,
            and pricing for each engagement are agreed upon in a separate project proposal or
            service agreement.
          </LegalP>
          <LegalH3>2.1 Project Scope</LegalH3>
          <LegalP>
            Any work outside the agreed scope will be subject to a Change Order. We will provide
            a written estimate for additional work and obtain your approval before proceeding.
            Scope changes may affect the project timeline and cost.
          </LegalP>
          <LegalH3>2.2 Timelines</LegalH3>
          <LegalP>
            Project timelines are estimates based on prompt client feedback and material delivery.
            Delays caused by late content provision, revision cycles exceeding the agreed number,
            or failure to respond within 5 business days may extend the timeline without penalty
            to NexivoStudio.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>3. Payment Terms</LegalH2>
          <LegalUl>
            <LegalLi>A non-refundable deposit (typically 50%) is required before work commences.</LegalLi>
            <LegalLi>The remaining balance is due upon project completion, prior to final file delivery or site launch.</LegalLi>
            <LegalLi>Retainer and maintenance services are billed monthly, in advance.</LegalLi>
            <LegalLi>Invoices are payable within 7 days of issue unless otherwise agreed in writing.</LegalLi>
            <LegalLi>Late payments accrue interest at 1.5% per month after the due date.</LegalLi>
            <LegalLi>We reserve the right to suspend services on accounts overdue by more than 14 days.</LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>4. Intellectual Property</LegalH2>
          <LegalH3>4.1 Ownership Transfer</LegalH3>
          <LegalP>
            Upon receipt of full payment, NexivoStudio transfers ownership of all custom work
            (designs, code, copy) created specifically for your project. Until full payment is
            received, all work remains the intellectual property of NexivoStudio.
          </LegalP>
          <LegalH3>4.2 Third-Party Assets</LegalH3>
          <LegalP>
            Projects may incorporate third-party assets (stock images, fonts, plugins, frameworks)
            governed by their own licences. NexivoStudio will ensure appropriate licences are
            acquired, and associated costs will be itemised separately or included in the project
            estimate.
          </LegalP>
          <LegalH3>4.3 Portfolio Rights</LegalH3>
          <LegalP>
            Unless you request otherwise in writing, NexivoStudio reserves the right to display
            completed work in our portfolio and marketing materials.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>5. Client Responsibilities</LegalH2>
          <LegalP>You agree to:</LegalP>
          <LegalUl>
            <LegalLi>Provide accurate, complete, and timely content, materials, and feedback.</LegalLi>
            <LegalLi>Ensure you hold all necessary rights to any content, images, or materials you supply.</LegalLi>
            <LegalLi>Designate a single point of contact with authority to approve decisions.</LegalLi>
            <LegalLi>Not use our services for any unlawful, deceptive, or harmful purpose.</LegalLi>
            <LegalLi>Keep login credentials and access details confidential and secure.</LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>6. Revisions</LegalH2>
          <LegalP>
            Each project includes a defined number of revision rounds as specified in your project
            proposal (typically 2–3 rounds per deliverable). A revision is defined as minor
            adjustments to approved work — not a redesign or change of direction. Additional
            revision rounds beyond the agreed number are billed at our hourly rate.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>7. Confidentiality</LegalH2>
          <LegalP>
            Both parties agree to keep confidential any proprietary or sensitive information
            shared during the engagement. This obligation survives termination of the agreement
            for a period of 2 years.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>8. Limitation of Liability</LegalH2>
          <LegalP>
            NexivoStudio shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages, including loss of profits, revenue, data, or business
            opportunities, arising from your use of our services or website, even if we have been
            advised of the possibility of such damages.
          </LegalP>
          <LegalP>
            Our total liability to you for any claim arising under these terms shall not exceed the
            total fees paid by you to NexivoStudio in the 3 months preceding the claim.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>9. Termination</LegalH2>
          <LegalH3>9.1 By Client</LegalH3>
          <LegalP>
            You may terminate a project at any time with written notice. All work completed to
            the termination date is billable. The initial deposit is non-refundable. See our
            Refund Policy for full details.
          </LegalP>
          <LegalH3>9.2 By NexivoStudio</LegalH3>
          <LegalP>
            We reserve the right to terminate an engagement at any time if you breach these terms,
            fail to make payment, or act in a manner that is abusive or harmful. In such cases,
            payment is due for all work completed to date.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>10. Warranties &amp; Disclaimer</LegalH2>
          <LegalP>
            NexivoStudio warrants that services will be performed in a professional manner consistent
            with industry standards. We do not warrant that our services will achieve specific
            business outcomes (e.g., guaranteed search rankings, conversion rates, or revenue
            targets), as these depend on many factors outside our control.
          </LegalP>
          <LegalP>
            Our website and services are provided &quot;as is&quot; without warranties of any kind,
            express or implied.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>11. Governing Law</LegalH2>
          <LegalP>
            These terms are governed by and construed in accordance with applicable law. Any
            disputes arising from these terms shall first be attempted to be resolved through
            good-faith negotiation. If unresolved, disputes shall be referred to binding
            arbitration or the courts of competent jurisdiction.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>12. Changes to These Terms</LegalH2>
          <LegalP>
            We reserve the right to update these Terms of Service at any time. Continued use of
            our website or services after changes constitutes your acceptance of the revised terms.
            We will notify active clients of material changes by email.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>13. Contact Us</LegalH2>
          <LegalP>
            Questions about these terms? Reach us at:
          </LegalP>
          <LegalUl>
            <LegalLi>Email: <a href="mailto:info@nexivostudio.io" className="text-brand-orange hover:underline">info@nexivostudio.io</a></LegalLi>
            <LegalLi>Website: nexivostudio.io/contact</LegalLi>
          </LegalUl>
        </LegalBlock>
      </LegalSection>
    </>
  );
}
