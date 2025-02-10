<script setup lang="ts">
import type { ColorVariant } from "@/lib/types";
import { cn } from "@/utils/cn";
import { ref } from "vue";

const { colors } = defineProps<{
  colors: ColorVariant[];
}>();

const selectedColor = ref(colors[0]);
</script>

<template>
  <div>
    <div class="flex gap-1.5 items-center text-sm mb-2">
      <span class="font-semibold">Color: </span>
      {{ selectedColor.name }}
    </div>

    <div class="flex gap-1.5 flex-wrap">
      <button
        v-for="color in colors"
        :key="color.name"
        @click="selectedColor = color"
        :class="
          cn(
            'size-9 rounded-full border-[2px] border-gray-200 transition-colors duration-300 hover:border-primary',
            selectedColor.name === color.name && 'border-primary'
          )
        "
        :style="{ backgroundImage: `url(${color.preview_url})` }"
      ></button>
    </div>
  </div>
</template>
