<template>
  <blockquote class="relative my-4">
    <span class="p-8 inline-block text-gray">
      {{ quote }}
    </span>
    <img class="absolute top-0 left-0" src="~/assets/icons/quote.png" alt="">
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
