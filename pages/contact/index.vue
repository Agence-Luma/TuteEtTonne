<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData('[page_contact]', () => prismic.client.getSingle('page_contact'));

const parametres = useParametres();

const accueil = useAccueil();

useHead({
  title: computed(() => `Contact | ${parametres.value?.data.titre_du_site}`)
})
</script>

<template>
  <div
    v-if="page"
    class="w-screen h-full flex"
  >
    <div class="w-1/3 relative">
      <div class="w-full h-full rounded-tr-[60px] overflow-hidden">
        <PrismicImage
          v-if="page.data.image"
          :field="page.data.image"
          class="object-cover min-w-full min-h-full"
        />
      </div>
      <PrismicLink
        v-if="parametres && parametres.data.logo"
        class="bg-black rounded-full absolute pointer-events-auto top-[75px] -right-[75px] w-[150px]"
        :field="accueil"
      >
        <PrismicImage
          class="p-[20%]"
          :field="parametres.data.logo"
        />
      </PrismicLink>
    </div>
    <Formulaire
      :formulaire="page.data.formulaire_de_contact"
      class="px-xl grow"
    />
  </div>
</template>
