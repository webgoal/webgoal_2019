<template>
  <div
    class="hero pt-24 min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-5"
  >
    <Logo height="200" width="300" />
    <p class="font-serif leading-none text-white text-4xl max-w-xs">
      {{ $t('hero.text') }}
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
.hero {
  background-image: url('~assets/images/hero/home-hero.jpg');
}
</style>
