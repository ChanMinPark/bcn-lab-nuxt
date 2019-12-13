<template>
  <div id="page-index">
    <!-- 커버 섹션 -->
    <section class="sec-cover">
      <div class="d-flex h-100 position-relative">
        <div class="opacity-layer"></div>
        <div class="flex-grow-1 layer-1">
          <div
            :class="{ opened: flag.isMounted }"
            class="inner-panel w-100"
          ></div>
        </div>
        <div class="flex-grow-1 layer-2">
          <div
            :class="{ opened: flag.isMounted }"
            class="inner-panel w-100"
          ></div>
        </div>
      </div>
      <div class="upper-panel h-100">
        <div class="name-box">
          <div class="name-box__border border-top"></div>
          <div class="name-box__border border-left"></div>
          <div class="name-box__border border-bottom"></div>
          <div class="name-box__border border-right"></div>
          <div class="name-box__content">
            <div><span class="color-secondary">B</span>roadband</div>
            <div><span class="color-secondary">C</span>onvergence</div>
            <div><span class="color-secondary">N</span>etworks</div>
            <div>Laboratory</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 주요 연구 주제 섹션 -->
    <section class="sec-main-topic">
      <div class="container">
        <div class="row topic-list">
          <div
            v-for="(item, index) in mainTopicList"
            :key="index"
            class="col-12 col-sm-4 topic-item"
          >
            <div class="topic-box">
              <div class="topic-box__image">
                <img
                  :src="item.image"
                  :alt="`Main research topic - ${index + 1}`"
                />
              </div>
              <div class="topic-box__title">{{ item.title }}</div>
              <div class="topic-box__subtitle">{{ item.subTitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: {
        isMounted: false
      },
      mainTopicList: [
        {
          image: require('~/assets/res/icon/icon-wifi.svg'),
          title: 'Information Centric Networking',
          subTitle: 'Wireless/Mobile Named Data Networking'
        },
        {
          image: require('~/assets/res/icon/icon-server.svg'),
          title: 'Edge Computing',
          subTitle: 'Mobile Edge Computing'
        },
        {
          image: require('~/assets/res/icon/icon-database.svg'),
          title: 'Blockchain',
          subTitle: 'Decentralized Networks'
        }
      ]
    }
  },
  mounted() {
    this.flag.isMounted = true
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
