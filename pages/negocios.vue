<template>
  <section>
    <Header dark :absolute="false" />
    <div class="flex flex-col items-center container">
      <div class="sm:mx-auto">
        <Title small-title="nossos" title="NEGÓCIOS" />
      </div>
      <div class="w-auto lg:w-2/5 text-xl lg:ml-64">
        <BlockQuote
          quote="A Webgoal sustenta negócios inovadores com estilo de gestão próprio baseado na experiência, autonomia e responsabilidade."
          block-style="relative mt-10"
          text-style="absolute top-custom left-custom text-gray"
        />
      </div>
    </div>
    <img class="mx-auto p-3 lg:p-0 lg:mt-24" src="~/assets/images/company.png" alt="">
    <Granatum class="mt-24" link="https://www.granatum.com.br/" />
    <Atelie class="container mt-24" link="https://atelie.software/" />
    <Floz class="mt-24" link="https://www.floz.com.br/" />
    <Lumiar class="container mt-24" link="https://www.escolalumiarpocos.com.br/" />
    <Companies
      class="container mt-24 mb-24"
      name-button="entre em contato"
      :urls="[
        'https://www.granatum.com.br/financeiro/',
        'https://atelie.software/#contato',
        'https://www.floz.com.br/#contact',
        'https://docs.google.com/forms/d/e/1FAIpQLSdF_8nQe35HJsu42lmLEbsRMIzpPdNzK3ZgIv5ZBF_WqXjI9g/viewform']"
    />
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import Granatum from '~/components/Companies/Granatum'
import Atelie from '~/components/Companies/Atelie'
import Floz from '~/components/Companies/Floz'
import Lumiar from '~/components/Companies/Lumiar'
import Footer from '~/components/Footer'
import Companies from '~/components/Companies'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    Granatum,
    Atelie,
    Floz,
    Lumiar,
    Footer,
    Companies
  }
}
</script>
