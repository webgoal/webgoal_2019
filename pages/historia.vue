<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      {{ nome }}
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Historia',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      nome: 'bla'
    }
  }
}
</script>
