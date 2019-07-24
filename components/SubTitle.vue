<template>
  <h2 class="text-2xl text-yellow-500">
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
