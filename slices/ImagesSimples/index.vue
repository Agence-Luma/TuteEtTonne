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
    v-if="slice.variation === 'default'"
    class="w-full px-xs lg:px-1/2xl py-xs flex flex-col lg:grid gap-32"
    :class="{
      'lg:grid-cols-1': slice.items.length === 1,
      'lg:grid-cols-2': slice.items.length === 2,
      'lg:grid-cols-3': slice.items.length === 3,
      'lg:grid-cols-4': slice.items.length === 4,
      'lg:grid-cols-5': slice.items.length === 5,
      'lg:grid-cols-6': slice.items.length === 6,
    }"
  >
    <PrismicImage
      v-for="item in slice.items"
      :key="item.id"
      class="w-full shadow-xl rounded"
      :field="item.image"
    />
  </div>
  <div
    v-else-if="slice.variation === 'multiLignes'"
    class="w-full px-xs lg:px-1/2xl py-s grid gap-32 grid-cols-2 lg:grid-cols-3"
  >
    <div class="lg:flex flex-col gap-32 hidden">
      <PrismicImage
        v-for="item in slice.items.filter((_, index) => index % 3 === 0)"
        :key="item.id"
        class="w-full shadow-xl rounded"
        :field="item.image"
      />
    </div>
    <div class="lg:flex flex-col gap-32 hidden">
      <PrismicImage
        v-for="item in slice.items.filter((_, index) => index % 3 === 1)"
        :key="item.id"
        class="w-full shadow-xl rounded"
        :field="item.image"
      />
    </div>
    <div class="lg:flex flex-col gap-32 hidden">
      <PrismicImage
        v-for="item in slice.items.filter((_, index) => index % 3 === 2)"
        :key="item.id"
        class="w-full shadow-xl rounded"
        :field="item.image"
      />
    </div>
    <div class="flex flex-col gap-32 lg:hidden">
      <PrismicImage
        v-for="item in slice.items.filter((_, index) => index % 2 === 0)"
        :key="item.id"
        class="w-full shadow-xl rounded"
        :field="item.image"
      />
    </div>
    <div class="flex flex-col gap-32 lg:hidden">
      <PrismicImage
        v-for="item in slice.items.filter((_, index) => index % 2 === 1)"
        :key="item.id"
        class="w-full shadow-xl rounded"
        :field="item.image"
      />
    </div>
  </div>
</template>
