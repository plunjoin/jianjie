<template>
  <div class="jie-head-top">
    <div class="jie-head-wrap">
      <h1 v-bind:class="{active:isShow}">
        <router-link to="/">
          <img src="../assets/883486010602843048.png" width="20" alt />
        </router-link>
      </h1>
      <div class="menu-wap" v-bind:class="{active:isShow}">
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
            {{ $t('nav.about') }}
            <!-- <router-link to="/about">{{ $t('nav.about') }}</router-link> -->
          </li>
        </ul>
        <div class="tabs" v-bind:class="{active:isShow}">
          <div class="wapNavTab" v-bind:class="{active:count==4}">
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
          </div>
        </div>
        <div class="jie-lang">
          <div class="jie-lang-btns">
            <p>
              <span v-bind:class="{active:$i18n.locale=='zh'}" @click="changeLang('zh')">ZH </span>
              <span v-bind:class="{active:$i18n.locale=='en'}" @click="changeLang('en')"> EN</span>
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
      isShow: false
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
      this.clear()
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
.menu-wap {
  .tabs {
    display: none;
    &.active {
      display: block;
    }
  }
  .jie-lang {
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
}
</style>