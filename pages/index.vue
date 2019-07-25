<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container flex flex-row py-10">
      <Card
        class="md:w-6/12 pr-6 w-full"
        small-title="estilo de"
        title="GESTÃO"
        sub-title="Gestão centrada nas pessoas."
        content="Todas as empresas do grupo Webgoal adotam uma gestão orgânica, baseada na democracia e pautada em relações de confiança entre as pessoas. Hierarquias formais, comando e controle são substituídos por autonomia, colaboração e liderança emergente."
        button-text="saiba mais"
      />
      <VideoImage
        class="md:w-7/12 -mt-24 hidden md:inline-block"
        url="#"
        :source="require('~/assets/images/video-image.png')"
        description="Webgoal Video"
      />
    </div>
    <div class="container flex flex-wrap">
      <div class="px-2">
        <BlogCard />
      </div>
      <div class="px-2">
        <BlogCard />
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
