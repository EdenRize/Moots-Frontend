<template>
    <section class="page login-signup-page">
        <div class="page-content">
            <Logo title="MOOTS" />

            <form @submit="onSubmit">
                <div class="inputs-container">
                    <input v-model="user.username" required type="text" placeholder="שם משתמש">
                    <input v-model="user.password" required type="password" placeholder="סיסמה">
                </div>

                <button>{{ authType === 'login' ? 'התחבר' : 'הירשם' }}</button>
            </form>

            <div class="flex align-center justify-center switch-auth-container">
                <p class="switch-auth-txt">{{ switchAuthTypeTxt }} </p>
                <p @click="onSwitchAuthType" class="switch-auth-link"> {{ authType === 'login' ? 'הירשם' : 'התחבר' }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup >
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from 'vuex'
import Logo from "../components/common/Logo.vue"
import { UserCredentials } from "../models/user-models"
import { userService } from "../services/user.service"

const router = useRouter();
const route = useRoute()
const store = useStore()
const authType = ref<string | null>(null)
const user = ref<UserCredentials>(userService.getEmptyUser())

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

    .page-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .logo {

            justify-content: center;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-block: 30px;

            .inputs-container {
                display: flex;
                flex-direction: column;
                margin-block-end: 15px;

                input {
                    width: 300px;
                    background-color: #dcd7d2;
                    border-radius: 4px;
                    padding: 8px 4px;
                    margin-block-end: 20px;
                }
            }

            button {
                background-color: #ED7D31;
                color: white;
                border-radius: 4px;
                padding: 4px 8px;
            }

        }

        .switch-auth-container {

            p:not(.switch-auth-link) {
                margin-inline-end: 3px;
            }

            .switch-auth-link {
                color: #ED7D31;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }

        }
    }

}
</style>