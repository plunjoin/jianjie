import youyou from './space/youyou'
import xueyin from './space/xueyin'
import zhangju from './space/zhangju'
import pinfan from './space/pinfan'
import fangzhuang from './space/fangzhuang'
import guwang from './space/guwang'
import piaoxiang from './space/piaoxiang'
import puquan from './space/puquan'
import wenyue from './space/wenyue'
import tagu from './space/tagu'
import weixiang from './space/weixiang'
import qita from './space/qita'
import paowu from './space/paowu'
import liangtao from './space/liangtao'
import shuju from './space/shuju'
import xingshi from './space/xingshi'

import antoushanzi from './thing/antoushanzi'
import shuipanzhijing from './thing/shuipanzhijing'
import shiguang from './thing/shiguang'

import space from './night/space'
import gewu from './night/gewu'
import gudong from './night/gudong'
import huamu from './night/huamu'
import yuanlin from './night/yuanlin'
import shiwu from './night/shiwu'

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
    thing: [antoushanzi, shiguang, shuipanzhijing],
    night: [space, yuanlin, huamu, gewu, gudong, shiwu],
    isTitle: true,
}