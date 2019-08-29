<template>
  <footer class="bg-lightBlue">
    <div class="container flex flex-col items-center md:flex-row md:justify-around">
      <Logo width-class="w-32" height="80" />
      <p class="self-center text-white">
        Todos os direitos reservados Webgoal 2019&copy;
      </p>
      <div class="flex flex-row">
        <a
          v-for="link in socialList"
          :key="link.image"
          :href="link.url"
          class="p-2 self-center"
          target="_blank"
        >
          <img class="w-6" :src="link.image">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'Footer',
  components: {
    Logo
  },
  data () {
    return {
      socialList: [
        {
          image: require('~/assets/images/facebook-logo-24.png'),
          url: 'https://www.facebook.com/webgoal'
        },
        {
          image: require('~/assets/images/youtube-logo-24.png'),
          url: 'https://www.youtube.com/user/webgoal'
        },
        {
          image: require('~/assets/images/twitter-logo-24.png'),
          url: 'https://twitter.com/webgoal'
        },
        {
          image: require('~/assets/images/linkedin-logo-24.png'),
          url: 'https://pt.linkedin.com/company/webgoal'
        },
        {
          image: require('~/assets/images/instagram-logo-24.png'),
          url: 'https://www.instagram.com/webgoal/'
        }
      ]
    }
  }
}
</script>
