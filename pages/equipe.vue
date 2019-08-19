<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col">
        <div class="w-full">
          <Title small-title="conheça nossa" title="EQUIPE" />
        </div>
        <div class="w-full">
          <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-row flex-wrap -mx-4">
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/hands.svg')" />
        </div>
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/business_man.svg')" />
        </div>
        <div class="w-full md:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/notepad.svg')" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-row flex-wrap -mx-4">
        <div v-for="(gridItem, index) in grid" :key="index" class="w-full px-4 flex justify-center items-center" :class="gridItem.size">
          <Avatar v-if="gridItem.type === 'image'" :image="gridItem.image" :title="gridItem.title" />
          <BlockQuote v-if="gridItem.type === 'blockquote'" :quote="gridItem.content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import IconCard from '~/components/IconCard'
import Avatar from '~/components/Avatar'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    IconCard,
    Avatar
  },
  data() {
    return {
      grid: [
        {
          type: 'image',
          title: 'Altieres',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Bruno',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Cainã',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Caio',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Canedo',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Cris',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Davi',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Dobrado',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Evelyn',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: '//placehold.it/264x429',
          size: 'md:w-6/12'
        },
        {
          type: 'image',
          title: 'Fernanda',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Herbertt',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Igor',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Igor',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'João Paulo',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Jorge',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Kim',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lara',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Leo',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Leo',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lucas',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lucas',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Bruno',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Marly',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Mateus',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Matheus',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Miguel',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Paty',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: '//placehold.it/264x429',
          size: 'md:w-6/12'
        },

        {
          type: 'image',
          title: 'Peterson',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Raphael',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Rodrigo',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Sander',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Symone',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Tiago',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Tom',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Valter',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Wallison',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'William',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: '//placehold.it/264x429',
          size: 'md:w-3/12'
        }
      ]
    }
  }
}
</script>
