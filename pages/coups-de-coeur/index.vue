<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData('coups_de_coeur', () => prismic.client.getSingle('coups_de_coeur'));

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
    />
    <CoupsDeCoeur />
    <Footer />
  </div>
</template>
