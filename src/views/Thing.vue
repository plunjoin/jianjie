<template>
  <div class="thing">
    <div class="thing-warp">
      <div class="thing-bg">
        <img v-if="count==0" src="../assets/image/thing/bg/17.jpg" width="100%" alt />
        <img v-if="count==1" src="../assets/image/thing/bg/41.jpg" width="100%" alt />
        <img v-if="count==2" src="../assets/image/thing/bg/5.jpg" width="100%" alt />
        <img v-if="count==3" src="../assets/image/thing/bg/1.jpg" width="100%" />
      </div>
      <div class="list font-songti">
        <ul v-show="isTitle">
          <li v-for="(item,index) in cate" :key="index" v-bind:class="{active:count==index}">
            <p @mousemove="changeBG(index)">
              <router-link to="/thingdatail">{{ item.title }}</router-link>
            </p>
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
  computed: mapState(["isTitle"]),
  data() {
    return {
      cate: [
        {
          title: "石玩"
        },
        {
          title: "器物"
        },
        {
          title: "家具"
        },
        {
          title: "首饰"
        }
      ],
      count: 0
    };
  },
  mounted() {},
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
      width: 100%;
      filter: grayscale(100%);
      filter: gray;
      opacity: 0.5;
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
        p {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>