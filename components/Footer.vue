<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData('$footer', () => prismic.client.getSingle('footer'));

const parametres = useParametres();
</script>

<template>
  <div
    v-if="page"
    class="bg-black w-full py-64 px-xs lg:px-100 rounded-t-[40px] text-white flex flex-col lg:flex-row justify-between items-center lg:items-end -mt-[40px] relative z-10 gap-64 lg:gap-0"
  >
    <div class="flex flex-col gap-32 justify-between items-center lg:items-start">
      <PrismicImage
        v-if="parametres?.data.logo"
        class="w-[120px]"
        :field="parametres.data.logo"
      />
      <PrismicRichText
        v-if="page.data.texte"
        class="text-xs"
        :field="page.data.texte"
      />
    </div>
    <div class="flex flex-col gap-32 justify-between">
      <div class="flex gap-32 lg:gap-16 justify-center lg:justify-start">
        <PrismicLink
          v-for="lien in parametres?.data.reseaux_sociaux"
          :key="lien.lien.link_type"
          class="w-64 lg:w-32"
          :field="lien.lien"
        >
          <PrismicImage
            v-if="lien.logo"
            class="w-64 lg:w-32"
            :field="lien.logo"
          />
        </PrismicLink>
      </div>
      <div class="text-lg text-center lg:text-start flex flex-col gap-16 lg:block">
        <p v-if="parametres?.data.telephone">
          <a :href="`tel:${parametres.data.telephone}`">{{ parametres.data.telephone }}</a>
        </p>
        <p v-if="parametres?.data.mail">
          <a :href="`mailto:${parametres.data.mail}`">{{ parametres.data.mail }}</a>
        </p>
      </div>
      <div class="flex gap-32 text-xs">
        <PrismicLink
          v-for="lien in page.data.liens"
          :key="lien.lien.link_type"
          :field="lien.lien"
        >
          {{ lien.texte }}
        </PrismicLink>
      </div>
    </div>
  </div>
</template>
