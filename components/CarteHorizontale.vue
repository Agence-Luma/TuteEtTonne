<script setup lang="ts">
defineProps({
  carte: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="inline-block relative w-full rounded-xl overflow-hidden">
    <div class="text-white z-10 relative flex flex-col items-center justify-between py-100">
      <p class="text-2xl uppercase font-bold">
        {{ carte.titre }}
      </p>
      <p class="text-l uppercase">
        {{ carte.sous_titre }}
      </p>
      <Bouton
        class="mt-16"
        :titre="carte.bouton_titre"
        :lien="carte.bouton_lien"
      />
    </div>
    <PrismicImage
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-[0.35]"
      :field="carte.image"
    />
  </div>
</template>
