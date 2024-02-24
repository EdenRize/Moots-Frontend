<template>
    <section class="header-menu">
        <ul dir="rtl" v-if="options" class="clean-list">
            <li v-for="(option, idx) in options" :key="idx" class="option" @click="option.onClick">
                <img v-if="option.imgUrl" :src="option.imgUrl">
                <p v-if="option.title">{{ option.title }}</p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup >
import { MenuOption } from '../../models/system-models';


interface HeaderMenuProps {
    options?: MenuOption[]
}

const props = defineProps<HeaderMenuProps>()

</script>

<style lang="scss" scoped>
.header-menu {

    .option {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: .2s;

        img {
            width: 23px;
            margin-inline-end: 10px;
            transition: .2s;
        }

        &:hover {
            background-color: #f6f1ee;

            img {
                scale: 1.03;
            }
        }
    }

}
</style>