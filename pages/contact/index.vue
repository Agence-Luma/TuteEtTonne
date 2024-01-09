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
  <div v-if="page">
    <div class="w-full h-full flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/3 relative h-[15vh] lg:h-auto">
        <div class="w-full h-full rounded-b-[60px] lg:rounded-tr-[60px] lg:rounded-b-[0] overflow-hidden">
          <PrismicImage
            v-if="page.data.image"
            :field="page.data.image"
            class="object-cover min-w-full min-h-full hidden lg:block"
          />
        </div>
        <PrismicLink
          v-if="parametres && parametres.data.logo"
          class="bg-black rounded-full absolute pointer-events-auto top-[50px] left-[50px] w-[100px] lg:top-[75px] lg:-right-[75px] lg:left-auto lg:w-[150px]"
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
        class="px-xs lg:px-xl grow"
      />
    </div>
    <Footer />
  </div>
</template>
