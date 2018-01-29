<template>
  <div id="publications-patents" class="container">
    <h1 class="page-title">Publications - Patents</h1>
    
    <section>
      <div class="publication-patents-list">
        <ol>
          <li v-for="(item, index) in patentsList" :key="index">
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
      let { data } = await axios.get('/api/publication?type=patents')

      return {
        patentsList: data
      }
    }
  }
</script>

<style lang="less" src="./patents.less" scoped></style>