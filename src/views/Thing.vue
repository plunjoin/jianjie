<template>
  <div class="thing">
    <div class="thing-warp">
      <div class="thing-bg">
        <img v-bind:class="{active:count==0}" src="../assets/image/thing/bg/17.jpg" width="100%" />
        <img v-bind:class="{active:count==1}" src="../assets/image/thing/bg/41.jpg" width="100%" />
        <img v-bind:class="{active:count==2}" src="../assets/image/thing/bg/5.jpg" width="100%" alt />
        <img v-bind:class="{active:count==3}" src="../assets/image/thing/bg/1.jpg" width="100%" />
      </div>
      <div class="thing-bg bg-wap">
        <img v-bind:class="{active:count==0}" src="../assets/image/thing/bg/0.jpg" width="100%" />
        <img v-bind:class="{active:count==1}" src="../assets/image/thing/bg/wap1.jpg" width="100%" />
        <img v-bind:class="{active:count==2}" src="../assets/image/thing/bg/2.jpg" width="100%" alt />
        <img v-bind:class="{active:count==3}" src="../assets/image/thing/bg/3.jpg" width="100%" />
      </div>
      <div :class="'list font-songti '+$i18n.locale">
        <ul v-show="isTitle" :class="count!=-1?'none':''">
          <li
            v-for="(item,index) in  All.thing"
            :key="index"
            v-bind:class="{active:count==index}"
            @click.stop="changeBG(-1)"
          >
            <div class="jie-title-letter-spacing">
              <p
                @click.stop="changeBG(index)"
              >{{ $i18n.locale!='en'?item.category.name:item.category.en_name }}</p>
              <div class="child" v-if="count==index">
                <div class="child-el" v-for="(e,i) in item.childs" :key="i">
                  <a @click="link('/thingdatail?'+e._id)">{{ $i18n.locale!="en"?e.name:e.en_name }}</a>
                </div>
                <div style="clear:both"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>  
  </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
  name: "thing",
  computed: mapState(["isTitle", "thing", "All"]),
  data() {
    const self = this;
    return {
      cate: this.$t("thing.cate"),
      count: -1,
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
    console.log(this.All.thing);
  },
  methods: {
    changeBG(bg) {
      if (bg != -1) {
        if (bg == this.count) {
          console.log(bg);
          this.count = -1;
          return false;
        }
      }
      this.count = bg;
    },
    link(url) {
      window.location.href = url;
    }
  }
};
</script>

<style lang="less">
.thing {
  .bg-wap{
    display: none;
  }
}


.thing-warp {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: calc(100vh);
  .thing-bg {
    position: absolute;
    z-index: -1;
    background: #00000088;
    width: 100%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      transition: 2s;
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
    left: 0%;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    padding-top: 3.5rem;
    position: absolute;
    &.en {
      ul {
        li {
          font-size: 1.5rem;
          p {
            letter-spacing: 5px;
          }
          .child {
            .child-el {
              letter-spacing: 3px;
              text-transform: lowercase;
            }
          }
        }
      }
    }
    ul {
      min-width: 200px;
      height: 100%;
      li {
        height: 25%;
        position: relative;
        text-align: center;
        &.active {
          opacity: 1;
          p {
            top: 0;
            position: relative;
            transform: translate(0);
          }
          > div {
            top: 50%;
            opacity: 1;
            width: 100%;
            position: absolute;
            transform: translateY(-50%);
          }
        }

        > div {
          opacity: 0.5;
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          white-space: nowrap;
          &:hover {
            opacity: 1;
            cursor: pointer;
          }
        }
        .child {
          // display: none;
          width: 100%;
          transition: 1s;
          margin-top: 1rem;
          font-size: 0.6666rem;
          .child-el {
            width: 100%;
            float: left;
            margin-right: 15px;
            margin: 0.25rem 0;
          }
        }
      }
      &.none {
        li {
          height: 0;
          opacity: 0;
          overflow: hidden;
          &.active {
            height: 100%;
            opacity: 1;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .thing {
    margin: 0;
    .bg-wap{
      display: block;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        
      }
    }
  }

  .thing-warp {
    // display: none;
  }
  .wap-title {
    left: 50%;
    font-weight: 100;
    text-align: center;
    position: absolute;
    transform: translateX(-50%);
    .child {
      opacity: 0;
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