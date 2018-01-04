<template>
  <nav id="navigation">
    <div class="navbar navbar-fixed-top" :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <div class="nav-logo">
          BCNL
        </div>
        <div class="nav-list clearfix">
          <ul class="list-unstyled">
            <li><nuxt-link to="/1">HOME</nuxt-link></li>
            <li>
              <nuxt-link to="/1">MEMBER</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li>Professor</li>
                  <li>Researcher</li>
                  <li>Alumni</li>
                </ul>
              </div>
            </li>
            <li><nuxt-link to="/1">PROJECTS</nuxt-link></li>
            <li>
              <nuxt-link to="/1">PUBLICATIONS</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li>Journal</li>
                  <li>Conference</li>
                  <li>Patents</li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link to="/1">BOARD</nuxt-link>
              <div class="nav-sub-1step nav-sub-open" :class="{ 'scrolled': isScrolled }">
                <ul class="list-unstyled">
                  <li>News</li>
                  <li style="line-height: 20px;">Trend of<br>technology</li>
                  <li>Assignment</li>
                </ul>
              </div>
            </li>
            <li><nuxt-link to="/">CONTACT</nuxt-link></li>
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