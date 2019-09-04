<template>
  <a :href="url" target="_blank">
    <button class="bg-yellow hover:bg-darkYellow text-white rounded font-black w-40 h-12">{{ text }}</button>
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
