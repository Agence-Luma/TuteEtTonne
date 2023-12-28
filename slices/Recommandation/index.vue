<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.RecommandationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const prismic = usePrismic();
const { data: page } = useAsyncData(
  `[coup_de_coeur-uid-${props.slice.primary.coup_de_coeur.uid}]`,
  () => prismic.client.getByUID("coup_de_coeur", props.slice.primary.coup_de_coeur.uid as string),
);

const recommanded = computed(() => page.value);
</script>

<template>
  <div class="w-full mt-s py-s lg:py-l bg-black text-white px-xs lg:px-xl xl:px-2xl flex items-center flex-col lg:flex-row gap-64 lg:gap-200">
    <TitreDouble
      v-if="slice.primary.titre_premiere_ligne && slice.primary.titre_deuxieme_ligne"
      :premiere-ligne="slice.primary.titre_premiere_ligne"
      :deuxieme-ligne="slice.primary.titre_deuxieme_ligne"
    />
    <h1 v-else>
      {{ slice.primary.titre_premiere_ligne || slice.primary.titre_deuxieme_ligne }}
    </h1>
    <div
      v-if="recommanded"
      class="inline-block relative w-full rounded-xl overflow-hidden"
    >
      <div class="text-white z-10 relative flex flex-col items-center justify-between py-100">
        <p class="text-2xl uppercase font-bold">
          {{ recommanded.data.titre_premiere_ligne }}
        </p>
        <p class="text-l uppercase">
          {{ recommanded.data.categorie }}
        </p>
        <Bouton
          class="mt-16"
          titre="Découvrir"
          :lien="recommanded"
        />
      </div>
      <PrismicImage
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
        :field="recommanded.data.carousel[0].image"
      />
    </div>
  </div>
</template>
