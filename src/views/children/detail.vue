<template>
  <div class="jie-content">
    <swiper class="pc" :options="vertical">
      <swiper-slide>
        <div class="jie-layer-head">
          <swiper :options="{autoplay:3000,loop:true}" v-if="info">
            <swiper-slide v-for="(bg,idx) in info.bg_imgs" :key="idx">
              <div class="jie-udd-bg" :style="'background-image:url('+bg+')'"></div>
            </swiper-slide>
          </swiper>
          <div class="context">
            <div class="prev"></div>
            <div class="next"></div>
          </div>
          <div class="jie-layer-head-comtent" v-show="isTitle">
            <h2
              v-if="$i18n.locale!='en'"
              :class="'font-songti jie-title-letter-spacing '+ $i18n.locale"
            >{{ info.name }}</h2>
            <h2
              v-else
              :class="'font-songti jie-title-letter-spacing '+ $i18n.locale"
            >{{ info.en_name }}</h2>
            <hr />
            <h3 v-if="$i18n.locale!='en'" :class="'font-songti '+$i18n.locale">{{ info.cate.name }}</h3>
            <h3 v-else :class="'font-songti '+$i18n.locale">{{ info.cate.en_name }}</h3>
            <p :class="$i18n.locale" v-if="$i18n.locale!='en'">{{ info.remark }}</p>
            <p v-else>{{ info.en_remark }}</p>
          </div>
          <div class="info">
            <ul>
              <li
                v-for="(e,i) in $store.state.harry_winston[0].tabloid"
                :key="i"
                @click="m=i"
                v-bind:class="{a:m==i}"
              >{{ e.keyName }}</li>
            </ul>
            <div class="content">
              <div
                v-for="(e,i) in $store.state.harry_winston[0].tabloid"
                :key="i"
                v-show="m==i"
              >{{ e.vals[0] }}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-if="info.video">
        <div class="jie-layer-video">
          <video width="100%" autoplay muted controls playsinline :src="info.video"></video>
          <!-- <video src muted autoplay width="100%"></video> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="jie-layer-tab">
          <div class="tab-title-warp">
            <ul>
              <li
                v-for="(item,index) in info.imgs"
                :key="index"
                v-bind:class="{active:tabIndex==index}"
                @click="selected(item.contents,index)"
                class="jie-title-letter-spacing"
              >
                <span v-if="$i18n.locale!='en'">{{ item.title }}</span>
                <span v-else>{{ item.en_title }}</span>
              </li>
            </ul>
          </div>
          <div
            class="jie-layer-tab-warp"
            v-for="(items,index) in info.imgs"
            :key="index"
            v-show="tabIndex==index"
          >
            <swiper :options="swiperOption">
              <!-- slides -->
              <swiper-slide :key="index" v-for="(item,index) in items.imgs">
                <img v-if="item.type == 0" :src="item.url" alt />
                <div v-else class="video">
                  <video :src="item.url" autoplay muted playsinline loop height="100%"></video>
                </div>
                <p v-if="item.text" class="item-text">{{ item.text }}</p>
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="swiper-btn">
              <div class="swiper-button-prev jie-prev" slot="button-prev"></div>
              <div class="swiper-button-next jie-next" slot="button-next"></div>
            </div>
            <p align="right">
              <span>{{ realIndex+1 }}/{{ items.imgs.length }}</span>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-if="false">
        <div class="jie-tabloid">
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
      </swiper-slide>
      <swiper-slide style="position:relative">
        <div class="jie-container buttom-warp">
          <foot class="buttom" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="wap">
      <div class="jie-layer-head">
        <swiper :options="{autoplay:'auto',loop:true}" v-if="info">
          <swiper-slide v-for="(bg,idx) in info.bg_imgs" :key="idx">
            <div class="jie-udd-bg">
              <img v-lazy="bg" alt />
            </div>
          </swiper-slide>
        </swiper>
        <div class="context">
          <div class="prev"></div>
          <div class="next"></div>
        </div>
        <div :class="'jie-layer-head-comtent '+$i18n.locale" v-show="isTitle">
          <h2
            v-if="$i18n.locale!='en'"
            :class="'font-songti jie-title-letter-spacing '+ $i18n.locale"
          >{{ info.name }}</h2>
          <h2
            v-else
            :class="'font-songti jie-title-letter-spacing '+ $i18n.locale"
          >{{ info.en_name }}</h2>
          <hr />
          <h3 v-if="$i18n.locale!='en'" :class="'font-songti '+$i18n.locale">{{ info.cate.name }}</h3>
          <h3 v-else :class="'font-songti '+$i18n.locale">{{ info.cate.en_name }}</h3>
          <p v-if="$i18n.locale!='en'">{{ info.remark }}</p>
          <p v-else>{{ info.en_remark }}</p>
        </div>
      </div>
      <div class="jie-layer-video" v-if="info.video">
        <video width="100%" autoplay muted controls playsinline :src="info.video"></video>
        <!-- <video src muted autoplay width="100%"></video> -->
      </div>
      <div class="jie-layer-tab">
        <div class="tab-title-warp">
          <ul>
            <li
              v-for="(item,index) in info.imgs"
              :key="index"
              v-bind:class="{active:tabIndex==index}"
              @click="selected(item.contents,index)"
              class="jie-title-letter-spacing"
            >
              <span v-if="$i18n.locale!='en'">{{ item.title }}</span>
              <span v-else>{{ item.en_title }}</span>
            </li>
          </ul>
        </div>
        <div
          class="jie-layer-tab-warp"
          v-for="(items,index) in info.imgs"
          :key="index"
          v-show="tabIndex==index"
        >
          <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide :key="index" v-for="(item,index) in items.imgs">
              <img v-if="item.type == 0" :src="item.url" alt />
              <div v-else class="video">
                <video :src="item.url" autoplay muted playsinline loop height="100%"></video>
              </div>
              <p v-if="item.text" class="item-text">{{ item.text }}</p>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="swiper-btn">
            <div class="swiper-button-prev jie-prev" slot="button-prev"></div>
            <div class="swiper-button-next jie-next" slot="button-next"></div>
          </div>
          <p align="right">
            <span>{{ realIndex+1 }}/{{ items.imgs.length }}</span>
          </p>
        </div>
      </div>
      <div class="jie-container buttom-warp">
        <foot class="buttom" />
      </div>
    </div>
  </div>
