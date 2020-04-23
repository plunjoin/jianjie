<template>
  <div class="space-datail">
    <!-- swiper-container -->
    <div :class="'space-list-warp font-songti '+$i18n.locale" ref="wrapper">
      <div class="list-warp" ref="cont" @click="sun = 5,suns = 3">
        <div class="lsit-item" @click="openImgsBox($event)" v-for="(e,idx) in spaceData" :key="idx">
          <ul :style="publicWidth" :index="idx" v-show="isTitle">
            <li v-for="(el ,i) in e" :key="i">
              <span @click="changeimg(idx,el.imgs,$event)">{{ el.title }}</span>
            </li>
            <!-- <li>
              <div class="back">
                <div></div>
              </div>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
    <div class="imgs-group">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="img-box swiper-slide"
            v-for="(el ,i ) in activeArr"
            :key="i"
            @click="expand($event)"
          >
            <img :src="el.url" draggable="false" />
          </div>
        </div>
        <div class="swiper-navigation-btn">
          <div class="swiper-button-next next"></div>
          <div class="swiper-button-prev prev"></div>
        </div>
      </div>
      <div class="close" @click="closeImgGroup()"></div>
      <div class="pagenum">
        <p align="right">{{ realIndex+1 }} / {{ activeArr?activeArr.length:0 }}</p>
      </div>
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
    ...mapState(["space", "isTitle"]),
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
      scroll: null,
      spaceData: [],
      activeArr: null,
      realIndex: 0,
      sd: null,
      id: null
    };
  },
  methods: {
    changeimg(i, item, e) {
      this.activeArr = item;
      $(".imgs-group").animate({
        opacity: 1,
        zIndex: 999999
      });
      return false;
      let oldBoxWidth = (this.spaceData.length + 0.1) * this.width; //warp初始宽度
      let master = $(e.target.parentNode.parentNode);
      console.log(master.siblings());
      master.siblings().animate({
        position: "fixed",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0
      });
      if (!master.siblings().children().length == item.length) {
        master.removeClass("active");
        this.verScroll(oldBoxWidth);
        master.siblings().css({
          width: `0px`,
          opacity: 0,
          transition: `.5s`
        });
      } else {
        this.spaceData[i].activeArr = item;
        this.$forceUpdate();
        master.addClass("active");
        this.changeBoxWidth(oldBoxWidth + (item.length + 2) * this.width);
        master.siblings().css({
          width: `${(item.length + 2) * this.width}px`,
          opacity: 1,
          transition: `1s`
        });
        master
          .parent()
          .siblings()
          .find(".imgs-group")
          .width(0);
        master
          .parent()
          .siblings()
          .find("ul")
          .removeClass("active");
      }
    },
    openImgsBox(e) {
      let oldBoxWidth = (this.spaceData.length + 0.1) * this.width;
      let master = $(e.target);
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
    verScroll(width) {
      var _this = this;
      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        var warp = null;
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档
            probeType: 2,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
        this.scroll.on("scroll", pos => {
          if (pos.x < parseInt("-" + _this.width * 1.5)) {
            var idx = $(".lsit-item .active").attr("index");
            $(".lsit-item .active").css({
              left: Math.abs(Math.round(pos.x)) - idx * _this.width,
              position: "absolute",
              zIndex: 9
            });
          } else {
            $(".lsit-item .active").css({
              left: 0,
              position: "",
              zIndex: 9
            });
          }
        });
      });
      // $(this.$refs.cont).css({
      //   transform: `translateX(0px) translateY(0px) translateZ(0px)`
      // });
    },
    sibling(elm) {
      var a = [];
      var p = elm.parentNode.children;
      for (var i = 0, pl = p.length; i < pl; i++) {
        if (p[i] !== elm) a.push(p[i]);
      }
      return a;
    },
    closeImgGroup() {
      $(".imgs-group").animate({
        opacity: 0,
        zIndex: -1
      });
    },
    changeBoxWidth(width) {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);
          // this.verScroll(width);
        }
      }, 0);
    }
  },
  mounted() {
    console.log(this.$store.state.All.space);

    this.activeArr = this.space[0].imgs;
    var _this = this;
    this.$nextTick(() => {
      _this.id = window.location.href.split("?")[1];
      // console.log();

      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);

          // this.verScroll((this.spaceData.length + 0.1) * this.width);
        }
      }, 0);
      $(".back").click(function() {
        var width =
          $(_this.$refs.cont).width() -
          $(this)
            .parent()
            .parent()
            .siblings()
            .width();

        $(this)
          .parent()
          .parent()
          .siblings()
          .animate(
            {
              width: 0
            },
            function() {
              $(".lsit-item .active").animate(
                {
                  left: 0,
                  position: "",
                  zIndex: 9
                },
                () => {
                  $(".list-warp").css({
                    transform: "translateX(0px) translateY(0px) translateZ(0px)"
                  });
                  _this.verScroll((_this.spaceData.length + 0.1) * _this.width);
                }
              );
            }
          );
      });
      function backw(width) {
        if (
          $(".back")
            .parent()
            .parent()
            .siblings()
            .width() == 0
        ) {
          if (width) {
            _this.verScroll(width);
          } else {
            _this.verScroll((_this.spaceData.length + 0.1) * _this.width);
          }
        } else {
          backw();
        }
      }
    });
    const self = this;
    console.log(this.$t("space.space"));
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
      loop: true,
      initialSlide: 1,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      paginationClickable: true,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        slideChangeTransitionEnd() {
          _this.realIndex = this.activeIndex;
        }
      }
    });
    for (var i = 0; i < this.$t("space.space").length; i += 4) {
      this.spaceData.push(this.$t("space.space").slice(i, i + 4));
    }
    this.spaceData.forEach(el => {
      el.activeArr = el[0].imgs;
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
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
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
      position: relative;
      display: flex;
      .lsit-item {
        border-right: 1px solid #ffffff88;
        position: relative;
        height: 100%;
        &:nth-child(even) ul {
          ul {
            bottom: 2rem;
          }
        }
        &:nth-of-type(odd) ul {
          transform: translateY(-50%);
          top: 70%;
        }
      }
      ul {
        position: relative;
        padding-top: 4rem;
        text-align: center;
        float: left;

        li {
          opacity: 0.5;
          margin: 0.7916666rem 0;
          .back {
            cursor: pointer;
            div {
              width: 100%;
              height: 100%;
              &::after {
                content: "←";
                font-weight: 100;
                font-size: 40px;
                top: 50%;
                width: 100%;
                text-align: center;
              }
            }
          }
          span {
            cursor: pointer;
          }
          &:hover {
            opacity: 1;
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
  .swiper-container {
    .swiper-slide {
    }
  }
  .imgs-group {
    height: 100%;
    width: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    padding: 3rem;
    box-sizing: border-box;
    .swiper-container {
      height: 98%;
      .swiper-navigation-btn {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        top: 0;
        left: 0;
        z-index: 9999999999999999;
        .swiper-button-next,
        .swiper-button-prev {
          background: none;
        }
        > div {
          top: 0;
          height: 100%;
          width: 50%;
        }

        .next {
          cursor: url("../../assets/icon/next.png"), auto;
        }
        .prev {
          cursor: url("../../assets/icon/prev.png"), auto;
        }
      }
    }
    .img-box {
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
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
    .close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 30px;
      height: 30px;
      z-index: 9;
      cursor: pointer;
      background-image: url("../../assets/icon/close.png");
      background-size: cover;
      transition: 0.51s;
      &:hover {
        transform: rotate(360deg);
      }
    }
    .pagenum {
      height: 5%;
    }
  }
}

@media screen and (max-width: 640px) {
  .space-datail {
    .space-list-warp {
      .list-warp {
        display: inline-block;
        height: 100%;
        width: 100%;
        .lsit-item {
          width: 100%;
          height: 25%;
          ul {
            width: 100% !important;
            padding: 0;
            clear: both;
            position: relative;
            li {
              width: 50%;
              display: -webkit-inline-box;
            }
          }
        }
      }
    }
  }
}
</style>