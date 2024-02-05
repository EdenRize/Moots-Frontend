<template>
  <section dir="ltr" :class="appHeaderClass">
    <div @click="router.push('/')" class="flex items-center sm:py-6 sm:justify-center sm:w-full cursor-pointer w-fit">
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
  return "fixed top-0 w-full sm:w-auto sm:h-full app-header px-3 lg:px-4 py-3 bg-white border-b border-midLight sm:border-b-0 sm:border-s sm:w-[250px]";
});

defineProps<AppHeaderProps>();
</script>

<style lang="scss" scoped></style>
