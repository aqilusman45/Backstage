import classnames from "classnames";
import Button from "../button";
import Image from "next/image";
import Link from "next/link";

export default function PricingCard({
  otherClasses,
  title,
  price,
  description,
  features,
  popular,
  stripe,
  size,
}) {
  const pricingCardClasses = classnames(
    otherClasses,
    "border border-black/15 rounded-3xl px-3 py-7 bg-white relative ",
    popular ? "border-primary mt-12 md:mt-0" : "mt-0",
  );
  return (
    <div className={pricingCardClasses} data-testid="pricing-plan">
      {popular && (
        <div className="text-center text-sm font-semibold bg-primary w-full text-white py-12 rounded-t-3xl absolute -top-14 -z-10 left-0">
          <span className="pb-4 -mt-8 block h-full text-xl text-black font-normal">
            Most Popular
          </span>
        </div>
      )}
      <div className="h-full flex flex-col justify-between gap-3">
        <div>
          <h3 className="text-xl font-instrument-sans font-medium italic text-center">
            {title}
          </h3>
          <p
            className={classnames(
              size == "small" ? "text-40 py-2" : "text-50 ",
              "font-semibold text-center my-4 font-instrument-sans",
            )}
          >
            {price}
          </p>
          <p className="text-base text-gray-600 text-center flex-grow mb-5 mb-7">
            {description}
          </p>
          <Button
            label="Get Started"
            variant="primary"
            size="medium"
            otherClasses="w-full"
          />
        </div>

        <ul className="mt-4 text-sm space-y-2 flex-1 px-5">
          <li className="text-xl font-medium font-instrument-sans text-start mb-2 mt-8">
            What's included:
          </li>
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-1 text-base text-medium text-black/80 font-instrument-sans "
            >
              <Image
                src="/svg/pricing-tool-list.svg"
                width={20}
                height={20}
                alt="Get Started Image"
                className="max-w-5 max-h-5 object-cover"
              />
              {feature}
            </li>
          ))}
        </ul>
        {stripe && (
          <div className="mt-4 flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center gap-2  text-black text-base font-instrument-sans font-normal"
            >
              Paid via |{" "}
              <Image
                src="/svg/stripe.svg"
                width={65}
                height={30}
                alt="Get Started Image"
                className="max-w-16 max-h-16 object-cover"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
