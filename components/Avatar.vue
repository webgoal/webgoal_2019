<template>
  <div class="w-full mb-8 relative text-center flex justify-center items-center">
    <img :src="image" alt="">
    <div class="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-end pb-10">
      <p class="text-white font-bold">
        {{ title }}
      </p>
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
  }
}
</script>
