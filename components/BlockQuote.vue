<template>
  <blockquote :class="blockStyle">
    <img src="~/assets/icons/quote.png" alt="" :class="imgStyle">
    <span :class="textStyle">
      {{ quote }}
    </span>
  </blockquote>
</template>

<script>
export default {
  name: 'Blockquote',
  props: {
    quote: {
      type: String,
      default: ''
    },
    blockStyle: {
      type: String,
      default: ''
    },
    imgStyle: {
      type: String,
      default: ''
    },
    textStyle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  .height-custom {
    height: 10rem;
  }
  .top-custom {
    top: 2.5rem;
  }
  .left-custom {
    left: 3rem;
  }
</style>
