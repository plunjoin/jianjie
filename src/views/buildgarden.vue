<template>
  <div class="make">
    <div class="slide">
      <br />
      <br />
      <div class="swiper-container map">
        <div :class="'swiper-wrapper font-songti '+$i18n.locale">
          <!-- It is important to set "left" style prop on every slide -->
          <div
            :class="`swiper-slide ${$i18n.locale}`"
            v-for="(el,idx) in project"
            :key="idx"
            on-index="1"
          >
            <div
              class="bg-box"
              :style="`background-image:url(${el.bg_imgs[0]}?x-oss-process=image/resize,w_1920/quality,q_40)`"
            >
              <img
                :src="el.bg_imgs[0]?el.bg_imgs[0]+'?x-oss-process=image/resize,w_1920/quality,q_40':'https://jianjie.oss-cn-hongkong.aliyuncs.com/test/1585755727602.png'"
              />
            </div>
            <div class="item-title" v-show="isTitle">
              <router-link :to="`/makechild?${el._id}`">
                <span class="jie-title-letter-spacing" v-if="$i18n.locale!='en'">{{ el.name }}</span>
                <span class="jie-title-letter-spacing" v-else>{{ el.en_name }}</span>
                <p v-if="$i18n.locale!='en'">{{ el.subtitle }}</p>
                <p v-else>{{ el.en_subtitle }}</p>
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
          <div class="swiper-slide" v-for="(el,idx) in project" :key="idx" :on-index="idx+1">
            <img
              v-lazy="el.bg_imgs[0]?el.bg_imgs[0]+'?x-oss-process=image/resize,w_1920/quality,q_40':'https://jianjie.oss-cn-hongkong.aliyuncs.com/test/1585755727602.png'"
              alt
            />
            <div class="item-title" v-show="isTitle">
              <div @click="link(`/makechild?${el._id}`)">
                <span class="jie-title-letter-spacing">{{ $i18n.locale!='en'?el.name:el.en_name }}</span>
                <p>{{ $i18n.locale!='en'?el.subtitle:el.subtitle }}</p>
              </div>
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
  computed: mapState(["isTitle", "All"]),
  data() {
    return {
      screenWidth: document.body.clientWidth,
      project: null
    };
  },
  mounted() {
    // window.location.reload();
    const self = this;
    // async function savePro() {
    //   self.project = await self.$axios
    //     .get("/buildgarden/buildgarden_all")
    //     .then(res => res);
    // }
    // savePro();

    self.project = self.All.buildgarden;

    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 1500,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      grabCursor: true,
      slidesPerView: 1.7,
      autoplay: {
        delay: 3000 //1秒切换一次
      },
      spaceBetween: 50,
      // effect: "coverflow",
      centeredSlides: true,
      direction: "horizontal",
      observeParents: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -100, // slide左右距离
        depth: 100, // slide前后距离
        modifier: 2, //
        slideShadows: false // 滑块遮罩层
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
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
  methods: {
    link(url) {
      window.location.href = url;
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
* {
  transition: 1s;
}
.map {
  width: 100%;
  height: 80vh;
  .swiper-slide {
    overflow: inherit;
    // width: 80% !important;
    .bg-box {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;
      background-size: cover;
      background-position: center;
      // img {
      //   left: 50%;
      //   height: 100%;
      //   // position: absolute;
      //   transform: translateX(-50%);
      // }
    }
  }
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
    z-index: -1;
    position: relative;
  }
  &.en {
    .item-title {
      span {
        font-weight: 600;
      }
    }
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
    p {
      text-transform: capitalize;
    }
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