<template>
  <section
    class="grid-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <slot name="items"></slot>
  </section>
</template>

<script lang="ts" setup>
interface GridListProps {}

const props = defineProps<GridListProps>();
</script>

<style lang="scss" scoped></style>
