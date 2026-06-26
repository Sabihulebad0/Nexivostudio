import type { Metadata, Viewport } from 'next';
import { Afacad, Quicksand } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/context/ModalContext';
import ScheduleCallModal from '@/components/ui/ScheduleCallModal';

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
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScheduleCallModal />
        </ModalProvider>
      </body>
    </html>
  );
}
