<template>
  <div id="projects" class="container">
    <h1 class="page-title">Projects</h1>

    <section>
      <h2>On-Going Projects:</h2>
    
      <div class="ongoing-project-list">
        <ul class="list-unstyled">
          <li v-for="(item, index) in onGoingList" :key="index">
            <div class="period">
              {{ item.period }}
            </div>
            <div class="project">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </section>
    
    <br>
    
    <section>
      <h2>Completed Projects:</h2>
    
      <div class="completed-project-list">
        <ul class="list-unstyled">
          <li v-for="(item, index) in completedList" :key="index">
            <div class="period">
              {{ item.period }}
            </div>
            <div class="project">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData () {
      let { data: projectsData } = await axios.get('/api/project')

      return {
        onGoingList: projectsData.onGoing,
        completedList: projectsData.completed
      }
    }
  }
</script>

<style lang="less" src="./projects.less" scoped></style>