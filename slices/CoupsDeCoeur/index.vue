<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TexteCartesGrilleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const cartes = ref([]);

props.slice.items.forEach((item) => {
  cartes.value.push(useCoupDeCoeur(item.coup_de_coeur.uid));
});
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
        v-for="carte in cartes"
        :key="carte.uid"
        :carte="carte"
      />
    </div>
  </div>
</template>
