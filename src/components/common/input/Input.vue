<template>
    <input @input="onInput" :type="type" :required="required" :placeholder="placeholder">
</template>

<script lang="ts" setup >
export interface InputProps {
    placeholder?: string
    type?: string
    required?: boolean
    name: string

}

const props = defineProps<InputProps>()

const onInput = (ev: any) => {

    emit('input', props.name, ev.target.value)

}

const emit = defineEmits<{
    (e: 'input', name: string, value?: string | number | boolean): void
}>()

</script>

<style lang="scss" scoped>
input {
    width: 300px;
    background-color: #dcd7d2;
    border-radius: 4px;
    padding: 8px 12px;
    margin-block-end: 20px;
}
</style>