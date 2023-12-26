<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData('$footer', () => prismic.client.getSingle('footer'));

const parametres = useParametres();
</script>

<template>
  <div
    v-if="page"
    class="bg-black w-full py-64 px-100 rounded-t-[40px] text-white flex justify-between -mt-[40px] relative z-10"
  >
    <div class="flex flex-col gap-32 justify-between">
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
      <div class="flex gap-16">
        <PrismicLink
          v-for="lien in parametres?.data.reseaux_sociaux"
          :key="lien.lien.link_type"
          class="w-32"
          :field="lien.lien"
        >
          <PrismicImage
            v-if="lien.logo"
            :field="lien.logo"
          />
        </PrismicLink>
      </div>
      <div class="text-lg">
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
