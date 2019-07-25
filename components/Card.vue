<template>
  <div class="container">
    <Title :small-title="smallTitle" :title="title" />
    <SubTitle :sub-title="subTitle" />
    <Content :content="content" />
    <Button :text="buttonText" />
  </div>
</template>
<script>
import Title from '~/components/Title'
import SubTitle from '~/components/SubTitle'
import Content from '~/components/Content'
import Button from '~/components/Button'

export default {
  name: 'Card',
  components: {
    Title,
    SubTitle,
    Content,
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
