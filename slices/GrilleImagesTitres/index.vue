<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GrilleImagesTitresSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="w-screen mt-s flex flex-col gap-16">
    <div class="h-[400px] overflow-hidden relative flex gap-16">
      <PrismicImage
        class="inset-0 w-[40%] h-full object-cover"
        :field="slice.primary.image_1"
      />
      <PrismicImage
        class="inset-0 w-[30%] h-full object-cover"
        :field="slice.primary.image_2"
      />
      <PrismicImage
        class="inset-0 w-[30%] h-full object-cover"
        :field="slice.primary.image_3"
      />
    </div>
    <div
      v-for="(item, index) in slice.items"
      :key="item.id"
      class="h-[400px] relative"
    >
      <div class="overflow-hidden h-full flex gap-16">
        <PrismicImage
          class="inset-0 h-full object-cover"
          :class="index % 2 === 0 ? 'w-[30%]' : 'w-[40%]'"
          :field="item.image_1"
        />
        <PrismicImage
          class="inset-0 h-full object-cover"
          :class="index % 2 === 0 ? 'w-[40%]' : 'w-[30%]'"
          :field="item.image_2"
        />
        <PrismicImage
          class="inset-0 h-full object-cover"
          :class="index % 2 === 0 ? 'w-[40%]' : 'w-[30%]'"
          :field="item.image_3"
        />
      </div>
      <div class="absolute z-10 -top-[75px] left-1/3 -translate-x-1/2 text-white bg-black p-64 rounded-full w-[150px] h-[150px] flex items-center justify-center">
        <h1 class="text-7xl">
          {{ item.titre_1 }}
        </h1>
      </div>
      <div class="absolute z-10 -top-[75px] left-2/3 -translate-x-1/2 text-white bg-black p-64 rounded-full w-[150px] h-[150px] flex items-center justify-center">
        <h1 class="text-7xl">
          {{ item.titre_2 }}
        </h1>
      </div>
    </div>
  </div>
</template>
