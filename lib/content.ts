// Single source of truth for editable business content.
// Swapping this file's data for a headless CMS query later (Sanity, Contentful, etc.)
// requires no changes to the page components below.

export const company = {
  name: "Royal Group",
  founded: "2020",
  hq: "Umunede, Delta State, Nigeria",
  tagline: "Nigeria's integrated agro-allied enterprise",
  phoneDisplay: "0807 243 8582",
  phoneIntl: "2348072438582", // used for wa.me and tel: links
};

// TODO: replace "#" with your live profile URLs.
export const socials = [
  { label: "WhatsApp", href: `https://wa.me/${company.phoneIntl}` },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export type Operation = {
  slug: string;
  title: string;
  stage: "Inputs" | "Farming" | "Processing" | "Storage" | "Market";
  summary: string;
};

// Ordered to read as a real value chain: inputs feed the farms,
// farms feed processing, processing feeds storage, storage feeds market.
export const operations: Operation[] = [
  {
    slug: "feed-mill",
    title: "Feed Mill",
    stage: "Inputs",
    summary:
      "In-house feed production supplying our own livestock and poultry operations with consistent, quality-controlled nutrition. Our modern facility produces balanced rations optimized for growth, egg production, and meat quality.",
  },
  {
    slug: "chicken-hatchery",
    title: "Chicken Hatchery",
    stage: "Inputs",
    summary:
      "State-of-the-art day-old chick production supporting our layer and broiler operations, and available to outgrowers and partner farms. Specializes in high-performing breeds with excellent feed conversion and productivity.",
  },
  {
    slug: "fish-hatchery",
    title: "Fish Hatchery",
    stage: "Inputs",
    summary:
      "Fingerling production feeding our commercial fish farming operation, built on controlled breeding conditions and advanced hatchery management. Produces disease-resistant stock for optimal aquaculture performance.",
  },
  {
    slug: "piggery",
    title: "Integrated Pig Farming",
    stage: "Farming",
    summary:
      "Commercial piggery operation run on modern husbandry practices, from breeding stock through to market-weight production. Modern housing, biosecurity protocols, and waste management ensure product quality and farm health.",
  },
  {
    slug: "fishery",
    title: "Commercial Fish Farming",
    stage: "Farming",
    summary:
      "Pond and tank-based aquaculture producing table-size fish at commercial volume for regional markets. Professional water management, disease control, and feeding protocols ensure consistent, premium output.",
  },
  {
    slug: "poultry",
    title: "Poultry Production",
    stage: "Farming",
    summary:
      "Layer flocks for table eggs and broiler flocks for meat, managed under structured biosecurity protocols and best practices. Produces premium eggs and poultry meat meeting quality standards for institutional and retail markets.",
  },
  {
    slug: "turkey",
    title: "Turkey Farming",
    stage: "Farming",
    summary:
      "Commercial turkey rearing supplying seasonal and year-round demand across processed and live markets. Premium breeds reared under controlled conditions for superior meat quality and market performance.",
  },
  {
    slug: "cattle",
    title: "Cattle Rearing",
    stage: "Farming",
    summary:
      "Managed cattle rearing operations contributing to our diversified livestock production base. Professional herd management, veterinary care, and nutrition ensure healthy, productive animals.",
  },
  {
    slug: "cassava",
    title: "Cassava Cultivation & Processing",
    stage: "Processing",
    summary:
      "From field to finished product: High-Quality Cassava Flour (HQCF), industrial starch, garri, and other value-added cassava products. Modern processing facility transforms cassava into premium food and industrial inputs.",
  },
  {
    slug: "cold-storage",
    title: "Cold Storage & Preservation",
    stage: "Storage",
    summary:
      "Cold chain infrastructure that protects produce quality from harvest through to delivery, cutting post-harvest loss. State-of-the-art storage facilities maintain optimal conditions for all agricultural products.",
  },
  {
    slug: "training",
    title: "Agro Innovation & Training",
    stage: "Market",
    summary:
      "Practical agribusiness training for youths, farmers, cooperatives and agripreneurs building the next generation of the value chain. Hands-on courses covering modern farming, business management, value addition, and sustainable practices.",
  },
];

export const stageOrder: Operation["stage"][] = [
  "Inputs",
  "Farming",
  "Processing",
  "Storage",
  "Market",
];

export const stageLabel: Record<Operation["stage"], string> = {
  Inputs: "Inputs & Genetics",
  Farming: "Farming & Rearing",
  Processing: "Processing & Value Addition",
  Storage: "Storage & Preservation",
  Market: "Market & Capacity",
};

export const objectives = [
  "Increase agricultural productivity through integrated commercial farming.",
  "Promote value addition through agro-processing and post-harvest management.",
  "Produce premium-quality livestock, poultry, aquaculture, and processed agricultural products.",
  "Empower youths and women through agricultural entrepreneurship and skills development.",
  "Support smallholder farmers with improved technologies, training, and market opportunities.",
  "Strengthen agricultural value chains through innovation, research, and strategic partnerships.",
  "Contribute to food security, rural development, and Nigeria's economic diversification.",
];

export const advantages = [
  "Fully integrated farm-to-market operations.",
  "Diversified agricultural production systems.",
  "Modern hatchery and livestock management practices.",
  "Value-added cassava processing for flour, starch, and garri production.",
  "Reliable cold chain and storage infrastructure.",
  "Practical agribusiness and innovation training programmes.",
  "Strong commitment to sustainability, quality assurance, and community development.",
  "Customer-focused operations supported by continuous innovation and operational excellence.",
];

export const partners = [
  "Federal and State Government Agencies",
  "Development Partners",
  "Financial Institutions",
  "Agricultural Cooperatives",
  "Research and Academic Institutions",
  "Local and International Investors",
  "Private Sector Organizations",
  "Agribusiness Companies and Off-Takers",
];
