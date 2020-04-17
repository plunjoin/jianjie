<template>
  <div class="jie-content">
    <h1>123</h1>
  </div>
</template>

<script>
// import foot from "../../components/Footer";
// import { mapState, mapMutations } from "vuex";
export default {
  name: "content",
  props: ["_id"],
  mounted(){
        console.log(window.location.href.split('?')[1]);
        
  }
};
</script>

<style lang="less" scoped>
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
      top: 8rem;
      right: 10.25rem;
      position: absolute;
      width: 25rem;
      z-index: 2;
      h2 {
        font-size: 3.416666rem;
        font-weight: 100;
      }
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1.3rem;
        font-weight: 100;
      }
      p {
        font-size: 0.65rem;
        line-height: 1.33rem;
        letter-spacing: 2px;
      }
    }
    .jie-udd-bg {
      height: 100vh;
      background-size: cover;
      background-position: center;
    }
  }
  .jie-layer-tab {
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
          video {
            width: 100% !important;
            height: auto;
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
      }
    }
    .jie-layer-head {
      .jie-layer-head-comtent {
        width: calc(100% - 4rem);
        &.en {
          width: calc(60%);
          > h2 {
            font-size: 2.4rem;
          }
          > h3 {
            font-size: 1rem;
            text-transform: lowercase
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