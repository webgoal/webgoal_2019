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

    <div class="container">
      <Title small-title="Nossos" title="Negócios" class="mb-10" />
      <SubTitle color="text-gray" sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
      <Button text="Saiba Mais" />
    </div>

    <BlogSection />

    <div class="container">
      <Title title="Depoimentos" class="mb-10" />
      <Testimonials />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import BlogSection from '~/components/BlogSection'
import Card from '~/components/Card'
import VideoImage from '~/components/VideoImage'
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import Button from '~/components/Button'
import Testimonials from '~/components/Testimonials'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Card,
    VideoImage,
    BlogSection,
    Title,
    SubTitle,
    Button,
    Testimonials
  }
}
</script>
