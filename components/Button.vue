<template>
  <a class="bg-yellow text-white rounded py-4 px-12 font-black" :href="url">
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
