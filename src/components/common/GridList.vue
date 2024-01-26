<template>
  <section :class="gridListClass">
    <slot name="items"></slot>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
interface GridListProps {}

defineProps<GridListProps>();

const gridListClass = computed(() => {
  return "grid-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4";
});
</script>

<style lang="scss" scoped></style>
