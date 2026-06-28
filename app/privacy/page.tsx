import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import LegalSection, {
  LegalH2, LegalH3, LegalP, LegalUl, LegalLi, LegalBlock,
} from '@/components/sections/LegalSection';

export const metadata: Metadata = {
  title: 'Privacy Policy — NexivoStudio',
  description: 'Learn how NexivoStudio collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        icon="Users"
        label="Legal"
        title="Privacy"
        highlight="Policy"
        subtitle="We are committed to protecting your personal information and being transparent about how we use it."
        pills={['GDPR Compliant', 'No Data Selling', 'Secure Storage']}
      />

      <LegalSection lastUpdated="June 28, 2026">
        <LegalBlock>
          <LegalH2>1. Introduction</LegalH2>
          <LegalP>
            NexivoStudio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website
            nexivostudio.io and provides digital services including web design, web development, SEO,
            and social media marketing. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or engage our services.
          </LegalP>
          <LegalP>
            By using our website or services you consent to the practices described in this policy.
            If you do not agree, please discontinue use of our website and services.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>2. Information We Collect</LegalH2>
          <LegalH3>Information You Provide Directly</LegalH3>
          <LegalUl>
            <LegalLi>Name, email address, and phone number submitted through contact or inquiry forms.</LegalLi>
            <LegalLi>Project details, budget ranges, and messages you send us.</LegalLi>
            <LegalLi>Billing and payment information processed through our secure payment providers.</LegalLi>
            <LegalLi>Communications you have with us via email, chat, or phone.</LegalLi>
          </LegalUl>
          <LegalH3>Information Collected Automatically</LegalH3>
          <LegalUl>
            <LegalLi>IP address, browser type, operating system, and referring URLs.</LegalLi>
            <LegalLi>Pages visited, time spent on pages, and clickstream data via Google Analytics.</LegalLi>
            <LegalLi>Cookies and similar tracking technologies (see Section 4).</LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>3. How We Use Your Information</LegalH2>
          <LegalP>We use the information we collect to:</LegalP>
          <LegalUl>
            <LegalLi>Respond to your inquiries and deliver the services you request.</LegalLi>
            <LegalLi>Send project updates, invoices, and service-related communications.</LegalLi>
            <LegalLi>Improve our website, services, and user experience.</LegalLi>
            <LegalLi>Comply with legal obligations and enforce our agreements.</LegalLi>
            <LegalLi>Detect and prevent fraud or abuse of our services.</LegalLi>
            <LegalLi>Send marketing communications where you have given consent (you may opt out at any time).</LegalLi>
          </LegalUl>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>4. Cookies</LegalH2>
          <LegalP>
            Our website uses cookies — small text files stored on your device — to enhance your
            browsing experience. We use:
          </LegalP>
          <LegalUl>
            <LegalLi><strong className="text-white/80">Essential cookies</strong> — required for the site to function correctly.</LegalLi>
            <LegalLi><strong className="text-white/80">Analytics cookies</strong> — Google Analytics to understand how visitors use our site (anonymised).</LegalLi>
            <LegalLi><strong className="text-white/80">reCAPTCHA cookies</strong> — Google reCAPTCHA v3 to protect our forms from spam.</LegalLi>
          </LegalUl>
          <LegalP>
            You can disable cookies through your browser settings, though some functionality may
            be affected. By continuing to use our site you consent to our use of cookies.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>5. Third-Party Services</LegalH2>
          <LegalP>
            We may share your information with trusted third parties who assist in operating our
            business, subject to confidentiality agreements:
          </LegalP>
          <LegalUl>
            <LegalLi><strong className="text-white/80">Google Analytics</strong> — website usage analytics.</LegalLi>
            <LegalLi><strong className="text-white/80">Google reCAPTCHA</strong> — spam and bot protection on forms.</LegalLi>
            <LegalLi><strong className="text-white/80">Payment processors</strong> — secure handling of billing transactions.</LegalLi>
            <LegalLi><strong className="text-white/80">Project management tools</strong> — used internally to deliver your project.</LegalLi>
          </LegalUl>
          <LegalP>
            We do not sell, trade, or rent your personal information to third parties for their
            marketing purposes.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>6. Data Security</LegalH2>
          <LegalP>
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. These
            include SSL encryption, secure servers, and restricted internal access. However, no
            method of transmission over the internet is 100% secure and we cannot guarantee
            absolute security.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>7. Data Retention</LegalH2>
          <LegalP>
            We retain personal information for as long as necessary to fulfil the purposes outlined
            in this policy, or as required by law. Client project data is retained for a minimum of
            3 years for legal and accounting purposes. You may request deletion of your data at any
            time (subject to legal retention obligations).
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>8. Your Rights</LegalH2>
          <LegalP>Depending on your location, you may have the right to:</LegalP>
          <LegalUl>
            <LegalLi>Access the personal information we hold about you.</LegalLi>
            <LegalLi>Correct inaccurate or incomplete information.</LegalLi>
            <LegalLi>Request erasure of your personal data (&quot;right to be forgotten&quot;).</LegalLi>
            <LegalLi>Object to or restrict how we process your data.</LegalLi>
            <LegalLi>Data portability — receive your data in a machine-readable format.</LegalLi>
            <LegalLi>Withdraw consent at any time where processing is based on consent.</LegalLi>
          </LegalUl>
          <LegalP>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@nexivostudio.io" className="text-brand-orange hover:underline">
              info@nexivostudio.io
            </a>.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>9. Children&apos;s Privacy</LegalH2>
          <LegalP>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children. If you believe a child has provided us with
            personal data, please contact us immediately and we will delete it promptly.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>10. Changes to This Policy</LegalH2>
          <LegalP>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated &quot;Last updated&quot; date. We encourage you to review this
            policy periodically. Continued use of our website after changes constitutes acceptance
            of the revised policy.
          </LegalP>
        </LegalBlock>

        <LegalBlock>
          <LegalH2>11. Contact Us</LegalH2>
          <LegalP>
            If you have any questions about this Privacy Policy or our data practices, please
            contact us:
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
