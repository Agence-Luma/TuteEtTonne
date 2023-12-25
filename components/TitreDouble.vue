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
  <div class="inline-block relative">
    <h1>
      {{ premiereLigne }}
    </h1>
    <p class="font-helvetica absolute bottom-[5%] left-[60%] w-max text-xl">
      {{ deuxiemeLigne }}
    </p>
  </div>
</template>
