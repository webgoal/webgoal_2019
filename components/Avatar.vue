<template>
  <div class="w-full mb-8 relative text-center flex justify-center items-center" @mouseover="show = true" @mouseleave=" show = false">
    <div class="flex flex-col justify-end">
      <img :src="image" alt="">
      <transition name="fade">
        <div v-show="show" class="title">
          {{ title }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: String,
      default: '//placehold.it/264x429'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .title {
    height: 2rem;
    color: white;
    font-weight: bold;
    background: #00b8d7;
    font-size: 20px;
    margin-top: -2rem;
  }
</style>
