<template>
  <a :href="url" target="_blank">
    <img :src="thumbnail" :alt="description" :width="width" :height="height" :class="videoClass">
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
    videoId: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    videoClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    thumbnail () {
      return `http://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`
    }
  }
}
</script>
