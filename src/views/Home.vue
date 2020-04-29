<template>
  <div class="home">
    <video
      src="https://jianjie.oss-cn-hongkong.aliyuncs.com/static/home_background.mp4"
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
    var _this = this;
     if (window.innerWidth <= 640) {
      this.$refs.home.src =
        "https://prugna.cn/video/1d7158c284a4ea82bde74126f5e949e9.mp4";
      this.$refs.home.play();
      this.$refs.opening.src =
        "https://prugna.cn/video/e4ef23c69280f878a3c1456c0621b9c1.mp4";
      this.$refs.opening.play();
    }
  },
  methods: {}
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
</style>
