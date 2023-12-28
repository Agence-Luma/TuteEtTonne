<script setup lang="ts">
defineProps({
  premiereLigne: {
    type: String,
    required: true,
  },
  deuxiemeLigne: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center lg:inline-block relative text-center lg:text-start">
    <h1 class="mb-16 lg:mb-0 leading-[0.5] lg:leading-none">
      {{ premiereLigne }}
    </h1>
    <p class="font-helvetica relative lg:absolute lg:bottom-[5%] lg:left-[60%] w-max text-xl">
      {{ deuxiemeLigne }}
    </p>
  </div>
</template>
