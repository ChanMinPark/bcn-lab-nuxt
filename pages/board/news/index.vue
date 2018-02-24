<template>
  <div id="board-news" class="container">
    <h1 class="page-title">Board - News</h1>
    
    <section>
      <ul class="row list-unstyled news-list">
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
        <li class="col-sm-4">
          <nuxt-link :to="{ name: 'board-news-nid', params: { nid: 1 }}">
            <div class="news-card">
              <!-- 썸네일 이미지 -->
              <div class="news-thumbnail" :style="{ backgroundImage: `url('/img/member/chanmin.JPG')` }"></div>
              <!-- 뉴스 타이틀 -->
              <div class="news-title">
                <h3>[새소식] 홈페이지가 리뉴얼 되었습니다.</h3>
              </div>
              <div class="news-date">2018.03.01</div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" src="./news.less" scoped></style>