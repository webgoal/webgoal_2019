<template>
  <h2 class="text-2xl pt-1 pb-2" :class="color">
    {{ subTitle }}
  </h2>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    subTitle: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'text-yellow'
    }
  }
}
</script>
