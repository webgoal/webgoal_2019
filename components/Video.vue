<template>
  <!-- <a :href="url">
    <img :src="source" :alt="description" class="w-auto">
  </a> -->
  <iframe
    :width="width"
    :height="height"
    :src="url"
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
  />
</template>

<script>
export default {
  name: 'VideoImage',
  props: {
    url: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  }
}
</script>
