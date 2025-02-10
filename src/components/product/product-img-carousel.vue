<script setup lang="ts">
/* @ts-ignore */
import "swiper/css/bundle";
import type { Product } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { inject, ref } from "vue";
import { currentProductKey } from "@/lib/symbols";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Icon } from "@iconify/vue";

const currentProduct = inject<Product>(currentProductKey)!;

const thumbnailSlider = ref<SwiperType | null>(null);
const mainSlider = ref<SwiperType | null>(null);
const setThumbnailSlider = (swiper: SwiperType) => {
  thumbnailSlider.value = swiper;
};
const setMainSlider = (swiper: SwiperType) => {
  mainSlider.value = swiper;
};
</script>

<template>
  <div class="flex items-start justify-end flex-row-reverse relative">
    <button class="absolute top-4 right-4 z-10">
      <Icon icon="heroicons:heart" class="size-6 text-gray-500" />
    </button>

    <Swiper
      class="h-auto"
      @swiper="setMainSlider"
      :modules="[Thumbs, Pagination, Navigation]"
      :thumbs="{ swiper: thumbnailSlider }"
      :pagination="{ clickable: true }"
      navigation
    >
      <SwiperSlide v-for="image in currentProduct.images" :key="image.url">
        <img
          class="select-none"
          :src="image.url"
          alt=""
          width="822px"
          height="967px"
        />
      </SwiperSlide>
    </Swiper>

    <div class="mr-2 w-[100px] grow shrink-0 hidden md:block">
      <Swiper
        class="h-[715px]"
        :modules="[Thumbs]"
        watch-slides-progress
        @swiper="setThumbnailSlider"
        direction="vertical"
        :space-between="8"
        slides-per-view="auto"
        :enabled="false"
        :breakpoints="{
          768: {
            enabled: true,
          },
        }"
      >
        <SwiperSlide
          class="w-full !h-auto group relative"
          v-for="image in currentProduct.images"
          :key="image.url"
        >
          <span
            class="absolute bottom-0 bg-primary w-full h-px hidden group-[.swiper-slide-thumb-active]:block"
          ></span>

          <img
            :src="image.url"
            class="cursor-pointer"
            alt=""
            width="100px"
            height="100px"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #000;
}

.swiper-pagination {
  @media (min-width: 768px) {
    display: none;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: #000;
  font-size: 20px;
}
</style>
