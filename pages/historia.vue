<template>
  <section>
    <Header dark :absolute="false" />

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center">
      <div class="flex flex-col w-full pr-6">
        <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="nossa" title="história" />
          <CardContent content="Começar é sempre mais difícil! E a mudança é uma voz que grita dentro de nós e precisamos ter coragem para ouví-la." />
        </div>
      </div>
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center">
      <div class="flex flex-col w-full pr-6">
        <span class="text-left lg:text-right text-4xl font-bold">Antes, um grupo de amigos. Hoje, um grupo de empresas.</span>
      </div>
      <div class="flex flex-col w-full">
        <BlockQuote class="text-left" quote="Porque estou acordando toda manhã para ir trabalhar? O que me motiva? Um propósito muito maior do que apenas desenvolver software, queremos melhorar a vida dos clientes, não somente corrigir erros." />
      </div>
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10">
      <div class="text-left pb-8 lg:text-right flex flex-col w-full pr-6 justify-center">
        <span class="text-2xl">A região tinha potencial e poderíamos criar oportunidades de trabalho para que os profissionais de TI não precisassem ir para São Paulo. Buscávamos por mais qualidade de vida.</span>
        <span class="text-2xl">Felizes, chegamos então no Sul de Minas para iniciar uma unidade da Webgoal no ano de 2011.</span>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="mas porque" title="poços de caldas" />
          <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
        </div>
      </div>
    </div>

    <div class="container flex flex-col py-10">
      <Title small-title="surge o" title="granatum" />
      <CardContent content="Outro momento decisivo para nós foi o surgimento do Granatum Pessoal em 2009. Essa ferramenta gratuita era um controle financeiro online baseado no Webgoal Finanças, um software interno que criamos para fazer a gestão financeira da nossa empresa." />
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center">
      <div class="flex flex-col w-full pr-6 text-left lg:text-right">
        <span>Decidimos ampliar o negócio de desenvolvimento de software sob medida, criando a marca Ateliê de Software. O nosso crescimento exigiu algumas mudanças. Tínhamos uma única pessoa jurídica, mas duas unidades de negócio bem distintas: Ateliê de Software e Granatum.</span>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="nasce o" title="ateliê" />
        </div>
      </div>
    </div>

    <div class="container flex flex-col py-10 items-center">
      <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
    </div>

    <Footer />
  </section>
</template>

<script>
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import CardContent from '~/components/CardContent'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Video from '~/components/Video'

export default {
  name: 'Historia',
  components: {
    CardContent,
    BlockQuote,
    Title,
    Footer,
    Header,
    Video
  }
}
</script>
