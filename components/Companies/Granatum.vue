<template>
  <div>
    <div class="container mx-auto flex flex-col p-10 md:flex-row">
      <img class="lg:ml-10 my-auto mx-auto sm:mx-auto" src="~/assets/images/logo-granatum.svg" alt="">
      <div class="text-left text-l my-auto py-3 md:py-0 md:pl-10 md:pr-4 sm:px-auto">
        Serviço online de gestão financeira sem complicação que proporciona inteligência financeira para empresas e startups.
      </div>
      <Button class="m-auto" text="Saiba Mais" />
    </div>
    <img class="mx-auto my-10" src="~/assets/images/working.png" alt="">
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'Granatum',
  components: {
    Button
  }
}
</script>
