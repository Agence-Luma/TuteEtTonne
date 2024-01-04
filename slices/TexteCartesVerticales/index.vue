<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TexteCartesVerticalesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div class="px-xs py-s lg:px-xl xl:px-2xl lg:py-l">
    <TitreDouble
      v-if="slice.primary.titre_premiere_ligne && slice.primary.titre_deuxieme_ligne"
      :premiere-ligne="slice.primary.titre_premiere_ligne"
      :deuxieme-ligne="slice.primary.titre_deuxieme_ligne"
    />
    <PrismicRichText
      class="mt-64 lg:mt-32 mb-64 xl:pr-l"
      :field="slice.primary.texte"
    />
    <div class="flex flex-wrap justify-between gap-64 flex-col lg:flex-row">
      <CarteVerticale
        v-for="carte in slice.items"
        :key="carte.bouton_lien.link_type"
        :carte="carte"
      />
    </div>
  </div>
</template>
