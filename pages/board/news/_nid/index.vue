<template>
  <div id="news-detail" class="container">
    <h1 class="page-title">Board - News</h1>
    
    <section class="news-detail-section">
      <h2 class="news-title">[새소식] 홈페이지가 리뉴얼 되었습니다.</h2>
      <div class="news-date">2018.03.01</div>
      
      <hr>
      
      <!--<div v-html="'<p>안녕하세요.<br>홈페이지가 리뉴얼 되었습니다.<br>얏호~ :)<p>'"></div>-->
      <div v-html="content"></div>
      
      <hr>
      
      <div class="text-right">
        <nuxt-link class="btn btn-primary" :to="{ name: 'board-news' }">목록보기</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: `<p style="text-align: center;"><strong><span style="font-family: Impact, Charcoal, sans-serif; font-size: 18px;"><span style="color: rgb(61, 142, 185);">광대역 융합망 연구실</span>의 홈페이지가 리뉴얼 되었습니다.</span></strong></p>

                  <p style="text-align: center;">앞으로 우리 연구실의 활동과 소식들을 홈페이지를 통해서 알리도록 하겠습니다.</p>
                  
                  <p style="text-align: center;">
                  <br>
                  </p>
                  
                  <p style="text-align: center;">많은 관심 부탁드립니다.</p>
                  
                  <p style="text-align: center;">
                  <br>
                  </p>
                  
                  <p style="text-align: center;"><img src="http://www.dentalarirang.com/news/photo/201708/18294_24504_3851.jpg" style="width: 600px;max-width: 100%;"></p>
                  `
      }
    }
  }
</script>

<style lang="less" src="./detail.less" scoped></style>