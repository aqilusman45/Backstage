import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";

export default function AllBoxesTicked({ otherClasses }) {
  const allBoxesTickedClasses = classnames(
    otherClasses,
    "my-14 lg:my-120 mx-6",
  );
  const { allBoxFeatures, allBoxTitle, allBoxText, allBoxSubText } =
    homePageMocks;

  return (
    <section className={allBoxesTickedClasses} data-testid="all-boxes-ticked">
      <div className="max-w-1120 mx-auto text-center">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-65 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center">
          {allBoxTitle}{" "}
          <span className="font-medium italic">{allBoxSubText}</span>
        </h2>

        <p className="text-lg text-gray-900 font-normal font-instrument-sans text-center flex-grow mt-5 mb-12 max-w-2xl mx-auto">
          {allBoxText}
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {allBoxFeatures.map(({ borderRight, description, title }, index) => (
            <div
              key={index}
              className={classnames(
                "bg-white border border-black/20 border-dashed text-left border-l-0 border-r-0 py-16 px-6",
                index % 2 !== 1 ? "sm:border-r" : "sm:border-l-0",
                "lg:border-r",
                borderRight && "lg:border-r-0",
              )}
            >
              <h4 className="text-xl font-semibold text-black font-instrument-sans mb-4 text-center">
                {title}
              </h4>
              <p className="text-base text-gray-900 font-normal font-instrument-sans text-center flex-grow">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
