<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImagesSimplesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    class="w-screen px-1/2xl py-xs grid gap-32"
    :class="{
      'grid-cols-1': slice.items.length === 1,
      'grid-cols-2': slice.items.length === 2,
      'grid-cols-3': slice.items.length === 3,
      'grid-cols-4': slice.items.length === 4,
      'grid-cols-5': slice.items.length === 5,
      'grid-cols-6': slice.items.length === 6,
    }"
  >
    <PrismicImage
      v-for="item in slice.items"
      :key="item.id"
      class="w-full shadow-xl rounded"
      :field="item.image"
    />
  </div>
</template>
