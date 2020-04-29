<template>
  <div class="jie-content">
    <div class="swiper-container-pc">
      <div :class="bodyheight <= 640?'':'swiper-wrapper'">
        <div class="swiper-slide">
          <div class="jie-layer-head">
            <div class="swiper-container-banner-bg">
              <div class="swiper-wrapper" v-if="info">
                <div class="swiper-slide" v-for="(bg,idx) in info.bg_imgs" :key="idx">
                  <div
                    class="jie-udd-bg"
                    :style="'background-image:url('+bg+'?x-oss-process=image/resize,w_1920/quality,q_40)'"
                  ></div>
                </div>
              </div>
            </div>
            <div class="context">
              <div class="prev"></div>
              <div class="next"></div>
            </div>
            <div class="jie-layer-head-comtent" v-show="isTitle" v-if="info">
              <h2
                :class="'font-songti jie-title-letter-spacing '+ $i18n.locale"
              >{{ $i18n.locale!='en'?info.name:info.en_name }}</h2>
              <hr />
              <h3
                :class="'font-songti '+$i18n.locale"
              >{{ $i18n.locale!='en'?info.cate.name:info.cate.en_name }}</h3>
              <p :class="$i18n.locale">{{ $i18n.locale!='en'?info.remark:info.en_remark }}</p>
            </div>
            <div class="swiper-container info-wrap info">
              <div class="swiper-wrapper">
                <div
                style="display: inline-block;width:auto"
                  class="swiper-slide"
                  v-for="(e,i) in $store.state.harry_winston[0].tabloid"
                  :key="i"
                  @click="m=i"
                  v-bind:class="{a:m==i}"
                >
                  <p style="display: inline-block;margin-right:1rem">{{ e.keyName }}</p>
                </div>
              </div>
              <div class="content">
                <div
                  v-for="(e,i) in $store.state.harry_winston[0].tabloid"
                  :key="i"
                  v-show="m==i"
                >{{ e.vals[0] }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="jie-layer-video" v-if="info">
            <video width="100%" autoplay muted controls playsinline :src="info.video"></video>
            <!-- <video src muted autoplay width="100%"></video> -->
          </div>
        </div>
        <div class="swiper-slide">
          <div class="jie-layer-tab" v-if="info">
            <div class="tab-title-warp">
              <ul>
                <li
                  v-for="(item,index) in info.imgs"
                  :key="index"
                  v-bind:class="{active:tabIndex==index}"
                  @click="selected(item,index)"
                  class="jie-title-letter-spacing"
                >
                  <span>{{ $i18n.locale=='en'?item.en_title:item.title }}</span>
                </li>
              </ul>
            </div>
            <div class="jie-layer-tab-warp">
              <div class="swiper-container swiper-container-images-wrap">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" :key="index" v-for="(item,index) in imagesGroup.imgs">
                    <img
                      v-if="item.type == 0"
                      v-lazy="item.url+'?x-oss-process=image/resize,w_1920/quality,q_40'"
                    />
                    <div v-else class="video">
                      <video :src="item.url" autoplay muted playsinline loop height="100%"></video>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-btn">
                <div class="swiper-button-prev jie-prev" slot="button-prev"></div>
                <div class="swiper-button-next jie-next" slot="button-next"></div>
              </div>
              <p align="right">
                <span>{{ realIndex+1 }}/{{ imagesGroup.imgs.length }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="jie-container buttom-warp">
            <foot class="buttom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foot from "../../components/Footer";
import Swiper from "swiper/dist/js/swiper";
import { mapState, mapMutations } from "vuex";
export default {
  inject: ["reload"],
  components: {
    foot
  },
  computed: mapState(["night", "isTitle", "All"]),
  data() {
    const self = this;
    return {
      bodyheight: document.body.clientWidth,
      wap: false,
      m: -1,
      id: window.location.href.split("?")[1],
      count: 0,
      tabIndex: 0,
      child: null,
      realIndex: null,
      vertical: {},
      info: null,
      imagesGroup: null
    };
  },
  mounted() {
    // this.handleReload();
    var _this = this,
      bv = 0;
    var data = _this.All.banquet;

    data.forEach(el => {
      el.childs.forEach(e => {
        if (e._id == _this.id) {
          _this.info = e;
          _this.imagesGroup = e.imgs[0];
          console.log(_this.imagesGroup);
        }
      });
    });
    // async function getinfo() {
    //   var data = await _this.$axios
    //     .get(`/banquet_single?parameter=${_this.id}`)
    //     .then(res => res);
    //   _this.info = data[0];
    // }

    // getinfo();

    window.onscroll = function() {
      if (this.scrollY >= window.innerHeight / 2) {
        if (bv == 0) {
        }
        bv = 1;
      }
    };

    var video, output;
    var scale = 0.8;

    _this.$nextTick(() => {
      var swipers;
      if (document.body.clientWidth <= 640) {
        swipers = null;
      } else {
        swipers = new Swiper(".swiper-container-pc", {
          notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          direction: "vertical", //水平方向移动
          grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
          mousewheelControl: true, //同上
          height: window.innerHeight, // 高度设置，占满设备高度
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          //debugger: true,

          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          on: {
            //监听滑动切换事件，返回swiper对象
            slideChange: () => {}
          }
        });
      }

      var banner = new Swiper(".swiper-container-banner-bg", {
        autoplay: true,
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "horizontal", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {}
        }
      });
      var images = new Swiper(".swiper-container-images-wrap", {
        scrollbar: false,
        autoHeight: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionEnd(swiper) {
            _this.realIndex = this.activeIndex;
          },
          reachEnd: function(swiper) {
            // if (self.tabIndex == self.info.view_group.length + 1) {
            //   self.tabIndex = 0;
            //   return false;
            // }
            // alert(self.tabIndex);
            // self.tabIndex += 1;
            // swiper.slideTO(0);
            // return false;
          }
        }
      });
      var info = new Swiper(".info-wrap", {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "horizontal", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
      });
    });
  },
  methods: {
    ...mapMutations(["saveIsTitle"]),
    selected(item, index) {
      this.imagesGroup = item;
      this.realIndex = 0;
      this.tabIndex = index;
    },
    handleReload() {
      this.reload();
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-container-images-wrap {
  overflow: hidden;
}
.pc {
}
.wap {
  display: none;
}
.swiper-slide {
  overflow: hidden;
}
.jie-tabloid {
  text-align: center;
  font-size: 16px;
  table {
    display: inline-block;
    tr {
      td {
        &:last-child {
          text-align: left;
        }
        &:first-child {
          text-align: right;
        }
      }
    }
  }
}
.jie-content {
  .jie-layer-head {
    width: 100%;
    height: 100vh;
    position: relative;
    background-size: cover;
    .info {
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      font-size: 0.7rem;
      overflow: auto;
      letter-spacing: 2px;
      ul {
        display: flex;
        margin: 0 0 0.5rem 0;
        li {
          opacity: 0.6;

          float: left;
          white-space: nowrap;
          margin-right: 2rem;
          &.a {
            opacity: 1;
          }
        }
      }
      .content {
        font-size: 12px;
      }
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: #00000065;
    }
    .context {
      top: 50%;
      position: absolute;
      .prev {
        &::after {
          content: "";
          position: absolute;
          right: 15px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border-right: 2px solid #b3b3b3;
          border-bottom: 2px solid #b3b3b3;
          transform: rotate3d(0, 0, 1, -45deg);
          transition: transform 0.2s linear;
        }
      }
      .next {
        &::after {
          content: "";
          position: absolute;
          right: 15px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border-right: 2px solid #b3b3b3;
          border-bottom: 2px solid #b3b3b3;
          transform: rotate3d(0, 0, 1, -45deg);
          transition: transform 0.2s linear;
        }
      }
    }
    .jie-layer-head-comtent {
      text-align: justify;
      top: 9rem;
      right: 5.25rem;
      position: absolute;
      width: 25rem;
      z-index: 2;
      h2 {
        font-size: 3.416666rem;
        font-weight: 100;
        &.en {
          font-size: 1.999rem;
        }
      }
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1.3rem;
        font-weight: 100;
        &.en {
          font-size: 1.3rem;
        }
      }
      p {
        font-size: 0.65rem;
        line-height: 1.33rem;
        letter-spacing: 2px;
        &.en {
          letter-spacing: 1px;
        }
      }
    }
    .jie-udd-bg {
      height: 100vh;
      background-size: cover;
      background-position: center;
      position: relative;
      img {
        height: 100%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
    }
  }
  .jie-layer-tab {
    max-height: 100%;
    padding: 2rem 4.166666rem 1.75rem 4.1666666rem;
    & > .jie-next,
    .jie-prev {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .jie-layer-tab-warp {
      position: relative;
      > p {
        padding-bottom: 0.625rem;
        > span {
          font-size: 0.66666666rem;
        }
      }
    }
    .tab-title-warp {
      ul {
        display: flex;
        justify-content: space-around;
        padding: 1.58rem 0 1rem 0;
        li {
          cursor: pointer;
          font-size: 0.79rem;
          display: inline;
          padding: 0 0 0.3rem 0;
          border-bottom: 2px solid #c1272d00;
          &:hover,
          &.active {
            color: #c1272d;
            border-color: #c1272d;
          }
        }
      }
    }
    .swiper-container {
      height: 100%px;
      .swiper-wrapper {
        height: 100%px;
      }
      .swiper-slide {
        overflow: hidden;
        text-align: center;
        height: calc(100vh - 8rem);
        position: relative;
        .video {
          height: 100%;
        }
        img,
        video {
          left: 50%;
          position: absolute;
          height: 100%;
          width: auto !important;
          transform: translateX(-50%);
        }
      }
    }
    .swiper-btn {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
      & > div {
        top: 0;
        width: 50%;
        height: 100%;
        outline: none;
        background: none;
        position: relative;
      }
      .jie-next {
        cursor: url("../../assets/icon/next.png"), auto;
      }
      .jie-prev {
        cursor: url("../../assets/icon/prev.png"), auto;
      }
    }
  }
  .item-text {
    margin: 2.29166666rem 0 0 0;
    font-size: 0.5833333rem;
  }
  .buttom-warp {
    position: relative;
    height: 100%;
    .buttom {
      position: absolute;
      bottom: 0;
    }
  }
}

@media screen and (max-width: 900px) {
  .jie-content {
    .jie-layer-head {
      .jie-layer-head-comtent {
        position: absolute;
        left: 1rem;
      }
    }

    .jie-layer-tab {
      .jie-layer-tab-warp {
        p {
          margin-top: -2.5rem;
        }
      }
      padding: 1rem;
      .swiper-container {
        min-height: 600px;
        max-height: 600px;
        .swiper-slide {
          overflow: hidden;
          .video {
            position: relative;
            video {
              top: 50%;
              left: 50%;
              height: 100%;
              position: absolute;
              // width: 100% !important;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .jie-content {
    .jie-layer-tab {
      .jie-layer-tab-warp {
        p {
          margin-top: 0;
        }
        .swiper-container {
          .swiper-slide {
            img {
              height: auto;
              width: 100% !important;
              position: relative;
            }
          }
        }
      }
    }
    .jie-layer-head {
      .jie-layer-head-comtent {
        width: calc(100% - 4rem);
        &.en {
          width: calc(60%);
          > h2 {
            font-size: 2.4rem;
            white-space: pre;
          }
          > h3 {
            font-size: 1rem;
            text-transform: lowercase;
          }
          > p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
              white-space: initial;
            }
          }
        }
      }
    }
  }
  .jie-content {
    .buttom-warp {
      .buttom {
        position: relative;
      }
    }
    .jie-layer-head-comtent {
      position: relative;
      width: 100%;
    }
    .jie-layer-tab {
      padding-top: 1rem;
      .tab-title-warp {
        overflow-x: auto;
        margin: 0 0 1rem 0;
        ul {
          display: inline-flex;
          padding: 0 0 1rem 0;
          li {
            margin: 0 1rem;
            white-space: nowrap;
          }
        }
      }
      .swiper-container {
        min-height: calc(100vh - 150px);
        max-height: calc(100vh - 150px);
      }
    }
  }
  .pc {
    display: none;
  }
  .wap {
    display: block;
  }
}
</style>