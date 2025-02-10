<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { ref } from "vue";

defineProps<{
  title: string;
}>();

const isVisible = ref(false);

const emit = defineEmits<{
  (e: "close"): void;
  (e: "open"): void;
}>();

const handleClose = () => {
  isVisible.value = false;
  emit("close");
};

const handleOpen = () => {
  isVisible.value = true;
  emit("open");
};

const target = ref<HTMLElement | null>(null);

onClickOutside(target, handleClose);

onKeyStroke("Escape", handleClose);
</script>

<template>
  <slot name="trigger" :onClick="handleOpen" />

  <teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="fixed inset-0 bg-black/50 z-50"></div>
    </Transition>

    <Transition name="slide-fade">
      <div
        v-if="isVisible"
        ref="target"
        class="fixed inset-y-0 right-0 w-full max-w-[500px] bg-white z-50"
      >
        <div class="flex flex-col h-full p-4">
          <header
            class="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <h2 class="text-xl">{{ title }}</h2>

            <button class="ml-auto" @click="handleClose">
              <Icon icon="heroicons:x-mark" class="size-6 text-gray-500" />
            </button>
          </header>

          <div class="flex-1 overflow-y-auto">
            <slot />
          </div>

          <slot name="footer" :onClose="handleClose" />
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide fade */
.slide-fade-enter-active,
.slide-fade-leave-active  {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
