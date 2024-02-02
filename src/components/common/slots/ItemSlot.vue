<template>
    <Spinner v-if="isLoading" :src="spinnerSrc" />
    <section v-else :class="itemClass">
        <img v-if="itemImgSrc" :class="itemImgClass" :src="itemImgSrc" />
        <div :class="itemHeaderClass">
            <p v-if="title" :class="itemTitleClass">{{ title }}</p>
            <p v-if="subInfo" :class="itemSubInfoClass">{{ subInfo }}</p>
        </div>

        <div :class="itemDescriptionClass">
            <p v-if="description">{{ description }}</p>
        </div>

        <div v-if="owner" class="owner-details">
            <p>{{ owner.username }}</p>
        </div>

        <RoundBtn @click="emit('close')" :icon="getLocalIconPath('general', 'close')" />
    </section>
</template>

<script lang="ts" setup >
import { computed } from 'vue';
import RoundBtn from '../RoundBtn.vue';
import { getLocalIconPath } from '../../../services/utils-service';
import { User } from '../../../models/user-models';
import Spinner from '../Spinner.vue';


const itemImgSrc = computed(() => {
    return (
        (props.imgs && props.imgs[0]) ||
        props.placeholderImg
    );
});

const itemClass = computed(() => {
    return "relative flex flex-col text-dark item-slot";
});

const itemImgClass = computed(() => {
    return "w-full h-96 object-cover rounded-t preview-img";
});

const itemHeaderClass = computed(() => {
    return "flex items-center justify-between w-full px-6 py-3 border-b border-light";
});

const itemTitleClass = computed(() => {
    return "bold text-2xl";
});

const itemSubInfoClass = computed(() => {
    return "text-2xl";
});

const itemDescriptionClass = computed(() => {
    return "flex px-6 py-3 text-xl text-lowLight";
});

interface ItemSlotProps {
    owner?: User
    placeholderImg?: string
    title?: string
    subInfo?: string
    description?: string
    imgs?: string[]
    isLoading?: boolean
    spinnerSrc?: string
}

const props = defineProps<ItemSlotProps>()


const emit = defineEmits<{
    (e: 'close'): void
}>()

</script>

<style lang="scss" scoped></style>