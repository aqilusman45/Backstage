import Button from "@/components/button";
import OurPlan from "@/components/our-plan";
import PricingCard from "@/components/pricing-card";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function PricingPlan({ otherClasses }) {
  const pricingPlanClasses = classnames(otherClasses, "px-6");
  const { title, subTitle, pricingPlans, text, image, features, subText } =
    homePageMocks;
  return (
    <section className={pricingPlanClasses} data-testid="pricing-plan">
      <div className="my-32 text-center max-w-1120 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <span className="w-40 hidden sm:block"></span>
          <h2 className="text-65 font-bold order-1 sm:order-0 text-black mb-6 font-instrument-sans uppercase text-center">
            {title} <span className="font-medium italic">{subTitle}</span>
          </h2>

          <Image
            src={image}
            width={205}
            height={205}
            alt="Get Started Image"
            className="max-w-40 max-h-40 order-0 sm:order-1"
          />
        </div>
        <p className="text-30 font-medium mt-7 mb-12 font-instrument-sans">
          {text}
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4 mb-20">
          {features.map((feature, index) => (
            <OurPlan key={index} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-32 mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 my-16 lg:my-20">
          <p className="flex-1 font-instrument-sans font-medium text-2rem lg:text-start text-center max-w-[703px] mx-auto lg:mx-0">
            {subText}
          </p>
          <Button
            label="Get Started"
            variant="primary"
            size="large"
            otherClasses="w-full lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
