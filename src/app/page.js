import AllBoxesTicked from "@/sections/all-boxes-ticked";
import CtaSection from "@/sections/cta-section";
import EventToLife from "@/sections/event-to-life";
import FaqSection from "@/sections/faq-section";
import PricingPlan from "@/sections/pricing-plan";
import TopFeatures from "@/sections/top-features";

export default function Home() {
  return (
    <>
      <EventToLife />
      <PricingPlan />
      <TopFeatures />
      <FaqSection />
      <CtaSection />
      <AllBoxesTicked />
    </>
  );
}
