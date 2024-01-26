<template>
    <section v-if="isOpen" class="dialog">
        <div @click="emit('close')" class="black-screen"></div>
        <slot name="content"></slot>
    </section>
</template>

<script lang="ts" setup >

interface DialogProps {
    isOpen?: boolean
}

const props = defineProps<DialogProps>()

const emit = defineEmits<{
    (e: 'close'):void
}>()

</script>

<style lang="scss" scoped></style>