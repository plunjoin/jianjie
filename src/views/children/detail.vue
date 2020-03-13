<template>
  <div class="jie-content">
    <div class="jie-layer-head" :style="'background-image:url('+info.bg_img_url+')'">
      <div class="context">
        <div class="prev"></div>
        <div class="next"></div>
      </div>
      <div class="jie-layer-head-comtent" v-show="isTitle">
        <h2 class="font-songti">{{ info.name }}</h2>
        <hr />
        <h3 class="font-songti">{{ info.category_name }}</h3>
        <p>{{ info.introduction }}</p>
      </div>
    </div>
    <div class="jie-layer-video">
      <video width="100%" autoplay muted controls :src="info.bg_video_url"></video>
      <!-- <video src muted autoplay width="100%"></video> -->
    </div>
    <div class="jie-layer-tab">
      <div class="tab-title-warp">
        <ul>
          <li
            v-for="(item,index) in info.view_group"
            :key="index"
            v-bind:class="{active:tabIndex==index}"
            @click="selected(item.contents,index)"
          >{{ item.title }}</li>
        </ul>
      </div>
      <div
        class="jie-layer-tab-warp"
        v-for="(items,index) in info.view_group"
        :key="index"
        v-show="tabIndex==index"
      >
        <p>
          <span>{{ realIndex+1 }}/{{ items.imgs.length }}</span>
        </p>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide :key="index" v-for="(item,index) in items.imgs">
            <img v-if="item.type == 0" :src="item.url" alt />
            <div v-else class="video">
              <video :src="item.url" autoplay muted loop height="100%"></video>
            </div>
            <p class="item-text">{{ item.text }}</p>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev jie-prev" slot="button-prev"></div>
          <div class="swiper-button-next jie-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="jie-tabloid" v-if="false">
      <div class="jie-tabloid-row">
        <table>
          <tr>
            <td>導演：</td>
            <td>侃侃</td>
          </tr>
          <tr>
            <td>出品：</td>
            <td>見芥</td>
          </tr>
          <tr>
            <td>品牌：</td>
            <td>Harry Winston</td>
          </tr>
          <tr>
            <td>時間：</td>
            <td>二零一九年 十月十七日 至 十月二十日</td>
          </tr>
          <tr>
            <td>場地：</td>
            <td>上海·朱家角·安麓</td>
          </tr>
          <tr>
            <td>建築：</td>
            <td>明·五鳳樓 清·古戲台</td>
          </tr>
          <tr>
            <td>場次：</td>
            <td>六場</td>
          </tr>

          <tr>
            <td>顧問 ：</td>
            <td>羅丹 海波</td>
          </tr>
          <tr>
            <td>空間營造：</td>
            <td>侃侃 謝應岷 徐波 黃晨昊 林阿琴</td>
          </tr>
          <tr>
            <td>硬質搭建：</td>
            <td>Four Joints</td>
          </tr>
          <tr>
            <td>場務：</td>
            <td>呂滕 阿柯</td>
          </tr>
          <tr>
            <td>園林營造：</td>
            <td>侃侃 謝應岷</td>
          </tr>
          <tr>
            <td>園林施工：</td>
            <td>園居生活</td>
          </tr>
          <tr>
            <td>黑松：</td>
            <td>樹齡·三百年 豐璟園</td>
          </tr>
          <tr>
            <td>花藝裝置：</td>
            <td>侃侃 徐波 Lamoda朱雅娜 黃晨昊</td>
          </tr>
          <tr>
            <td>洞簫：</td>
            <td>李瑞 簫</td>
          </tr>
          <tr>
            <td>琵琶：</td>
            <td>沁儒</td>
          </tr>
          <tr>
            <td>舞蹈：</td>
            <td>Amy Grubb 遠波 範璐 劉琦琦</td>
          </tr>
          <tr>
            <td>音樂編排：</td>
            <td>侃侃</td>
          </tr>
          <tr>
            <td>舞美指導 ：</td>
            <td>侃侃</td>
          </tr>
          <tr>
            <td>化妝師：</td>
            <td>覃雲</td>
          </tr>
          <tr>
            <td>造型師：</td>
            <td>周童</td>
          </tr>
          <tr>
            <td>服裝鳴謝：</td>
            <td>徐蕊 Amiya</td>
          </tr>
          <tr>
            <td>燈光指導：</td>
            <td>侃侃</td>
          </tr>
          <tr>
            <td>燈光：</td>
            <td>喬琪 李偉</td>
          </tr>
          <tr>
            <td>秀導：</td>
            <td>Stephen Yuan</td>
          </tr>
          <tr>
            <td>攝影：</td>
            <td>小野 陳波 陳文德 佳麗</td>
          </tr>
          <tr>
            <td>攝像指導：</td>
            <td>侃侃 徐波 佳麗</td>
          </tr>
          <tr>
            <td>攝像：</td>
            <td>林坤威 宋志超 冼浩堅</td>
          </tr>
          <tr>
            <td>剪輯：</td>
            <td>林坤威</td>
          </tr>
          <tr>
            <td>盆景：</td>
            <td>西廬園 庭芳園</td>
          </tr>
          <tr>
            <td>盆景類目：</td>
            <td>台灣針柏 赤松 黑松 山紅葉 系魚川真柏</td>
          </tr>
          <tr>
            <td>古董：</td>
            <td>李訓權 王瑾 趙文龍 「見芥」</td>
          </tr>
          <tr>
            <td>古董類目：</td>
            <td>乾隆御賜匾額·「望隆鄉國」見芥</td>
          </tr>
          <tr>
            <td></td>
            <td>清·櫸木圈椅</td>
          </tr>
          <tr>
            <td></td>
            <td>明式四出頭椅</td>
          </tr>
          <tr>
            <td></td>
            <td>唐·白石佛身</td>
          </tr>
          <tr>
            <td></td>
            <td>宋·青石蓮花座</td>
          </tr>
          <tr>
            <td></td>
            <td>明·白石柱礎</td>
          </tr>
          <tr>
            <td></td>
            <td>清·白石三拿供桌</td>
          </tr>
          <tr>
            <td></td>
            <td>清·陶制荷花缸</td>
          </tr>
          <tr>
            <td></td>
            <td>明·請石祥獅</td>
          </tr>
          <tr>
            <td></td>
            <td>明·官造旗桿座</td>
          </tr>
          <tr>
            <td></td>
            <td>明·青石盆</td>
          </tr>
          <tr>
            <td></td>
            <td>太湖石立峰</td>
          </tr>
          <tr>
            <td></td>
            <td>明式髹黑漆雲耳大畫案</td>
          </tr>
          <tr>
            <td></td>
            <td>明式綠端石刀牙板畫桌</td>
          </tr>
          <tr>
            <td></td>
            <td>明式厚面翹頭馬蹄大案</td>
          </tr>
          <tr>
            <td></td>
            <td>青銅花觚</td>
          </tr>
          <tr>
            <td></td>
            <td>青銅鼎</td>
          </tr>
          <tr>
            <td></td>
            <td>銅鎏金鑲嵌八寶瑞獸香薰</td>
          </tr>
          <tr>
            <td></td>
            <td>明·青銅獅香熏</td>
          </tr>
          <tr>
            <td></td>
            <td>清·黃料器天球瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>清·壽山石人物方章</td>
          </tr>
          <tr>
            <td></td>
            <td>清·紅漆描金方勝盒</td>
          </tr>
          <tr>
            <td></td>
            <td>清·沖天耳三足香爐</td>
          </tr>
          <tr>
            <td></td>
            <td>清·壽山羅漢立像</td>
          </tr>
          <tr>
            <td></td>
            <td>清·人物粉彩花瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>清·竹八靈鳥鳥籠</td>
          </tr>
          <tr>
            <td></td>
            <td>清·厚板下卷靈芝案</td>
          </tr>
          <tr>
            <td></td>
            <td>室町·「雲龍圖」</td>
          </tr>
          <tr>
            <td></td>
            <td>昭和·鐵鐘</td>
          </tr>
          <tr>
            <td></td>
            <td>捷豹SS100</td>
          </tr>
          <tr>
            <td>司茶：</td>
            <td>先知 Amiya 九蘭</td>
          </tr>
          <tr>
            <td>茶品：</td>
            <td>02年大白菜2號青餅</td>
          </tr>
          <tr>
            <td></td>
            <td>04年大益紫雲號青餅</td>
          </tr>
          <tr>
            <td></td>
            <td>08年太姥山老壽眉</td>
          </tr>
          <tr>
            <td></td>
            <td>12年老八仙</td>
          </tr>
          <tr>
            <td></td>
            <td>17年東方美人</td>
          </tr>
          <tr>
            <td>茶器：</td>
            <td>江戶·十代大西淨雪造道安形鐵壺</td>
          </tr>
          <tr>
            <td></td>
            <td>清·張星光制錫茶入</td>
          </tr>
          <tr>
            <td></td>
            <td>明治·龍文堂安之介造寶珠形鐵壺</td>
          </tr>
          <tr>
            <td></td>
            <td>清晚·貢局款梨形朱泥壺</td>
          </tr>
          <tr>
            <td>司香：</td>
            <td>吳清 如瑜 如璟</td>
          </tr>
          <tr>
            <td>香品：</td>
            <td>海南沈香</td>
          </tr>
          <tr>
            <td></td>
            <td>虎斑棋楠</td>
          </tr>
          <tr>
            <td></td>
            <td>芽莊綠油棋楠</td>
          </tr>
          <tr>
            <td></td>
            <td>富森紅土沈香</td>
          </tr>
          <tr>
            <td></td>
            <td>李主·帳中香 宋式·牡丹香 宋式·木樨香</td>
          </tr>
          <tr>
            <td>香具：</td>
            <td>清·豆青釉纏枝紋三足樽式爐</td>
          </tr>
          <tr>
            <td></td>
            <td>明·黑漆嵌螺鈿樓閣人物紋香盒</td>
          </tr>
          <tr>
            <td></td>
            <td>明·古銅玄紋香瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>清·象牙香架</td>
          </tr>
          <tr>
            <td></td>
            <td>明·黑漆嵌螺鈿詩文長方香盤</td>
          </tr>
          <tr>
            <td></td>
            <td>明·銅錦地紋鋪首耳方瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>明·剔紅嬰戲圖香盒</td>
          </tr>
          <tr>
            <td></td>
            <td>清·剔紅攜琴訪友圖香盒</td>
          </tr>
          <tr>
            <td></td>
            <td>明·黑漆嵌螺鈿詩文香盒</td>
          </tr>
          <tr>
            <td></td>
            <td>明·銅如意紋靈芝耳香瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>清·古銅靈芝香架</td>
          </tr>
          <tr>
            <td></td>
            <td>清·紅木香台</td>
          </tr>
          <tr>
            <td></td>
            <td>宋·龍泉窯粉青釉長頸瓶</td>
          </tr>
          <tr>
            <td></td>
            <td>清·白銅獅耳三足壽字紋蓋印香爐</td>
          </tr>
          <tr>
            <td>司廚：</td>
            <td>「菁禧薈」</td>
          </tr>
          <tr>
            <td></td>
            <td>擺盤：</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」</td>
          </tr>

          <tr>
            <td colspan="2" style="text-align: center;">菜品：</td>
          </tr>
          <tr>
            <td>•前菜</td>
            <td>四喜如意拼盤</td>
          </tr>
          <tr>
            <td></td>
            <td>魚子醬法國黑珍珠生蠔</td>
          </tr>
          <tr>
            <td></td>
            <td>白切葵花雞</td>
          </tr>
          <tr>
            <td></td>
            <td>巧拌脆三絲</td>
          </tr>
          <tr>
            <td></td>
            <td>爽口芥蘭頭</td>
          </tr>
          <tr>
            <td>•燉湯</td>
            <td>北海道瑤柱燉龍脆</td>
          </tr>
          <tr>
            <td>•主菜</td>
            <td>黃燜澳州金沙參</td>
          </tr>
          <tr>
            <td></td>
            <td>意大利黑醋雪花牛肉</td>
          </tr>
          <tr>
            <td></td>
            <td>清蒸大閘蟹</td>
          </tr>
          <tr>
            <td></td>
            <td>30年老陳皮豆豉蒸大黃魚</td>
          </tr>
          <tr>
            <td></td>
            <td>粟子白菜心</td>
          </tr>
          <tr>
            <td>•主食</td>
            <td>20年老菜脯炒飯</td>
          </tr>
          <tr>
            <td>•甜品</td>
            <td>燕窩鮮蓮子沙</td>
          </tr>
          <tr>
            <td>食器：</td>
            <td>江戶·古伊萬里燒青花盤</td>
          </tr>
          <tr>
            <td></td>
            <td>明治·九谷燒金蘭手餐碟</td>
          </tr>
          <tr>
            <td></td>
            <td>明治·月形梅花金蒔繪大漆盤</td>
          </tr>
          <tr>
            <td></td>
            <td>大正·竹梅金蒔繪蓋碗</td>
          </tr>
          <tr>
            <td></td>
            <td>大正·琉璃切子</td>
          </tr>
          <tr>
            <td></td>
            <td>大正·尚美堂造純銀果子器</td>
          </tr>
          <tr>
            <td>墨痕·茶則</td>
            <td>「見芥」定製郎紅盞</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」定製鬥笠盞</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」定製銀釉碗</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」定製黑漆盤</td>
          </tr>
          <tr>
            <td>酒器：</td>
            <td>明治·純古堂銀水注</td>
          </tr>
          <tr>
            <td></td>
            <td>大正·生駒制純銀分酒器</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」定制「方興」小銀杯</td>
          </tr>
          <tr>
            <td></td>
            <td>「見芥」定制 「玉見」和田玉竹節杯</td>
          </tr>
        </table>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import foot from "../../components/Footer";
