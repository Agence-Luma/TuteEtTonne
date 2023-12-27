<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImagePleineLargeurSlice>([
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
    class="w-screen my-s h-[300px] overflow-hidden relative"
  >
    <PrismicImage
      class="absolute inset-0 w-full h-full object-cover"
      :field="slice.primary.image"
    />
  </div>
  <div
    v-else-if="slice.variation === 'imageHaute'"
    class="w-screen h-[500px] overflow-hidden relative"
  >
    <PrismicImage
      class="absolute inset-0 w-full h-full object-cover"
      :field="slice.primary.image"
    />
  </div>
  <div
    v-else-if="slice.variation === 'imageTresHaute'"
    class="w-screen h-[600px] overflow-hidden relative rounded-t-[40px]"
  >
    <PrismicImage
      class="absolute inset-0 w-full h-full object-cover"
      :field="slice.primary.image"
    />
  </div>
</template>
