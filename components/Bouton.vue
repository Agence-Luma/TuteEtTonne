<script setup lang="ts">
defineProps({
  titre: {
    type: String,
    required: true,
  },
  lien: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <PrismicLink
    class="bg-white px-32 py-16 rounded-xl text-black font-bold transition-all hover:bg-black hover:text-white"
    :field="lien"
  >
    {{ titre }}
  </PrismicLink>
</template>
