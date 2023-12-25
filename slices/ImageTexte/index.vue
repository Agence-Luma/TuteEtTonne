<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageTexteSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="w-full grid grid-cols-2">
    <PrismicImage
      class="object-cover min-w-full min-h-full"
      :field="slice.primary.image"
    />
    <div class="flex flex-col items-start justify-center gap-16 px-s">
      <h1>{{ slice.primary.titre }}</h1>
      <PrismicRichText :field="slice.primary.texte" />
    </div>
  </div>
</template>
