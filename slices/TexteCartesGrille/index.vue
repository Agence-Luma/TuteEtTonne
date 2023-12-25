<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TexteCartesGrilleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="px-xl py-l">
    <TitreDouble
      v-if="slice.primary.titre_premiere_ligne && slice.primary.titre_deuxieme_ligne"
      :premiere-ligne="slice.primary.titre_premiere_ligne"
      :deuxieme-ligne="slice.primary.titre_deuxieme_ligne"
    />
    <PrismicRichText
      class="mt-32 mb-64"
      :field="slice.primary.texte"
    />
    <div class="grid grid-cols-2 gap-32">
      <CarteHorizontale
        v-for="carte in slice.items"
        :key="carte.bouton_lien.link_type"
        :carte="carte"
      />
    </div>
  </div>
</template>
