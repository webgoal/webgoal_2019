<template>
  <nav :class="mobile ? 'flex flex-col items-center mb-3': 'hidden'" class="md:flex md:flex-row">
    <nuxt-link
      v-for="link in navbarList"
      :key="link.name"
      :to="localePath(link.page)"
      class="p-1 md:px-4 md:p-3"
      :class="`${colorClass} ${active(link.page)}`"
    >
      {{ $t(link.name) }}
    </nuxt-link>
     <toggle-button
        :value="language"
        :labels="{ checked: 'en', unchecked: 'pt' }"
        color="#27B8D7"
        class="mt-3"
        @change="changeLanguage"
      />
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navbarList: [
        {
          name: 'Home',
          page: 'index'
        },
        {
          name: 'header.business',
          page: 'negocios'
        },
        {
          name: 'header.experiences',
          page: 'equipe'
        },
        {
          name: 'header.history',
          page: 'historia'
        }
      ]
    }
  },
  computed: {
    colorClass () {
      const { dark } = this
      let className = 'text-white border-white'
      if (dark) { className = 'text-black border-blue' }
      return className
    },
    language() {
      return this.$i18n.locale === 'en'
    }
  },
  methods: {
    active (route) {
      const name = this.removeLanguageOfName(this.$nuxt.$route.name)
      if (route === name && route === 'index') {
        return 'home-active'
      } else if (route === name) {
        return 'active-link'
      } else {
        return ''
      }
    },
    removeLanguageOfName(name) {
      if(name.substr(-2) === 'pt'){
        return name.replace('___pt', '')
      } else {
        return name.replace('___en', '')
      }
    },
    changeLanguage(value) {
      const language = value.value ? 'en' : 'pt'
      this.$nuxt.$router.push(this.switchLocalePath(language))
    }
  }
}
</script>

<style scoped>
  a {
    border-bottom: 0.1rem solid transparent;
    transition: .5s;
  }
  .home-active {
    color: white;
    border-bottom: 0.1rem solid white;
  }
  .active-link {
    color: #00b8d7;
  }
  .border-blue:hover {
    border-bottom: 0.1rem solid #00b8d7;
  }
  .border-white:hover {
    border-bottom: 0.1rem solid white;
  }
</style>
