<template>
  <h1 class="text-7xl text-blue-400">
    <span class="text-4xl block text-black">{{ smallTitle }}</span>
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
