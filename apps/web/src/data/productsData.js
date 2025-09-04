import { mainCategories as categories } from "./categories";
import { pleksiProducts } from "./products/pleksi";

export const mainCategories = categories;

// Create a constant products array to prevent recreation on every render
export const products = Object.freeze([...pleksiProducts]);
