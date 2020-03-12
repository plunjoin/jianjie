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
      <dl>
        <dt>HARRY WINSTON & 見芥</dt>
        <dd>
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link to="/detail/0">【 望隆鄉國 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail/1">【 佳山有緣 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>Hennessy X.O & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 醉花陰 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 鳳求凰 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>阿里巴巴 & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 萬芊斜 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 歸隱 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 太極極古 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>

        <dd>
          <strong>
            <router-link to="/detail">【 外灘·午宴 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 深竹月 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 阿里議事 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 歸來遇秋 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 鏡花水月 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
        <dd>
          <strong>
            <router-link to="/detail">【 歸來遇秋 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>蘇州棠頌 & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 遇棠富貴 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>龍宮 & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 龍宮 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>枚青 & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 紅樓小宴 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
      <dl>
        <dt>阿姆斯特丹 & 見芥</dt>
        <dd>
          <strong>
            <router-link to="/detail">【 他鄉亦貴 】</router-link>
          </strong>
          <p>Anlu, Shanghai, Chin</p>
          <p>2019 08 27 - 08 30</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import touch from "@/common/touch/touch";
export default {
  name: "night",
  data() {
    const self = this;
    return {
      opening_video: true,
      controller: false,
      interval: setInterval(function() {
        if (self.controller) {
          self.$refs.warp.scrollTop += 2;
        } else {
        }
      }, 20)
    };
  },
  computed: {},
  mounted() {
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
    padding: 100% 0 0 8.875rem;
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