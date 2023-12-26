<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TexteImageLargeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div
    class="inline-block relative overflow-hidden"
    :class="slice.primary.bouton_titre && slice.primary.bouton_lien ? 'px-2xl py-s' : 'px-xl text-center text-2xl py-l'"
  >
    <div class="text-white z-10 relative flex flex-col items-center justify-between">
      <h1>{{ slice.primary.titre }}</h1>
      <PrismicRichText
        class="mt-16"
        :class="slice.primary.bouton_titre && slice.primary.bouton_lien ? 'mb-64' : 'mb-16'"
        :field="slice.primary.texte"
      />
      <Bouton
        v-if="slice.primary.bouton_titre && slice.primary.bouton_lien"
        :titre="slice.primary.bouton_titre"
        :lien="slice.primary.bouton_lien"
      />
    </div>
    <PrismicImage
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
      :field="slice.primary.image"
    />
  </div>
</template>
