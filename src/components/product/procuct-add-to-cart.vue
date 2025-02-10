<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AppButton from "../app-button.vue";
</script>

<template>
  <AppButton label="Add to cart" class="mb-4">
    <template #icon>
      <Icon icon="heroicons:shopping-cart" class="size-6 mb-1" />
    </template>
  </AppButton>
</template>
