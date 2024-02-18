<template>
    <section class="user-details flex">
        <Avatar :img-url="avatar" />
        <div class="info">
            <h2>{{ username }}</h2>
        </div>
    </section>
</template>

<script lang="ts" setup >
import { Ref, ref } from 'vue';
import { User } from '../../models/user-models';
import Avatar from './Avatar.vue';


interface UserDetailsProps {
    username: string
    avatar?: string
}

const props = defineProps<UserDetailsProps>()
</script>

<style lang="scss" scoped>
.user-details {

    .avatar {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        flex-basis: 0;
        margin-inline-end: 30px;
        flex-shrink: 0;
    }

    .info {
        display: flex;
        flex-direction: column;
        flex-basis: 30px;
        flex-grow: 2;
        flex-shrink: 1;

        h2 {
            font-size: 20px;
        }
    }
}
</style>