<template>
  <nav class="ml-auto">
    <a
      v-for="link in navbarList"
      :key="link.name"
      :href="link.url"
      class="px-1 md:px-4"
      :class="`${link.classes} ${textColor}`"
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
    }
  },
  data() {
    return {
      navbarList: [
        {
          name: 'Negócios',
          url: '#',
          classes: 'hidden md:inline-block lg-inline-block xl-inline-block'
        },
        {
          name: 'Experiências',
          url: '#',
          classes: 'hidden md:inline-block lg-inline-block xl-inline-block'
        },
        {
          name: 'História',
          url: '#',
          classes: 'hidden md:inline-block lg-inline-block xl-inline-block'
        },
        {
          name: 'Blog',
          url: '#',
          classes: 'sm:inline-block'
        },
        {
          name: 'Contato',
          url: '#',
          classes: 'sm:inline-block'
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
    }
  }
}
</script>
