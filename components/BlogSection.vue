<template>
  <div class="container flex flex-wrap">
    <div class="px-2">
      <BlogCard />
    </div>
    <div class="px-2">
      <BlogCard />
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
