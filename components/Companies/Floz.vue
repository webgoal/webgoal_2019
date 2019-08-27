<template>
  <div class="bg-lightGray justify-center mx-auto p-10 flex flex-row bg-gray-300">
    <div class="w-2/5 flex flex-col mr-16 my-auto justify-center">
      <img class ="mx-auto" src="~/assets/images/logo-floz.svg" alt="">
      <div class="text-center p-auto text-l my-10 mx-auto">
        Startup de autosserviço para servir chopp e conectar pessoas, fazendo a gestão do estoque e também dos pagamentos.
      </div>
        <Button class="text-l mx-auto" text="Saiba Mais" />
    </div>
    <img class="items-center" src="~/assets/images/Floz.png" alt="">
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
