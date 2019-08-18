<template>
  <div class="container flex flex-row flex-wrap">
    <div class="md:w-6/12 md:flex md:flex-col md:items-center">
      <div class="px-2 ">
        <BlogCard />
      </div>
      <div class="px-2">
        <BlogCard />
      </div>
    </div>
    <div class="md:w-6/12 md:mt-16 md:flex md:flex-col md:items-center">
      <div class="px-2">
        <BlogCard />
      </div>
      <div class="px-2">
        <BlogCard />
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
