<template>
  <div class="jie-head-top">
    <div class="jie-head-wrap">
      <h1>
        <router-link to="/">
          <img src="../assets/883486010602843048.png" width="20" alt />
        </router-link>
      </h1>
      <div class="menu-wap" v-bind:class="{active:isShow}">
        <ul>
          <li @click="count=0">
            {{ $t('nav.night') }}
            <!-- <router-link to="/night">{{ $t('nav.night') }}</router-link> -->
          </li>
          <li @click="count=1">
            {{ $t('nav.make') }}
            <!-- <router-link to="/make">{{ $t('nav.make') }}</router-link> -->
          </li>
          <li @click="count=2">
            {{ $t('nav.space') }}
            <!-- <router-link to="/space">{{ $t('nav.space') }}</router-link> -->
          </li>
          <li @click="count=3">
            {{ $t('nav.thing') }}
            <!-- <router-link to="/thing">{{ $t('nav.thing') }}</router-link> -->
          </li>
          <li @click="count=4">
            {{ $t('nav.about') }}
            <!-- <router-link to="/about">{{ $t('nav.about') }}</router-link> -->
          </li>
        </ul>
        <div class="tabs" v-bind:class="{active:isShow}">
          <div class="wapNavTab" v-bind:class="{active:count==0}">
            <div class="night-child">
              <div class="feast-list" ref="listwarp">
                <dl v-for="(e,i) in $t('night.ls')" :key="i">
                  <dt :class="$i18n.locale">{{ e.title }}</dt>
                  <dd v-for="(el,idx) in e.child" :key="idx">
                    <strong>
                      <router-link :to="'/detail/'+idx">{{ el.name }}</router-link>
                    </strong>
                  </dd>
                  <div class="both"></div>
                </dl>
              </div>
            </div>
          </div>
          <div class="wapNavTab" v-bind:class="{active:count==1}">
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
          </div>
          <div class="wapNavTab" v-bind:class="{active:count==2}">
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
          </div>
          <div class="wapNavTab" v-bind:class="{active:count==3}">
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
          </div>
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
}
</style>