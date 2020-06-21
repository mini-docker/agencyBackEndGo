import Vue from 'vue';
import i18n from './i18n';
const vue = new Vue({
    i18n
});

let actValidateError = /^(?=.*\d)(?=.*[a-z])(?=.*)[a-zA-Z0-9]{5,16}$/;
let operationpassError = /^(?=.*\d)(?=.*[a-z])(?=.*)[a-zA-Z0-9]{6,16}$/;
var actValidate = (rule, value, callback) => {
    if (value === '') {
        callback(new Error(vue.$t('common.mustY')));
    } else if (!actValidateError.test(value)) {
        callback(new Error(vue.$t('common.accountCheck')));
    } else {
        callback();
    }
};
let groupNameV = /^.{1,16}$/; //聊天室名称
let gNameValid = (rule, value, callback) => {
    if (value === '') {
        callback(new Error(vue.$t('common.mustY')));
    } else if (!groupNameV.test(value)) {
        callback(new Error(vue.$t('common.gNameValid')));
    }else{
        callback();
    }
};
let redTimeArr = []
for(let i=1;i<11;i++){
    let obj={
        key: i,
        value: i + vue.$t('common.mintus')
    }
    redTimeArr.push(obj)
}

function makezuOps(keyA,valueA){
    let obj = {}
    keyA.map((item,i)=>{
        obj[item] = valueA[i]
    })
    return obj
}
function makeOps(keyA, valueA) {
    let arr = []
    keyA.map((item, i) => {
        let obj = {}
        obj["key"] = item
        obj["value"] = valueA[i]
        arr.push(obj)
    })
    return arr
}
const redOddsArr = [1.5, 1.6, 1.8, 2.1, 2.5, 3, 4, 6, 10]
let redNumsArr = [10, 9, 8, 7, 6, 5, 4, 3, 2]
const redOddsList = makeOps(redOddsArr, redNumsArr)
let token = () => {
    return JSON.parse(decodeURIComponent(sessionStorage.getItem('token')))
}
let DOC_HEIGHT = () => {
    return document.body.clientHeight;
}
 //可视区域高度
let clientHeight = () => {
    return DOC_HEIGHT() ;
}
 //2行搜索
let tableHeight = () => {
    return DOC_HEIGHT()  - 260 - 85 + 35;
}
 //一行搜索
let tHeightOne = () => {
    return DOC_HEIGHT()  - 260 + 40;
}
 //一个筛选 一个搜索行
let tHBatchOne = () => {
    return DOC_HEIGHT()  - 260 - 38 + 35;
}
let tHpro = () => {
    return DOC_HEIGHT()  - 350 + 35; 
}
 //只有一行 不用换行
let onlyOneHeight = () => {
    return DOC_HEIGHT()  - 220 + 35;
}

