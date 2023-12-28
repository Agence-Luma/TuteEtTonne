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
    v-if="slice.variation === 'default'"
    class="inline-block relative overflow-hidden"
    :class="slice.primary.bouton_titre && slice.primary.bouton_lien ? 'px-xs lg:px-2xl xl:px-3xl py-s' : 'px-xs py-s lg:px-xl xl:px-2xl text-center text-2xl lg:py-l'"
  >
    <div class="text-white z-10 relative flex flex-col items-center justify-between">
      <h1
        v-if="slice.primary.titre"
        class="text-center lg:text-start leading-[0.5] lg:leading-none mb-64 lg:mb-16"
      >
        {{ slice.primary.titre }}
      </h1>
      <PrismicRichText
        :class="slice.primary.bouton_titre && slice.primary.bouton_lien ? 'mb-64' : ''"
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
  <div
    v-else-if="slice.variation === 'texteSeul'"
    class="inline-block relative overflow-hidden px-xs lg:px-2xl xl:px-3xl py-s lg:py-l"
  >
    <PrismicRichText
      class="text-white relative z-10"
      :field="slice.primary.texte"
    />
    <PrismicImage
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
      :field="slice.primary.image"
    />
  </div>
</template>
