<template>
  <div class="night" ref="warp">
    <div class="openVideo" v-if="opening_video">
      <video
        src="https://prugna.cn/video/night_feast.864055c2.mp4"
        width="100%"
        muted
        autoplay
        @click="opening_video=false;openbg()"
        ref="openv"
      ></video>
      <!-- <button class="font-songti" >跳过</button> -->
    </div>
    <div class="background-video">
      <video src="https://prugna.cn/video/night_feast.864055c2.mp4" loop width="100%" ref="bg"></video>
    </div>
    <div class="feast-list" ref="listwarp">
      <dl v-for="(e,i) in ls" :key="i">
        <dt>{{ e.title }}</dt>
        <dd v-for="(el,idx) in e.child" :key="idx">
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link :to="'/detail/'+idx">{{ el.name }}</router-link>
          </strong>
          <p>{{ el.add }}</p>
          <p>{{ el.time }}</p>
        </dd>
      </dl>
    </div>
    <div class="feast-list" ref="copy"></div>
  </div>
</template>

<script>
import touch from "@/common/touch/touch";
import $ from "jquery";
export default {
  name: "night",
  data() {
    const self = this;
    return {
      ls: [
        {
          title: "HARRY WINSTON & 見芥",
          child: [
            {
              name: "【 望隆鄉國 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 佳山有緣 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "Hennessy X.O & 見芥",
          child: [
            {
              name: "【醉花陰】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 鳳求凰 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "阿里巴巴 & 見芥",
          child: [
            {
              name: "【 萬芊斜 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【歸隱】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 太極極古 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 外灘·午宴 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 深竹月 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 阿里議事 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 歸來遇秋 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 鏡花水月 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            },
            {
              name: "【 歸來遇秋 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "蘇州棠頌 & 見芥",
          child: [
            {
              name: "【 遇棠富貴 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "龍宮 & 見芥",
          child: [
            {
              name: "【 龍宮 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "枚青 & 見芥",
          child: [
            {
              name: "【 紅樓小宴 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        },
        {
          title: "阿姆斯特丹 & 見芥",
          child: [
            {
              name: "【 他鄉亦貴 】",
              add: "Anlu, Shanghai, Chin",
              time: "2019 08 27 - 08 30"
            }
          ]
        }
      ],
      opening_video: true,
      controller: false,
      interval: setInterval(function() {
        if (self.controller) {
          if (self.$refs.warp.scrollTop >= self.$refs.listwarp.scrollHeight) {
            self.$refs.warp.scrollTop = 0;
          }
          self.$refs.warp.scrollTop += 2;
        } else {
        }
      }, 20)
    };
  },
  computed: {},
  mounted() {
    this.$refs.copy.innerHTML = this.$refs.listwarp.innerHTML;
    var _this = this,
      maxScroll = _this.$refs.warp.scrollHeight - window.innerHeight;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    _this.$refs.warp.onscroll = function() {
      try {
        var scrollTop = _this.$refs.warp.scrollTop;
        if (scrollTop >= maxScroll - 3) {
          clearInterval(_this.interval);
          _this.$refs.listwarp.style.paddingTop = 0;
        }
      } catch (error) {
        console.log(error);
      }
    };
    this.$refs.openv.addEventListener("ended", function() {
      _this.opening_video = false;
      _this.openbg();
    });
  },
  methods: {
    openbg() {
      this.$refs.bg.play();
      self.controller = true;
      this.controller = true;
    },
    stopInterval() {
      self.controller = false;
      this.controller = false;
      // clearInterval(this.interval);
    },
    vuetouch(s, e) {
      console.log(s);
    }
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="less" scoped>
.night {
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  .openVideo {
    top: 0;
    left: 0;
    z-index: 2999;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #000000;
    video {
      width: 100%;
    }
    button {
      background: none;
      color: #ffffff;
      position: absolute;
      font-size: 2rem;
      bottom: 3rem;
      right: 5rem;
      border: none;
      cursor: pointer;
      outline: none;
    }
  }
  .feast-list {
    padding: 0 0 0 8.875rem;
    dl {
      font-family: "NotoSerifCJKsc";
      width: 100%;
      overflow: hidden;
      margin: 0 0 2.16666rem 0;
      dt {
        width: 100%;
        display: block;
        color: #754c24;
        font-size: 1.6666rem;
        margin: 0 0 1.08333rem 0;
      }
      dd {
        width: 50%;
        display: inline;
        float: left;
        margin: 0 0 4rem 0;
        strong {
          font-size: 2.5416666rem;
          display: inline-block;
          margin: 0 0 0.75rem -33px;
        }
        p {
          font-size: 0.5rem;
          font-family: Medium;
          margin: 0 0 0.25rem 0;
        }
      }
    }
  }
  .background-video {
    width: 100%;
    height: 100%;
    z-index: -1;
    min-height: 100vh;
    overflow: hidden;
    position: fixed;
  }
}
@media screen and (max-width: 1200px) {
  .night {
    .feast-list {
      padding: 100% 0 0 1rem;
    }
  }
}

@media screen and (max-width: 620px) {
  .night {
    .feast-list {
      dl {
        dd {
          strong {
            font-size: 2rem;
          }
        }
      }
    }
  }
}
</style>