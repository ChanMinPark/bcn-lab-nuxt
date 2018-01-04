<template>
  <div id="home">
    <div class="main-header">
      <div class="back-image" :style="{ backgroundImage: `url('/img/main/bcn-main-header-1.jpg')` }"></div>
      <div class="content">
        <div class="container">
          <span class="color-primary">B</span>roadband<br>
          <span class="color-primary">C</span>onvergence<br>
          <span class="color-primary">N</span>etwork<br>
          <span class="color-primary">L</span>aboratory
        </div>
      </div>
    </div>

    <section class="container">
      <h3>NEWS</h3>
      <div>
        <ul>
          <li>이미지1</li>
          <li>이미지2</li>
          <li>이미지3</li>
          <li>이미지4</li>
        </ul>
      </div>
    </section>

    <section class="container">
      <h3>NEWS</h3>
      <div>
        <ul>
          <li>이미지1</li>
          <li>이미지2</li>
          <li>이미지3</li>
          <li>이미지4</li>
        </ul>
      </div>
    </section>

    <section class="container">
      <h3>NEWS</h3>
      <div>
        <ul>
          <li>이미지1</li>
          <li>이미지2</li>
          <li>이미지3</li>
          <li>이미지4</li>
        </ul>
      </div>
    </section>
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
