<template>
  <header id="header" class="px-2 w-full" :class="[absolute ? 'absolute' : 'relative']">
    <div class="container items-center flex justify-between">
      <a href="/"><Logo :dark="dark" :header="dark ? true : false" width="180" /></a>
      <ButtonToggle :toggle="toggle" :dark="dark" />
      <Navbar :dark="dark" />
    </div>
    <transition name="fade">
      <Navbar v-show="open" :dark="dark" :mobile="true" class="md:hidden" />
    </transition>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import Navbar from '~/components/Navbar'
import ButtonToggle from '~/components/ButtonToggle'

export default {
  name: 'Header',
  components: {
    Logo,
    Navbar,
    ButtonToggle
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
