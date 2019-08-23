<template>
  <nav>
    <div class="block md:hidden">
      <button :class="`${textColor} ${borderColor} hover:${textColor}`" class="flex items-center px-3 py-2 border rounded focus:outline-none" @click="toggle">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div :class="open ? 'flex flex-col': 'hidden'" class="md:flex">
      <a
        v-for="link in navbarList"
        :key="link.name"
        :href="link.url"
        class="px-1 md:px-4 p-0 md:p-3"
        :class="`${textColor}`"
      >
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false,
      navbarList: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Cultura',
          url: '#'
        },
        {
          name: 'Negócios',
          url: '/negocios'
        },
        {
          name: 'Experiências',
          url: '#'
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
    textColor() {
      const { dark } = this
      let className = 'text-white'
      if (dark) className = 'text-black'
      return className
    },
    borderColor() {
      const { dark } = this
      let className = 'border-white'
      if (dark) className = 'border-black'
      return className
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
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
