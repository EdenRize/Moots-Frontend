<template>
    <section class="form-content">
        <Logo v-if="isLogo" title="MOOTS" />
        <form class="form" @submit.prevent="emit('submit', inputsModel)">
            <div class="inputs-container">
                <Input v-for="(input, index) in inputs" @input="(name, value) => onInput(name, value)" :name="input.name"
                    :id="index" :required="input.required" :key="index" :type="input.type"
                    :placeholder="input.placeholder" />
            </div>

            <button>{{ buttonLabel }}</button>
            <div class="flex align-center justify-center switch-auth-container">
                <p class="switch-auth-txt">{{ bottomText }} </p>
                <p class="switch-auth-link"> {{ bottomButton }}</p>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup >
import Logo from '../../common/Logo.vue'
import { ref, onMounted, Ref } from 'vue'
import Input, { InputProps } from '../input/Input.vue';

const inputsModel: Ref<FormModel> = ref({})

onMounted(() => {
    props.inputs?.forEach((input) => inputsModel.value[input.name] = "")

})

const onInput = (name: string, value?: string | number | boolean) => {
    if (value)
        inputsModel.value[name] = value



}

interface FormProps {
    inputs?: InputProps[]
    buttonLabel?: string
    bottomText?: string
    bottomButton?: string
    isLogo?: boolean

}

export interface FormModel { [key: string]: string | number | boolean }[]

const emit = defineEmits<{
    (e: 'submit', form: FormModel): void
}>()

const props = defineProps<FormProps>()

</script>

<style lang="scss" scoped>
.form-content {
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


        }

        button {
            margin-bottom: 10px;
            background-color: #ED7D31;
            color: white;
            border-radius: 4px;
            padding: 4px 16px;
        }

    }

    .switch-auth-container {
        letter-spacing: .07rem;

        p:not(.switch-auth-link) {
            margin-inline-end: 5px;
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
</style>