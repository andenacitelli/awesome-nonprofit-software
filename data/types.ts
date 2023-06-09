import { z } from "zod";

export enum CATEGORIES {
  CUSTOMER_RELATIONSHIP_MANAGEMENT = "Customer Relationship Management",
  DONOR_MANAGEMENT = "Donor Management",
  ACCOUNTING = "Accounting",
  PAYMENT_PROCESSING = "Payment Processing",
  EMAIL = "Email",
  MARKETING_AND_SOCIAL = "Marketing & Social",
  WEBSITE = "Website",
  ANALYTICS = "Analytics",
  OTHER = "Other",
  DOCUMENTATION_AND_PROJECT_MANAGEMENT = "Documentation & Project Management",
}

export const ProductSchema = z.object({
  name: z.string().min(1),
  blurb: z.string().min(1).max(300),
  categories: z.array(z.nativeEnum(CATEGORIES)),
  pricing: z.string().min(1).max(200),
  logoUrl: z.string(),
  url: z.string().url(),
});
export type Product = z.infer<typeof ProductSchema>;
