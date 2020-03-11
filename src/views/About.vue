<template>
  <div class="about">
    <div class="bg"></div>
    <div class="jie-tab-warp jie-container">
      <div class="jie-tab-btn font-songti">
        <div class="jie-tab-btn-item" @click="tabTaggle(1)" v-bind:class="{active:contact}">
          <span>联系我们</span>
        </div>
        <div class="jie-tab-btn-item" @click="tabTaggle(2)" v-bind:class="{active:work}">
          <span>工作机会</span>
        </div>
        <div class="jie-tab-btn-item" @click="tabTaggle(3)" v-bind:class="{active:clause}">
          <span>法律条文</span>
        </div>
      </div>
      <div class="jie-tab-content" v-if="contact">
        <span>
          【見芥】成立於2013年，坐落離西湖最近的深山中。
          <br />“見”即“看見、關註，探索至洞察”，“芥”即“芥子”，有佛語“須彌藏芥子，芥子納須彌”。「見芥」所從事的，是專註於壹個窄的向度（芥子）裏將其塑造完滿（須彌），關註東方傳統在當下語境的各種可能性，由此延伸出造園，空間，家具，器物等壹系列設計營造活動。
        </span>
        <hr />
        <p>杭州西湖區青芝塢石虎山路18号 七樹文創园</p>
        <hr />
        <p>商務洽談 / Mr.Lv 13858970076</p>
        <hr />
        <div class="share"></div>
      </div>
      <div class="jie-tab-content" v-if="work">
        <ul>
          <li v-for="(item,index) in recruitment" :key="index" v-bind:class="{active:count==index}">
            <p @click="active(index)">{{ item.title }}</p>
            <div class="content" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <div class="jie-tab-content" v-if="clause">法律条文</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      count: -1,
      contact: true,
      work: false,
      clause: false,
      recruitment: [
        {
          title: "景观设计总监",
          content: `薪资待遇：2-3.5万/月
              <br />工作内容：负责高端酒店、会所、住宅的室内外景观设计项目，主持设计方案的规划与营造落地
              <br />能力要求：
              <br />1、本科及以上学历，具有良好的艺术审美素养，有自己独立的艺术设计思想
              <br />2、了解西方现代主义与东方古典美学
              <br />3、对建筑空间有个人见解，对日本庭院艺术有一定涉猎。
              <br />`
        },
        {
          title: "室内设计总监",
          content: `薪资待遇：2万/月
              <br />1000-3000平会所项目为主，负责高端会所、餐厅等的室内项目方案设计与落地
              <br />Axel Vervoordt ，杉本博司，Rick Owen，Vinzenzo de Cordis，Carlo Scarpa 等。
              <br />是他們，又不是他們。
              <br />東方性，又同時具備當代性。
              <br />
              <br />見芥，著眼於探索屬於見芥獨立氣質的空間語境，切入點：氛圍，材料，傢具，陳設，生命，營造 希望具備一定的建築美學修養，西方現代主義涵養，對東方美學有獨特認知的人，加入。
              <br />
              <br />涵蓋：私人會所，高端餐廳，東方藝術空間等
              <br />詳細瞭解，可以看一下「見芥」的微信公眾號
              <br />東方傳統的現代性，在中國是缺失的，夾生的，探索才剛剛開始。`
        }
      ]
    };
  },
  mounted() {},
  methods: {
    tabTaggle(value) {
      switch (value) {
        case 1:
          this.contact = true;
          this.work = this.clause = false;
          break;
        case 2:
          this.work = true;
          this.contact = this.clause = false;
          break;
        case 3:
          this.clause = true;
          this.contact = this.work = false;
          break;
      }
    },
    active(index) {
      if (index == this.count) {
        this.count = -1;
        return false;
      }
      this.count = index;
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  height: 100%;
  min-height: 100vh;
  padding: 11.4583333rem 0 0 0;
  background-color: #00000099;
  .bg {
    top: 0;
    left: 0;
    z-index: -1;
    position: fixed;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    background-image: url("../assets/image/about/IMG_7906_BG.jpg");
    background-size: cover;
  }
  .jie-tab-warp {
    display: flex;
    .jie-tab-btn {
      width: 9.583333rem;
      font-size: 0.75rem;
      .jie-tab-btn-item {
        margin: 0 0 3.75rem 0;
        span {
          cursor: pointer;
          padding: 0 0 0.33333rem 0;
          border-bottom: 1px solid #ffffff00;
        }
        &.active {
          span {
            border-bottom-color: #ffffff;
          }
        }
      }
    }
    .jie-tab-content {
      color: #fefefe;
      // width: 46.333333rem;
      flex: 1;
      font-size: 0.6666666rem;
      font-weight: 400;
      line-height: 1.2083333rem;
      li {
        padding: 0.6666rem 0 0.66666rem 0;
        border-bottom: 1px solid #ffffff;
        p {
          position: relative;
          cursor: pointer;
          &::before {
            content: "";
            position: absolute;
            right: 15px;
            top: 47%;
            box-sizing: border-box;
            width: 10px;
            height: 10px;
            border-right: 2px solid #b3b3b3;
            border-bottom: 2px solid #b3b3b3;
            transition: transform 0.2s linear;
            transform: rotate3d(0, 0, 1, -45deg);
          }
        }
        &.active {
          p::before {
            content: "";
            position: absolute;
            right: 15px;
            top: 47%;
            box-sizing: border-box;
            width: 10px;
            height: 10px;
            border-right: 2px solid #b3b3b3;
            border-bottom: 2px solid #b3b3b3;
            transition: transform 0.2s linear;
            transform: rotate3d(0, 0, 1, 45deg);
          }
          .content {
            display: block;
          }
        }
        .content {
          display: none;
        }
      }
      hr {
        height: 1px;
        margin: 0;
        background-color: #ffffff;
      }
      > p {
        margin: 1rem 0 1rem 0;
      }
      span {
        display: inline-block;
        margin: 0 0 2rem 0;
      }
    }
  }
}
</style>