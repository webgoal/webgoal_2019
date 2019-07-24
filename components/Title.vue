<template>
  <h1 class="text-7xl">
    <span class="text-4xl">{{ subTitle }}</span> {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    subTitle: {
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
