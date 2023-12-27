<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AssemblageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="px-2xl py-xs flex flex-col gap-128 mb-s">
    <div
      v-for="(item, index) in slice.items"
      :key="item.id"
      class="flex items-center gap-100"
      :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
    >
      <div class="relative">
        <div class="text-white bg-black p-64 rounded-full w-[350px] h-[350px] flex items-center justify-center">
          <h1>
            {{ item.titre }}
          </h1>
        </div>
        <div
          class="rounded-full absolute -top-[40px] overflow-hidden w-[150px] h-[150px]"
          :class="index % 2 === 0 ? '-left-[40px]' : '-right-[40px]'"
        >
          <PrismicImage
            class="inset-0 min-h-full min-w-full mt-[50%] ml-[50%] -translate-x-1/2 -translate-y-1/2 shadow-l"
            :field="item.image"
          />
        </div>
      </div>
      <PrismicRichText
        :field="item.texte"
      />
    </div>
  </div>
</template>
