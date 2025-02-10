<script setup lang="ts">
import { Icon } from "@iconify/vue";

const sizeActionButtons = [
  {
    icon: "ph-ruler",
    label: "Fit guide",
    onClick: () => {},
  },
  {
    icon: "ph-coat-hanger-light",
    label: "Size Chart",
    onClick: () => {},
  },
];
</script>

<template>
  <div class="flex items-center divide-x-1 divide-gray-300">
    <button
      v-for="button in sizeActionButtons"
      :key="button.label"
      @click="button.onClick"
      class="uppercase tracking-wider flex items-center gap-1 px-2"
    >
      <Icon :icon="button.icon" class="size-4" />
      <span>{{ button.label }}</span>
    </button>
  </div>
</template>
