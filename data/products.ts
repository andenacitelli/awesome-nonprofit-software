import { z } from "zod";

import { CATEGORIES, Product, ProductSchema } from "./types";

const products: Product[] = [
  {
    name: "Salesforce",
    blurb:
      "Salesforce is a customer relationship management solution that brings companies and customers together. It's one integrated CRM platform that gives all your departments — including marketing, sales, commerce, and service — a single, shared view of every customer.",
    categories: [
      CATEGORIES.CUSTOMER_RELATIONSHIP_MANAGEMENT,
      CATEGORIES.DONOR_MANAGEMENT,
      CATEGORIES.PAYMENT_PROCESSING,
    ],
    pricing: "Free up to 10 users, then heavily discounted.",
    logoUrl: "/images/salesforce.png",
    url: "https://www.salesforce.org/products/nonprofit-success-pack/",
  },
  {
    name: "Quickbooks Online Plus",
    blurb:
      "QuickBooks is a popular accounting software that helps businesses manage their finances, track expenses, and streamline bookkeeping processes.",
    categories: [CATEGORIES.ACCOUNTING],
    pricing: "$75/yr for nonprofits through TechSoup.",
    logoUrl: "/images/quickbooks.png",
    url: "https://www.techsoup.org/intuit-software-nonprofits",
  },
  {
    name: "Stripe",
    blurb:
      "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use their software to accept payments and manage their businesses online.",
    categories: [CATEGORIES.PAYMENT_PROCESSING],
    pricing: "Heavily discounted rates for Nonprofits.",
    logoUrl: "/images/stripe.jpg",
    url: "https://support.stripe.com/questions/fee-discount-for-nonprofit-organizations",
  },
  {
    name: "Zoho",
    blurb:
      "Zoho is a web-based online office suite containing word processing, spreadsheets, presentations, databases, note-taking, wikis, web conferencing, customer relationship management, project management, invoicing, and other applications.",
    categories: [CATEGORIES.CUSTOMER_RELATIONSHIP_MANAGEMENT],
    pricing: "Free up to ten users, then heavily discounted.",
    logoUrl: "/images/zoho.png",
    url: "https://www.zoho.com/crm/non-profit/",
  },
  {
    name: "Hubspot",
    blurb:
      "HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses grow better.",
    categories: [CATEGORIES.CUSTOMER_RELATIONSHIP_MANAGEMENT],
    pricing: "Free.",
    logoUrl: "/images/hubspot.png",
    url: "https://www.hubspot.com/products/crm",
  },
  {
    name: "TechSoup",
    blurb:
      "Significant discounts for nonprofits on many prominent tools from big-name companies.",
    categories: [CATEGORIES.OTHER],
    pricing: "Free to sign up.",
    logoUrl: "/images/techsoup.png",
    url: "https://www.techsoup.org/",
  },
  {
    name: "Microsoft",
    blurb: "Tech giant with software for most use cases out there.",
    categories: [CATEGORIES.CUSTOMER_RELATIONSHIP_MANAGEMENT, CATEGORIES.OTHER],
    pricing: "Regularly gives 90%+ discounts to nonprofits.",
    logoUrl: "/images/microsoft.png",
    url: "https://nonprofit.microsoft.com/en-us/getting-started",
  },
  {
    name: "MailChimp",
    blurb: "Comprehensive, popular email marketing tool.",
    categories: [CATEGORIES.EMAIL],
    pricing: "15% discount for nonprofits.",
    logoUrl: "/images/mailchimp.jpg",
    url: "https://mailchimp.com/help/about-mailchimp-discounts/",
  },
  {
    name: "VerticalResponse",
    blurb:
      "Email and marketing tools for small to moderate-sized businesses and nonprofits.",
    categories: [CATEGORIES.EMAIL],
    pricing: "Generous free plan and 15% discount for nonprofits.",
    logoUrl: "/images/vertical-response.png",
    url: "https://www.verticalresponse.com/pricing/non-profit/application",
  },
  {
    name: "Buffer",
    blurb: "Social media planning, scheduling, and administration.",
    categories: [CATEGORIES.MARKETING_AND_SOCIAL],
    pricing: "50% discount for nonprofits.",
    logoUrl: "/images/buffer.png",
    url: "https://buffer.com/nonprofits",
  },
  {
    name: "HootSuite",
    blurb: "Social media planning, scheduling, and administration.",
    categories: [CATEGORIES.MARKETING_AND_SOCIAL],
    pricing: "50% discount for nonprofits.",
    logoUrl: "/images/hootsuite.png",
    url: "https://www.hootsuite.com/pages/landing/non-profit-discount-application2",
  },
  {
    name: "Later",
    blurb: "Social media planning, scheduling, and administration.",
    categories: [CATEGORIES.MARKETING_AND_SOCIAL],
    pricing: "50% discount for nonprofits.",
    logoUrl: "/images/later.png",
    url: "https://help.later.com/hc/en-us/articles/360042492454",
  },
  {
    name: "Google",
    blurb:
      "Tech giant with a wide variety of different services that nonprofits may find useful.",
    categories: [
      CATEGORIES.OTHER,
      CATEGORIES.MARKETING_AND_SOCIAL,
      CATEGORIES.EMAIL,
    ],
    pricing: "Discounts and free usage for a wide variety of their services.",
    logoUrl: "/images/google.png",
    url: "https://www.google.com/nonprofits/",
  },
  {
    name: "Canva",
    blurb: "Powerful presentation and graphic design creation tool.",
    categories: [CATEGORIES.MARKETING_AND_SOCIAL],
    pricing: "Premium plans free for Nonprofits.",
    logoUrl: "/images/canva.png",
    url: "https://www.canva.com/canva-for-nonprofits/",
  },
  {
    name: "Wix",
    blurb: "Website design service with a powerful drag-and-drop editor.",
    categories: [CATEGORIES.MARKETING_AND_SOCIAL],
    pricing: "70% off for 2 years via TechSoup.",
    logoUrl: "/images/wix.png",
    url: "https://www.techsoup.org/wix",
  },
];

export const PRODUCTS = z.array(ProductSchema).parse(products);
