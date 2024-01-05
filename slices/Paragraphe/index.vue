<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ParagrapheSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div class="px-xs lg:px-2xl xl:px-3xl py-xs w-full">
    <p v-if="slice.primary.titre" class="font-bold text-xl mb-32">
      {{ slice.primary.titre }}
    </p>
    <PrismicRichText v-if="slice.primary.texte" :field="slice.primary.texte" />
  </div>
</template>
