<template>
  <section v-if="pets" class="pet-index-page">
    <Card v-for="pet in pets" :key="pet._id" @info-click="setSelectedPet(pet)" class="mb-6" :title="pet.name"
      :sub-info="getAgeString(pet.age)" :placeholder-img="placeholderImg" :imgs="pet.imgs" :createdAt="pet.createdAt" />

    <Dialog @close="closeDialog" :is-open="isDialog">
      <template v-slot:content>
        <ItemSlot @close="closeDialog" :sub-info="getAgeString(selectedPet?.pet.age)"
          :title="`${selectedPet?.pet.name}${selectedPet?.pet.race ? ` - ${selectedPet?.pet.race}` : ''}`"
          :imgs="selectedPet?.pet.imgs" :description="selectedPet?.pet.description" :placeholder-img="placeholderImg"
          :owner="selectedPet?.owner" :is-loading="!selectedPet" :createdAt="selectedPet?.pet.createdAt" />
      </template>
    </Dialog>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, Ref } from "vue";
import Card from "../components/common/Card.vue";
import Dialog from "../components/common/Dialog.vue";
import ItemSlot from "../components/common/slots/ItemSlot.vue";
import { Pet, SelectedPet } from "../models/pet-models";
import { getAgeString, getLocalImgPath } from "../services/utils-service";
import { petService } from "../services/pet.service";
import { userService } from "../services/user.service";

const selectedPet: Ref<SelectedPet | null> = ref(null)
const isDialog: Ref<boolean> = ref(false)

const placeholderImg = computed(() => {
  return getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

const pets: Ref<Pet[] | undefined> = ref()

onMounted(async () => {
  try {
    pets.value = await petService.query()
  } catch (err: any) {
    console.log('err', err)
  }
})

const setSelectedPet = async (pet: Pet): Promise<void> => {
  try {
    isDialog.value = true
    selectedPet.value = {
      owner: await userService.getById(pet.ownerId),
      pet
    }

  } catch (err) {

  }
}

const closeDialog = () => {
  isDialog.value = false
  selectedPet.value = null
}

</script>

<style lang="scss" scoped>
.pet-index-page {
  @media (min-width: 640px) {
    width: 460px;
    margin-inline: auto;
  }

}
</style>
