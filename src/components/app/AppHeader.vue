<template>
  <section dir="ltr" class="app-header px-6 py-3 bg-light">
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
import { useRouter } from "vue-router";
const router = useRouter();
interface AppHeaderProps {
  logo?: string;
  title?: string;
}

defineProps<AppHeaderProps>();
</script>

<style lang="scss" scoped></style>
