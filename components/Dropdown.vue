<script setup lang="ts">
defineProps({
  titre: {
    type: String,
    required: true,
  },
  texte: {
    type: String,
    required: true,
  },
});

const opened = ref(false);
</script>

<template>
  <div>
    <div
      class="border rounded-3xl py-16 px-32 cursor-pointer"
      :class="{
        'bg-black text-white border-black': opened,
        'hover:bg-gray-100 border-gray-500': !opened,
      }"
      @click="opened = !opened"
    >
      <div class="w-full flex justify-between gap-32 items-center">
        <p class="font-bold grow" style="flex-basis: min-content;">
          {{ titre }}
        </p>
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center"
          :class="{ 'bg-white': opened }"
        >
          <img
            class="w-4"
            :class="{
              'rotate-90': !opened,
              '-rotate-90': opened,
            }"
            src="/images/arrow.png"
          />
        </div>
      </div>
      <PrismicRichText
        class="h-0 overflow-hidden"
        :class="{
          'h-auto pt-16': opened,
        }"
        :field="texte"
      />
    </div>
  </div>
</template>
