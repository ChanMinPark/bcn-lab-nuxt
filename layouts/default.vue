<template>
  <div>
    <my-navigation/>
    <nuxt class="default-layout-nuxt"/>
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

<style lang="less">
  @import "~assets/less/bootstrap/variables.less";
  
  .default-layout-nuxt {
    padding-top: @navbar-height-m;
    @media (min-width: @screen-sm-min) {
      padding-top: @navbar-height;
    }
  }
</style>
