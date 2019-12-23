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
          <div
            :class="{ opened: flag.isMounted }"
            class="name-box__border border-top"
          ></div>
          <div
            :class="{ opened: flag.isMounted }"
            class="name-box__border border-left"
          ></div>
          <div
            :class="{ opened: flag.isMounted }"
            class="name-box__border border-bottom"
          ></div>
          <div
            :class="{ opened: flag.isMounted }"
            class="name-box__border border-right"
          ></div>
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
    <section class="section-major sec-main-topic">
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

    <!-- 연구 분야 -->
    <section class="section-major sec-research-area">
      <div class="container">
        <h1 class="text-center section-title">RESEARCH AREAS</h1>
        <h2 class="text-center section-subtitle">
          We resolve Five Ws and One H in Wirless/Wired Networks
        </h2>
        <ul class="list-unstyled row research-list">
          <li
            v-for="(item, index) in researchAreaList"
            :key="index"
            class="col-12 col-md-6"
          >
            <div
              :style="{
                backgroundImage: `url('https://source.unsplash.com/random/700x30${index}')`
              }"
              class="shadow research-box"
            >
              <div class="background-layer"></div>
              <div class="box__title">
                <h3 class="text-center">{{ item.title }}</h3>
              </div>
              <div class="box__subs">
                <ul class="list-unstyled text-center">
                  <li v-for="(item2, index2) in item.subs" :key="index2">
                    {{ item2 }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
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
      ],
      researchAreaList: [
        {
          title: 'Information Centric Networking',
          subs: [
            'Mobile / Wirless ICN',
            'Namespace Desinging',
            'Routing & Forwarding',
            'ICN Security'
          ]
        },
        {
          title: 'Edge Computing',
          subs: [
            'Information Centric Edge Computing',
            'Support of time-sensitive IoT/5G applications',
            'Mobile information-centric IoT /5G services',
            'Real-time intelligence in IoT/5G services',
            'AR/VR support'
          ]
        },
        {
          title: 'Software Defined Networking',
          subs: [
            'Information Centric Software Dedined Networking',
            'Applications of SDN in wireless and cellular',
            'Application of SDN to network management, performance and monitoring',
            'Virtualization support in software-defined networks',
            'Hybrid SDN approaches'
          ]
        },
        {
          title: 'Internet of Things',
          subs: [
            'Wirless Sensor Networking',
            'Cloud computing',
            'Ubiquitous computing',
            'Pervasive computing',
            'Artificial intelligence'
          ]
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
