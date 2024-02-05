<template>
  <section class="pet-index-page">
    <Card v-for="pet in pets" :key="pet._id" @info-click="setSelectedPet(pet)" class="mb-6" :title="pet.name"
      :sub-info="pet.age" :placeholder-img="placeholderImg" :imgs="pet.imgs" :createdAt="pet.createdAt" />

    <Dialog @close="isDialog = false" :is-open="isDialog">
      <template v-slot:content>
        <ItemSlot @close="isDialog = false" :sub-info="selectedPet?.pet.age"
          :title="`${selectedPet?.pet.name}${selectedPet?.pet.race ? ` - ${selectedPet?.pet.race}` : ''}`"
          :imgs="selectedPet?.pet.imgs" :description="selectedPet?.pet.description" :placeholder-img="placeholderImg"
          :owner="selectedPet?.owner" :is-loading="!selectedPet" :createdAt="selectedPet?.pet.createdAt" />
      </template>
    </Dialog>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from "vue";
import Card from "../components/common/Card.vue";
import Dialog from "../components/common/Dialog.vue";
import ItemSlot from "../components/common/slots/ItemSlot.vue";
import { Pet, SelectedPet } from "../models/pet-models";
import { getLocalImgPath } from "../services/utils-service";

const selectedPet: Ref<SelectedPet | null> = ref(null)
const isDialog: Ref<boolean> = ref(false)

const placeholderImg = computed(() => {
  return getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

const pets: Ref<Pet[]> = ref([
  {
    name: "טים", _id: "1", age: '4 חודשים', type: 'dog',
    race: 'בריטי', description: 'חתול שמן מטומטם לא נחמד בככל עזבו אותו',
    imgs: ['https://res.cloudinary.com/dkvliixzt/image/upload/v1699705610/cld-sample.jpg'],
    ownerId: '2', createdAt: 1707157682399
  },
  {
    name: "טים", _id: "1", age: '4 חודשים', type: 'dog',
    race: 'בריטי', description: 'חתול שמן מטומטם לא נחמד בככל עזבו אותו',
    imgs: ['https://res.cloudinary.com/dkvliixzt/image/upload/v1699705610/cld-sample.jpg'],
    ownerId: '2', createdAt: 1706988151039
  },
  {
    name: "טים", _id: "1", age: '4 חודשים', type: 'dog',
    race: 'בריטי', description: 'חתול שמן מטומטם לא נחמד בככל עזבו אותו',
    imgs: ['https://res.cloudinary.com/dkvliixzt/image/upload/v1699705610/cld-sample.jpg'],
    ownerId: '2', createdAt: 1707150247988
  },
  {
    name: "טים", _id: "1", age: '4 חודשים', type: 'dog',
    race: 'בריטי', description: 'חתול שמן מטומטם לא נחמד בככל עזבו אותו',
    imgs: ['https://res.cloudinary.com/dkvliixzt/image/upload/v1699705610/cld-sample.jpg'],
    ownerId: '2', createdAt: 1707157499599
  },

]);


const setSelectedPet = async (pet: Pet): Promise<void> => {
  try {
    isDialog.value = true
    setTimeout(() => {
      selectedPet.value = {
        owner: {
          _id: '2',
          username: 'eden'
        },
        pet
      }
    }, 1000);

  } catch (err) {

  }
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
