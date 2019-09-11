<template>
  <section>
    <Header dark :absolute="false" />
    <div class="container">
      <div class="flex flex-col lg:flex-row lg:mx-40 lg:p-10">
        <div class="w-full">
          <Title small-title="conheça nossa" title="EQUIPE" />
        </div>
        <div class="w-full">
          <BlockQuote
            quote="Conectamos o potencial e a competência de cada um de nós às necessidade e problemas dos nossos clientes."
            block-style="relative mt-10"
            text-style="absolute top-custom left-custom text-gray"
          />
        </div>
      </div>
    </div>

    <div class="container mt-24">
      <div class="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-4">
        <div class="w-full lg:w-4/12 px-4">
          <IconCard
            :icon="require('~/assets/icons/hands.png')"
            icon-color="bg-lightBlue"
            title="Colaboração"
            content="Colaborar significa fazer o trabalho junto com outras pessoas para criar novos aprendizados, aumentar a resiliência da equipe e ter qualidade no resultado final. A colaboração estimula a troca de conhecimentos e é a base do trabalho em equipe."
          />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <IconCard
            :icon="require('~/assets/icons/business_man.png')"
            title="Autonomia"
            content="Ter autonomia significa fazer o trabalho que precisa ser feito da maneira que você acredita ser a melhor, considerando o impacto e as consequências dessa escolha na atuação das pessoas que trabalham com você, no nosso negócio e no negócio do cliente."
          />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <IconCard
            :icon="require('~/assets/icons/notepad.png')"
            icon-color="bg-darkBlue"
            title="Transparência"
            content="É a correspondência entre o que realmente queremos e o que demonstramos, entre o que desejamos e o que manifestamos no mundo real. Significa revelar com maior ou menor clareza as intenções, os sentimentos e os pensamentos ocultos por trás de uma ação. A transparência diminui a frustração, facilita a convivência com
o outro, favorece a autonomia, a colaboração e a auto-organização."
          />
        </div>
      </div>
    </div>

    <div class="container mb-40">
      <div class="flex flex-row flex-wrap -mx-4">
        <div v-for="(gridItem, index) in grid" :key="index" class="w-full px-4 flex justify-center items-center" :class="gridItem.size">
          <Avatar v-if="gridItem.type === 'image'" :image="gridItem.image" :title="gridItem.title" />
          <BlockQuote
            v-if="gridItem.type === 'blockquote'"
            :quote="gridItem.content"
            text-style="absolute top-custom left-custom text-gray"
            block-style="relative w-full height-custom"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-row flex-wrap -mx-4">
        <div class="w-full md:w-6/12 px-4">
          <img src="~/assets/images/img_exp.jpg" alt="">
        </div>
        <div class="w-full md:w-6/12 px-4 flex flex-col justify-center">
          <h2 class="text-5xl font-black font-serif">
            Experiências
          </h2>
          <p>
            Desde o início tomamos iniciativas inovadoras que favorecem o desempenho dos nossos trabalhadores. Employee experience é o conjunto de esforços para criar uma vivência significativa de trabalho para os colaboradores. Acreditamos que colaboramos para o crescimento profissional das pessoas e as mesmas colaboram para o crescimento das empresas.
          </p>
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

    <Companies
      name-button="conheça as vagas"
      class="mt-24 mb-24"
      :urls="[
        'https://www.granatum.com.br/financeiro/vagas/',
        'https://docs.google.com/forms/d/e/1FAIpQLSdTCpnq5z_k6xd1kIQapsZNAbS9U7qSUjMQ4mrfo7hp7h8JZA/viewform',
        'https://www.floz.com.br/#contact',
        'https://www.escolalumiarpocos.com.br/trabalhe-conosco']"
    />
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
import Companies from '~/components/Companies'

export default {
  name: 'Equipe',
  components: {
    Header,
    Title,
    BlockQuote,
    IconCard,
    Avatar,
    Footer,
    Companies
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
          title: 'Gustavo Canedo',
          image: require('~/assets/images/people/canedo.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Cristiane',
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
          title: 'Daniel Oshiro',
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
          content: '"Software é apenas uma das coisas que fazemos aqui dentro." - Eraldo B. Santos (Ateliê de Software)',
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
          type: 'image',
          title: 'Lara',
          image: require('~/assets/images/people/lara.png'),
          size: 'md:w-3/12'
        },

        {
          type: 'image',
          title: 'Leonardo Godde',
          image: require('~/assets/images/people/leogodde.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Leonardo Neves',
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
          content: '"Aprendíamos como desenvolver software para tornar empresas melhores e pessoas mais felizes." - Matheus Haddad (sócio fundador da Webgoal)',
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
          type: 'image',
          title: 'Tiago',
          image: require('~/assets/images/people/tiago.png'),
          size: 'md:w-3/12'
        },
        {
          type: 'image',
          title: 'Washington',
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
        }
      ]
    }
  }
}
</script>
