<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container">
      <Title sub-title="estilo de" title="gestão" />
      <SubTitle sub-title="Gestão centrada nas pessoas" />
      <Content
        content="Todas as empresas do grupo Webgoal adotam uma gestão orgânica, baseada na democracia e pautada em relações de confiança entre as pessoas. Hierarquias formais, comando e controle são substituídos por autonomia, colaboração e liderança emergente."
      />
      <Button text="saiba mais" />
      <div class="container flex ">
        <div class="px-2">
          <BlogCard />
        </div>
        <div class="px-2">
          <BlogCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import Content from '~/components/Content'
import Button from '~/components/Button'
import BlogCard from '~/components/BlogCard'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Title,
    SubTitle,
    Content,
    Button,
    BlogCard
  }
}
</script>
