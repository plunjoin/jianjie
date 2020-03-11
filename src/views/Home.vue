<template>
  <div class="home">
    <div class="opening" ref="openwarp" @click="clearVideo()">
      <video ref="opening" src="https://cdn.jsdelivr.net/gh/plunjoin/right@ideo/before.mp4" muted autoplay width="100%"></video>
      <img src="@/assets/logo.png" width="50%" alt ref="logo" />
      <img src="@/assets/jianjie.png" width="70%" alt ref="jianjie" />
    </div>
    <video src="https://prugna.cn/video/home.1066ffdc.mp4" width="100%" muted autoplay loop></video>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
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
          _this.$refs.openwarp.style.display = "none";
        }, 5000);
      }, 2000);
      // _this.$router.push({ path: "/night" });
    });
  },
  methods: {
    clearVideo() {
      console.log(123);
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
  img {
    display: inline-block;
    transition: 1s;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
