import type { Metadata, Viewport } from 'next';
import { Afacad, Quicksand } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/context/ModalContext';
import ScheduleCallModal from '@/components/ui/ScheduleCallModal';
import PricingInquiryModal from '@/components/ui/PricingInquiryModal';
import Preloader from '@/components/ui/Preloader';

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-host-grotesk',
  display: 'swap',
});
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexivoStudio — Digital Agency',
  description:
    'NexivoStudio is a full-service digital agency specializing in web design, web development, SEO, and social media marketing. We build digital experiences that drive growth.',
  keywords: ['digital agency', 'web design', 'web development', 'SEO', 'social media marketing'],
  authors: [{ name: 'NexivoStudio' }],
};

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacad.variable} ${quicksand.variable}`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-cream antialiased font-bricolage">
        <Preloader />
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScheduleCallModal />
          <PricingInquiryModal />
        </ModalProvider>

        {/* Google reCAPTCHA Enterprise */}
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCR6PX9DWW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCR6PX9DWW');
          `}
        </Script>
      </body>
    </html>
  );
}
