<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container flex flex-col-reverse md:flex-row py-10">
      <Card
        class="md:w-6/12 pr-6 w-full pt-10 md:pt-0"
        small-title="estilo de"
        title="GESTÃO"
        sub-title="Gestão centrada nas pessoas."
        content="Todas as empresas do grupo Webgoal adotam uma gestão orgânica, baseada na democracia e pautada em relações de confiança entre as pessoas. Hierarquias formais, comando e controle são substituídos por autonomia, colaboração e liderança emergente."
        button-text="Saiba mais"
      />
      <img src="~/assets/images/wg_home.jpg">
    </div>

    <div class="container flex flex-col items-end">
      <Title small-title="Nossos" title="Negócios" class="mb-10 self-center" />
      <div class="flex flex-col md:flex-row w-3/4 items-center">
        <SubTitle class="text-right mr-10" color="text-gray" sub-title="A Webgoal sustenta negócios inovadores com estilo de gestão próprio baseado na experiência, autonomia e responsabilidade." />
        <Button text="Saiba mais" url="/negocios" />
      </div>
    </div>

    <BlogSection />

    <div class="container">
      <Title title="Depoimentos" class="mb-10" />
      <Testimonials />
    </div>

    <OurNumbers />

    <div class="container py-16">
      <div class="md:max-w-4xl mx-auto">
        <Title title="Experiências" class="mb-4" />
        <div class="md:flex md:flex-row-reverse">
          <div class="md:w-7/12">
            <img src="~/assets/images/wg_xp_rp.jpg">
          </div>
          <div class="text-right md:w-5/12 md:pr-4">
            <div class="py-4">
              <p>Conectamos o potencial e a competência de cada um de nós às necessidade e problemas dos nossos clientes.</p>
            </div>
            <Button text="Saiba Mais" url="/equipe" />
          </div>
        </div>
      </div>
    </div>

    <div v-show="showNovidades" class="container py-16">
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
    BlogSection,
    Title,
    SubTitle,
    Button,
    Testimonials,
    OurNumbers,
    BlogCard,
    Footer
  },
  data () {
    return {
      showNovidades: false
    }
  }
}
</script>
