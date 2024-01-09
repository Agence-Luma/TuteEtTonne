<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData('[histoire]', () => prismic.client.getSingle('histoire'));

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
      class="mb-s"
    />
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    <Footer />
  </div>
</template>
