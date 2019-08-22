<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="mr-64">
          <Title small-title="nossos" title="NEGÓCIOS" />
        </div>
        <div class="w-2/5 text-xl ml-64">
          <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
        </div>
      </div>
    </div>
    <img class="mx-auto" src="~/assets/images/company.png" alt="">
    <div class="mx-auto flex flex-row py-10 px-20">
      <div>
        <img class="ml-10" src="~/assets/images/logo-granatum.svg" alt="">
      </div>
      <div class="text-left text-l m-auto ml-16 mr-10">
        Serviço online de gestão financeira sem complicação que proporciona inteligência financeira para empresas e startups.
      </div>

      <Button class="mr-10" text="Saiba Mais" />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import Button from '~/components/Button'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    Button
  },
  data() {
    return {
    }
  }
}
</script>
