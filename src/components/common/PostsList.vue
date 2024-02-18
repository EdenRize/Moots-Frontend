<template>
    <section class="posts-list">
        <div v-for="post in posts" class="pet-post">
            <Image :src="post.imgs && post.imgs[0] || placeholderImg" @click="emit('petSelect', post)" />
        </div>
    </section>
</template>

<script lang="ts" setup >
import { computed } from 'vue';
import { Pet } from '../../models/pet-models';
import Image from './Image.vue';
import { getLocalImgPath } from '../../services/utils-service';

const placeholderImg = computed(() => {
    return getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

interface PostsListProps {
    posts: Pet[]
}

const props = defineProps<PostsListProps>()

const emit = defineEmits<{
    (e: 'petSelect', pet: Pet): void
}>()

</script>

<style lang="scss" scoped>
.posts-list {
    display: grid;
    grid-template-columns: repeat(3, 309px);
    grid-auto-rows: 309px;
    gap: 4px;

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;

        &:hover {
            filter: brightness(80%);
        }
    }
}
</style>