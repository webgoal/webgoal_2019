<template>
  <div class="w-full mb-8 relative text-center flex justify-center items-center" @mouseover="show = true" @mouseleave=" show = false">
    <img :src="image" alt="">
    <div class="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-end -mb-3">
      <transition name="fade">
        <div v-show="show" class="text-white font-bold bg-lightBlue m-3 text-xl">
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
</style>
