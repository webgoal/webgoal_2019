<template>
  <nav :class="mobile ? 'flex flex-col items-center mb-3': 'hidden'" class="md:flex md:flex-row">
    <a
      v-for="link in navbarList"
      :key="link.name"
      :href="link.url"
      class="p-1 md:px-4 md:p-3"
      :class="`${textColor}`"
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
        },
        {
          name: 'Blog',
          url: '#'
        },
        {
          name: 'Contato',
          url: '#'
        }
      ]
    }
  },
  computed: {
    textColor () {
      const { dark } = this
      let className = 'text-white'
      if (dark) { className = 'text-black' }
      return className
    },
    borderColor () {
      const { dark } = this
      let className = 'border-white'
      if (dark) { className = 'border-black' }
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
  a:hover {
    border-bottom: 0.1rem solid #00b8d7;
  }
</style>
