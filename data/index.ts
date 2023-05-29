import {Product} from "./types";
import contentResourceManagement from "./products/content-resource-management";

export const PRODUCTS: Product[] = [
    ...contentResourceManagement,
]