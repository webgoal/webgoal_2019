<template>
  <blockquote class="relative my-4">
    <img src="~/assets/icons/quote.png" alt="">
    <span class="p-8 inline-block text-gray absolute top-0 text">
      {{ quote }}
    </span>
  </blockquote>
</template>

<script>
export default {
  name: 'Blockquote',
  props: {
    quote: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
 .text {
   left: 20px;
 }
</style>
