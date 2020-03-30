<template>
  <div class="make">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="slide">
      <div class="swiper-container">
        <div :class="'swiper-wrapper font-songti '+$i18n.locale">
          <!-- It is important to set "left" style prop on every slide -->
          <div class="swiper-slide" on-index="1">
            <img src="@/assets/image/01.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <router-link to="/makechild">
                <span class="jie-title-letter-spacing">{{ $t("make.msg001") }}</span>
                <p>{{ $t("make.msg009") }}</p>
              </router-link>
            </div>
          </div>
          <div class="swiper-slide" on-index="2">
            <img src="@/assets/image/02.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg002") }}</span>
              <p>{{ $t("make.msg010") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="3">
            <img src="@/assets/image/03.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg003") }}</span>
              <p>{{ $t("make.msg011") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="4">
            <img src="@/assets/image/04.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg004") }}</span>
              <p>{{ $t("make.msg012") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="5">
            <img src="@/assets/image/05.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg005") }}</span>
              <p>{{ $t("make.msg013") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="6">
            <img src="@/assets/image/06.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg006") }}</span>
              <p>{{ $t("make.msg014") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="7">
            <img src="@/assets/image/07.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg007") }}</span>
              <p>{{ $t("make.msg015") }}</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="8">
            <img src="@/assets/image/08.jpg" alt />
            <div class="item-title" v-show="isTitle">
              <span class="jie-title-letter-spacing">{{ $t("make.msg008") }}</span>
              <p>{{ $t("make.msg013") }}</p>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper";
import { mapState } from "vuex";

export default {
  computed: mapState(["isTitle"]),
  data() {
    return {};
  },
  mounted() {
    const self = this;
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1.7,
      centeredSlides: true,
      spaceBetween: 50,
      autoplay: true,
      speed: 2000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });

    this.$nextTick(function() {
      document.querySelectorAll(".swiper-slide").forEach(el => {
        el.onclick = function(i) {
          swiper.slideTo(parseInt(el.getAttribute("on-index")), res => {
            console.log(res);
          });
        };
      });
    });
  }
};
</script>

<style lang="less" scoped>
* {
  transition: 1s;
}
.make {
  overflow: hidden;
  height: 100vh;
  position: relative;
  .slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.swiper-container {
  .swiper-button-next {
    position: absolute;
    height: 100%;
    top: 0;
    width: 12%;
    right: 0;
    background: transparent;
  }
  .swiper-button-prev {
    background: transparent;
    position: absolute;
    height: 100%;
    top: 0;
    width: 12%;
    left: 0;
  }
}
.slide {
}

.swiper-slide {
  text-align: center;
  transition: 1s;
  position: relative;
  transform: scale(0.7);
  img {
    width: 100%;
  }
  .item-title {
    top: 50%;
    right: 20%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    position: absolute;
    transition: 2s;
    transform: translateY(-50%);
    text-align: left;
    span {
      display: inline-block;
      border-bottom: 1px solid #ffffff88;
      padding-bottom: 0.5rem;
    }
  }
}
//swriper自带的类名（选中时的样式）
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.2);
  .item-title {
    transition: 2s;
    right: -2%;
    // transform: translateX(-50%);
  }
}

@media screen and (max-width: 640px) {
  //swriper自带的类名（选中时的样式）
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1.5);
    .item-title {
      transition: 2s;
      right: -2%;
      // transform: translateX(-50%);
    }
  }
  .swiper-slide .item-title {
    font-size: 1rem;
  }
}
</style>