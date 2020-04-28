<template>
  <div class="jie-content jie-container">
    <div class="make-child-warp jie-container">
      <div class="banners">
        <img
          v-if="b"
          v-lazy="b.bg_imgs?b.bg_imgs[0]+'?x-oss-process=image/resize,w_1920/quality,q_40':'https://www.jianjie-china.com/img/logo.bafa2e21.png?x-oss-process=image/resize,w_1920/quality,q_40'"
          alt
          srcset
        />
        <div :class="'banner-title '+$i18n.locale" v-if="b">
          <h2 class="jie-title-letter-spacing">{{ $i18n.locale!='en'?b.name:b.en_name }}</h2>
          <p>{{ $i18n.locale!='en'?b.subtitle:b.en_subtitle }}</p>
        </div>
      </div>
      <div :class="'make-attributes '+$i18n.locale" v-if="b">
        <div class="swiper-container">
          <div class="swiper-wrapper info-wrap" v-if="b">
          <dl class="swiper-slide info-item" v-for="(e,i) in b.info" :key="i">
            <dt>{{ $i18n.locale!='en'?e.title:e.en_title }}</dt>
            <dd>{{ $i18n.locale!='en'?e.val:e.en_val }}</dd>
          </dl>
          </div>
        </div>
      
      </div>
      <div :class="'make-detail-content '+$i18n.locale" v-if="b">
        <!-- <div style="display: flex;align-items: center;">
          <div style="text-align: center;">
            <p style="width: 50%;display: inline-block;text-align: left;">{{ $t('make.msg028') }}</p>
          </div>
          <div>
            <img src="../../assets/image/867ee26fb82863bf5ddf1730266567e.png" alt />
          </div>
        </div>-->
        <div style="font-size: 16px;margin: 2rem 0;" >
          <span style="margin: 0 0 10px 0;">{{ $t('make.msg029') }}</span>
          <p>{{ $i18n.locale!='en'?b.materials:b.en_materials }}</p>
        </div>
        <div v-for="(e,i) in b.imgs" :key="i">
          <img v-lazy="e.url+'?x-oss-process=image/resize,w_1920/quality,q_40'" width="100%" alt />
        </div>
      </div>
    </div>
    <FOOT></FOOT>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper";
import FOOT from "../../components/Footer";
export default {
  name: "makechild",
  props: ["id"],
  components: { FOOT },
  data() {
    return {
      _id: window.location.href.split("?"),
      b: null
    };
  },
  mounted() {
    var _this = this;    
    _this._id = window.location.href.split("?")[1];
    console.log(_this._id);
    _this.$store.state.All.buildgarden.forEach(e => {
      if (e._id == _this._id) {
        _this.b = e;
      }
    });
    console.log(_this.b);
    _this.$nextTick(()=>{
      var swiper = new Swiper('.swiper-container',{
          notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          direction: "horizontal", //水平方向移动
          grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
          mousewheelControl: true, //同上
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        })
        console.log(swiper);
    })
    // this.$axios.get("/buildgarden_single?parameter=5e86ef581eb9b40e3869920e");
  }
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  height: 0px;
}

::-webkit-scrollbar-button {
  width: 10px;
}
.make-child-warp {
  margin: auto;
  .make-attributes {
    width: 100%;
    overflow-x: auto;
    .info-wrap{
      margin:2rem 0 3rem 0;
    }
    .info-item{
      font-size:.81rem;
      text-align:center;
      width:auto !important;
      text-transform: capitalize;
      margin:0 1rem;
      dt{
        font-weight:600;
      }
      dd{
        font-size:.8rem;
      }
       &::after {
        content: "|";
        top: 50%;
        right: -0.4rem;
        position: absolute;
      }
      &:last-child {
        &::after {
          content: "";
        }
      }
    }
    table {
      min-width: 1190px;
      td {
        text-transform: capitalize;
      }
    }
  }
  .make-detail-content {
    font-size: 16px;
    text-transform: capitalize;
  }

  .banners {
    text-align: center;
    position: relative;

    img {
      width: 100%;
    }

    .banner-title {
      top: 6rem;
      left: 4rem;
      position: absolute;

      h2,
      p {
        text-align: left;
        font-size: 2.5rem;
        text-transform: capitalize;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .make-detail-content {
    > div {
      display: block !important;
      img {
        width: 100% !important;
      }
      p {
        width: 100% !important;
        padding: 1rem;
      }
    }
  }
  .make-child-warp {
    .make-attributes {
      table {
        margin: 2rem 0 1rem 0 !important;
      }
    }
    .banners {
      .banner-title {
        &.en {
          left: auto;
          right: 2rem;
          text-transform: capitalize;
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 1.7rem;
            font-weight: 300;
          }
        }
      }
    }
    .make-detail-content.en {
      p {
        opacity: 0.6;
        text-transform: capitalize;
        font-size: 0.8rem;
        word-break: break-all;
        text-align: justify;
      }
      span {
        display: block;
        padding: 0 1rem;
      }
    }
    .make-attributes {
      table {
        min-width: auto;
        text-transform: capitalize;
        text-align: center;
        thead {
          th {
            text-align: center;
            position: relative;
            font-weight: 400;
            font-size: 1.2rem;
            white-space: nowrap;
            padding: 0.5rem 2rem;
            &::after {
              content: "|";
              top: 50%;
              right: -0.4rem;
              position: absolute;
            }
            &:last-child {
              &::after {
                content: "";
              }
            }
          }
        }
        tbody {
          td {
            text-align: center;
            font-size: 0.95rem;
            font-weight: 100;
            opacity: 0.7;
          }
        }
      }
      &.en {
        table {
          text-transform: capitalize;
          text-align: center;
          thead {
            th {
              text-align: center;
              font-size: 1.7rem;
              font-weight: 340;
              position: relative;
            }
          }
          tbody {
            td {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>