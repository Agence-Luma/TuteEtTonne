<script setup lang="ts">
const prismic = usePrismic()
const { data: menu } = useAsyncData('$menu', () => prismic.client.getSingle('menu'));

const parametres = useParametres();

const showMenu = ref(false);
const openButton = ref<HTMLDivElement | null>(null);
const closeButton = ref<HTMLDivElement | null>(null);
const background = ref<HTMLDivElement | null>(null);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  openButton.value?.addEventListener("click", toggleMenu);
  closeButton.value?.addEventListener("click", toggleMenu);
  background.value?.addEventListener("click", toggleMenu);
})

const route = useRoute();

watch(() => route.fullPath, () => {
  showMenu.value = false;
}, { deep: true, immediate: true });
</script>

<template>
  <div
    v-if="menu"
    ref="openButton"
    class="flex flex-col gap-8 items-center fixed top-64 right-64 hover:cursor-pointer z-20"
  >
    <PrismicImage
      v-if="menu.data.icone_ouvrir_menu"
      class="w-[80%]"
      :field="menu.data.icone_ouvrir_menu"
    />
    <p class="font-bold">{{ menu?.data.titre }}</p>
  </div>

  <div
    ref="background"
    class="bg-black w-full h-full fixed top-0 left-0 z-20 transition-all"
    :class="{ 'opacity-0 pointer-events-none': !showMenu, 'opacity-50': showMenu }"
  />

  <div
    v-if="menu"
    class="bg-black h-full py-64 pr-100 pl-200 rounded-l-[60px] text-white flex justify-between fixed top-0 right-0 z-30 transition-all"
    :class="{ 'translate-x-full': !showMenu }"
  >
    <div class="flex flex-col gap-32 justify-between items-end">
      <div
        ref="closeButton"
        class="hover:cursor-pointer"
      >
        <PrismicImage
          v-if="menu.data.icone_fermer_menu"
          class="w-16"
          :field="menu.data.icone_fermer_menu"
        />
      </div>
      <div class="flex flex-col items-end gap-4 text-2xl">
        <PrismicLink
          v-for="lien in menu.data.liens"
          :key="lien.lien.link_type"
          :field="lien.lien"
          class="hover:text-gray-300 transition-all ease-out"
          :class="route.fullPath === lien.lien.url ? 'font-bold text-white' : 'text-gray-500'"
        >
          {{ lien.texte }}
        </PrismicLink>
      </div>
      <div class="flex flex-col gap-24">
        <div class="text-xs text-right font-bold">
          <p v-if="parametres?.data.telephone">
            <a :href="`tel:${parametres.data.telephone}`">{{ parametres.data.telephone }}</a>
          </p>
          <p v-if="parametres?.data.mail">
            <a :href="`mailto:${parametres.data.mail}`">{{ parametres.data.mail }}</a>
          </p>
        </div>
        <div class="flex gap-16 justify-end">
          <PrismicLink
            v-for="lien in parametres?.data.reseaux_sociaux"
            :key="lien.lien.link_type"
            class="w-24"
            :field="lien.lien"
          >
            <PrismicImage
              v-if="lien.logo"
              :field="lien.logo"
            />
          </PrismicLink>
        </div>
      </div>
    </div>
  </div>
</template>
