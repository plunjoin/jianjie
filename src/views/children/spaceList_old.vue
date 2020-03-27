<template>
  <div class="space-datail">
    <!-- swiper-container -->
    <div class="space-list-warp font-songti" ref="wrapper">
      <div class="list-warp" ref="cont" @click="sun = 5,suns = 3">
        <div class="lsit-item" @click="openImgsBox($event)" v-for="(e,idx) in spaceData" :key="idx">
          <ul :style="publicWidth" :index="idx">
            <li v-for="(el ,i) in e" :key="i">
              <span @click="changeimg(idx,el.imgs,$event)">{{ el.title }}</span>
            </li>
            <li>
              <div class="back">
                <div></div>
              </div>
            </li>
          </ul>
          <div class="imgs-group">
            <div
              class="img-box"
              :style="publicWidth"
              v-for="(el ,i ) in e.activeArr"
              :key="i"
              @click="expand($event)"
            >
              <img :src="el.url" draggable="false" />
            </div>
          </div>
        </div>
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
      scroll: null,
      spaceData: []
    };
  },
  methods: {
    changeimg(i, item, e) {
      let oldBoxWidth = (this.spaceData.length + 0.1) * this.width; //warp初始宽度
      let master = $(e.target.parentNode.parentNode);

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

    changeBoxWidth(width) {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);
          this.verScroll(width);
        }
      }, 0);
    }
  },
  mounted() {
    var _this = this;
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer);

          this.verScroll((this.spaceData.length + 0.1) * this.width);
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
    for (var i = 0; i < this.space.length; i += 4) {
      this.spaceData.push(this.space.slice(i, i + 4));
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
        }
        &:last-child {
          border: none;
        }
      }
      .imgs-group {
        // position: absolute;
        width: auto;
        overflow: hidden;
        height: 100%;
        width: 0;
        overflow: hidden;
        background: #000;
        .img-box {
          float: left;
          height: 100%;
          width: 25%;
          position: relative;
          overflow: hidden;
          background: #000000;
          max-width: 1620px;
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
    }
  }
}
</style>