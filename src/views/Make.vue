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
        <div class="swiper-wrapper">
          <!-- It is important to set "left" style prop on every slide -->
          <div class="swiper-slide" on-index="1">
            <img src="@/assets/image/01.jpg" alt />
            <div class="item-title font-songti">
              <router-link to="/makechild">
                <span>林泉高致</span>
                <p>Jasonwood club</p>
              </router-link>
            </div>
          </div>
          <div class="swiper-slide" on-index="2">
            <img src="@/assets/image/02.jpg" alt />
            <div class="item-title font-songti">
              <span>梅小姐花園</span>
              <p>明苑別墅317</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="3">
            <img src="@/assets/image/03.jpg" alt />
            <div class="item-title font-songti">
              <span>莫奈花園</span>
              <p>思南公館69號</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="4">
            <img src="@/assets/image/04.jpg" alt />
            <div class="item-title font-songti">
              <span>濠濮間想</span>
              <p>思南公館67號院</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="5">
            <img src="@/assets/image/05.jpg" alt />
            <div class="item-title font-songti">
              <span>西湖山莊</span>
              <p>杭州</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="6">
            <img src="@/assets/image/06.jpg" alt />
            <div class="item-title font-songti">
              <span>虞宅</span>
              <p>上海</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="7">
            <img src="@/assets/image/07.jpg" alt />
            <div class="item-title font-songti">
              <span>西湖私宅</span>
              <p>遠南山</p>
            </div>
          </div>
          <div class="swiper-slide" on-index="8">
            <img src="@/assets/image/08.jpg" alt />
            <div class="item-title font-songti">
              <span>AV庭院</span>
              <p>杭州</p>
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
export default {
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
</style>