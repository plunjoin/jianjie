<template>
  <div class="night" ref="warp">
    <!-- <div class="openVideo" v-if="opening_video">
      <video
        src="https://prugna.cn/video/d298e38b9e634d4320d66f1f2341d841.mp4"
        width="100%"
        muted
        autoplay
        playsinline
        @click="opening_video=false;openbg()"
        ref="openv"
      ></video>
    </div>-->
    <div class="background-video">
      <video
        @click="startInterval()"
        loop
        ref="bg"
        muted
        width="100%"
        playsinline
        autoplay
        class="bg"
        src="https://prugna.cn/video/51b954ecf7678a47d08441786a5f5bd6.mp4"
      ></video>
      <video
        loop
        ref="wapbg"
        class="wapbg"
        @click="startInterval()"
        muted
        width="100%"
        playsinline
        autoplay
        src="https://prugna.cn/video/257990ffbde6a101cb28ed5f33856c98.mp4"
      ></video>
    </div>
    <div class="feast-list" ref="listwarp" @click="startInterval()">
      <dl :class="'font-songti ' + $i18n.locale" v-for="(e,i) in $t('night.ls')" :key="i">
        <dt>{{ e.title }}</dt>
        <dd v-for="(el,idx) in e.child" :key="idx">
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link :to="'/detail/'+idx">【 {{ el.name }} 】</router-link>
          </strong>
          <p>{{ el.add }}</p>
          <p>{{ el.time }}</p>
        </dd>
      </dl>
    </div>
    <div class="feast-list" ref="copy">
      <dl :class="$i18n.locale" v-for="(e,i) in $t('night.ls')" :key="i">
        <dt>{{ e.title }}</dt>
        <dd v-for="(el,idx) in e.child" :key="idx">
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link :to="'/detail/'+idx">【 {{ el.name }} 】</router-link>
          </strong>
          <p>{{ el.add }}</p>
          <p>{{ el.time }}</p>
        </dd>
      </dl>
    </div>
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
      opening_video: true,
      controller: true,
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
    this.$refs.bg.controls = false;
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
    startInterval() {
      self.controller = true;
      this.controller = true;
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
    padding: 100vh 0 0 8.875rem;
    dl {
      // font-family: "NotoSerifCJKsc";
      width: 100%;
      overflow: hidden;
      margin: 0 0 2.16666rem 0;
      &.en {
        dt {
          font-size: 1.2rem;
          padding: 0 1rem;
        }
        dd {
          padding: 0 1rem;
          strong {
            text-transform: capitalize;
            font-size: 2rem;
          }
        }
      }
      dt {
        width: 100%;
        display: block;
        color: #754c24;
        font-weight: 600;
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
          font-weight: 100;
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
.wapbg {
  display: none;
}
@media screen and (max-width: 1200px) {
  .night {
    .feast-list {
      padding: 100vh 0 0 1rem;
    }
    .wapbg {
      display: none;
    }
  }
}

@media screen and (max-width: 640px) {
  .night {
    .feast-list {
      dl {
        dd {
          width: 100%;
          strong {
            width: 100%;
            font-size: 2rem;
            margin: 0 0 0.75rem -20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
    .bg {
      display: none;
    }
    .wapbg {
      display: block;
    }
  }
}
</style>