type ColorVariant = {
  name: string;
  preview_url: string;
};

type ProductImage = {
  url: string;
  alt: string;
};

type Product = {
  name: string;
  price: number;
  currency: "USD" | "EUR" | "GBP";
  sku: string;
  color: string;
  description: string;
  colors: ColorVariant[];
  images: ProductImage[];
};

export type { Product, ColorVariant, ProductImage };
