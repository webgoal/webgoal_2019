<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col lg:flex-row lg:mx-40 lg:p-10">
        <div class="w-full">
          <Title small-title="conheça nossa" title="EQUIPE" />
        </div>
        <div class="w-full">
          <BlockQuote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-4">
        <div class="w-full lg:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/hands.png')" icon-color="bg-lightBlue" title="Colaboração" />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/business_man.png')" title="Autonomia" />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <IconCard :icon="require('~/assets/icons/notepad.png')" icon-color="bg-darkBlue" title="Transparência" />
        </div>
      </div>
    </div>

    <div class="container mb-40">
      <div class="flex flex-row flex-wrap -mx-4">
        <div v-for="(gridItem, index) in grid" :key="index" class="w-full px-4 flex justify-center items-center" :class="gridItem.size">
          <Avatar v-if="gridItem.type === 'image'" :image="gridItem.image" :title="gridItem.title" />
          <BlockQuote v-if="gridItem.type === 'blockquote'" :quote="gridItem.content" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-row flex-wrap -mx-4">
        <div class="w-full md:w-6/12 px-4">
          <img src="~/assets/images/experiencia.svg" alt="">
        </div>
        <div class="w-full md:w-6/12 px-4 flex flex-col justify-center">
          <h2 class="text-5xl font-black font-serif">
            experiências
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-col items-center text-center mt-20 mb-16">
        <h3 class="font-black text-2xl mb-2">
          Divida suas experiências com a gente
        </h3>
        <p class="font-lg">
          trabalhe em uma das empresas do grupo
        </p>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-col pb-6 lg:flex-row lg:justify-center">
        <div class="flex flex-col justify-around items-center h-56 px-4">
          <img src="~/assets/images/logo-granatum.svg" alt="">
          <Button text="conheça as vagas" />
        </div>
        <div class="flex flex-col justify-around items-center h-56 px-4">
          <img src="~/assets/images/logo-atelie.svg" alt="">
          <Button text="conheça as vagas" />
        </div>
        <div class="flex flex-col justify-around items-center h-56 px-4">
          <img src="~/assets/images/logo-floz.svg" alt="">
          <Button text="conheça as vagas" />
        </div>
        <div class="flex flex-col justify-around items-center h-56 px-4">
          <img src="~/assets/images/logo-lumiar.svg" class="img-lumiar" alt="">
          <Button text="conheça as vagas" />
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Title from '~/components/Title'
import BlockQuote from '~/components/BlockQuote'
import IconCard from '~/components/IconCard'
import Avatar from '~/components/Avatar'
import Button from '~/components/Button'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    IconCard,
    Avatar,
    Button,
    Footer
  },
  data () {
    return {
      grid: [
        {
          type: 'image',
          title: 'Altieres',
          image: require('~/assets/images/people/alt.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Bruno',
          image: require('~/assets/images/people/bruno.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Cainã',
          image: require('~/assets/images/people/caina.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Caio',
          image: require('~/assets/images/people/caio.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Canedo',
          image: require('~/assets/images/people/canedo.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Cris',
          image: require('~/assets/images/people/cris.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Davi',
          image: require('~/assets/images/people/davi.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Dobrado',
          image: require('~/assets/images/people/dobrado.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Elton',
          image: require('~/assets/images/people/Elton.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Evelyn',
          image: require('~/assets/images/people/evelyn.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          size: 'md:w-6/12'
        },
        {
          type: 'image',
          title: 'Felipe',
          image: require('~/assets/images/people/felipe.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Fernanda',
          image: require('~/assets/images/people/fernanda.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Herbertt',
          image: require('~/assets/images/people/betao.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Igor Bueno',
          image: require('~/assets/images/people/igorbueno.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Igor Gimenes',
          image: require('~/assets/images/people/igorgimenes.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'João Paulo',
          image: require('~/assets/images/people/joao.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lara',
          image: require('~/assets/images/people/lara.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Leo Godde',
          image: require('~/assets/images/people/leogodde.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Leo Neves',
          image: require('~/assets/images/people/leo.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lucas Azevedo',
          image: require('~/assets/images/people/lucasazevedo.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Lucas Fonseca',
          image: require('~/assets/images/people/lucasfonseca.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Marly',
          image: require('~/assets/images/people/marly.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Mateus',
          image: require('~/assets/images/people/mateusandrade.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Matheus',
          image: require('~/assets/images/people/matheushaddad.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Miguel',
          image: require('~/assets/images/people/miguel.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Patrícia',
          image: require('~/assets/images/people/patricia.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: require('~/assets/images/people/alt.png'),
          size: 'md:w-6/12'
        },

        {
          type: 'image',
          title: 'Peterson',
          image: require('~/assets/images/people/peterson.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Raphael',
          image: require('~/assets/images/people/rafael.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Rodrigo',
          image: require('~/assets/images/people/rodrigo.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Sander',
          image: require('~/assets/images/people/sander.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Symone',
          image: require('~/assets/images/people/simone.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: require('~/assets/images/people/alt.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Tiago',
          image: require('~/assets/images/people/tiago.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Tom',
          image: require('~/assets/images/people/tom.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Valter',
          image: require('~/assets/images/people/valter.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Wallison',
          image: require('~/assets/images/people/wallison.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'William',
          image: require('~/assets/images/people/will.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'blockquote',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          image: require('~/assets/images/people/alt.png'),
          size: 'md:w-3/12'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .img-lumiar {
    height: 120px;
    margin-bottom: -25px;
    margin-top: -35px;
  }
</style>>
