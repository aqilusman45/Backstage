import AllBoxesTicked from "@/sections/all-boxes-ticked";
import CtaSection from "@/sections/cta-section";
import FaqSection from "@/sections/faq-section";
import FilledWithFeature from "@/sections/filled-with-feature";
import PricingPlan from "@/sections/pricing-plan";
import TopFeatures from "@/sections/top-features";

export default function Home() {
  return (
    <>
      <FilledWithFeature />
      <PricingPlan />
      <TopFeatures />
      <FaqSection />
      <CtaSection />
      <AllBoxesTicked />
    </>
  );
}
