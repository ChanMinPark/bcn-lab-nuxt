<template>
  <div id="member-alumni" class="container">
    <h1 class="page-title">Alumni</h1>

    <div class="alumni-list">
      <ul class="row list-unstyled">
        <li class="col-sm-3" v-for="(item, index) in alumniList" :key="index">
          <div class="member-card">
            <!-- 프로필 이미지 -->
            <div class="profile-image" :style="{ backgroundImage: `url(${item.image})` }">
            </div>
            <!-- 정보 -->
            <div class="info">
              <h4 class="name">{{ item.name }}</h4>
              <div class="position">{{ item.position }}</div>
              <div>Now: {{ item.now }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData () {
      let { data } = await axios.get('/api/alumni')

      return {
        alumniList: data
      }
    }
  }
</script>

<style lang="less" src="./alumni.less" scoped></style>