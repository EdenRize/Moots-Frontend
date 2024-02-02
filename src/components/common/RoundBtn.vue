<template>
    <button :class="btnClass">
        <Image class="w-5" :src="icon" />
    </button>
</template>

<script lang="ts" setup >
import { computed } from 'vue';
import Image from './Image.vue';


interface RoundBtnProps {
    icon: string
}

defineProps<RoundBtnProps>()

const btnClass = computed(() => {
    return "absolute top-3 right-3 flex items-center justify-center border-unset w-8 h-8 bg-midLightOpacity rounded-full round-btn"
})

</script>

<style lang="scss" scoped></style>