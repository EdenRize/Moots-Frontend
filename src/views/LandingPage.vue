<template>
  <section class="landing-page page">
    <h1>ברוכים הבאים לMOOTS!</h1>

    <div class="choices-container">
      <Lottie @click="routeToFeed('dog')" :animation-data="dogAnimationData" />
      <div @click="routeToFeed('cat')" class="cat-container">
        <Lottie :animation-data="catAnimationData" class="cat" />
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>

import { useRoute, useRouter } from 'vue-router';
import catAnimationData from '../assets/imgs/general/cat.json';
import dogAnimationData from '../assets/imgs/general/dog.json';
import Lottie from '../components/common/Lottie.vue';
const router = useRouter()


const routeToFeed = (petType: string) => {
  router.push(`/pet/?type=${petType}`)

}


</script>

<style lang="scss" scoped>
.choices-container::v-deep .cat-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  overflow: hidden;

  .cat {

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 590px !important;
      height: 590px !important;
    }
  }

}

.choices-container {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .lottie {
    cursor: pointer;
    width: 250px;
    height: 250px;
  }
}
</style>