export default {
    // validate
    actValidateError, //账号校验规则
    operationpassError, //密码校验规则
    actValidate, //账号校验方法
    groupNameV, //聊天室名称规则
    gNameValid, //聊天室名称校验方法
    moneys: /^(-?)\d{1,8}(\.\d{1,2})?$/, //0.00-99999999.99的金额
    moneyInt1: /^[1-9][0-9]{0,7}?$/, //1-99999999
    moneyFee: /^(?:(?!0\d)\d{1,2}(?:\.\d{1,2})?|100(?:\.0{1,2})?)$/, //0.00-100.00的百分比
    siteIdValid: /^[A-Za-z]{1,20}$/,

    pageSize: 10,
    MUST: [{ required: true, message: vue.$t('common.mustY'), trigger: 'blur' }],
    reg: {},
    token: token,
    //
    redTimeArr,
    redOddsArr,
    redOddsList,
    redNumsArr,
    // 窗口高度
    clientHeight,
    tableHeight,
    tHeightOne,
    tHBatchOne,
    tHpro,
    onlyOneHeight,
    dateArr: [
        {
            name: '今天',
            value: 'today'
        },
        {
            name: '昨天',
            value: 'yesterday'
        },
        {
            name: '近7天',
            value: 'last7days'
        },
        {
            name: '本月',
            value: 'thisMonth'
        },
        {
            name: '上月',
            value: 'lastMonth'
        }
    ],
    booleanOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '是'
        },
        {
            key: 2,
            value: '否'
        }
    ],
    statusOptions: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '启用'
        },
        {
            key: 2,
            value: '停用'
        }
    ],
    memAgencOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '在线'
        },
        {
            key: 2,
            value: '离线'
        }
    ],
    eventPicOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: 'PK专用线路'
        },
        {
            key: 2,
            value: 'aaa'
        }
    ],
    gameNameOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 2,
            value: '经典扫雷'
        },
        {
            key: 1,
            value: '经典牛牛'
        },
        {
            key: 3,
            value: '平倍牛牛'
        },
        {
            key: 4,
            value: '超级牛牛'
        },
        {
            key: 5,
            value: '接龙红包'
        },
        {
            key: 6,
            value: '猜大小'
        },
        {
            key: -1,
            value: '普通红包'
        }
    ],
    lineStatusOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '启用'
        },
        {
            key: 2,
            value: '停用'
        },
        {
            key: 3,
            value: '维护'
        }
    ],
    doMonModeOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '钱包模式'
        },
        {
            key: 2,
            value: '额度转换'
        }
    ],
    packOp: [
        {
            key: 1,
            value: 'PK线路'
        },
        {
            key: 2,
            value: 'aaa专线'
        }
    ],
    redStatusOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '进行中'
        },
        {
            key: 2,
            value: '已结算'
        },
        {
            key: 3,
            value: '已返还'
        }
    ],
    redInpOp: [
        {
            key: 1,
            value: '用户名'
        },
        {
            key: 2,
            value: '发包者'
        }
    ],
    redOddsOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '固定赔率'
        },
        {
            key: 2,
            value: '不固定赔率'
        }
    ],

    gameTimeOp: [
        {
            key: 1,
            value: '1分钟'
        },
        {
            key: 2,
            value: '2分钟'
        },
        {
            key: 3,
            value: '3分钟'
        },
        {
            key: 4,
            value: '4分钟'
        },
        {
            key: 5,
            value: '5分钟'
        }
    ],
    gameGTypOp: [
        {
            key: 1,
            value: '经典玩法(牛牛3倍赔率，牛7/8/9是2倍赔率，牛1/2/3/4/5/6是1倍赔率)'
        },
        {
            key: 2,
            value: '平倍玩法(无论牛几，输赢都是1倍赔率)'
        },
        {
            key: 3,
            value: '翻倍玩法 牛几就是几的赔率，如牛1是1倍赔率、牛2是2倍赔率...牛9是9倍赔率、牛牛是10倍赔率'
        }
    ],
    orderRedfi: [
        {
            key: 10,
            value: '全部'
        },
        {
            key: 0,
            value: '未结算'
        },
        {
            key: 1,
            value: '赢'
        },
        {
            key: 2,
            value: '输'
        },
        {
            key: 3,
            value: '无效'
        }
    ],
    // 接龙
    connetRed: [
        {
            key: 10,
            value: '全部'
        },
        {
            key: 0,
            value: '未结算'
        },
        {
            key: 2,
            value: '已结算'
        },
        {
            key: 3,
            value: '无效'
        },
        {
            key: 4,
            value: '流局'
        }
    ],
    // 扫雷
    ordersfi: [
        {
            key: 10,
            value: '全部'
        },
        {
            key: 0,
            value: '未结算'
        },
        {
            key: 2,
            value: '已结算'
        },
        {
            key: 3,
            value: '已返还'
        },
        {
            key: 4,
            value: '流局'
        }
    ],
    // 牛牛
    ordersfipro: [
        {
            key: 10,
            value: '全部'
        },
        {
            key: 0,
            value: '未结算'
        },
        {
            key: 1,
            value: '赢'
        },
        {
            key: 2,
            value: '输'
        },
        {
            key: 3,
            value: '无效'
        },
        {
            key: 4,
            value: '流局'
        }
    ],
    ableOptions: [
        {
            key: 1,
            value: '启用'
        },
        {
            key: 2,
            value: '停用'
        }
    ],
    visableOptions: [
        {
            key: 1,
            value: '可见'
        },
        {
            key: 2,
            value: '不可见'
        }
    ],
    roomTypesOps: [
        {
            key: 1,
            value: '公群'
        },
        {
            key: 2,
            value: '私群'
        }
    ],
    freeFromDeathsOps: [
        {
            key: 1,
            value: '开启'
        },
        {
            key: 2,
            value: '关闭'
        }
    ],
    nomalStatusOp: [
        {
            key: 10,
            value: '全部'
        },
        // {
        //     key: 1,
        //     value: '进行中'
        // },
        {
            key: 2,
            value: '已结束'
        },
        {
            key: 3,
            value: '无效'
        }
        // {
        //     key: 4,
        //     value: '已领完'
        // },
        // {
        //     key: 5,
        //     value: '未开始'
        // }
    ],
    nomalStatusOpf: [
        {
            key: 10,
            value: '全部'
        },
        {
            key: 1,
            value: '进行中'
        },
        {
            key: 2,
            value: '已结束'
        },
        {
            key: 3,
            value: '无效'
        },
        {
            key: 4,
            value: '已领完'
        },
        {
            key: 5,
            value: '未开始'
        }
    ],
    logTypesOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '登录日志'
        },
        {
            key: 2,
            value: '操作日志'
        }
    ],
    sendStatusOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '最佳发'
        },
        {
            key: 2,
            value: '最差发'
        }
    ],
    szStatusOp: [
        {
            key: 1,
            value: '大'
        },
        {
            key: 2,
            value: '小'
        },
        {
            key: 3,
            value: '单'
        },
        {
            key: 4,
            value: '双'
        },
        {
            key: 5,
            value: '顺子'
        },
        {
            key: 6,
            value: '豹子'
        }
    ],
    payOutStatusOp: [
        {
            key: 0,
            value: '全部'
        },
        {
            key: 1,
            value: '正常'
        },
        {
            key: 2,
            value: '异常'
        }
    ]
};

