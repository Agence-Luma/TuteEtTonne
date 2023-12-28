<script setup lang="ts">
defineProps({
  carte: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="inline-block relative w-full lg:w-1/3 rounded-3xl overflow-hidden">
    <div class="text-white z-10 relative flex flex-col items-center justify-between py-64 gap-32">
      <h1>
        {{ carte.titre }}
      </h1>
      <Bouton
        :titre="carte.bouton_titre"
        :lien="carte.bouton_lien"
      />
    </div>
    <PrismicImage
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full brightness-50"
      :field="carte.image"
    />
  </div>
</template>
