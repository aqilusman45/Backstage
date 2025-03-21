"use client";
import Button from "@/components/button";
import Heading from "@/components/heading";
import OurPlan from "@/components/our-plan";
import PricingCard from "@/components/pricing-card";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PricingPlan({ otherClasses }) {
  const pricingPlanClasses = classnames(otherClasses, "px-6 scroll-mt-32");
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
    <section
      className={pricingPlanClasses}
      data-testid="pricing-plan"
      id="pricing-plan"
    >
      <div className="my-14 md:my-20 lg:my-120 text-center max-w-1120 mx-auto overflow-x-clip">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <span className="w-40 hidden md:block"></span>
          <Heading title={title} subTitle={subTitle} />

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
            "grid grid-cols-1 sm:grid-cols-2 xl:flex items-center justify-center flex-wrap gap-4 mb-14 md:mb-20 lg:mb-120  fade-in",
          )}
        >
          {features.map((feature, index) => (
            <OurPlan key={index} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-14 md:my-20 lg:my-120 ">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div
          ref={scrollRef}
          className={classnames(
            "flex flex-wrap items-center justify-between gap-4 my-14 md:my-20 lg:my-120 px-4",
            hasScrolled ? "text-fade" : "",
          )}
        >
          <p className="flex-1 font-instrument-sans font-medium text-2xl lg:text-2rem lg:text-start text-center max-w-703 mx-auto lg:mx-0">
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
