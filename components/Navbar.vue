<template>
  <nav class="ml-auto">
    <a
      v-for="link in navbarList"
      :key="link.name"
      :href="link.url"
      class="px-1 md:px-12"
      :class="link.classes"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
  }
}
</script>
