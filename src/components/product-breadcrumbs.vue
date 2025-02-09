<script setup lang="ts">
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
  },
];
</script>

<template>
  <nav aria-label="Breadcrumb" class="overflow-hidden">
    <ul class="flex items-center gap-2 truncate">
      <li v-for="({ label, href }, idx) in breadcrumbs" :key="label">
        <a :href="href">{{ label }}</a>
        <span v-if="idx !== breadcrumbs.length - 1" class="text-gray-300"
          >/</span
        >
      </li>
    </ul>
  </nav>
</template>
