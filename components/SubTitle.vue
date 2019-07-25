<template>
  <h2 class="text-2xl text-yellow">
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
    }
  }
}
</script>
