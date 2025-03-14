import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function TopFeatures({ otherClasses }) {
  const topFeaturesClasses = classnames(otherClasses, "mx-6");
  const { featureSections, plansData } = homePageMocks;

  return (
    <section className={topFeaturesClasses} data-testid="top-features">
      <div className="max-w-1120 mx-auto overflow-hidden rounded-2xl my-14 lg:my-20 border border-black/10 ">
        <div className="overflow-x-auto">
          <table className="min-w-800 w-full border-collapse">
            <thead>
              <tr className="bg-gray-300 py-5">
                <th className="p-4 text-left text-lg text-black font-instrument-sans font-semibold pl-10">
                  Top Features
                </th>
                {plansData.plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="p-4 text-center text-lg text-black font-instrument-sans font-semibold"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureSections.map((section, sectionIndex) => (
                <tr
                  key={sectionIndex}
                  className={classnames(
                    "border-t border-black/10 py-5",
                    section?.header ? "bg-gray-400" : "bg-white",
                  )}
                >
                  <td className="p-4 font-normal font-instrument-sans text-base pl-10 text-black/60">
                    {section.title}
                  </td>
                  {plansData.plans.map((plan, planIndex) => (
                    <td key={planIndex} className="p-4 text-center">
                      {section.isBoolean ? (
                        plan.features[section.data] ? (
                          <Image
                            src="/svg/pricing-tool-list.svg"
                            width={24}
                            height={24}
                            alt="Check"
                            className="max-w-6 max-h-6 object-cover mx-auto"
                          />
                        ) : (
                          <Image
                            src="/svg/cross.svg"
                            width={24}
                            height={24}
                            alt="Cross"
                            className="max-w-6 max-h-6 object-cover mx-auto"
                          />
                        )
                      ) : (
                        <span className="px-4 block font-normal font-instrument-sans text-base text-black/60">
                          {plan.features[section.data]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
