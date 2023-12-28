<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GrilleImagesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="w-full my-s lg:h-[400px] overflow-hidden relative flex flex-col lg:flex-row gap-16">
    <PrismicImage
      class="inset-0 w-full lg:w-[40%] h-full object-cover"
      :field="slice.primary.image_1"
    />
    <PrismicImage
      class="inset-0 w-full lg:w-[30%] h-full object-cover"
      :field="slice.primary.image_2"
    />
    <PrismicImage
      class="inset-0 w-full lg:w-[30%] h-full object-cover"
      :field="slice.primary.image_3"
    />
  </div>
</template>
