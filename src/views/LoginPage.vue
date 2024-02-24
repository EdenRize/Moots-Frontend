<template>
    <section class="page login-signup-page">
        <Form is-logo :inputs="inputs" button-label="התחבר" bottom-text="עדיין אין לך חשבון?" bottom-button="הירשם"
            @submit="submit" />

    </section>
</template>

<script lang="ts" setup >
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from 'vuex'
import Form, { FormModel } from "../components/common/form/Form.vue"
import { UserCredentials } from "../models/user-models"
import { userService } from "../services/user.service"

const router = useRouter();
const route = useRoute()
const store = useStore()
const authType = ref<string | null>(null)
const user = ref<UserCredentials>(userService.getEmptyUser())

const inputs = [{ placeholder: 'שם משתמש', type: 'text', required: true, name: 'userName' }, { placeholder: 'סיסמה', type: 'password', required: true, name: 'password' }]

onMounted(async () => {
    try {
        const loggenInUser = store.getters.loggedInUser
        if (loggenInUser) router.push('/')
        updateAuthType(route.params.authTitle)
    } catch (err: any) {
        console.log('err', err)
    }
})

watch(() => route.params.authTitle, (newValue) => {
    updateAuthType(newValue)
})

const submit = (form: any) => {
    console.log(form);

}

// Function to update authType
const updateAuthType = (newAuthType: string | string[]) => {
    if (typeof newAuthType === 'string') {
        authType.value = Array.isArray(newAuthType) ? newAuthType[0] : newAuthType
    }
}


const onSubmit = async (ev: Event) => {
    try {
        ev.preventDefault()
        if (authType.value === 'login') {
            await store.dispatch('login', user.value)
        } else {
            await store.dispatch('signup', user.value)
        }
        router.push('/')
    } catch (err) {
        console.log('err', err)
    }

}

const onSwitchAuthType = () => {
    router.push(`/auth/${authType.value === 'login' ? 'signup' : 'login'}`)
}

const switchAuthTypeTxt = computed(() => {
    return authType.value === 'login' ? 'עדיין אין לך חשבון? ' : 'כבר יש לך חשבון? '
});

</script>

<style lang="scss" scoped>
.login-signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>