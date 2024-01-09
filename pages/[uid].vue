<script setup lang="ts">
import { components } from '~/slices';

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID('page', route.params.uid as string)
);

const parametres = useParametres();

useHead({
  title: computed(() => `${page.value?.data.titre_premiere_ligne} ${page.value?.data.titre_deuxieme_ligne} | ${parametres.value?.data.titre_du_site}`)
})
</script>


<template>
  <div v-if="page">
    <Header
      :titre-premiere-ligne="page.data.titre_premiere_ligne || ''"
      :titre-deuxieme-ligne="page.data.titre_deuxieme_ligne || ''"
      :images="page.data.carousel"
      class="mb-s"
    />
    <SliceZone
      wrapper="main"
      :class="{ 'pb-s': page.data.slices[page.data.slices.length - 1].slice_type !== 'image_pleine_largeur' }"
      :slices="page.data.slices ?? []"
      :components="components"
    />
    <Footer />
  </div>
</template>
