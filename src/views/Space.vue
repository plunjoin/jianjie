<template>
  <div class="space">
    <div class="transtion-video-warp" v-if="opening_video" ref="opening_video">
      <video src="https://prugna.cn/video/space_transtion.mp4" muted autoplay @click="opening_video=false"></video>
    </div>
    <div class="space-surface">
      <div class="space-menu" v-show="isTitle">
        <ul>
          <li>
            <router-link to="/spacelist">【見芥·石虎 空間】</router-link>
          </li>
          <li>
            <router-link to="/spacelist">【廣州悅睦堂會所】</router-link>
          </li>
          <li>
            <router-link to="/spacelist">【苏州本色美术馆】</router-link>
          </li>
          <li>
            <router-link to="/spacelist">【营造学舍】</router-link>
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
    this.$refs.opening_video.addEventListener("ended", function() {
      this.opening_video = false;
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
    background-size: 100%;
    .space-menu {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20%;
      li {
        font-size: 1.75rem;
        margin: 2.65rem 0;
      }
    }
  }
  .transtion-video-warp {
    position: fixed;
    width: 100%;
    z-index: 999;
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