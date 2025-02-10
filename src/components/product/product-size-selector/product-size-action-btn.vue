<script setup lang="ts">
import { cn } from "@/utils/cn";

defineProps<{
  label: string | number;
  isSelected?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :class="
      cn(
        'relative text-md flex items-center px-3 justify-center h-12 min-w-[60px] text-black border border-gray-300 hover:border-primary',
        {
          'border-primary border-2': isSelected,
          'text-gray-400 bg-gray-100 !cursor-not-allowed': disabled,
        }
      )
    "
  >
    {{ label }}
  </button>
</template>
