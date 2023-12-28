<script setup lang="ts">
const data = useCoupDeCoeur();

const categories = computed(() => data.value?.map((item) => item.data.categorie).filter((item, index, array) => array.indexOf(item) === index));

const selected = ref<number | null>(null);
const selectedCategories = computed(() => {
  if (selected.value === null) return data.value;
  else return data.value?.filter((item) => item.data.categorie === categories.value[selected.value]);
});
</script>

<template>
  <div class="py-s px-xs lg:px-l flex flex-col items-center justify-center gap-32 mb-64">
    <p class="font-bold text-3xl">
      Filtres
    </p>
    <div class="flex flex-wrap justify-center items-center gap-16 lg:gap-32">
      <div
        class="px-32 py-16 shadow-l rounded-xl font-bold hover:cursor-pointer"
        :class="selected === null ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'"
        @click="selected = null"
      >
        Tous
      </div>
      <div
        v-for="(categorie, index) in categories"
        :key="categorie"
        class="px-32 py-16 shadow-l rounded-xl font-bold hover:cursor-pointer"
        :class="selected === index ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'"
        @click="selected = index"
      >
        {{ categorie }}
      </div>
    </div>
    <div class="flex gap-64 flex-wrap justify-center mt-32">
      <PrismicLink
        v-for="item in selectedCategories"
        :key="item.uid"
        :field="item"
        class="w-[300px] bg-white shadow-l rounded-3xl relative"
      >
        <div class="w-full h-[200px] overflow-hidden relative rounded-3xl">
          <PrismicImage
            :field="item.data.carousel[0].image"
            class="object-cover min-w-full min-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <p class="font-bold text-center text-xl pt-32 pb-45">{{ item.data.titre_premiere_ligne }}</p>
        <p
          :field="item"
          class="absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-1/2 text-center py-8 bg-black text-white font-bold rounded-lg border border-transparent hover:bg-white hover:border-black hover:text-black transition-all"
        >
          Découvrir
        </p>
        <p class="absolute top-[20px] left-[20px] text-white bg-black py-8 px-16 rounded-xl text-xs uppercase font-bold opacity-75">
          {{ item.data.categorie }}
        </p>
      </PrismicLink>
    </div>
  </div>
</template>
