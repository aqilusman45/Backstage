import Navbar from "@/components/navbar";
import AllBoxesTicked from "@/sections/all-boxes-ticked";
import CtaSection from "@/sections/cta-section";
import EventToLife from "@/sections/event-to-life";
import FaqSection from "@/sections/faq-section";
import FilledWithFeature from "@/sections/filled-with-feature";
import HomeHeroSection from "@/sections/home-hero-section";
import HowItWork from "@/sections/how-it-work";
import PricingPlan from "@/sections/pricing-plan";
import TopFeatures from "@/sections/top-features";
import TypeOfEvent from "@/sections/type-of-event";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <HowItWork />
      <FilledWithFeature />
      <TypeOfEvent />
      <EventToLife />
      <PricingPlan />
      <TopFeatures />
      <FaqSection />
      <CtaSection />
      <AllBoxesTicked />
    </>
  );
}
