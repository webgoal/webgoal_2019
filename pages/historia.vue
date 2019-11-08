<template>
  <section>
    <Header dark :absolute="false" />

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center mt-24">
      <div class="flex flex-col w-full pr-6">
        <img src="~/assets/images/wg_todos.jpg" alt="todos">
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title :small-title="$t('history.smallTitle')" :title="$t('history.title')" />
          <CardContent :content="$t('history.content')" />
        </div>
      </div>
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center mt-24">
      <div class="flex flex-col w-full pr-6">
        <span class="text-left lg:text-right text-4xl font-bold">{{ $t('history.subTitle') }}</span>
      </div>
      <div class="flex flex-col w-full">
        <BlockQuote
          class="text-left"
          :quote="$t('history.quote')"
          block-style="relative -mt-16"
          text-style="absolute top-custom left-custom text-gray"
        />
      </div>
      <Button :text="$t('history.button.text')" url="https://share.atelie.software/antes-um-grupo-de-amigos-hoje-um-grupo-de-empresas-ffbee3334a1a" />
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 mt-24">
      <div class="flex flex-col w-full">
        <div class="text-right pb-8">
          <Title :small-title="$t('history.pocos.smallTitle')" :title="$t('history.pocos.title')" />
        </div>
        <div class="text-left pb-8 lg:text-right flex flex-col lg:flex-row w-full pr-6 justify-center lg:items-center">
          <p class="pb-10 lg:pr-10 lg:pb-0">
            {{ $t('history.pocos.text') }}
          </p>
          <img src="~/assets/images/wg_pc.png" alt="todos">
        </div>
      </div>
    </div>

    <div class="container flex flex-col py-10 mt-24">
      <Title :small-title="$t('history.granatum.smallTitle')" :title="$t('history.granatum.title')" />
      <CardContent :content="$t('history.granatum.content')" />
    </div>

    <div class="container flex lg:flex-row sm:flex-col-reverse flex-col py-10 items-center mt-24">
      <div class="flex flex-col w-full pr-6 text-left lg:text-right">
        <span>{{ $t('history.atelie.content') }}</span>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-left">
          <Title :small-title="$t('history.atelie.smallTitle')" :title="$t('history.atelie.title')" />
        </div>
      </div>
    </div>

    <div class="container flex justify-center py-10 items-center mb-24">
      <Video url="https://www.youtube.com/watch?v=unPQHIc0oW0" video-id="unPQHIc0oW0" width="600" height="500" />
    </div>

    <Footer />
  </section>
</template>

<script>
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import CardContent from '~/components/CardContent'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Video from '~/components/Video'
import Button from '~/components/Button'

export default {
  name: 'Historia',
  components: {
    CardContent,
    BlockQuote,
    Title,
    Footer,
    Header,
    Video,
    Button
  }
}
</script>
