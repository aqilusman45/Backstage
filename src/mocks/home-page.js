export const homePageMocks = {
  title: "Pricing",
  subTitle: "Plan",
  image: "/svg/get-started.svg",
  text: "All our plans come with the essentials",
  features: [
    { icon: "/svg/brand.svg", title: "Branded big screen interface" },
    { icon: "/svg/real-time.svg", title: "Real-time moderation panel" },
    { icon: "/svg/gdpr.svg", title: "GDPR compliance" },
    {
      icon: "/svg/recording-app.svg",
      title: "Recording app (no app required)",
    },
    { icon: "/svg/shareable-recordings.svg", title: "Shareable recordings" },
    { icon: "/svg/private-aadmin.svg", title: "Private admin console" },
  ],
  pricingPlans: [
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
      size: "small",
    },
  ],
  subText: `Unsure? We o!er a 100% money back guarantee with all our plans. We
            can also organise a demo. Get in touch quite sure what you need?`,

  cta: {
    title: "Prefer to talk it through first?",
    text: `If there's something we've missed, please get in touch and we can help answer your questions or queries.`,
  },
};
