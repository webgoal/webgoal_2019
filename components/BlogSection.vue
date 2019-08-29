<template>
  <div class="container flex flex-row flex-wrap">
    <div class="md:w-6/12 md:flex md:flex-col md:items-center">
      <div class="px-2 ">
        <BlogCard :image-url="require('~/assets/images/home-atelie.svg')" title="Ateliê de Software" />
      </div>
      <div class="px-2">
        <BlogCard :image-url="require('~/assets/images/home-lumiar.svg')" title="Escola Lumiar de Poços de Caldas" />
      </div>
    </div>
    <div class="md:w-6/12 md:mt-16 md:flex md:flex-col md:items-center">
      <div class="px-2">
        <BlogCard :image-url="require('~/assets/images/home-granatum.svg')" title="Granatum Sistema Financeiro" />
      </div>
      <div class="px-2">
        <BlogCard :image-url="require('~/assets/images/home-floz.svg')" title="Floz Autosserviço" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/BlogCard'

export default {
  name: 'BlogSection',
  components: {
    BlogCard
  }
}
</script>
