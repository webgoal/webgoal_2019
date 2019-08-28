<template>
  <div class="block md:hidden">
    <button :class="`${textColor} ${borderColor} hover:${textColor}`" class="flex items-center px-3 py-2 border rounded focus:outline-none" @click="toggle">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    toggle: {
      type: Function,
      default: () => {}
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textColor() {
      const { dark } = this
      let className = 'text-white'
      if (dark) className = 'text-black'
      return className
    },
    borderColor() {
      const { dark } = this
      let className = 'border-white'
      if (dark) className = 'border-black'
      return className
    }
  }
}
</script>
