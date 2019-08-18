<template>
  <header class="items-center px-2 justify-center w-full" :class="[absolute ? 'absolute' : 'relative']">
    <div
      class="container items-center flex flex-col md:flex-row md:justify-between"
    >
      <Logo :dark="dark" />
      <Navbar :dark="dark" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import Navbar from '~/components/Navbar'

export default {
  name: 'Header',
  components: {
    Logo,
    Navbar
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
  }
}
</script>
