<template>
  <div class="bg-lightGray flex flex-col p-10 lg:flex-row justify-center">
    <div class="container flex flex-col px-0 my-auto pb-6 lg:pb-0 lg:w-3/12 lg:m-0 items-end">
      <img class="mx-auto w-56 lg:mx-0" src="~/assets/images/logo-granatum.svg" alt="">
      <div class="text-center pr-0 my-10 w-64 lg:text-right">
        Serviço online de gestão financeira sem complicação que proporciona inteligência financeira para empresas e startups.
      </div>
      <Button class="m-auto lg:m-0" text="Saiba Mais" :url="link" target="_blank" />
    </div>
    <img class="mx-auto lg:mx-10" src="~/assets/images/working.png" alt="">
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'Granatum',
  components: {
    Button
  },
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
