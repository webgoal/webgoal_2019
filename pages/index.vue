<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container flex flex-row">
      <Card
        class="w-1/2"
        small-title="estilo de"
        title="GESTÃO"
        sub-title="Gestão centrada nas pessoas."
        content="Todas as empresas do grupo Webgoal adotam uma gestão orgânica, baseada na democracia e pautada em relações de confiança entre as pessoas. Hierarquias formais, comando e controle são substituídos por autonomia, colaboração e liderança emergente."
        button-text="saiba mais"
      />
      <VideoImage
        class="w-1/2"
        url="www.google.com"
        :source="require('~/assets/images/video-image.png')"
        description="Webgoal Video"
      />
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
import BlogCard from '~/components/BlogCard'
import Card from '~/components/Card'
import VideoImage from '~/components/VideoImage'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Card,
    VideoImage,
    BlogCard
  }
}
</script>
