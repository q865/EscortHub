import ConfidentialSection from '@/components/ConfidentialSection';
import FinalSection from '@/components/FinalSection';
import OrganizationSteps from '@/components/OrganizationSteps';
import ServiceAdvantages from '@/components/ServiceAdvantages';
import WeekendOrganizer from '@/components/WeekendOrganizer';

export default function Home() {
  return (
    <main>
      <WeekendOrganizer />
      <ConfidentialSection />
      <ServiceAdvantages />
      <OrganizationSteps />
      <FinalSection />
    </main>
  );
}