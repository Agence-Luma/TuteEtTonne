<script setup lang="ts">
defineProps({
  carte: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="carte-verticale inline-block relative w-full lg:w-[45%] rounded-3xl overflow-hidden">
    <div class="carte-verticale--wrapper text-white z-10 relative flex flex-col items-center justify-between py-64 gap-32 transition-all">
      <h1>
        {{ carte.titre }}
      </h1>
      <Bouton
        :titre="carte.bouton_titre"
        :lien="carte.bouton_lien"
      />
    </div>
    <PrismicImage
      class="carte-verticale--bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 object-cover min-w-full min-h-full transition-all"
      :field="carte.image"
    />
  </div>
</template>

<style>
.carte-verticale {

  .carte-verticale--wrapper {
    @apply opacity-100 lg:opacity-0;
  }

  .carte-verticale--bg {
    @apply brightness-50 lg:brightness-100;
  }

  &:hover {
    @apply cursor-pointer;

    .carte-verticale--wrapper {
      @apply opacity-100;
    }

    .carte-verticale--bg {
      @apply brightness-50;
    }
  }
}
</style>