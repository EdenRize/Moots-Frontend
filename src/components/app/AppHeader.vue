<template>
  <section dir="ltr" :class="appHeaderClass">
    <div
      @click="router.push('/')"
      class="flex items-center cursor-pointer w-fit"
    >
      <img v-if="logo" class="w-10" :src="logo" />
      <p v-if="title" class="bold text-2xl ms-2 text-darker">{{ title }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
interface AppHeaderProps {
  logo?: string;
  title?: string;
}

const appHeaderClass = computed(() => {
  return "app-header px-3 lg:px-4 py-3 bg-light border-b border-midLight";
});

defineProps<AppHeaderProps>();
</script>

<style lang="scss" scoped></style>