import { mapState, mapMutations } from "vuex";
export default {
  name: "content",
  props: ["id"],
  components: {
    foot
  },
  computed: mapState(["night", "isTitle", "harry_winston"]),
  data() {
    const self = this;
    return {
      count: 0,
      tabIndex: 0,
      child: null,
      realIndex: "",
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        // ...
        scrollbar: false,
        autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionEnd(swiper) {
            self.realIndex = this.activeIndex;
          }
        }
      },
      info: null
    };
  },
  watch: {
    id(newid, oldid) {
      this.info = this.harry_winston[this.id];
      this.option.sources.url = this.info.bg_video_url;
      console.log(this.info);
    }
  },
  mounted() {
    this.info = this.harry_winston[this.id];

    // this.$axios.get("/category").then(res => {
    //   console.log(res);
    // });
    var _this = this,
      bv = 0;
    window.onscroll = function() {
      if (this.scrollY >= window.innerHeight / 2) {
        if (bv == 0) {
          // _this.$refs.videoPlayer.player.play();
        }
        bv = 1;
      }
    };

    var video, output;
    var scale = 0.8;
    // var initialize = function() {
    //   output = document.getElementById("output");
    //   video = document.getElementById("video");
    //   video.addEventListener("loadeddata", captureImage);
    // };

    // var captureImage = function() {
    //   var canvas = document.createElement("canvas");
    //   canvas.width = video.videoWidth * scale;
    //   canvas.height = video.videoHeight * scale;
    //   canvas
    //     .getContext("2d")
    //     .drawImage(video, 0, 0, canvas.width, canvas.height);

    //   var img = document.createElement("img");
    //   img.src = canvas.toDataURL("image/png");
    //   output.appendChild(img);
    // };

    // initialize();
  },
  methods: {
    ...mapMutations(["saveIsTitle"]),
    selected(item, index) {
      // this.child = item;
      this.realIndex = 0;
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.jie-tabloid {
  text-align: center;
  font-size: 16px;
  table {
    display: inline-block;
    tr {
      td {
        &:last-child {
          text-align: left;
        }
        &:first-child {
          text-align: right;
        }
      }
    }
  }
}
.jie-content {
  .jie-layer-head {
    width: 100%;
    height: 100vh;
    position: relative;
    background-size: cover;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000065;
    }
    .context {
      top: 50%;
      position: absolute;
      .prev {
        &::after {
          content: "";
          position: absolute;
          right: 15px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border-right: 2px solid #b3b3b3;
          border-bottom: 2px solid #b3b3b3;
          transform: rotate3d(0, 0, 1, -45deg);
          transition: transform 0.2s linear;
        }
      }
      .next {
        &::after {
          content: "";
          position: absolute;
          right: 15px;
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border-right: 2px solid #b3b3b3;
          border-bottom: 2px solid #b3b3b3;
          transform: rotate3d(0, 0, 1, -45deg);
          transition: transform 0.2s linear;
        }
      }
    }
    .jie-layer-head-comtent {
      top: 8rem;
      right: 10.25rem;
      position: absolute;
      width: 25rem;
      z-index: 1;
      h2 {
        font-size: 3.416666rem;
      }
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1.6rem;
      }
      p {
        font-size: 0.5rem;
        line-height: 1rem;
      }
    }
  }
  .jie-layer-tab {
    padding: 0 4.166666rem 1.75rem 4.1666666rem;
    .jie-layer-tab-warp {
      > p {
        padding-bottom: 0.625rem;
        > span {
          font-size: 0.66666666rem;
        }
      }
    }
    .tab-title-warp {
      ul {
        display: flex;
        justify-content: space-around;
        padding: 1.58rem 0 1rem 0;
        li {
          cursor: pointer;
          font-size: 0.79rem;
          display: inline;
          padding: 0 0 0.3rem 0;
          border-bottom: 2px solid #c1272d00;
          &:hover,
          &.active {
            color: #c1272d;
            border-color: #c1272d;
          }
        }
      }
    }
    .swiper-container {
      max-height: 768px;
      min-height: 768px;
      height: 768px;
      .swiper-wrapper {
        max-height: 768px;
        min-height: 768px;
        height: 768px;
      }
      .swiper-slide {
        text-align: center;
        .video {
          max-height: 768px;
          min-height: 768px;
          height: 768px;
        }
        img,
        video {
          height: 100%;
          width: auto !important;
        }
      }
    }

    .jie-next {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: transparent;
      &::before {
        content: "";
        position: absolute;
        right: 0.7rem;
        top: 0.7rem;
        width: 0.71rem;
        height: 0.71rem;
        box-sizing: border-box;
        transform: translateX(-50%);
        border-right: 3px solid #ed1c24;
        border-bottom: 3px solid #ed1c24;
        transition: transform 0.2s linear;
        transform: rotate3d(0, 0, 1, -45deg);
      }
    }
    .jie-prev {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: transparent;
      &::before {
        content: "";
        position: absolute;
        left: 0.8rem;
        top: 0.7rem;
        width: 0.71rem;
        height: 0.71rem;
        box-sizing: border-box;
        transform: translateX(-50%);
        border-right: 3px solid #ed1c24;
        border-bottom: 3px solid #ed1c24;
        transition: transform 0.2s linear;
        transform: rotate3d(0, 0, 1, 135deg);
      }
    }
  }
  .item-text {
    margin: 2.29166666rem 0 0 0;
    font-size: 0.5833333rem;
  }
}

@media screen and (max-width: 900px) {
  .jie-content {
    .jie-layer-head {
      .jie-layer-head-comtent {
        position: relative;
        left: 1rem;
      }
    }
  }
}
</style>