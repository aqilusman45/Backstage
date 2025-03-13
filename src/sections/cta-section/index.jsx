import Button from "@/components/button";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";

export default function CtaSection({ otherClasses }) {
  const ctaSectionClasses = classnames(otherClasses, "mx-6");
  const { cta } = homePageMocks;
  return (
    <section className={ctaSectionClasses} data-testid="cta-section">
      <div className="max-w-1120 mx-auto px-6 bg-primary px-6 lg:px-28 py-16 rounded-2xl my-14 lg:my-20">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-65 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center">
          {cta.title}
          <span className="font-medium italic">first?</span>
        </h2>
        <p className="text-xl font-normal my-6 font-instrument-sans text-center lg:px-32 ">
          {cta.text}
        </p>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5">
          <Button
            label="Book a Free Intro Call"
            variant="secondary"
            size="small"
            otherClasses="w-full lg:w-auto"
          />
          <Button
            label="Or send an email"
            variant="outline"
            size="small"
            otherClasses="w-full lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
