<script setup lang="ts">
import { PRODUCT_CATEGORIES_NAV } from "@/constants";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="hidden h-12 w-full max-w-[1150px] py-2.5 lg:flex"
    aria-label="Main navigation"
    role="navigation"
  >
    <ul
      class="flex w-full items-center gap-5 text-xs leading-[1.46] font-medium"
    >
      <li v-for="{ label, href } in PRODUCT_CATEGORIES_NAV" :key="label">
        <RouterLink :to="href" class="px-3 py-2">{{ label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
