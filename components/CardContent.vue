<template>
  <p class="leading-relaxed text-black">{{ content }}</p>
</template>

<script>
export default {
  name: 'CardContent',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
