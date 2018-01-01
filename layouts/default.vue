<template>
  <div>
    <my-navigation/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
  import MyNavigation from '~/components/Navigation'
  import MyFooter from '~/components/Footer'

  export default {
    components: {
      MyNavigation,
      MyFooter
    }
  }
</script>

<style>
</style>
