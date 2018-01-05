<template>
  <nav id="navigation">
    <div class="navbar navbar-fixed-top" :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <div class="nav-logo">
          BCNL
        </div>
        <div class="nav-list clearfix">
          <ul class="list-unstyled">
            <li><nuxt-link :to="{ name: 'index' }">HOME</nuxt-link></li>
            <li>
              <nuxt-link :to="{ name: 'member-professor' }">MEMBER</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li><nuxt-link :to="{ name: 'member-professor' }">Professor</nuxt-link></li>
                  <li><nuxt-link :to="{ name: 'member-researcher' }">Researcher</nuxt-link></li>
                  <li><nuxt-link :to="{ name: 'member-alumni' }">Alumni</nuxt-link></li>
                </ul>
              </div>
            </li>
            <li><nuxt-link :to="{ name: 'projects' }">PROJECTS</nuxt-link></li>
            <li>
              <nuxt-link :to="{ name: 'publications-journal' }">PUBLICATIONS</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li><nuxt-link :to="{ name: 'publications-journal' }">Journal</nuxt-link></li>
                  <li><nuxt-link :to="{ name: 'publications-conference' }">Conference</nuxt-link></li>
                  <li><nuxt-link :to="{ name: 'publications-patents' }">Patents</nuxt-link></li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link :to="{ name: 'board-news' }">BOARD</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li><nuxt-link :to="{ name: 'board-news' }">News</nuxt-link></li>
                  <li style="line-height: 20px;"><nuxt-link :to="{ name: 'board-trend' }">Trend of<br>technology</nuxt-link></li>
                  <li><nuxt-link :to="{ name: 'board-assignment' }">Assignment</nuxt-link></li>
                </ul>
              </div>
            </li>
            <li><nuxt-link :to="{ name: 'contact' }">CONTACT</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="sub-menu-background nav-sub-open" :class="{ 'scrolled': isScrolled }"></div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        isScrolled: false
      }
    },
    beforeMount () {
      let scrollTop = 0
      window.addEventListener('scroll', (e) => {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop >= 100 && !this.isScrolled) {
          this.isScrolled = !this.isScrolled
        } else if (scrollTop < 100 && this.isScrolled) {
          this.isScrolled = !this.isScrolled
        }
      })
    }
  }
</script>

<style lang="less" src="./navigation.less"></style>