<template>
  <div class="jie-head-top">
    <div class="jie-head-wrap">
      <h1 v-bind:class="{active:isShow}">
        <router-link to="/">
          <img src="../assets/883486010602843048.png" width="20" alt />
        </router-link>
      </h1>
      <div :class="isShow?'menu-wap active ' + $i18n.locale:'menu-wap ' + $i18n.locale">
        <ul>
          <li v-bind:class="{active:count==0}" @click="clear();count=0">
            <router-link to="/night">{{ $t('nav.night') }}</router-link>
          </li>
          <li v-bind:class="{active:count==1}" @click="clear();count=1">
            <router-link to="/make">{{ $t('nav.make') }}</router-link>
          </li>
          <li v-bind:class="{active:count==2}" @click="clear();count=2">
            <router-link to="/space">{{ $t('nav.space') }}</router-link>
          </li>
          <li v-bind:class="{active:count==3}" @click="clear();count=3">
            <router-link to="/thing">{{ $t('nav.thing') }}</router-link>
          </li>
          <li v-bind:class="{active:count==4}" @click="count=4">
            <a href="#">{{ $t('nav.about') }}</a>
            <!-- <router-link to="/about">{{ $t('nav.about') }}</router-link> -->
          </li>
        </ul>
        <div class="tabs" v-bind:class="{active:isShow}">
          <div class="wapNavTab" v-bind:class="{active:count==4}">
            <div class="night-child">
              <div class="feast-list">
                <dl>
                  <dd v-bind:class="{active:aboutCount==0}">
                    <strong>
                      <router-link to="/lianxi" @click="aboutCount = 0">{{ $t("about.msg001") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/about" @click="aboutCount = 1">{{ $t("about.msg002") }}</router-link>
                    </strong>
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <strong>
                      <router-link to="/tiaowen" @click="aboutCount = 2">{{ $t("about.msg003") }}</router-link>
                    </strong>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="jie-lang">
          <div class="jie-lang-btns">
            <p>
              <span v-bind:class="{active:$i18n.locale=='zh'}" @click="changeLang('zh')">ZH &nbsp;</span>
              <span v-bind:class="{active:$i18n.locale=='en'}" @click="changeLang('en')">&nbsp; EN</span>
            </p>
          </div>
          <button class="jie-btn-clear" @click="editMenu()"></button>
        </div>
      </div>
      <button class="jie-btn-toggle" v-bind:class="{active:isShow}" @click="editMenu()">
        <span></span>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "wapHead",
  data() {
    return {
      count: 0,
      isShow: false,
      aboutCount: -1
    };
  },
  methods: {
    editMenu() {
      this.isShow = !this.isShow;
    },
    clear() {
      this.isShow = false;
    },
    changeLang(str) {
      this.$i18n.locale = str;
      this.clear();
    }
  },
  mounted() {
    this.$nextTick(function() {
      $("dd").click(() => {
        this.clear();
      });
    });
  }
};
</script>

<style lang="less">
.jie-head-top {
  .jie-head-wrap {
    .menu-wap {
      .tabs {
        display: none;
        &.active {
          display: block;
        }
      }
      .jie-lang {
        clear: both;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .jie-lang-btns {
          span {
            opacity: 0.5;
            &.active {
              opacity: 1;
            }
          }
        }
      }
      &.en {
        .tabs {
          .wapNavTab {
            text-align: center;
            .night-child {
              width: 50%;
              // float: right;
              display: inline-block;
              text-align: left;
              .feast-list {
                dd {
                  width: 100%;
                  font-size: 0.8rem;
                  text-transform: capitalize;
                  a {
                    opacity: 0.5;
                    &.router-link-active {
                      opacity: 1;
                      position: relative;
                      &::after {
                        content: "";
                        position: absolute;
                        left: -2rem;
                        top: 50%;
                        transform: translateY(-50%);
                        display: block;
                        border: 2px solid;
                        border-radius: 50%;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ul {
          overflow-x: hidden;
          display: block;
          clear: both;
          li {
            display: inline;
            text-transform: capitalize;
            white-space: nowrap;
            font-size: 1.3rem;
            font-weight: 100;
            float: left;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>