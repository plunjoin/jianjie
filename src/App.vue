<template>
  <div id="app">
    <wapHead></wapHead>
    <div class="jie-logo" :style="'transition: 1s;opacity:'+n">
      <h1 :title="lang.name">
        <router-link to="/">
          <img src="./assets/883486010602843048.png" alt />
        </router-link>
      </h1>
    </div>
    <div
      class="jie-common-floor-head"
      v-bind:class="{active:menu}"
      @mouseover="n=0;saveIsTitleFalse()"
      @mouseout="n=0.3;saveIsTitleTrue()"
    >
      <div class="change-lang" @click="changeLang()">ZH/EN</div>
      <div style="flex:1">
        <div
          id="nav"
          :class="'font-songti a'+$i18n.locale"
          @mouseover="saveIsTitleFalse()"
          @mouseout="saveIsTitleTrue()"
        >
          <router-link to="/night" @mouseover="saveIsTitleFalse()" @mouseout="saveIsTitleTrue()">
            <span :class="$i18n.locale">{{ $t('nav.night') }}</span>
            <div class="night-child">
              <div class="feast-list" ref="listwarp">
                <dl v-for="(e,i) in $t('night.ls')" :key="i">
                  <dt :class="$i18n.locale">{{ e.title }}</dt>
                  <dd v-for="(el,idx) in e.child" :key="idx">
                    <strong>
                      <router-link :to="'/detail/'+idx">{{ el.name }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/make">
            <span :class="$i18n.locale">{{ $t('nav.make') }}</span>
            <div class="night-child">
              <div class="feast-list">
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg001') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg002') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg003') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg004') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg005') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg006') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg007') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/makechild">{{ $t('make.msg008') }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/space">
            <span :class="$i18n.locale">{{ $t('nav.space') }}</span>
            <div class="night-child">
              <div class="feast-list">
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/spacelist">{{ $t('space.msg001') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/spacelist">{{ $t('space.msg002') }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/spacelist">{{ $t('space.msg003') }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/thing">
            <span :class="$i18n.locale">{{ $t('nav.thing') }}</span>
            <div class="night-child">
              <div class="feast-list">
                <dl v-for="(el,idx) in $t('thing.cate')" :key="idx">
                  <dt :class="$i18n.locale">{{ el.title }}</dt>
                  <dd v-for="(e,i) in el.child" :key="i">
                    <strong>
                      <router-link :to="'/thingdatail/'+i">{{ e }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/about">
            <span :class="$i18n.locale">{{ $t('nav.about') }}</span>
            <div class="night-child">
              <div class="feast-list">
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/lianxi">{{ $t("about.msg001") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/about">{{ $t("about.msg002") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/tiaowen">{{ $t("about.msg003") }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <!-- <div class="audio">
        <audio id="audio" controls="controls" autoplay="autoplay" loop ref="au">
          <source src="@/assets/audio/bgaudio.mp3" type="audio/mpeg" />Your browser does not support the audio element.
        </audio>
      </div>-->
      <div class="both"></div>
    </div>
    <div class="upwarp" ref="up">
      <div class="jie-container">
        <div class="uptop" @click="returnUp()">UP</div>
      </div>
    </div>
    <router-view />
    <div class="mb" v-bind:class="{active:!isTitle}"></div>
  </div>
</template>

<style lang="less">
@import url("./less/reset.less");
</style>

<script>
import wapHead from "./components/WapHead";
import { mapState, mapMutations } from "vuex";
import $ from "jquery";
export default {
  name: "jianjie",
  components: { wapHead },
  data() {
    return {
      conunt: 0,
      n: 0.3,
      mb: false,
      lang: null
    };
  },
  computed: mapState([
    "menu",
    "footerList",
    "isTitle",
    "thing",
    "harry_winston"
  ]),
  mounted() {
    // document.querySelector("style").innerText += import(
    //   "@/lang/" + this.$i18n.locale + ".css"
    // );
    var _this = this;
    // this.$i18n.locale = 'en'
    _this.$i18n.messages[_this.$i18n.locale];
    _this.lang = _this.$i18n.messages[_this.$i18n.locale];
    this.$nextTick(function() {
      // function play() {
      //   var music = document.getElementById("audio"); //判断如果音乐停止播放中，就让他播放。。。
      //   if (music.paused) {
      //     music.paused = false;
      //     music.play();
      //   }
      // } //调用函数
      // setInterval(play(), 1);
      // document.getElementById("app").addEventListener("click", function() {
      //   _this.$refs.au.play();
      //   console.log(123);
      // });
      window.onscroll = function() {
        if (this.scrollY > this.innerHeight) {
          _this.$refs.up.style.display = "block";
        } else {
          _this.$refs.up.style.display = "none";
        }
      };
    });
  },
  methods: {
    ...mapMutations(["editMenu", "saveIsTitleTrue", "saveIsTitleFalse"]),
    returnUp() {
      var interval = setInterval(function() {
        if (window.scrollY == 0) {
          clearInterval(interval);
        }
        document.body.scrollTop = window.scrollY - 50;
        document.documentElement.scrollTop = window.scrollY - 50;
      }, 1);
    },
    changeLang() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "zh";
        // document.querySelector("style").innerText = import("@/lang/zh.css");
      } else {
        this.$i18n.locale = "en";
        // document.querySelector("style").innerText = import("@/lang/en.css");
      }
    }
    // handleCanplay() {
    //   this.$nextTick(() => {
    //     this.$refs.au.play();
    //   });
    // }
  }
};
</script>

<style lang="less">
.mb {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 1s;
  opacity: 0;
  background: #000000;
  &.active {
    z-index: 3;
    opacity: 0.75;
  }
}
.audio {
  display: none;
  position: fixed;
  z-index: 9999999;

  .audio {
    position: absolute;
  }
}
.upwarp {
  display: none;
  position: fixed;
  bottom: 3rem;
  width: 100%;
  z-index: 1;
  .uptop {
    float: right;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: #ffffff88;
    display: inline-block;
    font-size: 21px;
    text-align: center;
    margin-right: -40px;
    line-height: 33px;
  }
}
</style>