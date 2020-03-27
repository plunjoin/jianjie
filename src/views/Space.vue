<template>
  <div class="space">
    <div class="transtion-video-warp" v-if="opening_video" ref="opening_video_warp">
      <video
        src="https://prugna.cn/video/space_transtion.mp4"
        ref="opening_video"
        muted
        autoplay
        @click="opening_video=false"
      ></video>
    </div>
    <div class="space-surface">
      <div class="space-menu" v-show="isTitle">
        <ul>
          <li :class="'jie-title-letter-spacing '+$i18n.locale">
            <router-link to="/spacelist">【{{ $t('space.msg001') }}】</router-link>
          </li>
          <li :class="'jie-title-letter-spacing '+$i18n.locale">
            <router-link to="/spacelist">【{{ $t('space.msg002') }}】</router-link>
          </li>
          <li :class="'jie-title-letter-spacing '+$i18n.locale">
            <router-link to="/spacelist">【{{ $t('space.msg003') }}】</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["isTitle"]),
  data() {
    return {
      opening_video: true
    };
  },
  mounted() {
    var _this = this;
    this.$refs.opening_video.addEventListener("ended", function() {
      _this.opening_video = false;
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.space {
  .space-surface {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-image: url("../assets/image/space/WechatIMG5876.jpg");
    background-size: 110%;
    background-position: center;
    .space-menu {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20%;
      li {
        letter-spacing: 8px;
        font-size: 2rem;
        margin: 1.65rem 0;
        opacity: 0.3;
        transition: 0.5s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .transtion-video-warp {
    position: fixed;
    width: 100%;
    z-index: 999;
    height: 100%;
    background-color: #000;
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
}
</style>