<template>
  <section dir="ltr" :class="appHeaderClass">
    <Logo title="MOOTS" class="sm:py-6 sm:justify-center sm:w-full w-fit" />

    <HeaderMenu :options="menuOptions" />
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import Logo from "../common/Logo.vue";
import HeaderMenu from "./HeaderMenu.vue";
import { getLocalIconPath } from "../../services/utils-service";
import { useStore } from 'vuex'
import { MenuOption } from "../../models/system-models";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore()
const menuOptions = ref<MenuOption[]>([])

interface AppHeaderProps {
  logo?: string;
  title?: string;
}

defineProps<AppHeaderProps>();

const appHeaderClass = computed(() => {
  return "fixed top-0 w-full sm:w-auto sm:h-full app-header px-3 lg:px-4 py-3 bg-white border-b border-midLight sm:border-b-0 sm:border-s sm:w-[250px]";
});

const updateMenuOptions = () => {
  const loggedInUser = store.getters.loggedInUser;
  menuOptions.value = [];

  if (loggedInUser) {
    menuOptions.value.push({
      title: 'התנתק',
      imgUrl: getLocalIconPath('general', 'logout'),
      onClick: () => store.dispatch('logOut')
    });
  } else {
    menuOptions.value.push({
      title: 'התחבר',
      imgUrl: getLocalIconPath('general', 'login'),
      onClick: () => router.push('/auth/login')
    });
  }
};

onMounted(() => {
  updateMenuOptions();
});

// Watch for changes in loggedInUser and update menuOptions accordingly
watch(() => store.getters.loggedInUser, () => {
  updateMenuOptions();
});

</script>

<style lang="scss" scoped></style>
