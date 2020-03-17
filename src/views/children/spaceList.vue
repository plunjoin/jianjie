<template>
  <div class="space-datail">
    <!-- swiper-container -->
    <div class="space-list-warp font-songti" ref="wrapper">
      <div class="list-warp" ref="cont" @click="sun = 5,suns = 3">
        <ul :style="publicWidth">
          <li v-for="(el ,i) in space" :key="i" @click="changeimg(el.imgs)">{{ el.title }}</li>
          <li>
            <div class="back">
              <router-link to="/space">
                <div></div>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="imgs-group" ref="iGroup">
          <div
            class="img-box"
            :style="publicWidth"
            v-for="(el ,i ) in imgsbox"
            :key="i"
            @click="expand($event)"
          >
            <img :src="el.url" draggable="false" />
          </div>
        </div>
      </div>
      <!-- <ul>
            <li>
              <router-link to="/spacedatail">访庄</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">孤往</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">缥香</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">谱泉</router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/spacedatail">问月</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">踏古</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">味象</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">其他</router-link>
            </li>
      </ul>-->
    </div>
    <!-- Add Pagination -->
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper";
import BScroll from "better-scroll";
import $ from "jquery";
import { mapState } from "vuex";

export default {
  name: "spacedatail",
  computed: {
    ...mapState(["space"]),
    publicWidth() {
      return {
        width: `${this.width}px`
      };
    }
  },
  data() {
    return {
      width: window.innerWidth / 4,
      sun: 1,
      suns: 0,
      imgsbox: null,
      scroll: null
    };
  },
  methods: {
    changeimg(item) {
      this.imgsbox = item;
    },
    expand(e) {
      let a = this.sibling(e.currentTarget);

      a.forEach(el => {
        $(el).css({
          width: this.width,
          transition: "1s"
        });
      });
      // e.target.style.width = "auto";
      e.currentTarget.style.width = "";
      e.currentTarget.style.transition = "1s";
    },
    verScroll() {
      let width = this.space.length * this.width; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度

      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        var warp = null;
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    },
    sibling(elm) {
      var a = [];
      var p = elm.parentNode.children;
      for (var i = 0, pl = p.length; i < pl; i++) {
        if (p[i] !== elm) a.push(p[i]);
      }
      return a;
    }
  },
  mounted() {
    this.imgsbox = this.space[0].imgs;
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);
          this.verScroll();
        }
      }, 0);
    });
    const self = this;
    console.log(this.space);
    var i = 0;
    while (i++) {
      if (i >= this.space.length) {
        if (i % 4 == 0) {
          console.log(i);
        }
        break;
      }
    }
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0,
      grabCursor: true
    });

    // const swiper = new Swiper(".swiper-container", {
    //   // ...
    //   loop: true,
    //   slidesPerView: 1.7,
    //   centeredSlides: true,
    //   spaceBetween: 50
    // });
  }
};
</script>

<style lang="less" scoped>
.space-datail {
  background-image: url("../../assets/image/space/07.jpg");
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  .space-list-warp {
    overflow-x: auto;
    color: #ffffff;
    height: 100%;
    .list-warp {
      height: 100%;
      border-right: 1px solid #ffffff88;
      position: relative;
      ul {
        width: 25%;
        // position: absolute;
        padding-top: 4rem;
        text-align: center;
        float: left;
        li {
          margin: 0.7916666rem 0;
          .back {
            div {
              width: 100%;
              height: 100%;
              &::after {
                content: "←";
                font-weight: 100;
                font-size: 64px;
                top: 50%;
                width: 100%;
                text-align: center;
              }
            }
          }
        }
      }
      .imgs-group {
        // position: absolute;
        width: auto;
        overflow: hidden;
        height: 100%;
        .img-box {
          float: left;
          height: 100%;
          width: 25%;
          position: relative;
          overflow: hidden;
          background: #000000;
          img {
            width: auto;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
  .swiper-container {
    .swiper-slide {
      &:nth-of-type(2n-1) {
        ul {
          bottom: 2rem;
        }
      }
      &:nth-of-type(3n) {
        transform: translateY(-50%);
        top: 50%;
      }
    }
  }
}
</style>