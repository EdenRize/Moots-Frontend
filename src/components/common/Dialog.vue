<template>
    <section v-if="isOpen" class="dialog">
        <div @click="emit('close')" class="black-screen"></div>

        <div :class="contentClass">
            <slot name="content"></slot>
        </div>
    </section>
</template>

<script lang="ts" setup >
import { computed } from 'vue';

const contentClass = computed(() => {
    return `fixed inset-0 bg-white border border-midLight sm:rounded sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-[37rem] sm:h-[45rem] content`
})




interface DialogProps {
    isOpen?: boolean
}

defineProps<DialogProps>()



const emit = defineEmits<{
    (e: 'close'): void
}>()

</script>

<style lang="scss" scoped>
.dialog {
    opacity: 0;
    animation: fadeIn .2s ease-in-out forwards;

    .content {

        @media (min-width: 640px) {

            translate: -50% -50%;
        }
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>