<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TitreSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="px-xs lg:px-2xl xl:px-3xl py-xs flex flex-col items-center justify-between text-2xl text-center gap-8 lg:gap-0">
    <p v-if="slice.primary.titre" class="font-bold">{{ slice.primary.titre }}</p>
    <p v-if="slice.primary.sous_titre">{{ slice.primary.sous_titre }}</p>
  </div>
</template>
