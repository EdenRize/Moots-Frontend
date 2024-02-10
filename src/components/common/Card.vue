<template>
  <section :class="cardClass">
    <img @click="emit('infoClick')" :class="cardImgClass" :src="cardImgSrc" />

    <CardActions class="mb-3" />
    <div @click="emit('infoClick')" :class="cardInfoClass">
      <p v-if="title" class="bold">{{ title }}</p>
      <div class="flex items-center justify-between">
        <p v-if="subInfo">{{ subInfo }}</p>
        <p v-if="createdAt" class="text-lowLight text-sm">{{ getFormattedTimePassed(createdAt) }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import CardActions from "./CardActions.vue";
import { getFormattedTimePassed } from '../../services/utils-service';

// COMPUTED

const cardImgSrc = computed(() => {
  return (
    (props.imgs && props.imgs[0]) ||
    props.placeholderImg
  );
});

const cardClass = computed(() => {
  return "flex flex-col justify-between sm:rounded bg-white text-dark card";
});

const cardImgClass = computed(() => {
  return " object-cover sm:rounded-t cursor-pointer preview-img";
});

const cardInfoClass = computed(() => {
  return "flex flex-col cursor-pointer px-[16px]";
});

// PROPS

interface CardProps {
  imgs?: string[];
  placeholderImg: string;
  title?: string;
  subInfo?: string | null;
  createdAt?: number;
}

const props = defineProps<CardProps>();


const emit = defineEmits<{
  (e: 'infoClick'): void
}>()
</script>

<style lang="scss" scoped>
.card {
  .preview-img {
    aspect-ratio: 1 / 1;
  }
}
</style>
