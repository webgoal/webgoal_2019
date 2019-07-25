<template>
  <div class="flex flex-col px-4 bg-lightGray rounded mt-12">
    <header class="-mt-10">
      <img :src="imageUrl" class="rounded shadow-xl mb-20" :alt="imageAlt" />
      <h2 class="px-12 pb-12 text-4xl font-black">
        {{ title }}
      </h2>
    </header>
    <div class="px-12">
      <p>
        {{ content }}
      </p>
    </div>
    <footer class="mt-12 -mb-5 flex justify-center">
      <Button :url="link" />
    </footer>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'BlogCard',
  components: {
    Button
  },
  props: {
    imageUrl: {
      type: String,
      default: '//placehold.it/1080x720'
    },
    imageAlt: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem numquam similique atque cumque eius, explicabo exercitationem saepe, nesciunt quis omnis laudantium autem veniam, ratione dignissimos qui impedit. Praesentium, doloribus doloremque!'
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
