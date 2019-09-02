<template>
  <header class="px-2 w-full" :class="[absolute ? 'absolute' : 'relative']">
    <div
      class="container items-center flex justify-between"
    >
      <Logo :dark="dark" :header="dark ? true : false" width="180" />
      <ButtonToggle :toggle="toggle" :dark="dark" />
      <Navbar :dark="dark" />
    </div>
    <transition name="slide">
      <Navbar v-show="open" :dark="dark" :mobile="true" class="md:hidden navbar" />
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
  .navbar {
    transform-origin: top;
    transition: transform .4s ease-in-out;
  }
  .slide-enter, .slide-leave-to{
    transform: scaleY(0);
  }
</style>
