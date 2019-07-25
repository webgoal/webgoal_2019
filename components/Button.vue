<template>
  <a class="bg-yellow text-white rounded py-2 px-3" :href="url">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Saiba Mais'
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
