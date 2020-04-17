<template>
  <div class="jie-content jie-container">
    <div class="make-child-warp jie-container">
      <div class="banners">
        <img src="../../assets/image/make/_DSC7153.jpg" alt srcset />
        <div :class="'banner-title '+$i18n.locale">
          <h2 class="jie-title-letter-spacing">{{ $t("make.msg001") }}</h2>
          <p>{{ $t("make.msg009") }}</p>
        </div>
      </div>
      <div :class="'make-attributes '+$i18n.locale">
        <table style="width:100%;text-align:left;margin:2rem 0 3rem 0;">
          <thead style="font-size:16px">
            <th class="jie-title-letter-spacing">{{ $t('make.msg016') }}</th>
            <th class="jie-title-letter-spacing">{{ $t('make.msg017') }}</th>
            <th class="jie-title-letter-spacing">{{ $t('make.msg018') }}</th>
            <th class="jie-title-letter-spacing">{{ $t('make.msg019') }}</th>
            <th class="jie-title-letter-spacing">{{ $t('make.msg020') }}</th>
          </thead>
          <tbody style="font-size:16px">
            <tr>
              <td>{{ $t('make.msg022') }}</td>
              <td>{{ $t('make.msg023') }}</td>
              <td>{{ $t('make.msg024') }}</td>
              <td>{{ $t('make.msg025') }}</td>
              <td>{{ $t('make.msg026') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="'make-detail-content '+$i18n.locale">
        <div style="display: flex;align-items: center;">
          <div style="text-align: center;">
            <p style="width: 50%;display: inline-block;text-align: left;">{{ $t('make.msg028') }}</p>
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
          <span style="margin: 0 0 10px 0;">{{ $t('make.msg029') }}</span>
          <p>{{ $t('make.msg030') }}</p>
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
  components: { FOOT },
  data() {
    return {
      _id: window.location.href.split("?")
    };
  },
  mounted() {
    var _this = this;
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
    }
  }
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