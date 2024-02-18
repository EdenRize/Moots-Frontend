<template>
    <div class="avatar">
        <Image class="border-midLight border" :src="imgUrl || placeholderImg" />
    </div>
</template>

<script lang="ts" setup >
import { getLocalImgPath } from '../../services/utils-service';
import Image from './Image.vue';


interface AvatarProps {
    imgUrl?: string
    placeholderImg?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
    placeholderImg: getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

</script>

<style lang="scss" scoped>
.image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}
</style>