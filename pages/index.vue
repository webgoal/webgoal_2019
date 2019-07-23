<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container">
      <p>narf</p>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero
  }
}
</script>
