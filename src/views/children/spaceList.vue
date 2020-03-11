<template>
  <div class="space-datail">
    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper font-songti">
        <div class="swiper-slide back">
          <router-link to="/space">
            <div></div>
          </router-link>
        </div>
        <div class="swiper-slide swiper-slide-prev">
          <ul>
            <li>
              <router-link to="/spacedatail">囊幽</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">雪隐</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">杖菊</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">品梵</router-link>
            </li>
          </ul>
        </div>
        <div class="swiper-slide swiper-slide-active">
          <ul>
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
        </div>
        <div class="swiper-slide swiper-slide-next">
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
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li>
              <router-link to="/spacedatail">庖屋</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">酿桃</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">漱句</router-link>
            </li>
            <li>
              <router-link to="/spacedatail">醒石</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper";

export default {
  name: "spacedatail",
  mounted() {
    const self = this;

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      initialSlide: 2,
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
  width: 100%;
  background-image: url("../../assets/image/space/07.jpg");
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  .swiper-container {
    height: 100%;
    color: #ffffff;
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
      &.back {
        div {
          width: 100%;
          height: 100%;
          &::after {
            content: "←";
            font-weight: 100;
            font-size: 64px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            text-align: center;
          }
        }
      }
      position: relative;
      border-right: 1px solid #ffffff88;
      ul {
        position: absolute;
        padding-top: 4rem;
        width: 100%;
        text-align: center;
        li {
          margin: 0.7916666rem 0;
        }
      }
    }
  }
}
</style>