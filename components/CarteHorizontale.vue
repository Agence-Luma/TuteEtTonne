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
    class="inline-block relative w-full rounded-xl overflow-hidden"
    :class="{ 'col-span-2': fullWidth }"
  >
    <div class="text-white z-10 relative flex flex-col items-center justify-between py-100">
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
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
      :field="carte.value.data.carousel[0].image"
    />
  </div>
</template>
