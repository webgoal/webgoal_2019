<template>
  <p>{{ content }}</p>
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
