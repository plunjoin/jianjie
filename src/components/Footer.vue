<template>
  <div class="jie-common-floor jie-container">
    <div class="jie-common-footer-wrap font-blod">
      <div class="footer-mian">
        <div
          class="jie-mian-item"
          v-for="(items,index) in footerList"
          :key="index"
          v-bind:class="{active:index==conunt}"
        >
          <span class="font-blod" @click="conunt = index">{{items.title}}</span>
          <a v-for="(item,i) in items.list" :key="i" href>{{ item }}</a>
        </div>

        <div class="jie-mian-contact">
          <a class="jie-icon jie-icon-message" href>在線顧問</a>
          <a class="jie-icon jie-icon-tel" href>400.1234.1324</a>
        </div>
      </div>
      <div class="footer-consult">
        <div class="footer-consult-content">
          <span>訂閱見芥電子咨詢</span>
          <p>
            通過訂閱,級代表您接收見芥的
            <a href>隱私政策條款</a>
          </p>
          <div class="jie-foot-email">電子郵件地址</div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>©2019Datenschutz Onlinewerbung/AGB</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      conunt: 0,
      footerList: [
        {
          title: "關注見芥",
          list: ["微信", "微博", "嗶哩嗶哩", "Instagram"]
        },
        {
          title: "關於公司",
          list: [
            "關於見芥",
            "道德規範",
            "職業發展",
            "細則及條款",
            "隱私與COOKIE",
            "企業信息"
          ]
        },
        {
          title: "購物幫助",
          list: ["支付相關", "配送", "退貨", "發票", "保養與維修"]
        },
        

        {
          title: "見芥服務",
          list: ["春節假期物流須知", "免費禮品包裝"]
        },
        
        {
          title: "需要幫助?",
          list: ["聯繫我們", "常見問題"]
        }
      ]
    };
  }
};
</script>

<style lang="less">
</style>