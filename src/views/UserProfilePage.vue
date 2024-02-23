<template>
    <section class="user-profile-page page">
        <div v-if="user" class="page-content">

            <UserDetails :username="user.username" :avatar="user.avatar" />

            <div class="posts-content border-t border-midLight">
                <PostsList v-if="pets" @pet-select="setSelectedPet" :posts="pets" />
            </div>
        </div>

        <Dialog @close="closeDialog" :is-open="isDialog">
            <template v-slot:content>
                <ItemSlot @close="closeDialog" :sub-info="getAgeString(selectedPet?.pet.age)"
                    :title="`${selectedPet?.pet.name}${selectedPet?.pet.race ? ` - ${selectedPet?.pet.race}` : ''}`"
                    :imgs="selectedPet?.pet.imgs" :description="selectedPet?.pet.description"
                    :placeholder-img="placeholderImg" :owner="selectedPet?.owner" :is-loading="!selectedPet"
                    :createdAt="selectedPet?.pet.createdAt" />
            </template>
        </Dialog>
    </section>
</template>

<script lang="ts" setup >
import { Ref, computed, onMounted, ref } from 'vue';
import UserDetails from '../components/common/UserDetails.vue';
import { useRoute } from 'vue-router';
import { User } from '../models/user-models';
import { userService } from '../services/user.service';
import { Pet, SelectedPet } from '../models/pet-models';
import { petService } from '../services/pet.service';
import PostsList from '../components/common/PostsList.vue';
import Dialog from '../components/common/Dialog.vue';
import ItemSlot from '../components/common/slots/ItemSlot.vue';
import { getAgeString, getLocalImgPath } from '../services/utils-service';

const route = useRoute()
const user: Ref<User | null> = ref(null)
const pets: Ref<Pet[] | undefined> = ref()
const selectedPet: Ref<SelectedPet | null> = ref(null)
const isDialog: Ref<boolean> = ref(false)

const placeholderImg = computed(() => {
    return getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

onMounted(async () => {
    try {
        const { userId } = route.params
        if (typeof userId === 'string') {

            user.value = await userService.getById(userId)
            pets.value = await petService.query({ ownerId: userId })
        }

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
.user-profile-page {

    .page-content {

        .user-details {
            margin-block-end: 44px;
        }

        .posts-content {
            padding-top: 53px;
        }
    }
}
</style>