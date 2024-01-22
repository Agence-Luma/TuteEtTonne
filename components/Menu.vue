<script setup lang="ts">
const prismic = usePrismic()
const { data: menu } = useAsyncData('$menu', () => prismic.client.getSingle('menu'));

const parametres = useParametres();
const accueil = useAccueil();

const showMenu = ref(false);
const openDesktop = ref<HTMLDivElement | null>(null);
const openMobile = ref<HTMLDivElement | null>(null);
const closeButton = ref<HTMLDivElement | null>(null);
const background = ref<HTMLDivElement | null>(null);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  openDesktop.value?.addEventListener("click", toggleMenu);
  openMobile.value?.addEventListener("click", toggleMenu);
  closeButton.value?.addEventListener("click", toggleMenu);
  background.value?.addEventListener("click", toggleMenu);
})

onUnmounted(() => {
  openDesktop.value?.removeEventListener("click", toggleMenu);
  openMobile.value?.removeEventListener("click", toggleMenu);
  closeButton.value?.removeEventListener("click", toggleMenu);
  background.value?.removeEventListener("click", toggleMenu);
  window.removeEventListener('scroll', handleScroll);
})

const route = useRoute();

watch(() => route.fullPath, () => {
  showMenu.value = false;
}, { deep: true, immediate: true });

const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 100;  
}

if (process.client){
  window.addEventListener('scroll', handleScroll);
}
</script>

<template>
  <div
    v-if="menu"
    class="w-full lg:w-auto flex justify-between px-32 py-16 lg:p-0 fixed top-0 right-0 lg:top-45 lg:right-45 hover:cursor-pointer z-20 transition-all lg:transition-none"
    :class="{ 'bg-white shadow-l lg:bg-transparent lg:shadow-none': hasScrolled }"
  >
    <div
      ref="openDesktop"
      class="hidden lg:flex flex-col gap-8 items-center justify-center bg-white rounded-full w-[80px] h-[80px]"
    >
      <PrismicImage
        v-if="menu.data.icone_ouvrir_menu"
        class="w-[40%] mt-8"
        :field="menu.data.icone_ouvrir_menu"
      />
      <p class="font-bold">{{ menu?.data.titre }}</p>
    </div>

    <PrismicLink
      v-if="parametres && parametres.data.logo && accueil"
      class="opacity-0 bg-black rounded-full w-[50px] block lg:hidden transition-all"
      :class="{ 'opacity-100': hasScrolled }"
      :field="accueil"
    >
      <PrismicImage
        class="p-[20%]"
        :field="parametres.data.logo"
      />
    </PrismicLink>
    <div
      ref="openMobile"
      class="block lg:hidden flex flex-col gap-8 items-center justify-center transition-all"
      :class="hasScrolled ? 'mt-8' : 'mt-45 mr-16 bg-white rounded-full p-16 w-[80px] h-[80px]'"
    >
      <PrismicImage
        v-if="menu.data.icone_ouvrir_menu"
        class="w-[80%]"
        :field="menu.data.icone_ouvrir_menu"
      />
      <p class="font-bold">{{ menu?.data.titre }}</p>
    </div>
  </div>

  <div
    ref="background"
    class="bg-black w-full h-full fixed top-0 left-0 z-20 transition-all"
    :class="{ 'opacity-0 pointer-events-none': !showMenu, 'opacity-50': showMenu }"
  />

  <div
    v-if="menu"
    class="bg-black w-[90vw] lg:w-auto py-64 px-xs lg:pr-100 lg:pl-200 rounded-l-[60px] text-white flex justify-between fixed top-0 right-0 bottom-0 z-30 transition-all"
    :class="{ 'translate-x-full': !showMenu }"
  >
    <div class="w-full lg:w-auto flex flex-col gap-32 justify-between items-end">
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
      <div class="flex flex-col items-end gap-8 lg:gap-4 text-2xl">
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
        <div class="text-s lg:text-xs text-right font-bold">
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
            class="w-32 lg:w-24"
            :field="lien.lien"
          >
            <PrismicImage
              v-if="lien.logo"
              class="w-32 lg:w-24"
              :field="lien.logo"
            />
          </PrismicLink>
        </div>
      </div>
    </div>
  </div>
</template>
