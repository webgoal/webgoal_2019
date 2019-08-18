<template>
  <h1 class="text-6xl md:text-7xl text-lightBlue font-black leading-none inline-block">
    <span class="text-4xl block text-black font-hairline text-left">
      {{ smallTitle }}
    </span>
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    smallTitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
