<script setup lang="ts">
import { Icon } from "@iconify/vue";
import NavGender from "@/components/nav/nav-gender.vue";
import TheLogo from "@/components/the-logo.vue";
import TheHeaderRightCol from "./the-header-right-col.vue";
import NavProductCategories from "../nav/nav-product-categories.vue";
</script>

<template>
  <header
    class="text-primary sticky top-0 container border-b border-b-[#e8e7e7] bg-white py-2 lg:pb-0 z-50"
  >
    <div class="grid grid-cols-[1fr_auto_1fr] items-center">
      <button class="lg:hidden">
        <Icon icon="heroicons:bars-3-solid" class="size-6" />
      </button>
      <NavGender />
      <TheLogo />
      <TheHeaderRightCol />
    </div>

    <NavProductCategories />
  </header>
</template>
