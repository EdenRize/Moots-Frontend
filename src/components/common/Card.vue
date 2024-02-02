<template>
  <section :class="cardClass">
    <img :class="cardImgClass" :src="cardImgSrc" />

    <div :class="cardInfoClass">
      <p v-if="title" class="bold">{{ title }}</p>
      <p v-if="subInfo">{{ subInfo }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";

// COMPUTED

const cardImgSrc = computed(() => {
  return (
    (props.imgs && props.imgs[0]) ||
    props.placeholderImg
  );
});

const cardClass = computed(() => {
  return "flex w-full flex-col items-center justify-between rounded  bg-light text-dark border border-midLight cursor-pointer card";
});

const cardImgClass = computed(() => {
  return "w-full object-cover rounded-t preview-img";
});

const cardInfoClass = computed(() => {
  return "flex flex-col items-center p-3";
});

// PROPS

interface CardProps {
  imgs?: string[];
  placeholderImg: string;
  title?: string;
  subInfo?: string;
}

const props = defineProps<CardProps>();
</script>

<style lang="scss" scoped>
.card {
  .preview-img {
    aspect-ratio: 1 / 1;
  }
}
</style>
