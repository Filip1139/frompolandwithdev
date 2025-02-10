<script setup lang="ts">
import TheHeader from "@/components/the-header/the-header.vue";
import ProductTop from "./components/product/product-top.vue";
import ProductDetails from "./components/product/product-details.vue";
import ProductImgCarousel from "./components/product/product-img-carousel.vue";
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
