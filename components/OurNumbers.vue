<template>
  <div class="numeros pt-12 pb-10">
    <div class="container">
      <div class="flex flex-col items-center text-center md:flex-row md:justify-between">
        <div>
          <h2 class="text-5xl leading-none pb-10">
            {{ $t('homepage.ourNumbers.title') }} <span class="block font-bold">{{ $t('homepage.ourNumbers.titleBold') }}</span>
          </h2>
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/rocket.svg')"
            :text="$t('homepage.ourNumbers.quantityOne.text')"
            number="04"
          />
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/oven.svg')"
            :text="$t('homepage.ourNumbers.quantityTwo.text')"
            number="02"
          />
        </div>
        <div>
          <IconQuantity
            :icon="require('~/assets/icons/post-it.svg')"
            text="post-it's"
            number="999k"
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
<style scoped>
  .numeros {
    background: #febd32;
    background-image: url(../assets/images/webgoal_pattern.svg);
  }
</style>
