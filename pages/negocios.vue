<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="sm:mx-auto">
          <Title small-title="nossos" title="NEGÓCIOS" />
        </div>
        <div class="w-auto lg:w-2/5 text-xl lg:ml-64">
          <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
        </div>
      </div>
    </div>
    <img class="mx-auto p-3 lg:p-0" src="~/assets/images/company.png" alt="">
    <Granatum />
    <Atelie />
    <Floz />
    <Lumiar />
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
    Footer
  },
  data() {
    return {
    }
  }
}
</script>
