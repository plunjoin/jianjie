<template>
  <div class="jie-common-floor jie-container">
    <div class="jie-common-footer-wrap font-blod">
      <div class="footer-mian">
        <div
          class="jie-mian-item"
          v-for="(items,index) in $t('footer.footerList')"
          :key="index"
          v-bind:class="{active:index==conunt}"
        >
          <span
            :class="'font-blod jie-title-letter-spacing '+$i18n.locale"
            @click="idx(index)"
          >{{items.title}}</span>
          <a
            :class="item.icon? item.icon+' icon':''"
            v-for="(item,i) in items.list"
            :key="i"
            href
          >{{ item.title }}</a>
        </div>

        <div class="jie-mian-contact">
          <a
            :class="'jie-icon jie-icon-message jie-title-letter-spacing '+$i18n.locale"
            href
          >{{ $t('footer.msg1') }}</a>
          <a class="jie-icon jie-icon-tel" href>{{ $t('footer.msg2') }}</a>
        </div>
      </div>
      <div class="footer-consult">
        <div class="footer-consult-content">
          <span :class="'jie-title-letter-spacing '+$i18n.locale">{{ $t('footer.msg3') }}</span>
          <p>
            {{ $t('footer.msg5') }}
            <a href>{{ $t('footer.msg5') }}</a>
          </p>
          <div class="jie-foot-email">{{ $t('footer.msg6') }}</div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>{{ $t('footer.msg7') }}</p>
      <!-- <li v-for=""></li> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      conunt: 0,
      test: null
    };
  },
  mounted() {
    this.$axios.get("/content").then(res => {
      // this.test = JSON.parse(res[0].content);
      var data = JSON.parse(res[0].content);
      console.log(data);

      // console.log(JSON.parse(res[0].content));
    });
  },
  methods: {
    idx(idx) {
      idx == this.conunt ? (this.conunt = -1) : (this.conunt = idx);
    }
  }
};
</script>

<style lang="less">
.icon {
  display: block;
  padding-left: 20px;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 18px;
    height: 100%;
    top: 0;
    position: absolute;
    left: 0;
    background-size: 100%;
    background-repeat: no-repeat;
  }
}

.icon.wechat {
  &::after {
    background-image: url("../assets/icon/306aca576829a56865c656afc1568ace_.png");
  }
}

.icon.bilibili {
  &::after {
    background-image: url("../assets/icon/ab6470001d71f76a5bafc1cd250d3379_.png");
  }
}

.icon.sina {
  &::after {
    background-image: url("../assets/icon/2cb1d28f94c4cb45ce7948dc771aee6d_.png");
  }
}
.icon.ins {
  &::after {
    background-image: url("../assets/icon/d7fa6ada1ddd05b1a9af766573d1fa07_.png");
  }
}
@media screen and (max-width: 500px) {
  .icon {
    padding-left: 2rem !important;
    &::after {
      top: 1rem;
    }
  }
}
</style>