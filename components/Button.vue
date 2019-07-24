<template>
  <a class="bg-yellow-500 text-white rounded py-2 px-3">{{ text }}</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
