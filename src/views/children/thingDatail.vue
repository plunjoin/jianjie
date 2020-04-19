<template>
  <div class="thing-content">
    <div class>
      <div class="thing-content-img-warp">
        <div class="swiper-container thing-img">
          <div class="swiper-wrapper">
            <span class="swiper-slide imgs" v-for="(el,i) in imgs" :key="i">
              <img :src="el.url" alt />
            </span>
          </div>
          <div class="swiper-btn">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <div class="swiper-slide-index">
          <p align="right">{{ realIndex+1 }} / {{ imgs?imgs.length:0 }}</p>
        </div>
        <div class="jie-thing-info jie-container" v-html="$t('thing.content')"></div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import $ from "jquery";
import foot from "../../components/Footer";
import Swiper from "swiper/dist/js/swiper";
import { mapState } from "vuex";
export default {
  name: "thingdatail",
  components: { foot },
  computed: mapState(["thing"]),
  data() {
    return {
      id: null,
      count: 0,
      imgs: null,
      realIndex: 0
    };
  },
  watch: {
    id(newinfo, oldinfo) {
      this.realIndex = 0;
      this.imgs = this.thing[this.id].imgs;
      this.onloadSwiper();
    }
  },
  mounted() {
    this.id = window.location.href.split("?")[1];
    this.realIndex = 0;
    this.imgs = this.thing[this.id].imgs;
    var swipers = {};
    const self = this;
    this.$nextTick(function() {
      this.onloadSwiper();
    });
  },
  methods: {
    onloadSwiper() {
      var _this = this;
      const galleryThumbs0 = new Swiper(".thing-img", {
        // loop: true,
        direction: "horizontal",
        // autoplay: false,
        // centeredSlides: true,
        // slideToClickedSlide: true,
        spaceBetween: 0,
        slidesPerView: 1,
        autoHeight: false,
        watchSlidesVisibility: true,
        centeredSlides: true,
        watchSlidesProgress: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange: function(swiper, activeIndex) {
            _this.realIndex = this.activeIndex;
          }
        }

        // scrollbar: {
        //   el: ".swiper-scrollbar",
        //   hide: true,
        //   draggable: false,
        //   snapOnRelease: true,
        //   mousewheel: true
        // }
      });
    },
    changeData(num, item) {
      this.count = num;
      this.imgs = item;
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
.swiper-slide-index {
  margin-top: -82px;
  padding-right: 82px;
  font-size: 22px;
  line-height: 42px;
  color: #fff;
}
.swiper-container {
  width: 100%;
  height: calc(100vh);
  margin-left: auto;
  margin-right: auto;
  // padding: 82px;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      // padding: 82px;

      img {
        height: calc(50% - 82px);
        width: auto !important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(2);
      }
    }
  }
}
.swiper-btn {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  display: flex;
  z-index: 1;
  & > div {
    width: 50%;
    height: 100%;
    outline: none;
    opacity: 0.5;
    background: none;
  }
  .swiper-button-prev {
    cursor: url("../../assets/icon/prev.png"), auto;
  }
  .swiper-button-next {
    cursor: url("../../assets/icon/next.png"), auto;
  }
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