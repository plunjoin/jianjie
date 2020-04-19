<template>
  <div class="make">
    <div class="slide">
      <br />
      <br />
      <div class="swiper-container">
        <div :class="'swiper-wrapper font-songti '+$i18n.locale">
          <!-- It is important to set "left" style prop on every slide -->
          <div class="swiper-slide" v-for="(el,idx) in project" :key="idx" on-index="1">
            <img
              :src="el.bg_imgs[0]?el.bg_imgs[0]:'https://jianjie.oss-cn-hongkong.aliyuncs.com/test/1585755727602.png'"
              alt
            />
            <div class="item-title" v-show="isTitle">
              <router-link :to="`/makechild?${el._id}`">
                <span class="jie-title-letter-spacing" v-if="$i18n.locale!='en'">{{ el.name }}</span>
                <span class="jie-title-letter-spacing" v-else>{{ el.en_name }}</span>
                <p>{{ el.title }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    <div class="wap-slide">
      <div class="swiper-container-wap">
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
    return {
      screenWidth: document.body.clientWidth,
      project: null
    };
  },
  mounted() {
    // window.location.reload();
    const self = this;
    async function savePro() {
      self.project = await self.$axios
        .get("/buildgarden/buildgarden_all")
        .then(res => res);
    }
    savePro();

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

    var wapswiper = new Swiper(".swiper-container-wap", {
      effect: "coverflow",
      slidesPerView: 1,
      loop: true,
      direction: "vertical",
      grabCursor: true,
      centeredSlides: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,
      coverflowEffect: {
        rotate: 10,
        stretch: -40, // slide左右距离
        depth: 600, // slide前后距离
        modifier: 3, //
        slideShadows: false // 滑块遮罩层
      },

      on: {
        TouchMove: function(swiper) {
          //你的事件
          console.log(swiper.touches);
          // visibleSlides
        }
      }
    });

    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        self.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {}
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
    top: 50%;
    max-width: 100%;
    position: absolute;
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
.wap-slide {
  height: 100%;
  display: none;
  .swiper-container-wap {
    height: 100%;
  }
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
  .slide {
    display: none;
  }
  .wap-slide {
    display: block;
  }
  //swriper自带的类名（选中时的样式）
  .swiper-slide {
    position: relative;
    overflow: hidden;
    img {
      height: 100%;
      width: auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    .item-title {
      transition: 2s;
      right: 2%;
      // transform: translateX(-50%);
    }
  }
  .swiper-slide .item-title {
    font-size: 2rem;
  }
}
</style>