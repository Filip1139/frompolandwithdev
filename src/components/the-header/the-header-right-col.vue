<script setup lang="ts">
import { Icon } from "@iconify/vue";

const icons = [
  "heroicons:magnifying-glass",
  "heroicons:map-pin",
  "heroicons:shopping-cart",
];
</script>

<template>
  <ul class="ml-auto flex gap-5 *:cursor-pointer">
    <li v-for="(icon, idx) in icons" :key="icon">
      <button :class="idx === 0 ? 'hidden lg:block' : ''">
        <Icon :icon class="size-6" />
      </button>
    </li>
  </ul>
</template>
