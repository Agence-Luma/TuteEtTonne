<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TexteCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const carousel = ref<HTMLElement | null>(null);

const prevSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
}
</script>

<template>
  <div class="relative w-full h-screen">
    <div
      v-if="slice.items.length === 1"
      class="overflow-hidden w-full h-full"
    >
      <PrismicImage
        class="object-cover min-w-full min-h-full"
        :field="slice.items[0].image"
      />
    </div>
    <div
      v-else
      class="overflow-hidden w-full h-full relative"
    >
      <Carousel
        ref="carousel"
        :wrap-around="true"
        class="w-full h-full flex items-center justify-center"
      >
        <Slide
          v-for="image in slice.items"
          :key="image.id"
          class="w-full h-full"
        >
          <PrismicImage
            class="object-cover min-w-full min-h-full"
            :field="image.image"
          />
        </Slide>
      </Carousel>

      <div
        class="absolute top-0 right-0 w-1/2 h-full flex justify-between pointer-events-none px-64 items-end pb-64"
      >
        <BoutonRond :click="prevSlide"><img class="w-6 rotate-180 mr-2" src="/images/arrow.png" /></BoutonRond>
        <BoutonRond :click="nextSlide"><img class="w-6 ml-2" src="/images/arrow.png" /></BoutonRond>
      </div>
    </div>
    <div class="bg-black rounded-3xl p-32 text-white flex flex-col items-center gap-32 w-[450px] absolute -bottom-[15%] left-[10%]">
      <TitreDouble
        v-if="slice.primary.titre_premiere_ligne && slice.primary.titre_deuxieme_ligne"
        :premiere-ligne="slice.primary.titre_premiere_ligne"
        :deuxieme-ligne="slice.primary.titre_deuxieme_ligne"
      />
      <PrismicRichText
        class="text-sm"
        :field="slice.primary.texte"
      />
    </div>
  </div>
</template>
