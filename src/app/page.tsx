import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';
import ModelsGallery from '@/components/ModelsGallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <ModelsGallery />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
}