</template>

<script>
import foot from "../../components/Footer";
import { mapState, mapMutations } from "vuex";
export default {
  inject: ["reload"],
  components: {
    foot
  },
  computed: mapState(["night", "isTitle"]),
  data() {
    const self = this;
    return {
      m: -1,
      id: window.location.href.split("?")[1],
      count: 0,
      tabIndex: 0,
      child: null,
      realIndex: "",
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        // ...
        scrollbar: false,
        autoHeight: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionEnd(swiper) {
            self.realIndex = this.activeIndex;
          },
          reachEnd: function(swiper) {
            // if (self.tabIndex == self.info.view_group.length + 1) {
            //   self.tabIndex = 0;
            //   return false;
            // }
            // alert(self.tabIndex);
            // self.tabIndex += 1;
            // swiper.slideTO(0);
            // return false;
          }
        }
      },
      vertical: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {}
        }
      },
      info: null
    };
  },
  watch: {
    id(newid, oldid) {
      console.log(`新的${(newid, oldid)}`);
      var _id = newid ? newid : oldid;
      this.$axios.get(`/banquet_single?parameter=${_id}`).then(res => {
        this.info = res[0];
        this.option.sources.url = this.info.bg_video_url;
      });
    }
  },
  mounted() {
    // this.handleReload();
    var _this = this,
      bv = 0;
    async function getinfo() {
      var data = await _this.$axios
        .get(`/banquet_single?parameter=${_this.id}`)
        .then(res => res);
      _this.info = data[0];
      console.log(_this.info);
    }
    getinfo();

    window.onscroll = function() {
      if (this.scrollY >= window.innerHeight / 2) {
        if (bv == 0) {
        }
        bv = 1;
      }
    };

    var video, output;
    var scale = 0.8;
  },
  methods: {
    ...mapMutations(["saveIsTitle"]),
    selected(item, index) {
      this.realIndex = 0;
      this.tabIndex = index;
      console.log(this.swiper);
    },
    handleReload() {
      this.reload();
    }
  },
  beforeRouteUpdate(to, from, next) {
    var _this = this;
    this.id = window.location.href.split("?")[1];
    async function getinfo() {
      var data = await _this.$axios
        .get(`/banquet_single?parameter=${_this.id}`)
        .then(res => res);
      _this.info = data[0];
      console.log(_this.info);
    }
    getinfo();
  }
};
</script>

