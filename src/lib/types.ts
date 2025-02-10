type ColorVariant = {
  name: string;
  preview_url: string;
};

type ProductImage = {
  url: string;
  alt: string;
};

type ProductSize = {
  size: number;
  available: boolean;
};

type ProductWidth = {
  name: string;
  available: boolean;
};

type ProductCalfWidth = {
  name: string;
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
  sizes: ProductSize[];
  widths: ProductWidth[];
  calf_widths: ProductCalfWidth[];
};

export type { Product, ColorVariant, ProductImage, ProductSize, ProductWidth, ProductCalfWidth };
