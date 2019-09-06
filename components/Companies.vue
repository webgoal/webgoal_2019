<template>
  <div class="container">
    <div class="flex flex-col pb-6 lg:flex-row lg:justify-center">
      <div class="flex flex-col justify-around items-center px-4">
        <img src="~/assets/images/logo-granatum.svg" width="200" class="mt-16" alt="">
        <Button :text="nameButton" :url="urls[0]" class="mt-8" target="_blank" />
      </div>
      <div class="flex flex-col justify-around items-center px-4">
        <img src="~/assets/images/logo-atelie.svg" width="200" class="mt-16" alt="">
        <Button :text="nameButton" :url="urls[1]" class="mt-8" target="_blank" />
      </div>
      <div class="flex flex-col justify-around items-center px-4">
        <img src="~/assets/images/logo-floz.svg" width="200" class="mt-16" alt="">
        <Button :text="nameButton" :url="urls[2]" class="mt-10" target="_blank" />
      </div>
      <div class="flex flex-col justify-around items-center px-4">
        <img src="~/assets/images/logo-lumiar.svg" width="200" alt="">
        <Button :text="nameButton" :url="urls[3]" target="_blank" />
      </div>
    </div>
  </div>
</template>
<script>

import Button from '~/components/Button'
export default {
  name: 'Companies',
  components: {
    Button
  },
  props: {
    nameButton: {
      type: String,
      default: ''
    },
    urls: {
      type: Array,
      default: null
    }
  }
}
</script>
