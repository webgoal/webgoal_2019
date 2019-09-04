<template>
  <section>
    <Header dark :absolute="false" />

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center">
      <div class="flex flex-col w-full pr-6">
        <img src="~/assets/images/wg_todos.jpg" alt="todos">
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="nossa" title="HISTÓRIA" />
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
      <Button text="Saiba Mais" url="https://share.atelie.software/antes-um-grupo-de-amigos-hoje-um-grupo-de-empresas-ffbee3334a1a" />
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10">
      <div class="text-left pb-8 lg:text-right flex flex-col w-full pr-6 justify-center">
        A região tinha potencial e poderíamos criar oportunidades de trabalho para que os profissionais de TI não precisassem ir para São Paulo. Buscávamos por mais qualidade de vida.</span>
        Felizes, chegamos então no Sul de Minas para iniciar uma unidade da Webgoal no ano de 2011.
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="mas porque" title="Poços de Caldas" />
          <img src="~/assets/images/wg_pc.png" alt="todos">
        </div>
      </div>
    </div>

    <div class="container flex flex-col py-10">
      <Title small-title="surge o" title="Granatum" />
      <CardContent content="Outro momento decisivo para nós foi o surgimento do Granatum Pessoal em 2009. Essa ferramenta gratuita era um controle financeiro online baseado no Webgoal Finanças, um software interno que criamos para fazer a gestão financeira da nossa empresa." />
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center">
      <div class="flex flex-col w-full pr-6 text-left lg:text-right">
        <span>Decidimos ampliar o negócio de desenvolvimento de software sob medida, criando a marca Ateliê de Software. O nosso crescimento exigiu algumas mudanças. Tínhamos uma única pessoa jurídica, mas duas unidades de negócio bem distintas: Ateliê de Software e Granatum.</span>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title small-title="nasce o" title="Ateliê" />
        </div>
      </div>
    </div>

    <div class="container flex justify-center py-10 items-center">
      <Video url="https://www.youtube.com/watch?v=unPQHIc0oW0" video-id="unPQHIc0oW0" width="600" height="500" />
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
import Button from '~/components/Button'

export default {
  name: 'Historia',
  components: {
    CardContent,
    BlockQuote,
    Title,
    Footer,
    Header,
    Video,
    Button
  }
}
</script>
