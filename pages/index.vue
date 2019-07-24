<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container">
      <Title sub-title="estilo de" title="gestão" />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import Title from '~/components/Title'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Title
  }
}
</script>
