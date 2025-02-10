<script setup lang="ts">
import TheHeader from "@/components/the-header/the-header.vue";
import ProductTop from "./components/product/product-top.vue";
import ProductDetails from "./components/product/product-details.vue";
import ProductImgCarousel from "./components/product/product-img-carousel.vue";
import { provide, ref } from "vue";
import products from "@/mock/products.json";
import { currentProductKey } from "@/lib/symbols";
import type { Product } from "./lib/types";

const currentProduct = ref(products.products[0]);

provide(currentProductKey, currentProduct.value as Product);
</script>

<template>
  <TheHeader />
  <ProductTop />

  <section class="container flex flex-col md:flex-row">
    <ProductImgCarousel class="mb-3 md:mb-0 md:w-[52%] min-[1400px]:w-[63%] -mx-3 md:mx-0 " />
    <!-- Product meta -->
    <ProductDetails />
  </section>
</template>
