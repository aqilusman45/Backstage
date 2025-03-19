import Heading from "@/components/heading";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function FilledWithFeature({ otherClasses }) {
  const filledWithFeatureClasses = classnames(
    otherClasses,
    "my-16 lg:my-120 mx-6 overflow-x-clip scroll-mt-40",
  );

  const { filledWithFeatureData } = homePageMocks;

  return (
    <section
      className={filledWithFeatureClasses}
      data-testid="filled-with-feature"
      id="filled-with-feature"
    >
      <div className="max-w-1120 mx-auto">
        <Heading title="FILLED WITH" subTitle="FEATURES" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-center mt-10 lg:mt-14">
          <div className="flex flex-col gap-6">
            {filledWithFeatureData.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-black/10 h-full flex flex-col"
              >
                <div className="flex items-center gap-5 border-b border-black/15 border-dashed pb-4 pr-10">
                  <Image
                    src={feature.icon}
                    width={24}
                    height={24}
                    alt={feature.icon}
                    className="h-6 w-6"
                  />
                  <h3 className="text-xl font-semibold text-black font-instrument-sans">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base text-gray-900 font-normal font-instrument-sans flex-grow pt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/png/filled-with-feature.png"
              alt="Fan Cam"
              width={400}
              height={632}
              className="rounded-lg w-full h-auto min-h-648"
            />
          </div>

          <div className="flex flex-col gap-6">
            {filledWithFeatureData.slice(3).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-black/10 h-full flex flex-col"
              >
                <div className="flex items-center gap-5 border-b border-black/15 border-dashed pb-4 pr-10">
                  <Image
                    src={feature.icon}
                    width={24}
                    height={24}
                    alt={feature.icon}
                    className="h-6 w-6"
                  />
                  <h3 className="text-xl font-semibold text-black font-instrument-sans">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base text-gray-900 font-normal font-instrument-sans flex-grow pt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
