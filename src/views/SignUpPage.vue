<template>
    <section class="page sign-up-page">
        <Form @submit="onSubmit" is-logo :inputs="inputs" button-label="הירשם" bottom-text="כבר יש לך חשבון?"
            bottom-button="התחבר" />
    </section>
</template>

<script lang="ts" setup >
import Form, { FormModel } from '../components/common/form/Form.vue';
import Input from '../components/common/input/Input.vue';

const inputs = [{ placeholder: 'שם משתמש', type: 'text', required: true, name: 'userName' }, { placeholder: 'סיסמה', type: 'password', required: true, name: 'password' }]

const onSubmit = (form: FormModel) => {
    console.log(form);

}

</script>

<style lang="scss" scoped>
.sign-up-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>