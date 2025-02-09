<script setup lang="ts">
import { MENU_ITEMS } from "@/constants";

// mock
const isActive = (isActive: boolean) => isActive;
</script>

<template>
  <nav class="hidden lg:flex" aria-label="Gender navigation" role="navigation">
    <ul
      class="relative flex w-96 border-b border-solid border-b-gray-300 text-center text-sm font-medium transition-colors duration-300 *:w-full *:cursor-pointer *:px-12 *:py-4 *:uppercase"
    >
      <li
        v-for="({ label, href }, idx) in MENU_ITEMS"
        :key="label"
        :class="
          isActive(idx === 0)
            ? 'text-primary border-b border-b-blue-950'
            : 'text-gray-500'
        "
      >
        <a :href="href">{{ label }}</a>
      </li>
    </ul>
  </nav>
</template>
