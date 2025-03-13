"use client";

import classnames from "classnames";
import Image from "next/image";

export default function OurPlan({ otherClasses, feature }) {
  const ourPlanClasses = classnames(
    otherClasses,
    "xl:flex-1 w-full md:w-auto border border-primary/70 rounded-lg px-2 md:px-3 lg:px-5 py-4 lg:py-5 bg-white hover:shadow-md transition whitespace-nowrap",
  );

  return (
    <div className={ourPlanClasses} data-testid="our-plan">
      <div className="flex items-center gap-1">
        <Image
          src={feature.icon}
          width={40}
          height={40}
          alt={feature.icon}
          className="rounded-md h-8 w-8 lg:w-10 lg:h-10"
        />
        <span className="text-base font-medium  lg:text-xxii font-medium font-instrument-sans px-2 md:px-4 lg:px-7">
          {feature?.title}
        </span>
      </div>
    </div>
  );
}
