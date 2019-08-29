<template>
  <div class="pb-10">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper pb-10">
        <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
          <div>
            <div>
              <Video :width="560" :height="315" url="https://www.youtube.com/embed/OyUn-ZCnzfk" />
            </div>
            <h1 class="text-lg md:text-2xl font-bold leading-none mt-3">
              {{ slide.name }}
            </h1>
            <p class="text-lg md:text-2xl leading-none">
              {{ slide.position }}
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  transform: scale(0.5);
  transition: scale all 1s;
}
.swiper-slide h1,
.swiper-slide p {
  display: none;
}
.swiper-slide-active {
  transform: scale(1);
  transition: scale all 1s;
}
.swiper-slide-active h1,
.swiper-slide-active p {
  display: block;
}
.swiper-pagination {
  bottom: 0;
}
</style>

<style>
.swiper-pagination-bullet {
  background-color: #808080;
  margin: 0 5px;
  width: 1rem;
  height: 1rem;
}
.swiper-pagination-bullet-active {
  background-color: #000000;
}
</style>

<script>
import Video from '~/components/Video'

export default {
  name: 'Testimonials',
  components: {
    Video
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        slidesPerView: 3,
        centeredSlides: true
      },
      slides: [
        {
          name: 'Lorem Ipsum 1',
          position: 'Lorem ipsum - CEO',
          url: '#'
        },
        {
          name: 'Lorem Ipsum 2',
          position: 'Lorem ipsum - CEO',
          url: '#'
        },
        {
          name: 'Lorem Ipsum 3',
          position: 'Lorem ipsum - CEO',
          url: '#'
        },
        {
          name: 'Lorem Ipsum 4',
          position: 'Lorem ipsum - CEO',
          url: '#'
        },
        {
          name: 'Lorem Ipsum 5',
          position: 'Lorem ipsum - CEO',
          url: '#'
        }
      ]
    }
  }
}
</script>
