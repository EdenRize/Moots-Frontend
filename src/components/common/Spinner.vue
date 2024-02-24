<template>
    <!-- <Image class="absolute top-1/2 left-1/2 spinner" :src="src" /> -->
    <div ref="animationContainer" class="absolute top-1/2 left-1/2 spinner"></div>
</template>

<script lang="ts" setup >
import { getLocalImgPath } from '../../services/utils-service';
import Image from './Image.vue';
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import animationData from '../../assets/imgs/loaders/cat-loader.json';

const animationContainer = ref<HTMLElement | null>(null);

interface SpinnerProps {
    src: string
}

onMounted(() => {
    lottie.loadAnimation({
        container: animationContainer.value!,
        renderer: 'svg', // Choose renderer: svg, canvas, html
        loop: true,
        autoplay: true,
        animationData: animationData
    });
});

// const props = withDefaults(defineProps<SpinnerProps>(), {
//     src: getLocalImgPath('loaders', 'cat', 'json')
// })
// console.log('src', props.src)
</script>

<style lang="scss" scoped>
.spinner {
    translate: -50% -50%;
    width: 300px;
    // animation: spinner 2s linear infinite;
}

// @keyframes spinner {
//     0% {
//         transform: rotate(0deg) translate(30px);
//     }

//     100% {
//         transform: rotate(360deg) translate(30px);
//     }
// }
</style>