<template>
  <div id="home">
    <div class="main-header">
      <div class="back-image" :style="{ backgroundImage: `url(${require('~/assets/img/main/bcn-main-header-1.jpg')})` }"></div>
      <div class="content">
        <div class="container">
          <span class="color-primary">B</span>roadband<br>
          <span class="color-primary">C</span>onvergence<br>
          <span class="color-primary">N</span>etwork<br>
          <span class="color-primary">L</span>aboratory
        </div>
      </div>
    </div>

    <br><br><br><br><br><br><br>
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  }
}
</script>

<style lang="less" src="./home.less" scoped>
</style>
