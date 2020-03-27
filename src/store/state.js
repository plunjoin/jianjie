import youyou from './spaceEn/youyou'
import xueyin from './spaceEn/xueyin'
import zhangju from './spaceEn/zhangju'
import pinfan from './spaceEn/pinfan'
import fangzhuang from './spaceEn/fangzhuang'
import guwang from './spaceEn/guwang'
import piaoxiang from './spaceEn/piaoxiang'
import puquan from './spaceEn/puquan'
import wenyue from './spaceEn/wenyue'
import tagu from './spaceEn/tagu'
import weixiang from './spaceEn/weixiang'
import qita from './spaceEn/qita'
import paowu from './spaceEn/paowu'
import liangtao from './spaceEn/liangtao'
import shuju from './spaceEn/shuju'
import xingshi from './spaceEn/xingshi'

import youyouE from './space/youyou'
import xueyinE from './space/xueyin'
import zhangjuE from './space/zhangju'
import pinfanE from './space/pinfan'
import fangzhuangE from './space/fangzhuang'
import guwangE from './space/guwang'
import piaoxiangE from './space/piaoxiang'
import puquanE from './space/puquan'
import wenyueE from './space/wenyue'
import taguE from './space/tagu'
import weixiangE from './space/weixiang'
import qitaE from './space/qita'
import paowuE from './space/paowu'
import liangtaoE from './space/liangtao'
import shujuE from './space/shuju'
import xingshiE from './space/xingshi'

import antoushanzi from './thing/antoushanzi'
import shuipanzhijing from './thing/shuipanzhijing'
import shiguang from './thing/shiguang'

import space from './night/space'
import gewu from './night/gewu'
import gudong from './night/gudong'
import huamu from './night/huamu'
import yuanlin from './night/yuanlin'
import shiwu from './night/shiwu'

import harry_winston from './night/harry_winston'
import harry_winstonEn from './night/harry_winstonE'

export default {
    opening: true,
    menu: false,
    footerList: [{
        title: '見芥服務',
        list: ['春節假期物流須知', '免費禮品包裝']
    }, {
        title: '購物幫助',
        list: ['支付相關', '配送', '退貨', '發票', '保養與維修']
    }, {
        title: '關於公司',
        list: ['關於見芥', '道德規範', '職業發展', '細則與條款', '隱私與COOKIE', '企業信息']
    }, {
        title: '關注見芥',
        list: ['微信', '微博', '嗶哩嗶哩', 'Instagram']
    }, {
        title: '需要幫助?',
        list: ['聯繫我們', '常見問題']
    }],
    space: [youyou, xueyin, zhangju, pinfan, fangzhuang, guwang, piaoxiang, puquan, wenyue, tagu, weixiang, qita, paowu, liangtao, shuju, xingshi],
    spaceEn: [youyouE, xueyinE, zhangjuE, pinfanE, fangzhuangE, guwangE, piaoxiangE, puquanE, wenyueE, taguE, weixiangE, qitaE, paowuE, liangtaoE, shujuE, xingshiE],
    thing: [antoushanzi, shiguang, shuipanzhijing],
    night: [space, yuanlin, huamu, gewu, gudong, shiwu],
    harry_winston: harry_winston,
    harry_winstonEn: harry_winstonEn,
    isTitle: true,
}