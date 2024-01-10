<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(
  `[hebergement-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("hebergement", route.params.uid as string),
);

const parametres = useParametres();

useHead({
  title: computed(() => {
    if (page.value?.data.titre_premiere_ligne && page.value?.data.titre_deuxieme_ligne) {
      return `${page.value?.data.titre_premiere_ligne} ${page.value?.data.titre_deuxieme_ligne} | ${parametres.value?.data.titre_du_site}`
    } else if (page.value?.data.titre_premiere_ligne) {
      return `${page.value?.data.titre_premiere_ligne} | ${parametres.value?.data.titre_du_site}`
    } else if (page.value?.data.titre_deuxieme_ligne) {
      return `${page.value?.data.titre_deuxieme_ligne} | ${parametres.value?.data.titre_du_site}`
    } else {
      return `${parametres.value?.data.titre_du_site}`
    }
  })
})
</script>

<template>
  <div v-if="page">
    <Header
      :titre-premiere-ligne="page.data.titre_premiere_ligne || ''"
      :titre-deuxieme-ligne="page.data.titre_deuxieme_ligne || ''"
      :images="page.data.carousel"
    />
    <SliceZone
      wrapper="main"
      class="pt-s"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    <Formulaire
      v-if="page.data.formulaire_de_contact"
      :formulaire="page.data.formulaire_de_contact"
      class="px-xs lg:px-2xl xl:px-3xl"
    />
    <Footer />
  </div>
</template>
