import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import EmotionalSection from '@/components/EmotionalSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <EmotionalSection />
      <GuaranteesSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}