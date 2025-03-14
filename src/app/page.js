import AllBoxesTicked from "@/sections/all-boxes-ticked";
import CtaSection from "@/sections/cta-section";
import PricingPlan from "@/sections/pricing-plan";
import TopFeatures from "@/sections/top-features";

export default function Home() {
  return (
    <>
      <PricingPlan />
      <TopFeatures />
      <CtaSection />
      <AllBoxesTicked />
    </>
  );
}
