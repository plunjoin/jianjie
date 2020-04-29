<template>
  <div class="space">
    <div class="transtion-video-warp" v-if="opening_video" ref="opening_video_warp">
      <video
        src="https://prugna.cn/video/space_transtion.mp4"
        ref="opening_video"
        playsinline
        muted
        autoplay
        @click="opening_video=false"
      ></video>
    </div>
    <div class="space-surface">
      <div class="space-menu" v-show="isTitle">
        <ul>
          <li
            :class="'jie-title-letter-spacing font-songti '+$i18n.locale"
            v-for="(e,i) in s"
            :key="i"
          >
            <a @click="link(`/spacelist?${e._id}`)">
              <span>【{{ $i18n.locale!='en'?e.name:e.en_name }}】</span>
            </a>
            <p>{{ $i18n.locale!='en'?e.cityaddress:e.en_cityaddress }}</p>
            <p>2019 09 09</p>
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
      opening_video: true,
      s: null
    };
  },
  mounted() {
    var _this = this;
    _this.$nextTick(function() {
      _this.s = _this.$store.state.All.space;
      console.log(_this.s);
    });
    if (window.innerWidth <= 640) {
      this.$refs.opening_video.src =
        "https://prugna.cn/video/34778d1bb3cd6740760f1dff83379c76.mp4";
      this.$refs.opening.play();
    }
    var _this = this;
    this.$refs.opening_video.addEventListener("ended", function() {
      _this.opening_video = false;
    });
  },
  methods: {
    link(url) {
      window.location.href = url;
    }
  }
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
    background-size: cover;
    background-position: center;
    .space-menu {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 13%;
      li {
        font-size: 1.5rem;
        margin: 1.65rem 0;
        opacity: 0.3;
        transition: 0.5s;
        a {
          margin-bottom: 0.5rem;
          display: inline-block;
          letter-spacing: 8px;
        }
        &.en {
          a {
            letter-spacing: 1px;
            font-size: 1.3rem;
            text-transform: capitalize;
          }
        }
        &:hover {
          opacity: 1;
        }
        p {
          text-indent: 1rem;
          font-size: 12px;
          font-family: Medium;
          margin: 0 0 0.25rem 0;
          text-transform: capitalize;
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

@media screen and (max-width: 640px) {
  .space {
    .space-surface {
      .space-menu {
        width: 100%;
        right: 0;
        li {
          span {
            display: inline-block;
          }
          &.en {
            a {
              letter-spacing: 1px;
              white-space: nowrap;
            }
          }
        }
        .en {
          width: 90%;
          margin: 1rem auto;
          opacity: 1;
          a {
            font-size: 1rem;
          }
          p {
            text-transform: capitalize;
            font-size: 0.1rem;
            text-indent: 9px;
            margin-top: 0.3rem;
            &:last-child {
              display: none;
            }
          }
        }
      }
    }
    .transtion-video-warp {
      video {
        width: auto;
      }
    }
  }
}
</style>