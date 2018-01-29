<template>
  <div id="publications-journal" class="container">
    <h1 class="page-title">Publications - Journal</h1>
    
    <section>
      <h2>Refereed International Journal papers (SCI/SCIE):</h2>
    
      <div class="publication-journal-list">
        <ol>
          <li v-for="(item, index) in journalList.sci" :key="index">
            <div>
              {{ item }}
            </div>
          </li>
        </ol>
      </div>
    </section>
    
    <section class="not-first-section">
      <h2>Refereed International Journal papers (Non-SCI/SCIE):</h2>
    
      <div class="publication-journal-list">
        <ol>
          <li v-for="(item, index) in journalList.nonSci" :key="index">
            <div>
              {{ item }}
            </div>
          </li>
        </ol>
      </div>
    </section>
    
    <section class="not-first-section">
      <h2>Refereed Domestic Journal papers:</h2>
    
      <div class="publication-journal-list">
        <ol>
          <li v-for="(item, index) in journalList.domestic" :key="index">
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
      let { data } = await axios.get('/api/publication?type=journal')

      return {
        journalList: data
      }
    }
  }
</script>

<style lang="less" src="./journal.less" scoped></style>