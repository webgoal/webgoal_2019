<template>
  <header class="px-2 w-full" :class="[absolute ? 'absolute' : 'relative']">
    <div
      class="container items-center flex justify-between"
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
