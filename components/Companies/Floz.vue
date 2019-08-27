<template>
  <div class="bg-lightGray justify-center mx-auto p-10 flex flex-col-reverse lg:flex-row-reverse">
    <img class="mx-auto lg:mx-10" src="~/assets/images/Floz.png" alt="">
    <div class="flex flex-col my-auto pb-6 items-center">
      <img src="~/assets/images/logo-floz.svg" class="mx-auto w-56 lg:mx-0" alt="">
      <div class="text-center mx-auto lg:text-left text-l my-10">
        Startup de autosserviço para servir chopp e conectar pessoas, fazendo a gestão do estoque e também dos pagamentos.
      </div>
      <Button class="m-auto text-left text-l" text="Saiba Mais" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'Floz',
  components: {
    Button
  }
}
</script>
