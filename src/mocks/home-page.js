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
    subTitle: "first?",
    text: `If there's something we've missed, please get in touch and we can help answer your questions or queries.`,
  },

  plansData: {
    plans: [
      {
        name: "Enthusiast",
        features: {
          big_screen_app: true,
          fan_recording_app: true,
          real_time_moderation_panel: true,
          shareable_recordings: true,
          consent_tracking_gdpr: true,
          custom_branding: "Logo & Colours Only",
          upload_limit: "2,000",
          usage_period: "2 days",
          data_retention_period: "14 days",
          support: "Email",
          lead_time: "3 working days",
          data_video_export: false,
          event_analytics: false,
          security_audit: false,
          custom_features: false,
        },
      },
      {
        name: "Agency",
        features: {
          big_screen_app: true,
          fan_recording_app: true,
          real_time_moderation_panel: true,
          shareable_recordings: true,
          consent_tracking_gdpr: true,
          custom_branding: "Custom Reskin",
          upload_limit: "10,000+",
          usage_period: "7 days+",
          data_retention_period: "30 days",
          support: "Phone",
          lead_time: "10 working days",
          data_video_export: true,
          event_analytics: true,
          security_audit: false,
          custom_features: false,
        },
      },
      {
        name: "Enterprise",
        features: {
          big_screen_app: true,
          fan_recording_app: true,
          real_time_moderation_panel: true,
          shareable_recordings: true,
          consent_tracking_gdpr: true,
          custom_branding: "Custom Reskin",
          upload_limit: "Unlimited",
          usage_period: "Up to 1 year",
          data_retention_period: "Up to 1 year",
          support: "On-Site",
          lead_time: "Flexible",
          data_video_export: true,
          event_analytics: true,
          security_audit: true,
          custom_features: true,
        },
      },
    ],
    additional_pricing: "Additional topics priced at €100 additional",
  },

  featureSections: [
    { title: "Big-screen app", isBoolean: true, data: "big_screen_app" },
    {
      title: "Fan recording app",
      isBoolean: true,
      data: "fan_recording_app",
      header: true,
    },
    {
      title: "Real-time moderation panel",
      isBoolean: true,
      data: "real_time_moderation_panel",
    },
    {
      title: "Shareable recordings",
      isBoolean: true,
      data: "shareable_recordings",
    },
    {
      title: "Consent tracking & GDPR",
      isBoolean: true,
      data: "consent_tracking_gdpr",
    },
    {
      title: "Custom branding",
      isBoolean: false,
      data: "custom_branding",
      header: true,
    },
    {
      title: "Upload limit",
      isBoolean: false,
      data: "upload_limit",
      info: true,
    },
    {
      title: "Usage period",
      isBoolean: false,
      data: "usage_period",
      header: true,
      info: true,
    },
    {
      title: "Data retention period",
      isBoolean: false,
      data: "data_retention_period",
      info: true,
    },
    { title: "Support", isBoolean: false, data: "support", header: true },
    { title: "Lead-time", isBoolean: false, data: "lead_time" },
    {
      title: "Data & video export",
      isBoolean: true,
      data: "data_video_export",
      header: true,
    },
    {
      title: "Event analytics",
      isBoolean: true,
      data: "event_analytics",
      header: true,
    },
    {
      title: "Security audit",
      isBoolean: true,
      data: "security_audit",
      header: true,
    },
    {
      title: "Custom features",
      isBoolean: true,
      data: "custom_features",
      header: true,
    },
  ],
  allBoxFeatures: [
    {
      title: "Private Admin Console",
      description:
        "You get access to a custom admin console that contains everything you need to run the app.",
    },
    {
      title: "Secure Trusted Hosting",
      description:
        "You don’t need to worry about a thing, we handle all the technology with trusted, secure and scalable hosting behind-the-scenes.",
    },
    {
      title: "User Consent Tracking",
      description:
        "We make sure to track every user’s consent to make sure there’s no GDPR headaches down the line.",
    },
    {
      title: "Event Analytics",
      description:
        "You can report back to your client or boss with all of the analytics of who took part.",
      borderRight: true,
    },
    {
      title: "Vetted Privacy Policies and T&Cs",
      description:
        "We’ll give you a ready-to-go privacy policy and T&Cs to make sure that all of the legal stuff is handled.",
    },
    {
      title: "Multiple Moderation Options",
      description:
        "You can either review it yourself using our real-time moderation panel, or make the user verify their phone number before recording.",
    },
    {
      title: "Automated Data Deletion",
      description:
        "It’s hard to remember what happened yesterday, let alone months ago. We’ll delete all the loose end automatically after a set period, meaning you don’t get caught out.",
    },
    {
      title: "Reporting and Data Export",
      description:
        "Have your own systems in play? No problem, you can export all of your data so that it can be easily imported into your own CRMs or platforms.",
      borderRight: true,
    },
  ],

  allBoxTitle: "ALL BOXES",
  allBoxSubText: "TICKED",
  allBoxText:
    "It’s not only fun for the fans, we’ve got you covered with all the behind-the-scenes features to make your event a breeze to oversee.",

  faqQuestions: [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      question: "How can I sign up for a free trial?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 3,
      question: "What features are included in the free trial?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 4,
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 5,
      question: "How secure is my data with Backstage?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ],

  events: [
    {
      icon: "/svg/01.svg",
      title: "Sporting Events",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 4, lg: 4 },
      rows: 2,
      image: "/png/mobile.png",
    },
    {
      icon: "/svg/02.svg",
      title: "Advertising Boards",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 4, lg: 4 },
    },
    {
      icon: "/svg/03.svg",
      title: "Corporate Keynotes",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 4, lg: 4 },
    },
    {
      icon: "/svg/04.svg",
      title: "Fun-runs and Marathons",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 4, lg: 4 },
    },
    {
      icon: "/svg/05.svg",
      title: "Festivals",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 4, lg: 4 },
    },
    {
      icon: "/svg/06.svg",
      title: "Conferences",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 3, lg: 3 },
    },
    {
      icon: "/svg/07.svg",
      title: "Concerts & Gigs",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 3, lg: 3 },
    },
    {
      icon: "/svg/08.svg",
      title: "Brand Events",
      text: "Whether it&apos;s the premier league or just a local college event, the Fan Cam is perfect for any type",
      cols: { default: 12, sm: 6, md: 6, lg: 6 },
    },
  ], 

  services: [
    {
      url: "#",
      image: "/png/01.png",
      alt: "slider",
      heading: "Turn participants into performers",
      text: "The Fan Cam is an ideal filler for downtimes, keeping the audience entertained between events.",
    },
    {
      url: "#",
      image: "/png/01.png",
      alt: "slider",
      heading: "Super socials",
      text: "Generate amazing content that can be shared on your socials after the event.",
    },
    {
      url: "#",
      image: "/png/01.png",
      alt: "slider",
      heading: "Leave a mark",
      text: "Let users leave the event with a special memory that they can easily share with friends.",
    },
    {
      url: "#",
      image: "/png/01.png",
      alt: "slider",
      heading: "Fill downtimes with fun",
      text: "The Fan Cam is an ideal filler for downtimes, keeping the audience entertained between events.",
    }
  ],

  filledWithFeatureData: [
    {
      icon: "/svg/brand.svg",
      title: "Branded big screen interface",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
    {
      icon: "/svg/recording-app.svg",
      title: "Smartphone recording app",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
    {
      icon: "/svg/gdpr.svg",
      title: "GDPR compliance",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
    {
      icon: "/svg/real-time.svg",
      title: "Real-time Moderation Options",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
    {
      icon: "/svg/shareable-recordings.svg",
      title: "Shareable video recordings",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
    {
      icon: "/svg/private-aadmin.svg",
      title: "Private Admin Panel",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.",
    },
  ],
};
