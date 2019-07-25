<template>
  <section>
    <Header />
    <HomeHero />
    <Card
      small-title="estilo de"
      title="gestão"
      sub-title="Gestão centrada nas pessoas."
      content="Todas as empresas do grupo Webgoal adotam uma gestão orgânica, baseada na democracia e pautada em relações de confiança entre as pessoas. Hierarquias formais, comando e controle são substituídos por autonomia, colaboração e liderança emergente."
      button-text="saiba mais"
    />
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import Card from '~/components/Card'
export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Card
  }
}
</script>
