<template>
    <div dir="ltr" @click="router.push('/')" class="flex items-center cursor-pointer logo ">
        <img class="w-10" :src="logo" />
        <p v-if="title" class="bold text-2xl ms-2 text-darker">{{ title }}</p>
    </div>
</template>

<script lang="ts" setup >
import { getLocalIconPath } from '../../services/utils-service';
import { useRouter } from "vue-router";

const router = useRouter();

interface LogoProps {
    logo?: string;
    title?: string;
}

const props = withDefaults(defineProps<LogoProps>(), {
    logo: getLocalIconPath('moots', 'logo')
})

</script>

<style lang="scss" scoped></style>