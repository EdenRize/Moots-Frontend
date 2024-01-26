<template>
  <section class="pet-index-page">
    <GridList>
      <template v-slot:items>
        <Card v-for="pet in pets" :key="pet._id" :title="pet.name" />
      </template>
    </GridList>
    <!-- <Card title="Tim" description="Fat cat very fat" /> -->
  </section>
</template>

<script lang="ts" setup>
import GridList from "../components/common/GridList.vue";
import Card from "../components/common/Card.vue";
import { ref, Ref } from "vue";
import { Pet } from "../models/pet-models";

const pets: Ref<Pet[]> = ref([
  { name: "Tim", _id: "1", age: 4 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
  { name: "Gucci", _id: "2", age: 23 },
]);

interface PetIndexPageProps {}

defineProps<PetIndexPageProps>();
</script>

<style lang="scss" scoped></style>
