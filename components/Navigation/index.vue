<template>
  <nav id="navigation">
    <div class="navbar navbar-fixed-top" :class="{ 'scrolled': isScrolled }">
      네비게이션
    </div>
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

<style lang="less" scoped>
  #navigation {
    .navbar {
      background-color: #fff;
      box-shadow: 0px 1px 5px #ccc;
    }
  }
</style>