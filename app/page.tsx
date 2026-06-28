import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Portfolio from '@/components/sections/Portfolio';
import Pricing from '@/components/sections/Pricing';
import Blog from '@/components/sections/Blog';
import Newsletter from '@/components/sections/Newsletter';
import ContactUs from '@/components/sections/ContactUs';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <Portfolio />
      <Pricing />
      <Blog />
      <Newsletter />
      <ContactUs />
    </>
  );
}
