<template>
  <div>
    <div class="container mx-auto flex flex-row py-10 px-20">
      <div>
        <img class="ml-10" src="~/assets/images/logo-granatum.svg" alt="">
      </div>
      <div class="text-left text-l m-auto ml-16 mr-10">
        Serviço online de gestão financeira sem complicação que proporciona inteligência financeira para empresas e startups.
      </div>
        <Button class="mr-10 my-auto" text="Saiba Mais" />
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
