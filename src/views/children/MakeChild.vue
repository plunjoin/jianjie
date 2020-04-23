<template>
  <div class="jie-content jie-container">
    <div class="make-child-warp jie-container">
      <div class="banners">
        <img
          v-if="b.bg_imgs"
          :src="b.bg_imgs?b.bg_imgs[0]:'https://www.jianjie-china.com/img/logo.bafa2e21.png'"
          alt
          srcset
        />
        <div :class="'banner-title '+$i18n.locale">
          <h2 class="jie-title-letter-spacing">{{ $i18n.locale!='en'?b.name:b.en_name }}</h2>
          <p>{{ $i18n.locale!='en'?b.subtitle:b.en_subtitle }}</p>
        </div>
      </div>
      <div :class="'make-attributes '+$i18n.locale" v-if="b.info.length!=0">
        <table style="width:100%;text-align:left;margin:2rem 0 3rem 0;">
          <thead style="font-size:16px">
            <th
              class="jie-title-letter-spacing"
              v-for="(e,i) in b.info"
              :key="i"
            >{{ $i18n.locale!='en'?e.title:e.en_title }}</th>
          </thead>
          <tbody style="font-size:16px">
            <tr>
              <td v-for="(e,i) in b.info" :key="i">{{ $i18n.locale!='en'?e.val:e.en_val }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="'make-detail-content '+$i18n.locale">
        <!-- <div style="display: flex;align-items: center;">
          <div style="text-align: center;">
            <p style="width: 50%;display: inline-block;text-align: left;">{{ $t('make.msg028') }}</p>
          </div>
          <div>
            <img src="../../assets/image/867ee26fb82863bf5ddf1730266567e.png" alt />
          </div>
        </div>-->
        <div style="font-size: 16px;margin: 2rem 0;" v-if="b.materials">
          <span style="margin: 0 0 10px 0;">{{ $t('make.msg029') }}</span>
          <p>{{ $i18n.locale!='en'?b.materials:b.en_materials }}</p>
        </div>
        <div v-for="(e,i) in b.imgs" :key="i">
          <img :src="e.url" width="100%" alt />
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
  props: ["id"],
  components: { FOOT },
  data() {
    return {
      _id: window.location.href.split("?"),
      b: null
    };
  },
  mounted() {
    var _this = this;
    _this._id = window.location.href.split("?")[1];
    console.log(_this._id);
    _this.$store.state.All.buildgarden.forEach(e => {
      if (e._id == _this._id) {
        _this.b = e;
      }
    });
    console.log(_this.b);

    // this.$axios.get("/buildgarden_single?parameter=5e86ef581eb9b40e3869920e");
  }
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  height: 0px;
}

::-webkit-scrollbar-button {
  width: 10px;
}
.make-child-warp {
  margin: auto;
  .make-attributes {
    width: 100%;
    overflow-x: auto;
    table {
      min-width: 1190px;
      td {
        text-transform: capitalize;
      }
    }
  }
  .make-detail-content {
    font-size: 16px;
    text-transform: capitalize;
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
        text-transform: capitalize;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .make-detail-content {
    > div {
      display: block !important;
      img {
        width: 100% !important;
      }
      p {
        width: 100% !important;
        padding: 1rem;
      }
    }
  }
  .make-child-warp {
    .make-attributes {
      table {
        margin: 2rem 0 1rem 0 !important;
      }
    }
    .banners {
      .banner-title {
        &.en {
          left: auto;
          right: 2rem;
          text-transform: capitalize;
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 1.7rem;
            font-weight: 300;
          }
        }
      }
    }
    .make-detail-content.en {
      p {
        opacity: 0.6;
        text-transform: capitalize;
        font-size: 0.8rem;
        word-break: break-all;
        text-align: justify;
      }
      span {
        display: block;
        padding: 0 1rem;
      }
    }
    .make-attributes {
      table {
        min-width: auto;
        text-transform: capitalize;
        text-align: center;
        thead {
          th {
            text-align: center;
            position: relative;
            font-weight: 400;
            font-size: 1.2rem;
            white-space: nowrap;
            padding: 0.5rem 2rem;
            &::after {
              content: "|";
              top: 50%;
              right: -0.4rem;
              position: absolute;
            }
            &:last-child {
              &::after {
                content: "";
              }
            }
          }
        }
        tbody {
          td {
            text-align: center;
            font-size: 0.95rem;
            font-weight: 100;
            opacity: 0.7;
          }
        }
      }
      &.en {
        table {
          text-transform: capitalize;
          text-align: center;
          thead {
            th {
              text-align: center;
              font-size: 1.7rem;
              font-weight: 340;
              position: relative;
            }
          }
          tbody {
            td {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>