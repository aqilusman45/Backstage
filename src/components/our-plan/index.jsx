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
      <div className="flex items-center gap-4 pr-3">
        <Image
          src="/fake-image.jpg"
          width={24}
          height={24}
          alt="fake image"
          className="rounded-md"
        />
        <span className="text-base font-medium  md:text-xxii font-medium font-instrument-sans">
          {feature?.title}
        </span>
      </div>
    </div>
  );
}
