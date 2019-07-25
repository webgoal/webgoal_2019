<template>
  <a :href="url">
    <img :src="source" :alt="description" class="w-auto" />
  </a>
</template>

<script>
export default {
  name: 'VideoImage',
  props: {
    url: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