<style lang="less" scoped>
.pc {
}
.wap {
  display: none;
}
.swiper-slide {
  overflow: hidden;
}
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
    .info {
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      font-size: 0.7rem;
      overflow: auto;
      letter-spacing: 2px;
      ul {
        display: flex;
        margin: 0 0 0.5rem 0;
        li {
          opacity: 0.6;

          float: left;
          white-space: nowrap;
          margin-right: 2rem;
          &.a {
            opacity: 1;
          }
        }
      }
      .content {
        font-size: 12px;
      }
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
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
      text-align: justify;
      top: 9rem;
      right: 5.25rem;
      position: absolute;
      width: 25rem;
      z-index: 2;
      h2 {
        font-size: 3.416666rem;
        font-weight: 100;
        &.en {
          font-size: 1.999rem;
        }
      }
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1.3rem;
        font-weight: 100;
        &.en {
          font-size: 1.3rem;
        }
      }
      p {
        font-size: 0.65rem;
        line-height: 1.33rem;
        letter-spacing: 2px;
        &.en {
          letter-spacing: 1px;
        }
      }
    }
    .jie-udd-bg {
      height: 100vh;
      background-size: cover;
      background-position: center;
      position: relative;
      img {
        height: 100%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
    }
  }
  .jie-layer-tab {
    padding: 2rem 4.166666rem 1.75rem 4.1666666rem;
    & > .jie-next,
    .jie-prev {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .jie-layer-tab-warp {
      position: relative;
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
      height: 100%px;
      .swiper-wrapper {
        height: 100%px;
      }
      .swiper-slide {
        overflow: hidden;
        text-align: center;
        height: calc(100vh - 8rem);
        position: relative;
        .video {
          height: 100%;
        }
        img,
        video {
          left: 50%;
          position: absolute;
          height: 100%;
          width: auto !important;
          transform: translateX(-50%);
        }
      }
    }
    .swiper-btn {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
      & > div {
        top: 0;
        width: 50%;
        height: 100%;
        outline: none;
        background: none;
        position: relative;
      }
      .jie-next {
        cursor: url("../../assets/icon/next.png"), auto;
      }
      .jie-prev {
        cursor: url("../../assets/icon/prev.png"), auto;
      }
    }
  }
  .item-text {
    margin: 2.29166666rem 0 0 0;
    font-size: 0.5833333rem;
  }
  .buttom-warp {
    position: relative;
    height: 100%;
    .buttom {
      position: absolute;
      bottom: 0;
    }
  }
}

@media screen and (max-width: 900px) {
  .jie-content {
    .jie-layer-head {
      .jie-layer-head-comtent {
        position: absolute;
        left: 1rem;
      }
    }

    .jie-layer-tab {
      .jie-layer-tab-warp {
        p {
          margin-top: -2.5rem;
        }
      }
      padding: 1rem;
      .swiper-container {
        min-height: 600px;
        max-height: 600px;
        .swiper-slide {
          overflow: hidden;
          .video {
            position: relative;
            video {
              top: 50%;
              left: 50%;
              height: 100%;
              position: absolute;
              // width: 100% !important;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .jie-content {
    .jie-layer-tab {
      .jie-layer-tab-warp {
        p {
          margin-top: 0;
        }
        .swiper-container {
          .swiper-slide {
            img {
              height: auto;
              width: 100% !important;
              position: relative;
            }
          }
        }
      }
    }
    .jie-layer-head {
      .jie-layer-head-comtent {
        width: calc(100% - 4rem);
        &.en {
          width: calc(60%);
          > h2 {
            font-size: 2.4rem;
            white-space: pre;
          }
          > h3 {
            font-size: 1rem;
            text-transform: lowercase;
          }
          > p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
              white-space: initial;
            }
          }
        }
      }
    }
  }
  .jie-content {
    .buttom-warp {
      .buttom {
        position: relative;
      }
    }
    .jie-layer-head-comtent {
      position: relative;
      width: 100%;
    }
    .jie-layer-tab {
      padding-top: 1rem;
      .tab-title-warp {
        overflow-x: auto;
        margin: 0 0 1rem 0;
        ul {
          display: inline-flex;
          padding: 0 0 1rem 0;
          li {
            margin: 0 1rem;
            white-space: nowrap;
          }
        }
      }
      .swiper-container {
        min-height: calc(100vh - 150px);
        max-height: calc(100vh - 150px);
      }
    }
  }
  .pc {
    display: none;
  }
  .wap {
    display: block;
  }
}
</style>