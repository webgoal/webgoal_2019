<template>
  <div class="justify-center lg:justify-start mx-auto p-10 flex flex-col-reverse lg:flex-row">
    <img class="mx-auto lg:mx-10" src="~/assets/images/AtelieDeSoftware.png" alt="">
    <div class="flex lg:flex-start flex-col mr-0 lg:mr-16 my-auto pb-6 lg:pb-0">
      <img src="~/assets/images/logo-atelie.svg" class="mx-auto w-56 lg:mx-0" alt="">
      <div class="text-center lg:text-left pr-0 lg:pr-10 text-l my-10">
        {{ $t('businesspage.atelie.text') }}
      </div>
      <Button class="m-auto lg:my-auto lg:mr-auto lg:ml-0 text-left text-l" :text="$t('businesspage.button.text')" :url="link" target="_blank" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'Atelie',
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
