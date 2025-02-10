<script setup lang="ts">
import ProductAddToCart from './procuct-add-to-cart.vue';
</script>

<template>
  <div class="md:pl-12 grow-1 pr-3">
    <h1 class="tracking-light md:mb-3 text-3xl font-light uppercase">
      Priscilla
    </h1>
    <p class="text-gray pt-1.5 text-base">$1,095</p>

    <p class="text-sm text-primary">
      As low as $99/mo with <span class="font-medium">affirm</span>.
      <a href="#" class="underline">Check your purchasing power</a>
    </p>
    <p class="text-gray-500 hidden text-sm md:block">
      STYLE NO.N4831.54-1521-B-6
    </p>

    <div class="space-y-2">
      <p class="text-gray-600">
        Our No. 1 bestselling boot for women, Priscilla walks an elegant line
        between timeless classic and cowgirl chic. The vintage-inspired Tioga
        stitch pattern harks back to yesteryear, but Priscilla is...
      </p>
      <button class="text-primary underline">Read more</button>
    </div>
    <ProductAddToCart />
  </div>
</template>
