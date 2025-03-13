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

  featureSections: [
    {
      title: "Top Features",
      data: [
        "Big-screen app",
        "Fan recording app",
        "Real-time moderation panel",
        "Shareable recordings",
        "Consent tracking & GDPR",
      ],
      isBoolean: true,
      key: "features",
    },
    { title: "Custom branding", data: "branding" },
    { title: "Upload limit", data: "uploadLimit", header: true },
    { title: "Usage period", data: "usagePeriod" },
    { title: "Data retention period", data: "dataRetention" },
    { title: "Support", data: "support", header: true },
    { title: "Lead-time", data: "leadTime" },
    {
      title: "Additional Features",
      data: [
        { label: "Data & video export", key: "dataExport" },
        { label: "Event analytics", key: "eventAnalytics" },
        { label: "Security audit", key: "securityAudit" },
        { label: "Custom features", key: "customFeatures" },
      ],
      isBoolean: true,
    },
  ],

  plans: [
    {
      name: "Enthusiast",
      features: [true, true, true, true, true],
      branding: "Logo & Colours Only",
      uploadLimit: "2,000",
      usagePeriod: "2 days",
      dataRetention: "14 days",
      support: "Email",
      leadTime: "3 working days",
    },
    {
      name: "Agency",
      features: [true, true, true, true, true],
      branding: "Custom Reskin",
      uploadLimit: "10,000 +",
      usagePeriod: "7 days +",
      dataRetention: "30 days",
      support: "Phone",
      leadTime: "10 working days",
    },
    {
      name: "Enterprise",
      features: [true, true, true, true, true],
      branding: "Custom Reskin",
      uploadLimit: "Unlimited",
      usagePeriod: "Up to 1 year",
      dataRetention: "Up to 1 year",
      support: "On-Site",
      leadTime: "Flexible",
    },
  ],
};
