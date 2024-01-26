<template>
  <section class="pet-index-page">
    <h1>Pet Index Page</h1>
    <Card title="Tim" description="Fat cat very fat" />
    </section>
</template>

<script lang="ts" setup>
import Card from '../components/common/Card.vue'
interface PetIndexPageProps {}

defineProps<PetIndexPageProps>();
</script>

<style lang="scss" scoped></style>
