<template>
  <div class="container flex flex-row flex-wrap">
    <div class="md:w-6/12 md:flex md:flex-col md:items-center">
      <div class="px-2 ">
        <BlogCard
          :image-url="require('~/assets/images/atelie_home.jpg')"
          :title="$t('homepage.blogSection.atelie.title')"
          :content="$t('homepage.blogSection.atelie.content')"
          link="https://atelie.software/"
          :button-text="$t('homepage.button.text')"
        />
      </div>
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/lumiar_home.jpg')"
          :title="$t('homepage.blogSection.lumiar.title')"
          :content="$t('homepage.blogSection.lumiar.content')"
          link="https://www.escolalumiarpocos.com.br/"
          :button-text="$t('homepage.button.text')"
        />
      </div>
    </div>
    <div class="md:w-6/12 md:mt-16 md:flex md:flex-col md:items-center">
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/granatum_home.jpg')"
          :title="$t('homepage.blogSection.granatum.title')"
          :content="$t('homepage.blogSection.granatum.content')"
          link="https://www.granatum.com.br/"
          :button-text="$t('homepage.button.text')"
        />
      </div>
      <div class="px-2">
        <BlogCard
          :image-url="require('~/assets/images/floz_home.jpg')"
          :title="$t('homepage.blogSection.floz.title')"
          :content="$t('homepage.blogSection.floz.content')"
          link="https://www.floz.com.br/"
          :button-text="$t('homepage.button.text')"
        />
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
