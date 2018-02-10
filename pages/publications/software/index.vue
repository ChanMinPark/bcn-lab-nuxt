<template>
  <div id="publications-software" class="container">
    <h1 class="page-title">Publications - Software</h1>
    
    <section>
      <div class="publication-software-list">
        <ol>
          <li v-for="(item, index) in softwareList" :key="index">
            <div>
              {{ item }}
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  
  export default {
    async asyncData () {
      let { data: softwareData } = await axios.get('/api/publication?type=software')

      return {
        softwareList: softwareData
      }
    }
  }
</script>

<style lang="less" src="./software.less" scoped></style>