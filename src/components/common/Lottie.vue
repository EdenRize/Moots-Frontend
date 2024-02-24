<template>
    <div class="lottie" ref="lottieContainer"></div>
</template>

<script lang="ts" setup >
import Lottie from 'lottie-web'
import { onMounted, ref } from 'vue'


const lottieContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    Lottie.loadAnimation({
        container: lottieContainer.value!,
        renderer: 'svg', // Choose renderer: svg, canvas, html
        loop: true,
        autoplay: true,
        animationData: props.animationData,
        rendererSettings: {
            className: "lottie-svg-class",
        }
    })
})

interface LottieProps {
    animationData: any
}

const props = defineProps<LottieProps>()

</script>

<style lang="scss" scoped></style>