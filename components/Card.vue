<template>
  <div class="text-right">
    <Title :small-title="smallTitle" :title="title" />
    <SubTitle :sub-title="subTitle" />
    <CardContent :content="content" />
    <Button :text="buttonText" />
  </div>
</template>
<script>
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import CardContent from '~/components/CardContent'
import Button from '~/components/Button'

export default {
  name: 'Card',
  components: {
    Title,
    SubTitle,
    CardContent,
    Button
  },
  props: {
    smallTitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>
