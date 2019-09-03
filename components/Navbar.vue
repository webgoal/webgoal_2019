<template>
  <nav :class="mobile ? 'flex flex-col items-center mb-3': 'hidden'" class="md:flex md:flex-row">
    <a
      v-for="link in navbarList"
      :key="link.name"
      :href="link.url"
      class="p-1 md:px-4 md:p-3"
      :class="`${colorClass} ${$nuxt.$route.path === link.url ? $nuxt.$route.path === '/' ? 'home-active' : 'active-link' : ''}`"
    >
      {{ link.name }}
    </a>
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
          url: '/'
        },
        {
          name: 'Negócios',
          url: '/negocios'
        },
        {
          name: 'Experiências',
          url: '/equipe'
        },
        {
          name: 'História',
          url: '/historia'
        }
      ]
    }
  },
  computed: {
    colorClass () {
      const { dark } = this
      let className = 'text-white border-white'
      console.log(this.$nuxt.$route.path)
      if (dark) { className = 'text-black border-blue' }
      return className
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
