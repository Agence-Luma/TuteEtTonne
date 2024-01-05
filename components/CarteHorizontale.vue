<script setup lang="ts">
defineProps({
  carte: {
    type: Object,
    required: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-if="carte.value"
    class="carte-horizontale inline-block relative w-full rounded-xl overflow-hidden"
    :class="{ 'col-span-2': fullWidth }"
  >
    <div class="carte-horizontale--wrapper text-white z-10 relative flex flex-col items-center justify-between py-100 transition-all">
      <p class="text-2xl uppercase font-bold text-center">
        {{ carte.value.data.titre_premiere_ligne }}
      </p>
      <p class="text-l uppercase">
        {{ carte.value.data.categorie }}
      </p>
      <Bouton
        class="mt-16"
        titre="Découvrir"
        :lien="carte.value"
      />
    </div>
    <PrismicImage
      class="carte-horizontale--bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full transition-all"
      :field="carte.value.data.carousel[0].image"
    />
  </div>
</template>

<style>
.carte-horizontale {

  .carte-horizontale--wrapper {
    @apply opacity-100 lg:opacity-0;
  }

  .carte-horizontale--bg {
    @apply brightness-[0.35] lg:brightness-100;
  }

  &:hover {
    @apply cursor-pointer;

    .carte-horizontale--wrapper {
      @apply opacity-100;
    }

    .carte-horizontale--bg {
      @apply brightness-[0.35];
    }
  }
}
</style>