<script setup lang="ts">
import { cn } from "@/utils/cn";

const props = defineProps<{
  label: string;
  class?: string;
}>();
</script>

<template>
  <button
    :class="
      cn(
        'bg-primary text-white px-4 py-2 flex flex-col items-center justify-center w-full uppercase font-semibold',
        props.class
      )
    "
  >
    <slot name="icon" />
    <span>{{ label }}</span>
  </button>
</template>
