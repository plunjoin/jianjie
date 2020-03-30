<template>
  <div class="space-datail">
    <br />
    <br />
    <br />
    <div class="datail-content">
      <div class="list font-songti">
        <ul>
          <li v-for="(item,index) in space" :key="index" v-bind:class="{active:index==action}">
            <span @click="changeImg(item.imgs,index)">{{ item.title }}</span>
          </li>
        </ul>
      </div>
      <div class="content-html-warp jie-container">
        <div v-for="(el,i) in warpImg" :key="i">
          <video v-if="el.type==1" :src="el.url" ></video>
          <img v-else :src="el.url" alt />
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import { mapState } from "vuex";
import foot from "../../components/Footer";

export default {
  name: "space",
  components: { foot },
  computed: mapState(["space"]),
  data() {
    return { warpImg: [], action: 0 };
  },
  mounted() {
    this.warpImg = this.space[0].imgs;
    console.log(this.space);
  },
  methods: {
    changeImg(item, i) {
      this.action = i;
      this.warpImg = item;
    }
  }
};
</script>

<style lang="less" scoped>
.datail-content {
  position: relative;
  .content-html-warp {
    img {
      width: 100%;
    }
  }
  .list {
    position: absolute;
    width: calc((100% - 1190px) / 2);
    font-size: 20px;
    li {
      margin: 1.2rem 0;
      text-align: center;
      color: #ffffff66;
      &.active {
        color: #fff;
      }
      &:hover {
        cursor: pointer;
        color: #f88;
      }
    }
  }
}
</style>