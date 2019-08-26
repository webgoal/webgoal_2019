<template>
  <div class="justify-center mx-auto p-10 flex flex-row">
    <img class="mx-10" src="~/assets/images/Lumiar.png" alt="">
    <div class="flex-start flex-col mr-16 my-auto">
      <img src="~/assets/images/logo-lumiar.svg" alt="">
      <div class="text-left pr-10 text-l my-10">
        Criamos soluções digitais para grandes empresas e startups, desenvolvendo software sob medida, utilizando métodos ágeis e aplicando técnicas avançadas de product discovery.
      </div>
      <Button class="text-left text-l" text="Saiba Mais" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'Atelie',
  components: {
    Button
  }
}
</script>
