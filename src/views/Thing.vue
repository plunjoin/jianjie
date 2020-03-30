<template>
  <div class="thing">
    <div class="thing-warp">
      <div class="thing-bg">
        <img v-bind:class="{active:count==0}" src="../assets/image/thing/bg/17.jpg" width="100%" />
        <img v-bind:class="{active:count==1}" src="../assets/image/thing/bg/41.jpg" width="100%" />
        <img v-bind:class="{active:count==2}" src="../assets/image/thing/bg/5.jpg" width="100%" alt />
        <img v-bind:class="{active:count==3}" src="../assets/image/thing/bg/1.jpg" width="100%" />
      </div>
      <div :class="'list font-songti '+$i18n.locale">
        <ul v-show="isTitle">
          <li v-for="(item,index) in cate" :key="index" v-bind:class="{active:count==index}">
            <p class="jie-title-letter-spacing" @mousemove="changeBG(index)">
              <router-link to="/thingdatail/0">{{ item.title }}</router-link>
            </p>
            <div class="child">
              <div class="child-el" v-for="(e,i) in item.child" :key="i">
                <router-link :to="'/thingdatail/'+i">{{ e }}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="thing-war">
      <swiper :options="vertical">
        <swiper-slide
          v-for="(item,index) in cate"
          :key="index"
          v-bind:class="{active:count==index}"
          :style="`background-image:url(https://prugna.cn/img/${index}.jpg)`"
        >
          <div class="wap-title" @mousemove="changeBG(index)">
            <span>{{ item.title }}</span>
            <div class="child">
              <div class="child-el" v-for="(e,i) in item.child" :key="i">
                <router-link :to="'/thingdatail/'+i">{{ e }}</router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
  name: "thing",
  computed: mapState(["isTitle", "thing"]),
  data() {
    const self = this;
    return {
      cate: this.$t("thing.cate"),
      count: 0,
      vertical: {
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
      }
    };
  },
  mounted() {
    console.log(this.cate);
    console.log(this.thing);
  },
  methods: {
    changeBG(bg) {
      this.count = bg;
    }
  }
};
</script>

<style lang="less">
.thing {
  margin-top: 3.75rem;
}
.thing-war {
  display: none;
}
.thing-warp {
  width: 100%;
  height: calc(100vh - 3.75rem);
  overflow: hidden;
  width: 100%;
  position: relative;
  .thing-bg {
    position: absolute;
    z-index: -1;
    background: #00000088;
    width: 100%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      transition: 1s;
      width: 100%;
      filter: grayscale(100%);
      filter: gray;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  .list {
    font-size: 2rem;
    position: absolute;
    left: 80%;
    height: 100%;
    ul {
      min-width: 200px;
      height: 100%;
      li {
        opacity: 0.5;
        height: 25%;
        position: relative;
        &.active {
          opacity: 1;
        }
        &:hover {
          .child {
            display: inline-block;
            opacity: 1;
          }
        }
        p {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
        }
        .child {
          // display: none;
          position: absolute;
          top: 70%;
          left: 0;
          font-size: 0.6666rem;
          transition: 1s;
          opacity: 0;
          .child-el {
            float: left;
            margin-right: 15px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .thing {
    margin: 0;
  }
  .thing-war {
    display: block;
    .swiper-slide {
      opacity: 0;
      transition: 1s;
      display: flex;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      align-items: center;
      font-size: 3rem;
      .child {
        .child-el {
          a {
            font-size: 1.5rem;
          }
        }
      }
      p {
        writing-mode: vertical-rl;
        margin-right: 1rem;
      }
      img {
        width: auto;
        height: 100%;
      }
      &.swiper-slide-active {
        opacity: 0.5;
      }
    }
  }
  .thing-warp {
    display: none;
  }
  .wap-title {
    text-align: right;
    float: right;
    position: absolute;
    right: 3rem;
    .child {
      opacity: 0;
      height: 0;
      transition: 2s;
    }
    &:hover {
      .child {
        opacity: 1;
      }
    }
  }
}
</style>