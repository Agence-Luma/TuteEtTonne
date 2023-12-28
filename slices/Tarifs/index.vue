<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TarifsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="inline-block relative overflow-hidden px-xs py-s lg:px-l lg:pt-xs lg:pb-s w-full">
    <div class="text-white z-10 relative flex flex-col items-center justify-between gap-32 lg:gap-16">
      <h1>{{ slice.primary.titre }}</h1>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-32 lg:gap-64 mb-16">
        <div
          v-for="item in slice.items"
          :key="item.prix"
          class="flex flex-col items-center justify-center text-center"
        >
          <p class="text-3xl font-bold">{{ item.prix }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <PrismicRichText
        class="my-16 lg:px-2xl xl:px-3xl text-center"
        :field="slice.primary.texte"
      />
    </div>
    <PrismicImage
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
      :field="slice.primary.image"
    />
  </div>
</template>
