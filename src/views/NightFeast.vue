<template>
  <div class="night" ref="warp">
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
      <dl :class="'font-songti ' + $i18n.locale" v-for="(e,i) in nd" :key="i">
        <dt v-if="$i18n.locale!='en'">{{ e.cate.name }}</dt>
        <dt v-else>{{ e.cate.en_name }}</dt>
        <dd v-for="(el,idx) in e.data" :key="idx">
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link :to="'/detail?'+el._id">
              <span v-if="$i18n.locale!='en'">【 {{ el.name }} 】</span>
              <span v-else>【 {{ el.en_name }} 】</span>
            </router-link>
          </strong>
          <p v-if="$i18n.locale!='en'">{{ el.cityaddress }}</p>
          <p v-else>{{el.en_cityaddress}}</p>
          <p>{{ el.date }}</p>
        </dd>
      </dl>
    </div>
    <!-- <div class="feast-list" ref="copy">
      <dl :class="'font-songti ' + $i18n.locale" v-for="(e,i) in nd" :key="i">
        <dt v-if="$i18n.locale!='en'">{{ e.cate.name }}</dt>
        <dt v-else>{{ e.cate.en_name }}</dt>
        <dd v-for="(el,idx) in e.data" :key="idx">
          <strong @mouseover="controller = false" @mouseout="controller = true">
            <router-link :to="'/detail/'+el._id">
              <span v-if="$i18n.locale!='en'">【 {{ el.name }} 】</span>
              <span v-else>【 {{ el.en_name }} 】</span>
            </router-link>
          </strong>
          <p v-if="$i18n.locale!='en'">{{ el.cityaddress }}</p>
          <p v-else>{{el.en_cityaddress}}</p>
          <p>{{ el.date }}</p>
        </dd>
      </dl>
    </div>-->
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
      nd: null,
      interval: setInterval(function() {
        if (self.controller) {
          if (self.$refs.warp.scrollTop >= self.$refs.listwarp.scrollHeight) {
            // self.$refs.warp.scrollTop = 0;
          }
          self.$refs.warp.scrollTop += 2;
        } else {
        }
      }, 20)
    };
  },
  computed: {},
  mounted() {
    var _this = this;
    async function banquet_allfun() {
      let banquets = [];
      var cate = await _this.$axios.get("/api/banquet_cate").then(res => res);
      var all = await _this.$axios.get("/api/banquet_all").then(res => res);
      cate.forEach(el => {
        var child = [];
        all.forEach((el_, i) => {
          if (el_.cate._id == el._id) {
            child.push(el_);
          }
        });
        banquets.push({ cate: el, data: child });
      });
      _this.nd = banquets;
      console.log(banquets);
      console.log("完毕");
    }

    banquet_allfun();

    this.$nextTick(() => {});
    this.$refs.bg.controls = false;
    var _this = this,
      maxScroll = _this.$refs.warp.scrollHeight + window.innerHeight / 2;
    console.log("max" + maxScroll);

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
    _this.$refs.warp.onscroll = function() {
      try {
        var scrollTop = _this.$refs.warp.scrollTop;
        if (scrollTop >= maxScroll - 3) {
          clearInterval(_this.interval);
          // _this.$refs.listwarp.style.paddingTop = 0;
          _this.$refs.listwarp.style.marginBottom = 0;
          _this.$refs.listwarp.style.scrollTop = 0;
        }
      } catch (error) {
        console.log(error);
      }
    };
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
    margin-bottom: 100vh;
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