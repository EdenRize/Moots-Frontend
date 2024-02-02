<template>
    <Image class="absolute top-1/2 left-1/2 w-20 spinner" :src="src" />
</template>

<script lang="ts" setup >
import { getLocalImgPath } from '../../services/utils-service';
import Image from './Image.vue';


interface SpinnerProps {
    src: string
}

const props = withDefaults(defineProps<SpinnerProps>(), {
    src: getLocalImgPath('loaders', 'cat-loader', 'png')
})
</script>

<style lang="scss" scoped>
.spinner {
    translate: -50% -50%;
    animation: spinner 2s linear infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg) translate(30px);
    }

    100% {
        transform: rotate(360deg) translate(30px);
    }
}
</style>