<template>
  <div class="text-center py-6 md:py-0">
    <img class="my-auto inline-block" :src="icon" alt="">
    <h2 class="text-5xl font-bold mt-4 mb-2 leading-none">
      {{ number }}
    </h2>
    <p class="text-lg">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'IconQuantity',
  props: {
    icon: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 1
    },
    text: {
      type: String,
      default: 'lorem ipsum'
    }
  }
}
</script>
