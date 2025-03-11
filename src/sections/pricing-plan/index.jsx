import Button from "@/components/button";
import OurPlan from "@/components/our-plan";
import PricingCard from "@/components/pricing-card";
import classnames from "classnames";

const features = [
  { icon: "⭐", title: "Branded big screen interface" },
  { icon: "👨‍💻", title: "Real-time moderation panel" },
  { icon: "🔑", title: "GDPR compliance" },
  { icon: "📱", title: "Recording app (no app required)" },
  { icon: "📸", title: "Shareable recordings" },
  { icon: "🛡️", title: "Private admin console" },
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
      '2-day "live" usage period',
      "14 day data retention",
      "3-day lead time",
      "Email support",
    ],
    popular: false,
  },
  {
    title: "Agency",
    price: "€1,000",
    description:
      "Perfect for agencies or organisations that want to fully customise the Fan Cam experience for their brand.",
    features: [
      "Full branded reskin",
      "Up to 10,000 uploads",
      '7-day "live" usage period',
      "30 day data retention",
      "10 day lead time",
      "Phone support",
    ],
    popular: true,
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
    popular: false,
  },
];
export default function PricingPlan({ otherClasses }) {
  const pricingPlanClasses = classnames(otherClasses, "px-4");

  return (
    <section className={pricingPlanClasses} data-testid="pricing-plan">
      <div className="my-32  text-center max-w-1120 mx-auto">
        <h2 className="text-65 font-bold text-black mb-6 font-instrument-sans">
          Pricing <span className="font-medium italic uppercase">Plan</span>
        </h2>
        <p className="text-3xl font-medium mt-7 mb-12 font-instrument-sans">
          All our plans come with the essentials
        </p>

        <div className="flex items-center justify-center flex-wrap gap-4">
          {features.map((feature, index) => (
            <OurPlan key={index} feature={feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 my-16 lg:my-20">
          <p className="flex-1 font-instrument-sans font-medium text-2rem lg:text-start text-center max-w-[703px] mx-auto lg:mx-0">
            adipisicing elit. Odio quaerat cum omnis officiis repudiandae alias
            praesentium, ipsa culpa cupiditate, eum nobis maxime. Velit sunt,
            alias
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
