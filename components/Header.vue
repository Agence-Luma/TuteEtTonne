<script setup lang="ts">
defineProps({
  titrePremiereLigne: {
    type: String,
    required: true,
  },
  titreDeuxiemeLigne: {
    type: String,
    required: true,
  },
  images: {
    type: Array<Object>,
    required: true,
  },
  fullHeight: {
    type: Boolean,
    default: false,
  },
});

const parametres = useParametres();
const accueil = useAccueil();

const carousel = ref<HTMLElement | null>(null);

const prevSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
}
</script>

<template>
  <div
    class="text-white relative"
    :class="{
      'h-[80vh] w-full lg:h-[90vh] lg:w-[85%]': fullHeight,
      'h-[80vh] w-full lg:mt-[20vh] lg:h-[70vh] lg:w-[95%] xl:w-[85%]': !fullHeight
    }"
  >
    <div class="z-10 relative w-full h-full flex items-center justify-center pointer-events-none">
      <TitreDouble
        class="pointer-events-auto px-xs lg:px-0"
        :class="{ 'ml-0 lg:ml-[50vw]': !fullHeight }"
        :premiere-ligne="titrePremiereLigne"
        :deuxieme-ligne="titreDeuxiemeLigne"
      />
      <PrismicLink
        v-if="parametres && parametres.data.logo"
        class="bg-black rounded-full absolute pointer-events-auto"
        :class="{
          'top-[50px] left-[50px] w-[100px] lg:top-auto lg:left-auto lg:bottom-[50px] lg:-right-[100px] lg:w-[200px]': fullHeight,
          'top-[50px] left-[50px] w-[100px] lg:-top-[125px] lg:left-[150px] lg:w-[250px]': !fullHeight
        }"
        :field="accueil"
      >
        <PrismicImage
          class="p-[20%]"
          :field="parametres.data.logo"
        />
      </PrismicLink>
    </div>
    <div
      v-if="images.length === 1"
      class="absolute top-0 left-0 z-0 object-cover rounded-b-[60px] lg:rounded-bl-[0px] lg:rounded-r-[60px] overflow-hidden w-full h-full brightness-[0.6] flex items-center justify-center"
    >
      <PrismicImage
        class="object-cover min-w-full min-h-full"
        :field="images[0].image"
      />
    </div>
    <div
      v-else
      class="absolute top-0 left-0 z-0 object-cover rounded-b-[60px] lg:rounded-bl-[0px] lg:rounded-r-[60px] overflow-hidden w-full h-full"
    >
      <Carousel
        ref="carousel"
        :wrap-around="true"
        class="w-full h-full flex items-center justify-center brightness-[0.6]"
      >
        <Slide
          v-for="image in images"
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
        class="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none px-64"
        :class="{
          'items-end pb-64 lg:items-center lg:pb-0': fullHeight,
          'items-end pb-64': !fullHeight
        }"
      >
        <BoutonRond :click="prevSlide"><img class="w-6 rotate-180 mr-2" src="/images/arrow.png" /></BoutonRond>
        <BoutonRond :click="nextSlide"><img class="w-6 ml-2" src="/images/arrow.png" /></BoutonRond>
      </div>
    </div>
  </div>
</template>

<style>
.carousel__viewport {
  @apply w-full h-full;

  .carousel__track {
    @apply w-full h-full;
  }
}
</style>