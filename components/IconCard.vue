<template>
  <div class="flex flex-col px-4 bg-lightGray rounded mt-20 mb-10 w-full md:mb-32">
    <header class="-mt-20 text-center">
      <div class="w-40 h-40 mb-8 bg-gray rounded-full mx-auto flex justify-center items-center shadow-xl" :class="iconColor">
        <img :src="icon" class="rounded" alt="">
      </div>
      <h2 class="px-6 pb-12 text-4xl font-black">
        {{ title }}
      </h2>
    </header>
    <div class="px-6 pb-10">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogCard',
  props: {
    icon: {
      type: String,
      default: '//placehold.it/1080x720'
    },
    iconColor: {
      type: String,
      default: 'bg-yellow'
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
