import classnames from "classnames";
import Button from "../button";

export default function PricingCard({
  otherClasses,
  title,
  price,
  description,
  features,
  popular,
}) {
  const pricingCardClasses = classnames("h-full", otherClasses);
  return (
    <div className={pricingCardClasses} data-testid="pricing-card">
      <div
        className={classnames(
          "h-full border border-primary/70 rounded-[20px] my-12 p-6 bg-white relative flex flex-col",
          popular ? "border-primary/85" : "",
        )}
      >
        {popular && (
          <div className="hidden lg:block absolute -top-16 -z-10 left-1/2 -translate-x-1/2 bg-primary py-8 px-3  rounded-t-[20px] w-full font-medium text-20 font-instrument-sans">
            <span className="-mt-3 block">Most Popular</span>
          </div>
        )}

        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-instrument-sans font-medium italic text-center">
            {title}
          </h3>
          <p className="text-5xl font-semibold text-center my-4 ">{price}</p>
          <p className="text-sm text-gray-600 text-center flex-grow mb-5 mb-7">
            {description}
          </p>
          <Button
            label="Get Started"
            variant="primary"
            size="medium"
            otherClasses="w-full"
          />
        </div>

        <div className="mt-6 flex flex-col justify-between h-full">
          <ul className="mt-4 text-sm text-gray-700 flex-grow flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 py-1">
                <span className="p-2 rounded-full bg-primary w-6 h-6 flex items-center justify-center">
                  ✓
                </span>{" "}
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-base font-instrument-sans font-normal text-center text-gray-500 mt-4">
            Paid via |{" "}
            <span className="text-primary text-2xl font-bold">stripe</span>
          </p>
        </div>
      </div>
    </div>
  );
}
