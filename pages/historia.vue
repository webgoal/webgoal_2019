<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container flex flex-row py-10">
      <div class="flex flex-col w-full pr-6">
        <VideoImage
          url="#"
          :source="require('~/assets/images/nossa-historia.png')"
          description="Webgoal Video"
        />
        <span class="text-2xl font-bold">Antes, um grupo de amigos. Hoje, um grupo de empresas.</span>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-right">
          <Title small-title="nossa" title="HISTÓRIA" />
          <CardContent content="Começar é sempre mais difícil! E a mudança é uma voz que grita dentro de nós e precisamos ter coragem para ouví-la." />
        </div>
        <BlockQuote class="text-right" quote="Porque estou acordando toda manhã para ir trabalhar? O que me motiva? Um propósito muito maior do que apenas desenvolver software, queremos melhorar a vida dos clientes, não somente corrigir erros." />
      </div>
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
import VideoImage from '~/components/VideoImage'

export default {
  name: 'Historia',
  components: {
    CardContent,
    BlockQuote,
    Title,
    Footer,
    Header,
    VideoImage
  }
}
</script>
