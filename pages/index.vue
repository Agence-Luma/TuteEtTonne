<script setup lang="ts">
import { components } from '~/slices'

const page = useAccueil();

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
      :slices="page.data.slices ?? []"
      :components="components"
    />
    <Formulaire
      v-if="page.data.formulaire_de_contact"
      :formulaire="page.data.formulaire_de_contact"
      class="px-xs lg:px-2xl xl:px-3xl"
    />
  </div>
</template>
