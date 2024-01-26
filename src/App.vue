<template>
  <section dir="rtl" class="app" id="app">
    <AppHeader title="Moots" :logo="getLocalIconPath('moots', 'logo')" />
    <router-view class="p-3 lg:p-4"></router-view>
  </section>
</template>

<script lang="ts" setup>
import AppHeader from "./components/app/AppHeader.vue";
import { getLocalIconPath } from "../src/services/utils-service";
</script>

<style lang="scss"></style>
