<script setup lang="ts">
import { RouterLink } from "vue-router";

// static data
const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Category",
    href: "/category",
  },
  {
    label: "Product",
    href: "/product",
  },
];
</script>

<template>
  <nav aria-label="Breadcrumb" class="overflow-hidden">
    <ul class="flex items-center gap-2 truncate">
      <template v-for="({ label, href }, idx) in breadcrumbs" :key="label">
        <li>
          <RouterLink v-if="idx !== breadcrumbs.length - 1" :to="href">{{
            label
          }}</RouterLink>
          <span v-else>{{ label }}</span>
        </li>
        <span v-if="idx !== breadcrumbs.length - 1" class="text-gray-300"
          >/</span
        >
      </template>
    </ul>
  </nav>
</template>
