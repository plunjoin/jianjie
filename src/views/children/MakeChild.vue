<template>
  <div class="jie-content jie-container">
    <div class="make-child-warp jie-container">
      <div class="banners">
        <img src="../../assets/image/make/_DSC7153.jpg" alt srcset />
        <div class="banner-title">
          <h2>林泉高致</h2>
          <p>Jasonwood club</p>
        </div>
      </div>
      <div class="make-attributes">
        <table style="width:100%;text-align:left;margin:2rem 0 3rem 0;">
          <thead style="font-size:16px">
            <th>项目地址</th>
            <th>主创设计</th>
            <th>项目面积</th>
            <th>营造周期</th>
            <th>竣工时间</th>
            <th>项目造价</th>
          </thead>
          <tbody style="font-size:16px">
            <tr>
              <td>浙江·杭州</td>
              <td>侃侃 花猪 晨昊</td>
              <td>1200平方</td>
              <td>6个月</td>
              <td>2017年8月8日</td>
              <td>210万</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="make-detail-content">
        <div style="display: flex;align-items: center;">
          <div style="text-align: center;">
            <p style="width: 50%;display: inline-block;text-align: left;">
              林泉之志，烟霞之侣，梦寐在 焉，耳目断绝，今得妙手郁然出之，
              不下堂筵，坐穷泉壑，猿声鸟啼依约 在耳，山光水色滉漾夺目，此岂不快 人意，实获我心哉，此世之所以贵夫 画山之本意也。
            </p>
          </div>
          <div>
            <img src="../../assets/image/867ee26fb82863bf5ddf1730266567e.png" alt />
          </div>
        </div>
        <div>
          <img src="../../assets/image/make/3.pic.jpg" width="100%" alt />
        </div>

        <div>
          <img src="../../assets/image/make/4.pic.jpg" width="100%" alt />
        </div>
        <div>
          <div>
            <img src="../../assets/image/make/14.pic.jpg" width="100%" alt />
          </div>
        </div>
        <div style="font-size: 16px;margin: 2rem 0;">
          <p style="margin: 0 0 10px 0;">主要材料</p>
          <span>老石板，晚清·白石龙吐水，巴厘岛·奇木家具，德清·野山石，老松木，墨染清混，镀黑钛钢板，山苔，老杆乌桕，老杆山朴，日本红枫，骨里红，老杆柴藤，狼尾，矢羽芒，溪荪，溲疏，穗花杜荆，夕雾草，玉簪，野山蕨，井栏边草，无尽夏，南天竹</span>
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7267.jpg" width="100%" alt />
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7333.jpg" width="100%" alt />
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7264.jpg" width="100%" alt />
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7153.jpg" width="100%" alt />
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7282.jpg" width="100%" alt />
        </div>
        <div>
          <img src="../../assets/image/make/_DSC7208.jpg" width="100%" alt />
        </div>
      </div>
    </div>
    <FOOT></FOOT>
  </div>
</template>

<script>
import FOOT from "../../components/Footer";
export default {
  name: "makechild",
  components: { FOOT }
};
</script>

<style lang="less" scoped>
.make-child-warp {
  margin: auto;

  .make-detail-content {
    font-size: 16px;
  }

  .banners {
    text-align: center;
    position: relative;

    img {
      width: 100%;
    }

    .banner-title {
      top: 6rem;
      left: 4rem;
      position: absolute;

      h2,
      p {
        text-align: left;
        font-size: 2.5rem;
      }
    }
  }
}
</style>