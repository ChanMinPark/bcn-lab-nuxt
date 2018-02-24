<template>
  <div id="news-detail" class="container">
    <h1 class="page-title">Board - News</h1>
    
    <section class="news-detail-section">
      <h2 class="news-title">[새소식] 홈페이지가 리뉴얼 되었습니다.</h2>
      <div class="news-date">2018.03.01</div>
      
      <hr>
      
      <div v-html="'<p>안녕하세요.<br>홈페이지가 리뉴얼 되었습니다.<br>얏호~ :)<p>'"></div>
      
      <hr>
      
      <div class="text-right">
        <nuxt-link class="btn btn-primary" :to="{ name: 'board-news' }">목록보기</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  
</script>

<style lang="less" src="./detail.less" scoped></style>