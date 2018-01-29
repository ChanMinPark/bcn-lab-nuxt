<template>
  <div id="publications-conference" class="container">
    <h1 class="page-title">Publications - Conference</h1>
    
    <section>
      <h2>Refereed International Conferdence papers:</h2>
    
      <div class="publication-conference-list">
        <ol>
          <li v-for="(item, index) in conferenceList.international" :key="index">
            <div>
              {{ item }}
            </div>
          </li>
        </ol>
      </div>
    </section>
    
    <section class="not-first-section">
      <h2>Refereed Domestic Conference papers:</h2>
    
      <div class="publication-conference-list">
        <ol>
          <li v-for="(item, index) in conferenceList.domestic" :key="index">
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
      let { data } = await axios.get('/api/publication?type=conference')

      return {
        conferenceList: data
      }
    }
  }
</script>

<style lang="less" src="./conference.less" scoped></style>