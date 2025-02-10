<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col mb-4">
    <div class="text-md">{{ label }}</div>
    <Icon icon="heroicons:information-circle" class="size-5" />
  </div>
</template>
