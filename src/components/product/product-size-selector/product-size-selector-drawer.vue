<script setup lang="ts">
import AppButton from "@/components/app-button.vue";
import AppDrawer from "@/components/app-drawer.vue";
import { Icon } from "@iconify/vue";
import { inject, ref } from "vue";
import { currentProductKey } from "@/lib/symbols";
import type {
  Product,
  ProductCalfWidth,
  ProductSize,
  ProductWidth,
} from "@/lib/types";
import ProductSizeSelectorHeader from "./product-size-selector-header.vue";
import ProductSizeActionBtn from "./product-size-action-btn.vue";
import ProductSizeSelectorRowLabel from "./product-size-selector-row-label.vue";

const product = inject<Product>(currentProductKey)!;

const selectedSize = ref<ProductSize | null>(product.sizes[0]);
const selectedWidth = ref<ProductWidth | null>(product.widths[0]);
const selectedCalfWidth = ref<ProductCalfWidth | null>(product.calf_widths[0]);

const handleSelectSize = (size: ProductSize) => {
  if (!size.available) return;

  selectedSize.value = size;
};
</script>

<template>
  <div>
    <div class="py-2 px-3 mb-2 bg-[#f0ede9] text-primary">
      <p class="text-sm mb-1">Selected:</p>

      <div class="flex gap-2 text-md">
        <span>
          Size: <span class="font-semibold">{{ selectedSize?.size }}</span>
        </span>
        <span>
          Width: <span class="font-semibold">{{ selectedWidth?.name }}</span>
        </span>
        <span>
          Calf Width:
          <span class="font-semibold">{{ selectedCalfWidth?.name }}</span>
        </span>
      </div>
    </div>
  </div>

  <AppDrawer title="Choose size">
    <template #trigger="{ onClick }">
      <button
        class="border border-primary p-3 text-sm flex items-center justify-between gap-1 uppercase w-full text-primary tracking-wider focus-visible:outline-none"
        @click="onClick"
      >
        <span>Choose size</span>
        <Icon icon="heroicons:chevron-right" class="size-4" />
      </button>
    </template>

    <div class="mt-8">
      <ProductSizeSelectorHeader />

      <div class="flex flex-wrap gap-2">
        <ProductSizeActionBtn
          v-for="size in product.sizes"
          :key="size.size"
          :label="size.size"
          :is-selected="selectedSize?.size === size.size"
          @click="handleSelectSize(size)"
          :disabled="!size.available"
        />
      </div>
    </div>

    <div class="mt-8">
      <ProductSizeSelectorRowLabel label="Width" />

      <div class="flex flex-wrap gap-2">
        <ProductSizeActionBtn
          v-for="width in product.widths"
          :key="width.name"
          :label="width.name"
          :is-selected="selectedWidth?.name === width.name"
          @click="selectedWidth = width"
        />
      </div>
    </div>

    <div class="mt-8">
      <ProductSizeSelectorRowLabel label="Calf Width" />

      <div class="flex flex-wrap gap-2">
        <ProductSizeActionBtn
          v-for="calfWidth in product.calf_widths"
          :key="calfWidth.name"
          :label="calfWidth.name"
          :is-selected="selectedCalfWidth?.name === calfWidth.name"
          @click="selectedCalfWidth = calfWidth"
        />
      </div>
    </div>

    <template #footer="{ onClose }">
      <AppButton label="Done" @click="onClose" />
    </template>
  </AppDrawer>
</template>
