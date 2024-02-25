<template>
  <section class="landing-page page">
    <div class="page-content">

      <h1>ברוכים הבאים לMOOTS!</h1>
      <p>אני מחפש/ת:</p>

      <div class="choices-container">
        <div class="main-options">

          <div @click="routeToFeed('dog')" class="dog-container">
            <Lottie :animation-data="dogAnimationData" class="dog" />
          </div>
          <div @click="routeToFeed('cat')" class="cat-container">
            <Lottie :animation-data="catAnimationData" class="cat" />
          </div>
        </div>

        <div @click="routeToFeed('all')" class="animals-container">
          <Lottie :animation-data="animalsAnimationData" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router';
import catAnimationData from '../assets/imgs/general/cat.json';
import dogAnimationData from '../assets/imgs/general/dog.json';
import animalsAnimationData from '../assets/imgs/general/animals.json';
import Lottie from '../components/common/Lottie.vue';
import { onMounted } from 'vue';
const router = useRouter()

enum PetTypes {
  CAT = 'cat',
  DOG = 'dog',
  ALL = 'all'
}

const routeToFeed = (petType: string) => {
  localStorage.setItem('SELECTED_PET_TYPE', petType)
  if (petType === PetTypes.ALL) router.push('/pet')
  else router.push(`/pet/?type=${petType}`)
}

onMounted(() => {
  handleSelectedType()
})

const handleSelectedType = () => {
  const type = localStorage.getItem('SELECTED_PET_TYPE')
  if (type) {
    if (Object.values(PetTypes).includes(type as PetTypes)) {
      routeToFeed(type)
    } else {
      localStorage.removeItem('SELECTED_PET_TYPE')
    }
  }
}

</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  p {
    margin-bottom: 50px;
    font-size: 1.5rem;
  }

  .choices-container::v-deep .cat-container,
  .choices-container::v-deep .dog-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: 100px;
    width: 250px;
    height: 250px;
    overflow: hidden;
    transition: .2s;

    &:hover {
      scale: 1.03;
    }

    .cat,
    .dog {

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

  .choices-container::v-deep .animals-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FCD7BF;
    border-radius: 50%;
    transition: .2s;

    &:hover {
      scale: 1.03;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 220px !important;
      height: 220px !important;
    }
  }

  .choices-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .main-options {
      display: flex;
    }

    .lottie {
      cursor: pointer;
      width: 250px;
      height: 250px;
      transition: .2s;
    }
  }

}
</style>
