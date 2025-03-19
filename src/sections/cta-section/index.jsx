import Button from "@/components/button";
import Heading from "@/components/heading";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function CtaSection({ otherClasses }) {
  const ctaSectionClasses = classnames(otherClasses, "mx-6 my-14 lg:my-20");
  const { cta } = homePageMocks;
  return (
    <section className={ctaSectionClasses} data-testid="cta-section">
      <div className="max-w-1120 mx-auto px-6 bg-primary px-6 lg:px-28 rounded-2xl relative overflow-hidden">
        <Image
          src="/svg/cta-background.svg"
          width={1120}
          height={500}
          alt="cta-background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative py-16 ">
          <Heading title={cta.title} subTitle={cta.subTitle} />
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
      </div>
    </section>
  );
}
