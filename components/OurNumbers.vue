<template>
  <div class="bg-yellow pt-12 pb-10">
    <div class="container">
      <div class="flex flex-col items-center text-center md:flex-row md:justify-between">
        <div>
          <h2 class="text-5xl leading-none pb-10">
            nossos <span class="block font-bold">números</span>
          </h2>
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/rocket.svg')"
          />
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/oven.svg')"
          />
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/post-it.svg')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconQuantity from '~/components/IconQuantity'

export default {
  name: 'OurNumbers',
  components: {
    IconQuantity
  }
}
</script>
