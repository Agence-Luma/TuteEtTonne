<script setup lang="ts">
import { components } from "~/slices";

const route = useRoute();
const page = useCoupDeCoeur(route.params.uid);
const parametres = useParametres();

useHead({
  title: computed(() => `${page.value?.data.titre_premiere_ligne} ${page.value?.data.titre_deuxieme_ligne} | ${parametres.value?.data.titre_du_site}`)
})
</script>

<template>
  <div v-if="page">
    <Header
      :titre-premiere-ligne="page.data.titre_premiere_ligne"
      :titre-deuxieme-ligne="page.data.titre_deuxieme_ligne"
      :images="page.data.carousel"
      :full-height="true"
    />
    <SliceZone
      wrapper="main"
      class="pt-s"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
