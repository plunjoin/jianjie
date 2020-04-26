<template>
  <div id="app">
    <wapHead></wapHead>
    <div class="jie-logo" :style="'transition: 1s;opacity:'+n">
      <h1>
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
      <div style="flex:1">
        <div
          id="nav"
          :class="'font-songti a '+$i18n.locale"
          @mouseover="saveIsTitleFalse()"
          @mouseout="saveIsTitleTrue()"
        >
          <router-link to="/night" @mouseover="saveIsTitleFalse()" @mouseout="saveIsTitleTrue()">
            <span :class="$i18n.locale">{{ $t('nav.night') }}</span>
            <div class="night-child">
              <div class="feast-list" ref="listwarp">
                <dl
                  v-for="(e,i) in nd"
                  :key="i"
                  v-bind:class="{active:i==rc}"
                  @click="returncount(rc,i)"
                >
                  <dt v-if="$i18n.locale!='en'" :class="$i18n.locale">{{ e.category.name }}</dt>
                  <dt v-else :class="$i18n.locale">{{ e.category.en_name }}</dt>
                  <dd v-for="(el,idx) in e.childs" :key="idx">
                    <strong v-if="$i18n.locale!='en'" @click="link(`/detail?${el._id}`)">
                      <a>{{ el.name }}</a>
                    </strong>
                    <strong v-else @click="link(`/detail?${el._id}`)">
                      <a>{{ el.en_name }}</a>
                    </strong>
                  </dd>
                  <div style="clear: both;"></div>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/buildgarden">
            <span :class="$i18n.locale">{{ $t('nav.make') }}</span>
            <div class="night-child">
              <div class="feast-list none" v-if="navdata">
                <dl class="active" v-for="(e,i) in navdata.buildgarden" :key="i">
                  <dd>
                    <strong @click="link(`/makechild?${e._id}`)">
                      <a>{{ $i18n.locale!='en'?e.name:e.en_name }}</a>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/space">
            <span :class="$i18n.locale">{{ $t('nav.space') }}</span>
            <div class="night-child">
              <div class="feast-list" v-if="navdata">
                <dl class="active" v-for="(e,i) in navdata.space" :key="i">
                  <dd>
                    <strong @click="link(`/spacelist?${e._id}`)">
                      <a to>{{ $i18n.locale!='en'?e.name:e.en_name }}</a>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
          <router-link to="/thing">
            <span :class="$i18n.locale">{{ $t('nav.thing') }}</span>
            <div class="night-child">
              <div class="feast-list" v-if="navdata">
                <dl
                  v-for="(el,idx) in navdata.thing"
                  :key="idx"
                  v-bind:class="{active:idx==lc}"
                  @click="thi(lc,idx)"
                >
                  <dt
                    :class="$i18n.locale"
                  >{{ $i18n.locale!='en'?el.category.name:el.category.en_name }}</dt>
                  <dd v-for="(e,i) in el.childs" :key="i">
                    <strong @click="link('/thingdatail?'+e._id)">
                      <a>{{ $i18n.locale!='en'?e.name:e.en_name }}</a>
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
                <dl class="active">
                  <dd>
                    <strong>
                      <router-link to="/lianxi">{{ $t("about.msg001") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl class="active">
                  <dd>
                    <strong>
                      <router-link to="/about">{{ $t("about.msg002") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl class="active">
                  <dd>
                    <strong>
                      <router-link to="/tiaowen">{{ $t("about.msg003") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl class="active">
                  <dd>
                    <strong>
                      <router-link to="/map">{{ $t("about.msg000") }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="change-lang" style="opacity:0.5">
        <span @click="changeLang('zh')" v-if="$i18n.locale=='en'">ZH &nbsp;</span>
        <span @click="changeLang('en')" v-else>&nbsp; EN</span>
      </div>
      <!-- <div class="audio">
        <audio id="audio" controls="controls" autoplay="autoplay" loop ref="au">
          <source src="@/assets/audio/bgaudio.mp3" type="audio/mpeg" />Your browser does not support the audio element.
        </audio>
      </div>-->
      <div class="both"></div>
    </div>
    <!-- <div class="upwarp" ref="up" v-if="false">
      <div class="jie-container">
        <div class="uptop" @click="returnUp()">UP</div>
      </div>
    </div>-->
    <router-view v-if="isAlive" />
    <div class="mb" v-bind:class="{active:!isTitle}"></div>
  </div>
</template>


<script>
import wapHead from "./components/WapHead";
import { mapState, mapMutations } from "vuex";
import $ from "jquery";
export default {
  name: "jianjie",
  provide() {
    return {
      reload: this.reload
    };
  },
  components: { wapHead },
  data() {
    return {
      rc: -1,
      lc: -1,
      conunt: 0,
      n: 0.3,
      mb: false,
      nd: null,
      lang: null,
      isAlive: true,
      navdata: null
    };
  },
  computed: mapState([
    "All",
    "menu",
    "thing",
    "isTitle",
    "footerList",
    "harry_winston",
    "defaultLang"
  ]),
  mounted() {
    var _this = this;
    if (localStorage.getItem("LANG")) {
      console.log(localStorage.getItem("LANG"));
      _this.$i18n.locale = _this.defaultLang;
    } else {
      console.log(_this.defaultLang);
      localStorage.setItem("LANG", "zh");
      _this.$i18n.locale = "zh";
    }

    async function all() {
      if (!sessionStorage.getItem("JIANJIE_CHINA_CLIENT_ALL_INFO")) {
        var allinfo = await _this.$axios.get("/all").then(res => res);
        _this.$store.commit("saveAll", allinfo);
        _this.nd = allinfo.banquet;
        _this.navdata = allinfo;
        sessionStorage.setItem(
          "JIANJIE_CHINA_CLIENT_ALL_INFO",
          JSON.stringify(allinfo)
        );
      } else {
        _this.All = JSON.parse(
          sessionStorage.getItem("JIANJIE_CHINA_CLIENT_ALL_INFO")
        );
      }
    }

    all();
    // document.querySelector("style").innerText += import(
    //   "@/lang/" + this.$i18n.locale + ".css"
    // );
    // this.$i18n.locale = 'en'
    _this.$i18n.messages[_this.$i18n.locale];
    _this.lang = _this.$i18n.messages[_this.$i18n.locale];
    this.$nextTick(function() {
      _this.navdata = _this.$store.state.All;
      _this.nd = _this.$store.state.All.banquet;
      window.onscroll = function() {
        // if (this.scrollY > this.innerHeight) {
        //   _this.$refs.up.style.display = "block";
        // } else {
        //   _this.$refs.up.style.display = "none";
        // }
      };
    });
  },
  methods: {
    ...mapMutations([
      "editMenu",
      "saveIsTitleTrue",
      "saveIsTitleFalse",
      "saveAll"
    ]),
    returnUp() {
      var interval = setInterval(function() {
        if (window.scrollY == 0) {
          clearInterval(interval);
        }
        document.body.scrollTop = window.scrollY - 50;
        document.documentElement.scrollTop = window.scrollY - 50;
      }, 1);
    },
    changeLang(str) {
      this.$i18n.locale = str;
      localStorage.setItem("LANG", str);

      return false;
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "zh";
        localStorage.setItem("LANG", "zh");
        // document.querySelector("style").innerText = import("@/lang/zh.css");
      } else {
        this.$i18n.locale = "en";
        localStorage.setItem("LANG", "en");
        // document.querySelector("style").innerText = import("@/lang/en.css");
      }
    },
    // handleCanplay() {
    //   this.$nextTick(() => {
    //     this.$refs.au.play();
    //   });
    // }
    reload() {
      this.isAlive = false;
      this.$nextTick(function() {
        this.isAlive = true;
      });
    },
    link(url) {
      window.location.href = url;
    },
    returncount(item, conunt) {
      if (item == conunt) {
        this.rc = -1;
      } else {
        this.rc = conunt;
      }
    },
    thi(item, cou) {
      if (item == cou) {
        this.lc = -1;
      } else {
        this.lc = cou;
      }
    }
  }
};
</script>
<style lang="less">
@import url("./less/reset.less");
</style>
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