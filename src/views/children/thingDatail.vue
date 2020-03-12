<template>
  <div class="thing-content">
    <!-- <div class="thing-content-list">
      <ul class="font-songti">
        <li
          v-for="(item,index) in thing"
          :key="index"
          v-bind:class="{active:index == count}"
          @click="changeData(index,item.imgs)"
        >{{ item.title }}</li>
      </ul>
    </div>-->
    <div class>
      <div class="thing-content-img-warp">
        <div class="gallery-thumbs gallery-thumbs-0">
          <img :src="mainPicture" alt />
        </div>
        <div class="swiper-container gallery-top gallery-top-0">
          <div class="swiper-wrapper">
            <span
              class="swiper-slide"
              v-for="(el,i) in imgs"
              :key="i"
              @mousemove="mainPicture=el.url"
            >
              <img :src="el.url" alt />
            </span>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>

        <div class="jie-thing-info jie-container">
          <br />
          <br />

          <div class="p-warp">
            <div class="p">
              <div class="p-title">石種：</div>
              <div class="p-content">馬達加斯加原皮瑪瑙</div>
            </div>
            <div class="p">
              <div class="p-title">蕨座：</div>
              <div class="p-content">黑檀木+水紅綢皮色綢板</div>
            </div>
          </div>
          <div class="p-warp">
            <div class="p">
              <div class="p-title">石頭尺寸：</div>
              <div class="p-content">6.5cm*6.5cm*6.5cm</div>
            </div>
            <div class="p">
              <div class="p-title">蕨座尺寸：</div>
              <div class="p-content">23cm*6.5cm*3cm</div>
            </div>
          </div>
          <div class="p-warp">
            <p>电容感应開關</p>
            <div class="p">
              <div class="p-title">充电方式：</div>
              <div class="p-content">可用USB通用接口直接充電</div>
            </div>
            <p>一次充电時間需3h,續航時間至少24h</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../../components/Footer";
import Swiper from "swiper/dist/js/swiper";
import { mapState } from "vuex";
export default {
  name: "thingdatail",
  components: { foot },
  props: ["id"],
  computed: mapState(["thing"]),
  data() {
    return {
      cate: ["案头山子", "石光", "水盘置景"],
      count: 0,
      imgs: null,
      mainPicture: null
    };
  },
  watch: {
    id(newinfo, oldinfo) {
      this.imgs = this.thing[this.id].imgs;
      this.mainPicture = this.imgs[this.id].url;
      this.onloadSwiper();
    }
  },
  mounted() {
    this.imgs = this.thing[this.id].imgs;
    this.mainPicture = this.imgs[this.id].url;
    var swipers = {};
    this.cate.forEach(el => {});
    const self = this;
    this.$nextTick(function() {
      this.onloadSwiper();
    });
  },
  methods: {
    onloadSwiper() {
      const galleryThumbs0 = new Swiper(".gallery-top-0", {
        // loop: true,
        direction: "horizontal",
        autoplay: false,
        // centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: 10,
        freeMode: true,
        autoHeight: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
          draggable: false,
          snapOnRelease: true,
          mousewheel: true
        }
      });
    },
    changeData(num, item) {
      this.count = num;
      this.imgs = item;
      this.mainPicture = item[0].url;
      this.onloadSwiper();
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  .swiper-scrollbar {
    background-color: #ffffff;
  }
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  width: 100%;
  height: 100px;
  .swiper-slide {
    padding: 4px;
    overflow: hidden;
    position: relative;
    img {
      height: 100%;
      width: auto !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(2);
    }
  }
}
.gallery-thumbs {
  height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 0 0 20px 0;
  position: relative;
  text-align: center;
  img {
    height: 100%;
    width: auto !important;
  }
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.thing-content {
  position: relative;
  .thing-content-list {
    position: absolute;
    width: calc((100% - 1190px) / 2);
    li {
      width: 20px;
      margin: 0 auto;
      line-height: 24px;
      font-size: 20px;
      border-bottom: 1px solid #ffffff;
      padding: 1rem 0;
      color: #ffffff66;
      &.active {
        color: #fff;
      }
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .thing-content-img-warp {
    font-size: 14px;
    width: 100%;
    color: #737373;
    .p-warp {
      margin: 1.5rem 0;
      .p {
        margin: 0.5rem 0;
        display: flex;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>