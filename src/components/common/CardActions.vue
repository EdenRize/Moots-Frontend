<template>
    <section class="flex justify-between px-[16px] py-[10px] card-actions">
        <div class="flex start-btns-container">
            <Image v-for="(btn, idx) in startBtns" :key="idx" @click="onActionClick(btn.cta)"
                class="w-6 me-[8px] cursor-pointer" :src="btn.imgUrl" :title="btn.tooltip" />
        </div>
        <div class="flex end-btns-container">
            <Image v-for="(btn, idx) in endBtns" :key="idx" @click="onActionClick(btn.cta)" class="w-6 cursor-pointer"
                :src="btn.imgUrl" :title="btn.tooltip" />
        </div>
    </section>
</template>

<script lang="ts" setup >
import { getLocalIconPath } from '../../services/utils-service';
import Image from './Image.vue';


enum btnCta {
    LIKE = 'like',
    SHARE = 'share',
    SAVE = 'save',
}

interface CardAction {
    imgUrl: string
    tooltip: string
    cta: btnCta
}


interface CardActionsProps {
    isLiked?: boolean
    isSaved?: boolean
}

const props = defineProps<CardActionsProps>()

const startBtns: CardAction[] = [
    {
        tooltip: 'Like',
        imgUrl: getLocalIconPath('general', props.isLiked ? 'heart-moots' : 'heart'),
        cta: btnCta.LIKE
    },
    {
        tooltip: 'Share',
        imgUrl: getLocalIconPath('general', 'share'),
        cta: btnCta.SHARE
    },
]

const endBtns: CardAction[] = [

    {
        tooltip: 'Save',
        imgUrl: getLocalIconPath('general', props.isSaved ? 'save-moots' : 'save'),
        cta: btnCta.SAVE
    },
]


const emit = defineEmits<{
    (e: 'like'): void
    (e: 'share'): void
    (e: 'save'): void
}>()

const onActionClick = (cta: string): void => {
    switch (cta) {
        case btnCta.LIKE:
            emit('like')
            break;

        case btnCta.SHARE:
            emit('share')
            break;

        case btnCta.SAVE:
            emit('save')
            break;

        default:
            break;
    }
}

</script>

<style lang="scss" scoped></style>