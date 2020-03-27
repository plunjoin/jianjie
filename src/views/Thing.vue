<template>
  <div class="thing">
    <div class="thing-warp">
      <div class="thing-bg">
        <img
          v-bind:class="{active:count==0}"
          src="../assets/image/thing/bg/17.jpg"
          width="100%"
          alt
        />
        <img
          v-bind:class="{active:count==1}"
          src="../assets/image/thing/bg/41.jpg"
          width="100%"
          alt
        />
        <img v-bind:class="{active:count==2}" src="../assets/image/thing/bg/5.jpg" width="100%" alt />
        <img v-bind:class="{active:count==3}" src="../assets/image/thing/bg/1.jpg" width="100%" />
      </div>
      <div :class="'list font-songti '+$i18n.locale">
        <ul v-show="isTitle">
          <li v-for="(item,index) in cate" :key="index" v-bind:class="{active:count==index}">
            <p class="jie-title-letter-spacing" @mousemove="changeBG(index)">
              <router-link to="/thingdatail/0">{{ item.title }}</router-link>
            </p>
            <div class="child">
              <div class="child-el" v-for="(e,i) in item.child" :key="i">
                <router-link :to="'/thingdatail/'+i">{{ e }}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
  name: "thing",
  computed: mapState(["isTitle", "thing"]),
  data() {
    const self = this;
    return {
      cate: this.$t("thing.cate"),
      count: 0
    };
  },
  mounted() {
    console.log(this.cate);
    console.log(this.thing);
  },
  methods: {
    changeBG(bg) {
      this.count = bg;
    }
  }
};
</script>

<style lang="less">
.thing {
  margin-top: 3.75rem;
}
.thing-warp {
  width: 100%;
  height: calc(100vh - 3.75rem);
  overflow: hidden;
  width: 100%;
  position: relative;
  .thing-bg {
    position: absolute;
    z-index: -1;
    background: #00000088;
    width: 100%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      transition: 1s;
      width: 100%;
      filter: grayscale(100%);
      filter: gray;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  .list {
    font-size: 2rem;
    position: absolute;
    left: 80%;
    height: 100%;
    ul {
      min-width: 200px;
      height: 100%;
      li {
        opacity: 0.5;
        height: 25%;
        position: relative;
        &.active {
          opacity: 1;
        }
        &:hover {
          .child {
            display: inline-block;
            opacity: 1;
          }
        }
        p {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
        }
        .child {
          // display: none;
          position: absolute;
          top: 70%;
          left: 0;
          font-size: 0.6666rem;
          transition: 1s;
          opacity: 0;
          .child-el {
            float: left;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>