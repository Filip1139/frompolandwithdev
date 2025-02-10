<script setup lang="ts">
import ProductAddToCart from "./procuct-add-to-cart.vue";
import ProductColorSelector from "./product-color-selector.vue";
import { inject } from "vue";
import { currentProductKey } from "@/lib/symbols";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/utils/formatPrice";
import ProductSizeSelector from "./product-size-selector/product-size-selector.vue";

const currentProduct = inject<Product>(currentProductKey)!;
</script>

<template>
  <div class="md:pl-12 pr-3">
    <h1
      class="tracking-[.025em] mb-[.3em] text-[clamp(24px,4vw,40px)] leading-[1.2] uppercase"
    >
      {{ currentProduct.name }}
    </h1>
    <p class="text-primary font-light text-2xl mb-4">
      {{ formatPrice(currentProduct.price, currentProduct.currency) }}
    </p>

    <p class="text-primary hidden text-sm my-4 md:block">
      {{ currentProduct.sku }}
    </p>

    <div>
      <p class="text-sm">
        {{ currentProduct.description }}
      </p>
      <button class="text-primary underline mt-1 mb-6">Read more</button>
    </div>

    <ProductColorSelector class="mb-4" :colors="currentProduct.colors" />
    <ProductSizeSelector class="mb-8" />
    <ProductAddToCart />
  </div>
</template>
