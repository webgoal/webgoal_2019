<template>
  <div class="pb-10">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-button-prev" />
      <div class="swiper-wrapper pb-10">
        <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
          <Video :url="slide.url" :video-id="slide.videoId" :video-file="slide.videoFile" video-class="rounded" />
          <h1 class="text-lg md:text-2xl font-bold leading-none mt-3">
            {{ slide.name }}
          </h1>
          <p class="text-lg md:text-2xl leading-none">
            {{ slide.position }}
          </p>
        </div>
      </div>
      <div class="swiper-pagination" />
      <div class="swiper-button-next" />
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  transform: scale(0.5);
  transition: scale all 1s;
}
.swiper-slide:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.swiper-slide-active:after {
  display: none;
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

.swiper-button-prev {
  background-image: url(../assets/icons/angle-down.svg)
}
.swiper-button-next {
  background-image: url(../assets/icons/angle-right.svg)
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
        spaceBetween: -50,
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
          name: this.$t('homepage.depositions.slideOne.name'),
          position: this.$t('homepage.depositions.slideOne.position'),
          videoId: 'unPQHIc0oW0',
          videoFile: 'maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=unPQHIc0oW0'
        },
        {
          name: this.$t('homepage.depositions.slideTwo.name'),
          position: this.$t('homepage.depositions.slideTwo.position'),
          videoId: 'KtPTslwCKQs',
          videoFile: 'maxres3.jpg',
          url: 'https://www.youtube.com/watch?v=KtPTslwCKQs'
        },
        {
          name: this.$t('homepage.depositions.slideThree.name'),
          position: this.$t('homepage.depositions.slideThree.position'),
          videoId: 'OyUn-ZCnzfk',
          videoFile: 'maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=OyUn-ZCnzfk'
        }
      ]
    }
  }
}
</script>
