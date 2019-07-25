<template>
  <p class="leading-relaxed text-black pb-6">{{ content }}</p>
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
