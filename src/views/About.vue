<template>
  <div class="about">
    <div class="bg"></div>
    <div class="jie-tab-warp jie-container">
      <div :class="'jie-tab-content '+$i18n.locale" v-if="work">
        <ul>
          <li v-for="(item,index) in recruitment" :key="index" v-bind:class="{active:count==index}">
            <p @click="active(index)">{{ item.title }}</p>
            <div class="content" v-html="item.content"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "about",
  computed: mapState(["isTitle"]),
  data() {
    return {
      count: -1,
      work: true,
      recruitment: this.$t("about.recruitment")
    };
  },
  mounted() {
    console.log(this.test);
  },
  methods: {
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
  padding: 11rem 1rem 0 1rem;
  background-color: #00000099;
  .jie-tab-content {
    text-transform: capitalize;
    letter-spacing: 2px;
    line-height: 25px;
    font-weight: 100;
    text-align: justify;
    font-size: 0.8rem;
    h3 {
      // font-weight: 100;
      margin: 3rem 0;
      opacity: 0.9;
    }
    &.en {
      text-align: left;
    }
  }
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
    background-position: center;
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
      font-weight: 100;
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
          font-size: 0.7rem;
          padding: 0.6666rem 0 0 0;
          opacity: 0.7;
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

@media screen and (max-width: 640px) {
  .about {
    .jie-tab-content {
      padding: 0 30px;
    }
  }
}
</style>