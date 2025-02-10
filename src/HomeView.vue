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

  <section class="container flex">
    <ProductImgCarousel />
    <!-- Product meta -->
    <ProductDetails />
  </section>
</template>
