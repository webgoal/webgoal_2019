<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container">
      <Title sub-title="estilo de" title="gestão" />
      <SubTitle sub-title="Gestão centrada nas pessoas" />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Title,
    SubTitle
  }
}
</script>
