"use client";
import Button from "@/components/button";
import OurPlan from "@/components/our-plan";
import PricingCard from "@/components/pricing-card";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PricingPlan({ otherClasses }) {
  const pricingPlanClasses = classnames(otherClasses, "px-6");
  const { title, subTitle, pricingPlans, text, image, features, subText } =
    homePageMocks;
  const scrollRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !hasScrolled) {
        const rect = scrollRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          scrollRef.current.scrollIntoView({ behavior: "smooth" });
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <section className={pricingPlanClasses} data-testid="pricing-plan">
      <div className="my-14 lg:my-20 text-center max-w-1120 mx-auto overflow-x-clip">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <span className="w-40 hidden md:block"></span>
          <h2 className="text-center text-4xl sm:text-5xl lg:text-65 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center">
            {title} <span className="font-medium italic">{subTitle}</span>
          </h2>

          <Image
            src={image}
            width={205}
            height={205}
            alt="Get Started Image"
            className="max-w-205 max-h-205 order-0 sm:order-1 animate-[spin_10s_linear_infinite]"
          />
        </div>
        <p className="text-2xl lg:text-30 font-medium mt-7 mb-12 font-instrument-sans">
          {text}
        </p>
        <div
          className={classnames(
            "grid grid-cols-1 sm:grid-cols-2 xl:flex items-center justify-center flex-wrap gap-4 mb-20 fade-in",
          )}
        >
          {features.map((feature, index) => (
            <OurPlan key={index} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-14 lg:mt-32 lg:mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div
          ref={scrollRef}
          className={classnames(
            "flex flex-wrap items-center justify-between gap-4 my-14 lg:my-20 px-4",
            hasScrolled ? "text-fade" : "",
          )}
        >
          <p className="flex-1 font-instrument-sans font-medium text-2xl lg:text-2rem lg:text-start text-center max-w-[703px] mx-auto lg:mx-0">
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
