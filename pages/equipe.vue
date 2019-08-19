<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col">
        <div class="w-full">
          <Title small-title="conheça nossa" title="EQUIPE" />
        </div>
        <div class="w-full">
          <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex flex-row flex-wrap -mx-4">
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/hands.svg')" />
        </div>
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/business_man.svg')" />
        </div>
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/notepad.svg')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import IconCard from '~/components/IconCard'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    IconCard
  }
}
</script>
