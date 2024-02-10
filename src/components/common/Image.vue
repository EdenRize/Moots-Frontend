<template>
    <img class="image" :src="src">
</template> 

<script lang="ts" setup >

interface ImageProps {
    src: string
}

const props = defineProps<ImageProps>()

</script>

<style lang="scss" scoped></style>