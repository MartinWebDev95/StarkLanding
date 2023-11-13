import AISection from './components/AISection';
import AccessibilityToolsSection from './components/AccessibilityToolsSection';
import CommunitySection from './components/CommunitySection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import GetStartedSection from './components/GetStartedSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SuiteSection from './components/SuiteSection';
import TestimonialSection from './components/TestimonialSection';
import TrustedCompaniesSection from './components/TrustedCompaniesSection';

function Stark() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AISection />
        <TrustedCompaniesSection />
        <AccessibilityToolsSection />
        <SuiteSection />
        <CommunitySection />
        <TestimonialSection />
        <GetStartedSection />
        <FeaturesSection />
      </main>

      <Footer />
    </>
  );
}

export default Stark;
