<script setup lang="ts">
defineProps({
  click: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <button
    class="pointer-events-auto bg-white rounded-full w-[30px] h-[30px] p-8 flex items-center justify-center"
    @click="click"
  >
    <slot />
  </button>
</template>
