<template>
  <header class="fixed items-center px-2 justify-center w-full">
    <div
      class="container mx-auto items-center flex flex-col md:flex-row md:justify-between"
    >
      <Logo />
      <Navbar />
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
  }
}
</script>
