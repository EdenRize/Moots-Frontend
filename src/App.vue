<template>
  <section dir="rtl" :class="['app', isScroll && 'has-scroll']" id="app">
    <AppHeader title="Moots" :logo="getLocalIconPath('moots', 'logo')" />
    <router-view class="sm:p-3 sm:py-9 mt-[65px] sm:mt-0"></router-view>
  </section>
</template>

<script lang="ts" setup>
import { hasVerticalScroll } from "../src/services/utils-service";
import { getLocalIconPath } from "../src/services/utils-service";
import AppHeader from "./components/app/AppHeader.vue";
import { onMounted, ref } from 'vue'

const isScroll = ref()
onMounted(() => {
  setTimeout(() => {
    isScroll.value = hasVerticalScroll()
  }, 0);
})
</script>

<style lang="scss"></style>
