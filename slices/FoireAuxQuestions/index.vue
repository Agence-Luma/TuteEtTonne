<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FoireAuxQuestionsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="px-xs lg:px-xl xl:px-2xl py-s flex flex-col gap-64 items-center">
    <TitreDouble
      v-if="slice.primary.titre_premiere_ligne && slice.primary.titre_deuxieme_ligne"
      :premiere-ligne="slice.primary.titre_premiere_ligne"
      :deuxieme-ligne="slice.primary.titre_deuxieme_ligne"
    />
    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-16 auto-rows-auto">
      <Dropdown
        v-for="faq in slice.items"
        :key="faq.id"
        :titre="faq.question"
        :texte="faq.reponse"
      />
    </div>
  </div>
</template>
