<template>
  <section>
    <Header />
    <HomeHero />
    <div class="container flex flex-col-reverse md:flex-row py-10 mt-24">
      <Card
        class="md:w-6/12 pr-6 w-full pt-10 md:pt-0"
        :small-title="$t('homepage.management.smallTitle')"
        :title="$t('homepage.management.title')"
        :sub-title="$t('homepage.management.subTitle')"
        :content="$t('homepage.management.content')"
        :button-text="$t('homepage.button.text')"
      />
      <img src="~/assets/images/wg_home.jpg">
    </div>

    <div class="container flex flex-col items-end mt-24">
      <Title 
        :small-title="$t('homepage.business.smallTitle')"
        :title="$t('homepage.business.title')"
        class="mb-10 self-center" />
      <div class="flex flex-col md:flex-row w-3/4 items-center">
        <SubTitle class="text-right mr-10" color="text-gray" :sub-title="$t('homepage.business.subTitle')" />
        <Button :text="$t('homepage.button.text')" url="/negocios" />
      </div>
    </div>

    <BlogSection class="mt-24" />

    <div class="container mt-24">
      <Title :title="$t('homepage.depositions.title')" class="mb-10" />
      <Testimonials />
    </div>

    <OurNumbers class="mt-24" />

    <div class="container py-16 mt-24 mb-24">
      <div class="md:max-w-4xl mx-auto">
        <Title :title="$t('homepage.experiences.title')" class="mb-4" />
        <div class="md:flex md:flex-row-reverse">
          <div class="md:w-7/12">
            <img src="~/assets/images/wg_xp_rp.jpg">
          </div>
          <div class="text-right md:w-5/12 md:pr-4">
            <div class="py-4">
              <p>{{ $t('homepage.experiences.text') }}</p>
            </div>
            <Button :text="$t('homepage.button.text')" url="/equipe" />
          </div>
        </div>
      </div>
    </div>

    <div v-show="showNovidades" class="container py-16">
      <div>
        <Title title="Novidades" class="mb-4" />
        <div class="flex flex-col md:flex-row">
          <div class="mx-2">
            <BlogCard />
          </div>
          <div class="mx-2">
            <BlogCard />
          </div>
          <div class="mx-2">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import HomeHero from '~/components/HomeHero'
import BlogSection from '~/components/BlogSection'
import BlogCard from '~/components/BlogCard'
import Card from '~/components/Card'
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import Button from '~/components/Button'
import Testimonials from '~/components/Testimonials'
import OurNumbers from '~/components/OurNumbers'
import Footer from '~/components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    HomeHero,
    Card,
    BlogSection,
    Title,
    SubTitle,
    Button,
    Testimonials,
    OurNumbers,
    BlogCard,
    Footer
  },
  data () {
    return {
      showNovidades: false
    }
  }
}
</script>
