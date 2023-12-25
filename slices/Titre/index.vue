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
  <div class="px-xl py-xs flex flex-col items-center justify-between text-2xl text-center">
    <p class="font-bold">{{ slice.primary.titre }}</p>
    <p>{{ slice.primary.sous_titre }}</p>
  </div>
</template>
