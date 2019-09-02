<template>
  <div class="container flex flex-row flex-wrap">
    <div class="md:w-6/12 md:flex md:flex-col md:items-center">
      <div class="px-2 ">
        <BlogCard
          :image-url="require('~/assets/images/home-atelie.svg')"
          title="Ateliê de Software"
          content="Criamos soluções digitais para grandes empresas e startups, desenvolvendo software sob medida, utilizando métodos ágeis e aplicando técnicas avançadas de product discovery."
          link="https://atelie.software/"
        />
      </div>
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/home-lumiar.svg')"
          title="Escola Lumiar de Poços de Caldas"
          content="Considerada umas das escolas mais inovadoras do mundo por utilizar uma metodologia de ensino-aprendizagem baseada no desenvolvimento de habilidades e competências a partir de projetos e grupos multietários."
          link="https://www.escolalumiarpocos.com.br/"
        />
      </div>
    </div>
    <div class="md:w-6/12 md:mt-16 md:flex md:flex-col md:items-center">
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/home-granatum.svg')"
          title="Granatum Sistema Financeiro"
          content="Serviço online de gestão financeira sem complicação que proporciona inteligência financeira para empresas e startups."
          link="https://www.granatum.com.br/"
        />
      </div>
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/home-floz.svg')"
          title="Floz Autosserviço"
          content="Startup de autosserviço para servir chopp e conectar pessoas, fazendo a gestão do estoque e também dos pagamentos."
          link="https://www.floz.com.br/"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/BlogCard'

export default {
  name: 'BlogSection',
  components: {
    BlogCard
  }
}
</script>
