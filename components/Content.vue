<template>
  <p>{{ content }}</p>
</template>

<script>
export default {
  name: 'Content',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
