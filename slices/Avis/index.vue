<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AvisSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="px-xs lg:px-xl xl:px-2xl py-s text-white bg-black w-full overflow-hidden flex flex-col gap-32">
    <h1 v-if="slice.primary.titre">
      {{ slice.primary.titre }}
    </h1>
    <Carousel
      :items-to-show="2"
      class="w-full cursor-grab hidden lg:block"
    >
      <Slide
        v-for="avis in slice.items"
        :key="avis.id"
        class="px-16"
      >
        <div class="w-full h-full border border-gray-500 rounded-4xl px-32 py-45 flex flex-col justify-center gap-16">
          <PrismicRichText
            v-if="avis.texte"
            :field="avis.texte"
            class="text-left text-xs text-gray-200"
          />
          <p class="text-right">
            {{ avis.auteur }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <Carousel
      :items-to-show="1"
      class="w-full cursor-grab block lg:hidden"
    >
      <Slide
        v-for="avis in slice.items"
        :key="avis.id"
        class="px-16"
      >
        <div class="w-full h-full border border-gray-500 rounded-4xl px-32 py-45 flex flex-col justify-center gap-16">
          <PrismicRichText
            v-if="avis.texte"
            :field="avis.texte"
            class="text-left text-xs text-gray-200"
          />
          <p class="text-right">
            {{ avis.auteur }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
:deep(.carousel__viewport) {
  overflow: visible;
}

:deep(.carousel__pagination) {
  @apply flex justify-center gap-8 mt-32;
}

:deep(.carousel__pagination-button::after) {
  @apply bg-gray-500 w-32 h-4;
}

:deep(.carousel__pagination-button--active::after) {
  @apply bg-white;
}
</style>