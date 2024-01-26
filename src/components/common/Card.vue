<template>
    <section :class="cardClass">
        <img :class="cardImgClass" :src="cardImgSrc">
        <p v-if="title" class="bold" >{{ title }}</p>
        <p v-if="description"> {{ description }}</p>
    </section>
</template>

<script lang="ts" setup >
import { computed } from 'vue';
import { getLocalImgPath } from '../../services/utils-service';

// COMPUTED

const cardImgSrc = computed(() => {
    return (props.imgs && props.imgs[0]) || props.placeholderImg || getLocalImgPath('placeholders', 'pet-placeholder', 'png')
})

const cardClass = computed(() => {
return "flex flex-col items-center rounded p-3 bg-light text-dark border border-midLight cursor-pointer card"
})

const cardImgClass = computed(()=>{
 return  "w-full object-cover mb-3 rounded preview-img"
})

// PROPS

interface CardProps {
    imgs?:string[]
    placeholderImg?:string
    title?:string
    description?:string
}


const props = defineProps<CardProps>()

</script>

<style lang="scss" scoped>

.card {
    width: 200px;

    .preview-img {
        aspect-ratio: 1 / 1;
    }
}

</style>