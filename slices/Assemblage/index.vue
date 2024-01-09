<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const p = defineProps(
  getSliceComponentProps<Content.AssemblageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
console.log(p);

</script>

<template>
  <div class="px-xs lg:px-xl xl:px-2xl py-s lg:py-xs flex flex-col gap-100 lg:gap-128 mb-s">
    <div
      v-for="(item, index) in slice.items"
      :key="item.id"
    >
      <div
        class="flex items-center gap-[50px] lg:gap-100"
        :class="index % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'"
      >
        <div class="relative">
          <div class="text-white bg-black p-64 rounded-full w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
            <h1 class="text-7xl lg:text-9xl">
              {{ item.titre }}
            </h1>
          </div>
          <div
            class="rounded-full absolute -top-[40px] overflow-hidden w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            :class="index % 2 === 0 ? '-left-[40px]' : '-right-[40px]'"
          >
            <PrismicImage
              class="inset-0 min-h-full min-w-full object-cover mt-[50%] ml-[50%] -translate-x-1/2 -translate-y-1/2 shadow-l"
              :field="item.image"
            />
          </div>
        </div>
        <PrismicRichText
          :field="item.texte"
        />
      </div>
      <div
        v-if="item.image_large.url"
        class="rounded-3xl overflow-hidden mx-auto w-full h-[150px] mt-[50px] lg:w-[700px] lg:h-[250px] flex items-center justify-center shadow-l lg:mt-100"
      >
        <PrismicImage
          class="inset-0 min-h-full min-w-full object-cover"
          :field="item.image_large"
        />
      </div>
    </div>
  </div>
</template>
