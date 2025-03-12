"use client";

import classnames from "classnames";
import Image from "next/image";

export default function OurPlan({ otherClasses, feature }) {
  const ourPlanClasses = classnames(
    otherClasses,
    "flex-1 w-full md:w-auto border border-primary/70 rounded-lg px-5 py-7 bg-white hover:shadow-md transition whitespace-nowrap",
  );

  return (
    <div className={ourPlanClasses} data-testid="our-plan">
      <div className="flex items-center">
        <Image
          src={feature.icon}
          width={40}
          height={40}
          alt={feature.icon}
          className="rounded-md w-10 h-10"
        />
        <span className="text-base font-medium  md:text-xxii font-medium font-instrument-sans px-7">
          {feature?.title}
        </span>
      </div>
    </div>
  );
}
