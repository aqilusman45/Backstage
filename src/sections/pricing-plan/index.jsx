import Button from "@/components/button";
import OurPlan from "@/components/our-plan";
import PricingCard from "@/components/pricing-card";
import classnames from "classnames";
import Image from "next/image";

const features = [
  { icon: "/svg/brand.svg", title: "Branded big screen interface" },
  { icon: "/svg/real-time.svg", title: "Real-time moderation panel" },
  { icon: "/svg/gdpr.svg", title: "GDPR compliance" },
  { icon: "/svg/recording-app.svg", title: "Recording app (no app required)" },
  { icon: "/svg/shareable-recordings.svg", title: "Shareable recordings" },
  { icon: "/svg/private-aadmin.svg", title: "Private admin console" },
];

const pricingPlans = [
  {
    title: "Enthusiast",
    price: "€100",
    description:
      "Perfect for agencies or organisations that want to fully customise the Fan Cam experience for their brand.",
    features: [
      "Your logo & branding colors",
      "Up to 2,000 uploads",
      "2-day “live” usage period",
      "14 day data retention",
      "3-day lead time",
      "Email support",
    ],
    stripe: true,
  },
  {
    title: "Agency",
    price: "€1,000",
    description:
      "Perfect for agencies or organisations that want to fully customise the Fan Cam experience for their brand.",
    features: [
      "Full branded reskin",
      "Up to 10,000 uploads",
      "7 day “live” usage period",
      "30 day data retention",
      "10 day lead time",
      "Phone support",
    ],
    popular: true,
    stripe: true,
  },
  {
    title: "Enterprise",
    price: "Get A Quote",
    description:
      "Perfect for agencies or organisations that want to fully customise the Fan Cam experience for their brand.",
    features: [
      "Full branded reskin",
      "Unlimited uploads",
      "1 year+ usage period",
      "1 year+ data retention",
      "Flexible lead times",
      "On-site support",
      "Data & video export",
      "Event analytics",
      "Full security audit",
    ],
    stripe: false,
  },
];

export default function PricingPlan({ otherClasses }) {
  const pricingPlanClasses = classnames(otherClasses, "px-6");

  return (
    <section className={pricingPlanClasses} data-testid="pricing-plan">
      <div className="my-32 text-center max-w-1120 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <span className="w-40 hidden sm:block"></span>
          <h2 className="text-65 font-bold order-1 sm:order-0 text-black mb-6 font-instrument-sans uppercase text-center">
            Pricing <span className="font-medium italic">Plan</span>
          </h2>

          <Image
            src="/svg/get-started.svg"
            width={205}
            height={205}
            alt="Get Started Image"
            className="max-w-40 max-h-40 order-0 sm:order-1"
          />
        </div>
        <p className="text-30 font-medium mt-7 mb-12 font-instrument-sans">
          All our plans come with the essentials
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4 mb-20">
          {features.map((feature, index) => (
            <OurPlan key={index} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-32 mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 my-16 lg:my-20">
          <p className="flex-1 font-instrument-sans font-medium text-2rem lg:text-start text-center max-w-[703px] mx-auto lg:mx-0">
            Unsure? We o!er a 100% money back guarantee with all our plans. We
            can also organise a demo. Get in touch quite sure what you need?
          </p>
          <Button
            label="Get Started"
            variant="primary"
            size="large"
            otherClasses="w-full lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
