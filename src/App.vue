<template>
  <div id="app">
    <div class="jie-logo" :style="'transition: 1s;opacity:'+n">
      <h1 title="见芥">
        <router-link to="/">
          <img src="./assets/883486010602843048.png" alt />
        </router-link>
      </h1>
    </div>
    <div
      class="jie-common-floor-head"
      v-bind:class="{active:menu}"
      @mouseover="n=0"
      @mouseout="n=1"
    >
      <div class="jie-head-top">
        <div class="jie-head-wrap">
          <h1>
            <router-link to="/">見芥</router-link>
          </h1>
          <button class="jie-btn-toggle" @click="editMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="nav"
        class="font-songti"
        @mouseover="saveIsTitleFalse()"
        @mouseout="saveIsTitleTrue()"
      >
        <router-link to="/night" @mouseover="saveIsTitleFalse()" @mouseout="saveIsTitleTrue()">
          <span>夜宴</span>
          <div class="night-child">
            <div class="feast-list" ref="listwarp">
              <dl>
                <dt>HARRY WINSTON & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail/0">望隆鄉國</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail/1">佳山有緣</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>Hennessy X.O & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">醉花陰</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">鳳求凰</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>阿里巴巴 & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">萬芊斜</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">歸隱</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">太極極古</router-link>
                  </strong>
                </dd>

                <dd>
                  <strong>
                    <router-link to="/detail">外灘·午宴</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">深竹月</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">阿里議事</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">歸來遇秋</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">鏡花水月</router-link>
                  </strong>
                </dd>
                <dd>
                  <strong>
                    <router-link to="/detail">歸來遇秋</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>蘇州棠頌 & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">遇棠富貴</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>龍宮 & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">龍宮</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>枚青 & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">紅樓小宴</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>阿姆斯特丹 & 見芥</dt>
                <dd>
                  <strong>
                    <router-link to="/detail">他鄉亦貴</router-link>
                  </strong>
                </dd>
              </dl>
            </div>
          </div>
        </router-link>
        <router-link to="/make">
          <span>造園</span>
          <div class="night-child">
            <div class="feast-list">
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">林泉高致</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">梅小姐花園</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">莫奈花園</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">濠濮間想</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">西湖山莊</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">虞宅</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">西湖私宅</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/makechild">AV庭院</router-link>
                  </strong>
                </dd>
              </dl>
            </div>
          </div>
        </router-link>
        <router-link to="/space">
          <span>空間</span>
          <div class="night-child">
            <div class="feast-list">
              <dl>
                <dd>
                  <strong>
                    <router-link to="/spacelist">見芥·石虎 空間</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/spacelist">廣州悅睦堂會所</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/spacelist">苏州本色美术馆</router-link>
                  </strong>
                </dd>
              </dl>
            </div>
          </div>
        </router-link>
        <router-link to="/thing">
          <span>長物</span>
          <div class="night-child">
            <div class="feast-list">
              <dl>
                <dt>石玩</dt>
                <dd v-for="(e,i) in thing" :key="i">
                  <strong>
                    <router-link :to="'/thingdatail/'+i">{{ e.title }}</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dt>器物</dt>
                <dd>
                  <strong><router-link to="/thingdatail/1">茶器</router-link></strong>
                </dd>
                <dd>
                  <strong><router-link to="/thingdatail/2">酒器</router-link></strong>
                </dd>
                <dd>
                  <strong><router-link to="/thingdatail/3">食器</router-link></strong>
                </dd>
              </dl>
              <dl>
                <dt>家具</dt>
              </dl>
              <dl>
                <dt>首飾</dt>
              </dl>
            </div>
          </div>
        </router-link>
        <router-link to="/about">
          <span>我</span>
          <div class="night-child">
            <div class="feast-list">
              <dl>
                <dd>
                  <strong>
                    <router-link to="/about">聯繫我們</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/about">工作機會</router-link>
                  </strong>
                </dd>
              </dl>
              <dl>
                <dd>
                  <strong>
                    <router-link to="/about">法律條文</router-link>
                  </strong>
                </dd>
              </dl>
            </div>
          </div>
        </router-link>
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
  </div>
</template>

<style lang="less">
@import url("./less/reset.less");
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      conunt: 0,
      n: 1
    };
  },
  name: "jiezi",
  computed: mapState([
    "menu",
    "footerList",
    "isTitle",
    "thing",
    "harry_winston"
  ]),
  mounted() {
    var _this = this;
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