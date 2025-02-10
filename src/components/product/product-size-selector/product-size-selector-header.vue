<script setup lang="ts">
import ProductSizeGuides from "../product-size-guides.vue";
import ProductSizeSelectorRowLabel from "./product-size-selector-row-label.vue";
</script>

<template>
  <div class="flex gap-1.5 text-sm justify-between items-start">
    <ProductSizeSelectorRowLabel label="Size" />
    <ProductSizeGuides />
  </div>
</template>
