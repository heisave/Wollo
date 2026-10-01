/**
 * All landing-page copy in one place, so section components stay
 * presentational. Text transcribed from the original shot.
 */

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/* — Hero ——————————————————————————————————————————————— */

export const hero = {
  title: ["Maximize Your Social", "Media Presence"],
  primaryCta: "Start Free Trial",
  secondaryCta: "Create Free Account",
} as const;

/* — Analytics —————————————————————————————————————————— */

export const hashtags = [
  "#Nature",
  "#Art",
  "#Photography",
  "#Cooking",
  "#Fun",
  "#AI",
  "#Travel",
  "#Selfie",
  "#Explore",
  "#Fitness",
  "#Foodie",
  "#Movie",
] as const;

/** Rotation applied to each hashtag pill for the scattered look. */
export const hashtagRotations = [
  -6, 4, -9, 7, -4, 10, -12, 5, -7, 8, -5, 3,
] as const;

export const performance = {
  title: "Optimizing Performance",
  engagement: { label: "Engagement Rate", value: "+33%" },
  followers: { label: "Followers", value: "+50%" },
  ranges: ["3 days", "1 week", "1 month", "3 months", "6 months", "1 year"],
  activeRange: "1 week",
  /** Two black callout pills floating over the chart. */
  callouts: [
    { label: "+26%", x: 66, y: 46 },
    { label: "+45%", x: 320, y: 70 },
  ],
} as const;

export const hashtagCard = {
  title: "Hashtag Performance",
} as const;

/* — Statement —————————————————————————————————————————— */

export const statement = [
  "Wollo's Intelligent Algorithms Analyze Social Media",
  "__HEART__",
  "Data in Real-Time, Offering Actionable Insights",
  "__SPHERE__",
  "and Recommendations",
] as const;

/* — Stats ————————————————————————————————————————————— */

export const stats = [
  {
    value: "+270K",
    sticker: "Users",
    description:
      "Wollo's Intelligent Algorithms analyze social media data in real-time, offering actionable insights and recommendations",
  },
  {
    value: "8X",
    sticker: "Increase in Traffic",
    description:
      "Track and analyze the impact of your social media campaigns in real-time, pinpointing which strategies drive the most traffic, allowing you to refine your approach",
  },
  {
    value: "+40h",
    sticker: "Saved Weekly",
    description:
      "Effortlessly save time and with our automated scheduling and content management tools, ensuring consistent posting and engagement",
  },
] as const;

/* — Testimonials ——————————————————————————————————————— */

export const testimonials = [
  {
    quote:
      "Wollo has transformed our social media team's efficiency. With streamlined scheduling and seamless performance tracking, our engagement has soared, resulting in a significant traffic increase. Highly recommend!",
    name: "Caleb Whitmore",
    role: "Team Lead",
  },
  {
    quote:
      "Since implementing Wollo, our social media strategies have reached new heights of efficiency and effectiveness. I've witnessed firsthand the impact of this powerful tool on our campaigns.",
    name: "Zephyr Finnegan",
    role: "Marketing Operations",
  },
  {
    quote:
      "Initially skeptical, I'm thrilled with this SMM management tool. Its time-saving scheduling features have boosted our social media presence. The responsive support team ensures any queries are swiftly addressed.",
    name: "Eldie Harrington",
    role: "Brand Manager",
  },
  {
    quote:
      "Of all the SMM management tools I've tried, this one stands out. Its intuitive interface and real-time analytics have elevated my social media strategy. It becomes an indispensable asset to my business.",
    name: "Azura Everly",
    role: "Content Strategist",
  },
  {
    quote:
      "This affordable SMM management tool has revolutionized my small business's social media management. Its scheduling capabilities have saved me time, while analytics help me refine content.",
    name: "Xavier Sinclair",
    role: "Customer Strategist",
  },
  {
    quote:
      "Wollo has become an indispensable asset for our social media team. Its user-friendly interface and comprehensive analytics help us to craft compelling brand narratives and optimize audience engagement.",
    name: "Caspian Hawthorne",
    role: "SMM Manager",
  },
] as const;

/** Split into three columns: left, middle (raised), right. */
export const testimonialColumns = [
  [testimonials[0], testimonials[1]],
  [testimonials[2], testimonials[3]],
  [testimonials[4], testimonials[5]],
] as const;

/* — FAQ ——————————————————————————————————————————————— */

export const faqs = [
  {
    question: "How does Wollo handle social media advertising integration?",
    answer:
      "Wollo connects directly to each platform's ad API, so you can build, launch and monitor paid campaigns without ever leaving your dashboard.",
  },
  {
    question:
      "Can I manage multiple social media accounts from a single dashboard with Wollo?",
    answer:
      "Yes — unlimited profiles across every major network can be grouped into workspaces and managed from one centralized dashboard.",
  },
  {
    question:
      "Is there a mobile app available for managing social media on the go with Wollo?",
    answer:
      "Wollo ships with native iOS and Android apps that include the full scheduling, inbox and analytics experience.",
  },
  {
    question:
      "How does Wollo ensure data security and privacy for user accounts?",
    answer:
      "All data is encrypted in transit and at rest, with SSO, role-based permissions and continuous security monitoring as standard.",
  },
] as const;

/* — CTA + Footer ———————————————————————————————————————— */

export const cta = {
  title: ["Reach More People", "and Grow Your Brand", "Awareness."],
  button: "Start Free Trial",
} as const;
