<template>
  <div class="video">
    <img :src="thumbnail" :alt="description" :width="width" :height="height" :class="videoClass">
    <div class="overlay">
      <a :href="url" target="_blank" class="link">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="70" height="70" viewBox="0 0 24 24"><path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" /></svg>
      </a>
    </div>
  </div>
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
<style scoped>
  .video {
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
    background-color: black;
  }
  .icon {
    fill: white;
  }
  .icon:hover {
    fill: red;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video:hover .overlay {
    opacity: 0.5;
  }
</style>
