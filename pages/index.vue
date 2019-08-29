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
      <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
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

    <OurNumbers />

    <div class="container py-16">
      <div class="md:max-w-4xl mx-auto">
        <Title title="experiências" class="mb-4" />
        <div class="md:flex md:flex-row-reverse">
          <div class="md:w-7/12">
            <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
          </div>
          <div class="text-right md:w-5/12 md:pr-4">
            <div class="py-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, iusto, illo debitis eveniet repellat voluptatibus laborum vitae porro consectetur itaque expedita ex. Cupiditate rerum, vitae necessitatibus pariatur id hic corporis?</p>
            </div>
            <Button text="Saiba Mais" />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-16">
      <div>
        <Title title="Novidades" class="mb-4" />
        <div class="flex flex-col md:flex-row">
          <div class="mx-2">
            <BlogCard />
          </div>
          <div class="mx-2">
            <BlogCard />
          </div>
          <div class="mx-2">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import BlogSection from '~/components/BlogSection'
import BlogCard from '~/components/BlogCard'
import Card from '~/components/Card'
import Video from '~/components/Video'
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import Button from '~/components/Button'
import Testimonials from '~/components/Testimonials'
import OurNumbers from '~/components/OurNumbers'
import Footer from '~/components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Card,
    Video,
    BlogSection,
    Title,
    SubTitle,
    Button,
    Testimonials,
    OurNumbers,
    BlogCard,
    Footer
  }
}
</script>
