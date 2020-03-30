<template>
  <div class="home">
    <div class="opening" ref="openwarp" @click="clearVideo()">
      <video
        ref="opening"
        class="opening-video"
        src="https://prugna.cn/video/73cb572e1b62e81eaa1d501a916b2bf7.mp4"
        muted
        autoplay
        width="100%"
        playsinline
      ></video>
      <img
        src="@/assets/logo.png"
        class="opening-logo"
        width="50%"
        alt
        ref="logo"
        @click="clearLogo()"
      />
      <img
        src="@/assets/jianjie.png"
        class="opening-jianjie"
        width="70%"
        alt
        ref="jianjie"
        @click.stop="clearJianjie($event)"
      />
    </div>
    <video
      src="https://prugna.cn/video/home.1066ffdc.mp4"
      ref="home"
      width="100%"
      muted
      autoplay
      playsinline
      loop
    ></video>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    if (window.innerWidth <= 640) {
      this.$refs.home.src =
        "https://prugna.cn/video/1d7158c284a4ea82bde74126f5e949e9.mp4";
      this.$refs.home.play();
      this.$refs.opening.src =
        "https://prugna.cn/video/e4ef23c69280f878a3c1456c0621b9c1.mp4";
      this.$refs.opening.play();
    }
    var _this = this;
    this.$refs.opening.addEventListener("ended", function() {
      this.style.display = "none";
      _this.$refs.logo.style.opacity = "1";
      setTimeout(function() {
        _this.$refs.logo.style.opacity = "0";
        _this.$refs.logo.style.display = "none";
        _this.$refs.jianjie.style.opacity = "1";
        setTimeout(function() {
          _this.$refs.jianjie.style.opacity = "0";
          setTimeout(() => {
            _this.$refs.openwarp.style.display = "none";
          }, 2000);
        }, 5000);
      }, 2000);
      // _this.$router.push({ path: "/night" });
    });
  },
  methods: {
    clearVideo() {
      var _this = this;
      _this.$refs.opening.style.display = "none";
      _this.$refs.logo.style.opacity = "1";

      setTimeout(function() {
        _this.$refs.logo.style.opacity = "0";
        _this.$refs.logo.style.display = "none";
        _this.$refs.jianjie.style.opacity = "1";
        setTimeout(function() {
          _this.$refs.jianjie.style.opacity = "0";
          _this.$refs.openwarp.style.display = "none";
        }, 5000);
      }, 2000);
      // _this.$router.push({ path: "/night" });
    },
    clearLogo() {
      var _this = this;
      _this.$refs.logo.style.opacity = "0";
      _this.$refs.logo.style.display = "none";
      _this.$refs.jianjie.style.opacity = "1";
      setTimeout(function() {
        _this.$refs.jianjie.style.opacity = "0";
        _this.$refs.openwarp.style.display = "none";
      }, 5000);
    },
    clearJianjie(e) {
      console.log(e.target);
      var _this = this;
      _this.$refs.jianjie.style.opacity = "0";
      setTimeout(() => {
        _this.$refs.openwarp.style.display = "none";
      }, 2000);
    }
  }
};
</script>

<style lang="less">
.home {
  background: #000000;
  max-height: 100vh;
  overflow: hidden;
  .background-video {
    position: relative;
  }
  .feast-list {
    position: absolute;
  }
}
.opening {
  background: #000;
  text-align: center;
  width: 100%;
  height: 100%;
  img,
  video {
    display: inline-block;
    transition: 5s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .opening-video {
    z-index: 3;
    opacity: 1;
  }

  .opening-logo {
    opacity: 0;
    z-index: 2;
  }

  .opening-jianjie {
    z-index: 1;
    opacity: 0;
  }
}
@media screen and (max-width: 620px) {
  .opening {
    .opening-jianjie {
      transform: scale(1.2) translate(-50%, -50%);
      width: 100%;
    }
  }
}
</style>
