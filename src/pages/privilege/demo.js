export const json = {
    "data": [
        {
            "id": 2,
            "name": "首页",
            "Route": "app.home",
            "Icon": "icon-home1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": null,
            "functions": [
                {
                    "id": 2695,
                    "name": "首页数据",
                    "Route": "/api/index/view",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 2,
                    "childrens": null,
                    "functions": null
                }
            ]
        },
        {
            "id": 9,
            "name": "账号管理",
            "Route": "#",
            "Icon": "icon-zhgl1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 2765,
                    "name": "会员管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 9,
                    "childrens": [
                        {
                            "id": 13,
                            "name": "正式会员",
                            "Route": "app.leaguer.parent.list",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2256,
                                    "name": "正式会员详情交易记录列表",
                                    "Route": "/api/member/cash",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2257,
                                    "name": "正式会员增加",
                                    "Route": "/api/member/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2258,
                                    "name": "正式会员股东下拉",
                                    "Route": "/api/agency/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2259,
                                    "name": "正式会员取消会员异常状态",
                                    "Route": "/api/member/cancel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2260,
                                    "name": "正式会员交易事件列表",
                                    "Route": "/api/member/sourceType",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2261,
                                    "name": "正式会员详情修改",
                                    "Route": "/api/member/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2262,
                                    "name": "正式会员查看",
                                    "Route": "/api/member/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2263,
                                    "name": "正式会员会员分组下拉列表",
                                    "Route": "/api/userlevel/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2264,
                                    "name": "正式会员获取站点列表",
                                    "Route": "/api/site/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2265,
                                    "name": "正式会员提线",
                                    "Route": "/api/member/forceLogout",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2266,
                                    "name": "正式会员启用停用",
                                    "Route": "/api/member/status",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2267,
                                    "name": "正式会员初始化",
                                    "Route": "/api/member/init",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2268,
                                    "name": "正式会员分组",
                                    "Route": "/api/member/group",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2269,
                                    "name": "正式会员列表",
                                    "Route": "/api/member/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2270,
                                    "name": "正式会员删除",
                                    "Route": "/api/member/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2547,
                                    "name": "正式会员-解锁",
                                    "Route": "/api/member/unlock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3259,
                                    "name": "会员加解锁",
                                    "Route": "/api/member/locks",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3433,
                                    "name": "点击刷新视讯余额",
                                    "Route": "/api/manualincome/gameinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3664,
                                    "name": "重置密保答案",
                                    "Route": "/api/member/secret/reset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 13,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 15,
                            "name": "会员层级管理",
                            "Route": "app.memberGroup.memberGroup",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 192,
                                    "name": "添加",
                                    "Route": "/api/userlevel/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 193,
                                    "name": "修改",
                                    "Route": "/api/userlevel/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 194,
                                    "name": "启用停用",
                                    "Route": "/api/userlevel/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 195,
                                    "name": "列表",
                                    "Route": "/api/userlevel/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 196,
                                    "name": "详情",
                                    "Route": "/api/userlevel/one",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 197,
                                    "name": "注册设置",
                                    "Route": "/api/member/saveregistryset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 198,
                                    "name": "登录设置",
                                    "Route": "/api/member/saveloginset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 200,
                                    "name": "设置允许注册",
                                    "Route": "/api/member/registryallow",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 201,
                                    "name": "获取会员注册设定",
                                    "Route": "/api/member/registryset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 202,
                                    "name": "获取会员注册优惠设定",
                                    "Route": "/api/member/discount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 203,
                                    "name": "获取会员登陆设定",
                                    "Route": "/api/member/loginset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1611,
                                    "name": "添加会员分组条件",
                                    "Route": "/api/userlevelinfo/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1613,
                                    "name": "获取会员分组下拉列表详情",
                                    "Route": "/api/userlevel/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1654,
                                    "name": "开启/关闭会员分组自助返水开关",
                                    "Route": "/api/userlevel/updateisself",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1656,
                                    "name": "删除会员分组",
                                    "Route": "/api/userlevel/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1657,
                                    "name": "会员分组迁移",
                                    "Route": "/api/userlevel/updatelevel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1696,
                                    "name": "分组下的会员列表查询",
                                    "Route": "/api/userlevel/memberlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1704,
                                    "name": "获取返水设置下拉列表",
                                    "Route": "/api/waterset/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1742,
                                    "name": "锁定会员分组",
                                    "Route": "/api/userlevelinfo/updateislock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1743,
                                    "name": "批量更改会员分组",
                                    "Route": "/api/userlevelinfo/updatelevel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1777,
                                    "name": "获取会员分组条件列表",
                                    "Route": "/api/userlevelinfo/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1778,
                                    "name": "获取会员分组条件单条详情",
                                    "Route": "/api/userlevelinfo/one",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1779,
                                    "name": "添加会员分组条件",
                                    "Route": "/api/userlevelinfo/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1780,
                                    "name": "修改会员分组条件",
                                    "Route": "/api/userlevelinfo/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1781,
                                    "name": "删除会员分组条件",
                                    "Route": "/api/userlevelinfo/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1895,
                                    "name": "满足会员分组条件的会员列表",
                                    "Route": "/api/userlevelinfo/memberlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1896,
                                    "name": "满足条件的会员列表的导出",
                                    "Route": "/api/userlevel/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2296,
                                    "name": "会员列表的导出",
                                    "Route": "/api/userlevel/excelcheck",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2308,
                                    "name": "检索列表",
                                    "Route": "/api/userlevel/membercheck",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2309,
                                    "name": "符合条件会员锁定解锁",
                                    "Route": "/api/userlevel/memberslock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3028,
                                    "name": "支付设置",
                                    "Route": "/api/payset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3029,
                                    "name": "支付设置信息",
                                    "Route": "/api/payset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 15,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "name": "出款资料设置",
                            "Route": "app.member.outMoneyInfo",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2298,
                                    "name": "获取出款设定",
                                    "Route": "/api/member/withdraw",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 17,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2299,
                                    "name": "保存出款设定",
                                    "Route": "/api/member/savewithdraw",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 17,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3021,
                            "name": "带玩会员",
                            "Route": "app.leaguer.parent.list.agencymem",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2271,
                                    "name": "修改代玩会员",
                                    "Route": "/api/member/editshillmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2272,
                                    "name": "添加代玩会员",
                                    "Route": "/api/member/addshillmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2273,
                                    "name": "踢线代玩会员",
                                    "Route": "/api/member/shillforceLogout",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2274,
                                    "name": "初始化代玩会员",
                                    "Route": "/api/member/shillinit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2275,
                                    "name": "删除代玩会员",
                                    "Route": "/api/member/shilldel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2276,
                                    "name": "隐藏代玩会员",
                                    "Route": "/api/member/hiddenshillmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2277,
                                    "name": "代玩会员启用、停用",
                                    "Route": "/api/member/shillstatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2278,
                                    "name": "代玩列表",
                                    "Route": "/api/member/shilllist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2279,
                                    "name": "反隐藏代玩会员",
                                    "Route": "/api/member/unhiddenshillmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2381,
                                    "name": "隐藏会员",
                                    "Route": "/api/member/hiddenmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2382,
                                    "name": "反隐藏会员",
                                    "Route": "/api/member/unhiddenmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2385,
                                    "name": "会员代理转移",
                                    "Route": "/api/member/transfer",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3021,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3022,
                            "name": "注册优惠管理",
                            "Route": "app.member.registerDiscounts",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1242,
                                    "name": "保存登录设置",
                                    "Route": "/api/member/saveloginset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3022,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1243,
                                    "name": "保存优惠设置",
                                    "Route": "/api/member/savediscount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3022,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1329,
                                    "name": "登陆",
                                    "Route": "/api/login",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3022,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1660,
                                    "name": "登出",
                                    "Route": "/api/logout",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3022,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2062,
                                    "name": "删除会员",
                                    "Route": "/api/member/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3022,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3023,
                            "name": "登录注册设定",
                            "Route": "app.member.loginRegSettings",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2765,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3230,
                                    "name": "保存登录注册设置",
                                    "Route": "/api/member/saveregistryset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3023,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2766,
                    "name": "股东代理管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 9,
                    "childrens": [
                        {
                            "id": 18,
                            "name": "股东账号(开户人)",
                            "Route": "app.shareHolderAccount.parent.shareHolderAccount",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2766,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 159,
                                    "name": "列表",
                                    "Route": "/api/holder/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 160,
                                    "name": "添加",
                                    "Route": "/api/holder/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 161,
                                    "name": "查看",
                                    "Route": "/api/holder/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 162,
                                    "name": "修改",
                                    "Route": "/api/holder/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 163,
                                    "name": "启用停用",
                                    "Route": "/api/holder/status/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 164,
                                    "name": "删除",
                                    "Route": "/api/holder/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 165,
                                    "name": "初始化",
                                    "Route": "/api/holder/init/pass",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 166,
                                    "name": "下拉列表",
                                    "Route": "/api/genera/select/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1690,
                                    "name": "锁定",
                                    "Route": "/api/holder/lock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2529,
                                    "name": "踢线",
                                    "Route": "/api/holder/kickline",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2841,
                                    "name": "股东列表导出",
                                    "Route": "/api/holder/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3566,
                                    "name": "AG限额详情",
                                    "Route": "/api/limitAg/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3567,
                                    "name": "AG限额修改",
                                    "Route": "/api/limitAg/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3568,
                                    "name": "AG限额重置",
                                    "Route": "/api/limitAg/reset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3569,
                                    "name": "AG同步列表",
                                    "Route": "/api/limitAg/proxy",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3570,
                                    "name": "AG同步下级",
                                    "Route": "/api/limitAg/synchronize",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3571,
                                    "name": "SP限额详情",
                                    "Route": "/api/limitSp/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3572,
                                    "name": "SP限额修改",
                                    "Route": "/api/limitSp/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3573,
                                    "name": "SP限额重置",
                                    "Route": "/api/limitSp/reset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3574,
                                    "name": "SP同步列表",
                                    "Route": "/api/limitSp/proxy",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3575,
                                    "name": "SP同步下级",
                                    "Route": "/api/limitSp/synchronize",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 18,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "name": "总代理账号(开户人)",
                            "Route": "app.allAgencyAccount.parent.allAgencyAccount",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2766,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 167,
                                    "name": "添加",
                                    "Route": "/api/genera/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 168,
                                    "name": "修改",
                                    "Route": "/api/genera/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 169,
                                    "name": "删除",
                                    "Route": "/api/genera/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 170,
                                    "name": "列表",
                                    "Route": "/api/genera/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 171,
                                    "name": "下拉列表",
                                    "Route": "/api/genera/select/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 172,
                                    "name": "下拉列表",
                                    "Route": "/api/holder/select/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1254,
                                    "name": "初始化",
                                    "Route": "/api/genera/init/pass",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1255,
                                    "name": "启用停用",
                                    "Route": "/api/genera/status/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1257,
                                    "name": "查看",
                                    "Route": "/api/genera/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2452,
                                    "name": "修改总代状态",
                                    "Route": "/api/genera/lock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2520,
                                    "name": "修改总代理状态",
                                    "Route": "/api/genera/status/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2532,
                                    "name": "踢线",
                                    "Route": "/api/genera/kickline",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2842,
                                    "name": "总代导出",
                                    "Route": "/api/genera/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 19,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 20,
                            "name": "代理账号(开户人)",
                            "Route": "app.agencyAccount.parent.agencyAccount",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2766,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 173,
                                    "name": "添加",
                                    "Route": "/api/proxy/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 174,
                                    "name": "修改",
                                    "Route": "/api/proxy/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 175,
                                    "name": "删除",
                                    "Route": "/api/proxy/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 176,
                                    "name": "下拉列表",
                                    "Route": "/api/genera/select/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 177,
                                    "name": "代理列表",
                                    "Route": "/api/proxy/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1259,
                                    "name": "启用停用",
                                    "Route": "/api/proxy/status/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1260,
                                    "name": "查看",
                                    "Route": "/api/holder/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2413,
                                    "name": "锁定",
                                    "Route": "/api/proxy/lock",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2524,
                                    "name": "停用",
                                    "Route": "/api/proxy/status/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2525,
                                    "name": "踢线",
                                    "Route": "/api/proxy/kickline",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2528,
                                    "name": "初始化",
                                    "Route": "/api/proxy/init/pass",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2542,
                                    "name": "显示隐藏",
                                    "Route": "/api/proxy/hiddenmember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2844,
                                    "name": "代理导出",
                                    "Route": "/api/proxy/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 20,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2143,
                            "name": "代理申请审核",
                            "Route": "app.agencyAccount.applicationReview",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2766,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2178,
                                    "name": "审核列表",
                                    "Route": "/api/agencyapply/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2179,
                                    "name": "代理新增",
                                    "Route": "/api/agencyapply/apply",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2180,
                                    "name": "代理详情",
                                    "Route": "/api/agencyapply/queryone",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2181,
                                    "name": "信息修改",
                                    "Route": "/api/agencyapply/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2182,
                                    "name": "代理删除",
                                    "Route": "/api/agencyapply/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2183,
                                    "name": "审核设置查询",
                                    "Route": "/api/agencyapply/querysetting",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2184,
                                    "name": "审核设置提交",
                                    "Route": "/api/agencyapply/updatesetting",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2143,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2329,
                            "name": "代理申请设置",
                            "Route": "app.agencyAccount.applicationReviewSet",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2766,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2330,
                                    "name": "设置列表",
                                    "Route": "/api/agencyapply/querysetting",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2329,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2331,
                                    "name": "设置提交",
                                    "Route": "/api/agencyapply/updatesetting",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2329,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                }
            ],
            "functions": null
        },
        {
            "id": 655,
            "name": "系统管理",
            "Route": "#",
            "Icon": "icon-xtgl1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 657,
                    "name": "站点口令管理",
                    "Route": "app.site.command",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 658,
                            "name": "查询列表",
                            "Route": "/api/sitepswd/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 659,
                            "name": "添加",
                            "Route": "/api/sitepswd/add",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 660,
                            "name": "修改状态",
                            "Route": "/api/sitepswd/updatestatus",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 661,
                            "name": "删除",
                            "Route": "/api/sitepswd/delete",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 662,
                            "name": "修改",
                            "Route": "/api/sitepswd/updateinfo",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 663,
                            "name": "查询单条口令",
                            "Route": "/api/sitepswd/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 703,
                            "name": "查询未设置站点口令用户",
                            "Route": "/api/accountholder/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1953,
                            "name": "站点口令账号下拉框",
                            "Route": "/api/sitepswd/account",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1954,
                            "name": "查看口令密钥",
                            "Route": "/api/sitepswd/pswd",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2521,
                            "name": "账号下拉",
                            "Route": "/api/accountholder/selectlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2534,
                            "name": "下拉",
                            "Route": "/api/accountholder/selectlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 657,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 732,
                    "name": "日志管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": [
                        {
                            "id": 733,
                            "name": "后台登录日志",
                            "Route": "app.log.parent.loginLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 732,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2848,
                                    "name": "登录日志列表",
                                    "Route": "/api/loginlog/agency/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 733,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2849,
                                    "name": "导出业主系统登录日志",
                                    "Route": "/api/loginlog/agency/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 733,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 734,
                            "name": "系统操作日志",
                            "Route": "app.log.parent.controlLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 732,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 781,
                                    "name": "操作日志列表",
                                    "Route": "/api/handlelog/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 734,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2791,
                                    "name": "导出操作日志",
                                    "Route": "/api/handlelog/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 734,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3247,
                                    "name": "角色获取",
                                    "Route": "/api/roles",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 734,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2847,
                            "name": "会员登录日志",
                            "Route": "app.log.parent.loginLog.memberDesk",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 732,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2850,
                                    "name": "前台日志列表",
                                    "Route": "/api/loginlog/member/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2847,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2851,
                                    "name": "导出会员登录日志",
                                    "Route": "/api/loginlog/member/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2847,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3538,
                            "name": "会员前台操作日志",
                            "Route": "app.log.parent.receptionLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 732,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3539,
                                    "name": "会员操作日志列表",
                                    "Route": "/api/memberlog/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3538,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 737,
                    "name": "域名管理",
                    "Route": "app.domainName.list",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 826,
                            "name": "域名列表查询",
                            "Route": "/api/domain/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 827,
                            "name": "域名详情",
                            "Route": "/api/domain/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 828,
                            "name": "修改域名",
                            "Route": "/api/domain/updateinfo",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 829,
                            "name": "更新域名状态",
                            "Route": "/api/domain/updatestatus",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1948,
                            "name": "公共站点下拉",
                            "Route": "/api/site/selectlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2546,
                            "name": "解绑",
                            "Route": "/api/domain/unbind",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2552,
                            "name": "代理账号下拉",
                            "Route": "/api/domain/agencys",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 737,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 2252,
                    "name": "意见反馈",
                    "Route": "app.feedback.list",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2253,
                            "name": "反馈列表",
                            "Route": "/api/feedback/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2252,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2254,
                            "name": "详情",
                            "Route": "/api/feedback/detail",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2252,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2255,
                            "name": "新增反馈",
                            "Route": "/api/feedback/add",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2252,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2789,
                            "name": "导出意见反馈",
                            "Route": "/api/feedback/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2252,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 2553,
                    "name": "三方登录管理",
                    "Route": "app.thdLogin.login",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2554,
                            "name": "三方登录列表",
                            "Route": "/api/site/three",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2553,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2555,
                            "name": "修改三方登录配置",
                            "Route": "/api/site/updatethree",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2553,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2641,
                            "name": "wap端提示是否开启",
                            "Route": "/api/site/update/tips",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2553,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2727,
                            "name": "注册验证码类型",
                            "Route": "/api/site/captcha",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2553,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3526,
                            "name": "修改站点三方登陆配置",
                            "Route": "/api/site/update/config",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2553,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3429,
                    "name": "游戏视讯管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": [
                        {
                            "id": 3430,
                            "name": "游戏管理",
                            "Route": "app.gameVideo.parent.game",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3429,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3435,
                                    "name": "游戏管理列表",
                                    "Route": "/api/game/status/game",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3430,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3439,
                                    "name": "游戏启用/停用",
                                    "Route": "/api/game/status/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3430,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3440,
                                    "name": "游戏类别和视讯下拉",
                                    "Route": "/api/game/status/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3430,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3431,
                            "name": "视讯管理",
                            "Route": "app.gameVideo.parent.video",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3429,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3436,
                                    "name": "视讯管理列表",
                                    "Route": "/api/game/status/product",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3431,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3438,
                                    "name": "视讯启用/停用",
                                    "Route": "/api/game/status/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3431,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3441,
                                    "name": "游戏类别和视讯下拉",
                                    "Route": "/api/game/status/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3431,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3432,
                            "name": "类别管理",
                            "Route": "app.gameVideo.parent.category",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3429,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3434,
                                    "name": "类别列表",
                                    "Route": "/api/game/status/type",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3432,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3437,
                                    "name": "类别启用/停用",
                                    "Route": "/api/game/status/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3432,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 3520,
                    "name": "消息推送设置",
                    "Route": "app.msgPush.msgPush",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 655,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3521,
                            "name": "添加消息推送设置",
                            "Route": "/api/jpush/config/add",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3520,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3522,
                            "name": "消息推送设置列表",
                            "Route": "/api/jpush/config/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3520,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3523,
                            "name": "修改消息推送设置",
                            "Route": "/api/jpush/config/update",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3520,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3524,
                            "name": "删除消息推送设置",
                            "Route": "/api/jpush/config/del",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3520,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 946,
            "name": "资讯管理",
            "Route": "#",
            "Icon": "icon-zxgl1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 947,
                    "name": "公告通知管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": [
                        {
                            "id": 948,
                            "name": "公告管理",
                            "Route": "app.notice.parent.notice",
                            "Icon": "icon-xtgl",
                            "status": 1,
                            "pType": 1,
                            "parentId": 947,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 976,
                                    "name": "列表",
                                    "Route": "/api/sitenotice/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 977,
                                    "name": "详情",
                                    "Route": "/api/sitenotice/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 978,
                                    "name": "显示位置",
                                    "Route": "/api/sitenotice/address",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 979,
                                    "name": "类型",
                                    "Route": "/api/sitenotice/noticecat",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 980,
                                    "name": "添加公告",
                                    "Route": "/api/sitenotice/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 981,
                                    "name": "修改公告",
                                    "Route": "/api/sitenotice/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 982,
                                    "name": "排序",
                                    "Route": "/api/sitenotice/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 983,
                                    "name": "启用禁用",
                                    "Route": "/api/sitenotice/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 984,
                                    "name": "删除",
                                    "Route": "/api/sitenotice/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2071,
                                    "name": "获取所有站点",
                                    "Route": "/api/sitenotice/allsite",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2376,
                                    "name": "设置公告速度",
                                    "Route": "/api/sitenotice/speed",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2377,
                                    "name": "批量启用停用",
                                    "Route": "/api/sitenotice/batch/status",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2408,
                                    "name": "获取公告速度",
                                    "Route": "/api/sitenotice/speedinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 948,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 949,
                            "name": "站内信管理",
                            "Route": "app.notice.parent.mail",
                            "Icon": "icon-xtgl",
                            "status": 1,
                            "pType": 1,
                            "parentId": 947,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 964,
                                    "name": "列表",
                                    "Route": "/api/agencymessage/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 965,
                                    "name": "详情",
                                    "Route": "/api/agencymessage/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 966,
                                    "name": "添加",
                                    "Route": "/api/agencymessage/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 967,
                                    "name": "修改",
                                    "Route": "/api/agencymessage/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 968,
                                    "name": "发送",
                                    "Route": "/api/agencymessage/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 969,
                                    "name": "删除",
                                    "Route": "/api/agencymessage/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 985,
                                    "name": "获取代理信息",
                                    "Route": "/api/genera/select/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2297,
                                    "name": "批量删除",
                                    "Route": "/api/agencymessage/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2632,
                                    "name": "股东级联列表",
                                    "Route": "/api/genera/selects",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 949,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 956,
                            "name": "通知管理",
                            "Route": "app.notice.parent.notify",
                            "Icon": "icon-xtgl",
                            "status": 1,
                            "pType": 1,
                            "parentId": 947,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 957,
                                    "name": "列表",
                                    "Route": "/api/membermessage/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 958,
                                    "name": "详情",
                                    "Route": "/api/membermessage/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 959,
                                    "name": "通知类型列表",
                                    "Route": "/api/membermessage/mtype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 960,
                                    "name": "添加",
                                    "Route": "/api/membermessage/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 961,
                                    "name": "发送",
                                    "Route": "/api/membermessage/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 962,
                                    "name": "删除",
                                    "Route": "/api/membermessage/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 963,
                                    "name": "修改",
                                    "Route": "/api/membermessage/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2289,
                                    "name": "批量删除",
                                    "Route": "/api/sitenotice/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2370,
                                    "name": "会员模板管理",
                                    "Route": "/api/membermessage/importTemplate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2371,
                                    "name": "会员导入",
                                    "Route": "/api/membermessage/parseImport",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 956,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1017,
                    "name": "附件管理",
                    "Route": "app.information.attachment",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 1018,
                            "name": "附件文件列表",
                            "Route": "/api/sitethumb/filelist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1019,
                            "name": "附件选择列表",
                            "Route": "/api/sitethumb/fileselect",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1020,
                            "name": "附件添加",
                            "Route": "/api/sitethumb/fileadd",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1021,
                            "name": "附件修改",
                            "Route": "/api/sitethumb/fileupdate",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1022,
                            "name": "附件移动",
                            "Route": "/api/sitethumb/filemove",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1023,
                            "name": "附件删除",
                            "Route": "/api/sitethumb/filedelete",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1017,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 1033,
                    "name": "内容配置管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": [
                        {
                            "id": 3060,
                            "name": "网站全局",
                            "Route": "app.template.content",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1033,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1034,
                                    "name": "模板列表",
                                    "Route": "/api/siteinfo/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1035,
                                    "name": "上导航列表",
                                    "Route": "/api/sitehead/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1036,
                                    "name": "上导航状态修改",
                                    "Route": "/api/sitehead/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1040,
                                    "name": "预览",
                                    "Route": "/api/siteinfo/preview",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1193,
                                    "name": "添加上导航",
                                    "Route": "/api/sitehead/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1195,
                                    "name": "修改上导航",
                                    "Route": "/api/sitehead/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1196,
                                    "name": "修改状态上导航",
                                    "Route": "/api/sitehead/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1198,
                                    "name": "删除重制上导航",
                                    "Route": "/api/sitehead/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1201,
                                    "name": "更新上导航",
                                    "Route": "/api/sitehead/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1204,
                                    "name": "查询下导航",
                                    "Route": "/api/sitefooter/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1205,
                                    "name": "查询单条下导航",
                                    "Route": "/api/sitefooter/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1206,
                                    "name": "添加下导航",
                                    "Route": "/api/sitefooter/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1207,
                                    "name": "联系方式查询",
                                    "Route": "/api/contact/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1208,
                                    "name": "联系方式类型",
                                    "Route": "/api/contact/type",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1209,
                                    "name": "修改下导航",
                                    "Route": "/api/sitefooter/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1210,
                                    "name": "联系方式新增",
                                    "Route": "/api/contact/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1211,
                                    "name": "修改状态下导航",
                                    "Route": "/api/sitefooter/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1212,
                                    "name": "联系方式修改",
                                    "Route": "/api/contact/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1213,
                                    "name": "删除重制",
                                    "Route": "/api/sitefooter/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1214,
                                    "name": "联系方式更新",
                                    "Route": "/api/contact/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1215,
                                    "name": "更新下导航",
                                    "Route": "/api/sitefooter/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1216,
                                    "name": "注册文案查询",
                                    "Route": "/api/regiword/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1217,
                                    "name": "注册文案新增",
                                    "Route": "/api/regiword/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1218,
                                    "name": "注册文案修改",
                                    "Route": "/api/regiword/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1219,
                                    "name": "注册文案更新",
                                    "Route": "/api/regiword/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1220,
                                    "name": "存款文案查询",
                                    "Route": "/api/payiword/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1221,
                                    "name": "存款文案类型",
                                    "Route": "/api/payiword/paytype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1222,
                                    "name": "存款文案新增",
                                    "Route": "/api/payiword/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1223,
                                    "name": "存款文案修改",
                                    "Route": "/api/payiword/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1224,
                                    "name": "存款文案更新",
                                    "Route": "/api/payiword/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1225,
                                    "name": "底部copyright查询",
                                    "Route": "/api/copyright/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1226,
                                    "name": "底部copyright新增",
                                    "Route": "/api/copyright/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1227,
                                    "name": "底部copyright修改",
                                    "Route": "/api/copyright/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1228,
                                    "name": "底部copyright更新",
                                    "Route": "/api/copyright/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1229,
                                    "name": "logo列表查询",
                                    "Route": "/api/sitelogo/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1230,
                                    "name": "logo新增",
                                    "Route": "/api/sitelogo/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1231,
                                    "name": "logo修改",
                                    "Route": "/api/sitelogo/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1538,
                                    "name": "上导航查询1",
                                    "Route": "/api/sitehead/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1539,
                                    "name": "logo列表",
                                    "Route": "/api/sitelogo/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2213,
                                    "name": "保存联系方式",
                                    "Route": "/api/contact/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2214,
                                    "name": "支付类型下拉",
                                    "Route": "/api/payiword/selects",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2218,
                                    "name": "保存logo",
                                    "Route": "/api/sitelogo/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2248,
                                    "name": "更新LOGO",
                                    "Route": "/api/sitelogo/release",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2301,
                                    "name": "保存网站名称",
                                    "Route": "/api/sitename/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2302,
                                    "name": "发布网站名称",
                                    "Route": "/api/sitename/release",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2304,
                                    "name": "保存网站关键词",
                                    "Route": "/api/sitekeyword/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2305,
                                    "name": "发布网站关键词",
                                    "Route": "/api/sitekeyword/release",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2306,
                                    "name": "获取联系我们维护文案",
                                    "Route": "/api/maintain/contacts",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2307,
                                    "name": "保存联系我们维护文案",
                                    "Route": "/api/maintain/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2310,
                                    "name": "保存网站名称",
                                    "Route": "/api/sitename/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2311,
                                    "name": "获取网站名称",
                                    "Route": "/api/sitename/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2312,
                                    "name": "获取网站关键词",
                                    "Route": "/api/sitekeyword/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2369,
                                    "name": "发布存款类型",
                                    "Route": "/api/payiword/release",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2705,
                                    "name": "保存入款文案",
                                    "Route": "/api/payiword/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3060,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3061,
                            "name": "游戏排序",
                            "Route": "app.template.content.games",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1033,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1139,
                                    "name": "轮播图排序修改",
                                    "Route": "/api/siteflash/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1376,
                                    "name": "游戏排序列表",
                                    "Route": "/api/siteorder/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1377,
                                    "name": "类型排序修改",
                                    "Route": "/api/siteorder/updatetypesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1378,
                                    "name": "游戏排序修改",
                                    "Route": "/api/siteorder/updateproductsort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1379,
                                    "name": "游戏排序更新",
                                    "Route": "/api/siteorder/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2721,
                                    "name": "游戏排序-小游戏",
                                    "Route": "/api/siteorder/updategamesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3231,
                                    "name": "预览",
                                    "Route": "/api/siteinfo/preview",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3061,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3062,
                            "name": "活动",
                            "Route": "app.template.content.activity",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1033,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1042,
                                    "name": "站点优惠活动列表查询",
                                    "Route": "/api/siteactivity/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1043,
                                    "name": "站点优惠活动单条查询",
                                    "Route": "/api/siteactivity/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1044,
                                    "name": "优惠活动添加",
                                    "Route": "/api/siteactivity/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1045,
                                    "name": "活动修改",
                                    "Route": "/api/siteactivity/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1046,
                                    "name": "活动停用/启用",
                                    "Route": "/api/siteactivity/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1047,
                                    "name": "活动删除",
                                    "Route": "/api/siteactivity/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1048,
                                    "name": "优惠活动更新",
                                    "Route": "/api/siteactivity/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2710,
                                    "name": "活动分类列表",
                                    "Route": "/api/siteactivitytype/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2711,
                                    "name": "修改活动分类序号",
                                    "Route": "/api/siteactivitytype/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2712,
                                    "name": "活动分类下拉框",
                                    "Route": "/api/siteactivitytype/drop",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2713,
                                    "name": "修改活动分类名称",
                                    "Route": "/api/siteactivitytype/updatetitle",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3234,
                                    "name": "预览",
                                    "Route": "/api/siteinfo/preview",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3062,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3063,
                            "name": "首页轮播图",
                            "Route": "app.template.content.banner",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1033,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1132,
                                    "name": "轮播图列表查询",
                                    "Route": "/api/siteflash/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1134,
                                    "name": "轮播图添加",
                                    "Route": "/api/siteflash/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1138,
                                    "name": "轮播图修改",
                                    "Route": "/api/siteflash/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1140,
                                    "name": "轮播图删除",
                                    "Route": "/api/siteflash/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1141,
                                    "name": "轮播图更新",
                                    "Route": "/api/siteflash/touse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1253,
                                    "name": "获取轮播图修改信息",
                                    "Route": "/api/siteflash/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3233,
                                    "name": "预览",
                                    "Route": "/api/siteinfo/preview",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3063,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3064,
                            "name": "自助优惠申请",
                            "Route": "app.template.content.discount",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1033,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1055,
                                    "name": "自助优惠申请列表",
                                    "Route": "/api/sitepromotionconfig/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1056,
                                    "name": "自助优惠申请添加",
                                    "Route": "/api/sitepromotionconfig/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1057,
                                    "name": "自助优惠申请单条详情",
                                    "Route": "/api/sitepromotionconfig/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1058,
                                    "name": "自助优惠申请修改",
                                    "Route": "/api/sitepromotionconfig/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1059,
                                    "name": "自助优惠申请状态修改",
                                    "Route": "/api/sitepromotionconfig/status",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1060,
                                    "name": "自助优惠申请删除",
                                    "Route": "/api/sitepromotionconfig/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1061,
                                    "name": "自助优惠申请更新",
                                    "Route": "/api/sitepromotionconfig/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3232,
                                    "name": "预览",
                                    "Route": "/api/siteinfo/preview",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3064,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2118,
                    "name": "消息中心",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": [
                        {
                            "id": 3065,
                            "name": "公告",
                            "Route": "app.massage.massage",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2118,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2127,
                                    "name": "公告列表",
                                    "Route": "/api/sitenotice/backend",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3065,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2291,
                                    "name": "批量删除公告",
                                    "Route": "/api/sitenotice/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3065,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3066,
                            "name": "站内信",
                            "Route": "app.massage.mails",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2118,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2128,
                                    "name": "站内信列表",
                                    "Route": "/api/agencymessage/center",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3066,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2129,
                                    "name": "获取未读站内信数",
                                    "Route": "/api/agencymessage/unread",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3066,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2130,
                                    "name": "阅读站内信",
                                    "Route": "/api/agencymessage/read",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3066,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2292,
                                    "name": "批量删除站内信",
                                    "Route": "/api/agencymessage/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3066,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3067,
                            "name": "问卷调查",
                            "Route": "app.massage.questionnaire",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2118,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2751,
                                    "name": "问卷调查消息列表",
                                    "Route": "/api/investigationMessage/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2752,
                                    "name": "问卷调查消息详情",
                                    "Route": "/api/investigationMessage/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2753,
                                    "name": "问卷调查消息提交",
                                    "Route": "/api/investigationMessage/submit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2754,
                                    "name": "问卷调查消息删除一条",
                                    "Route": "/api/investigationMessage/delone",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2755,
                                    "name": "问卷调查消息删除多条",
                                    "Route": "/api/investigationMessage/delall",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2756,
                                    "name": "问卷调查查询一条统计信息",
                                    "Route": "/api/investigationMessage/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3067,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3068,
                            "name": "系统消息",
                            "Route": "app.massage.systemMessage",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2118,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2758,
                                    "name": "系统消息列表",
                                    "Route": "/api/systemMessage/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3068,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2759,
                                    "name": "系统消息删除",
                                    "Route": "/api/systemMessage/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3068,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2339,
                    "name": "全屏动画",
                    "Route": "app.notice.animation",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2340,
                            "name": "添加全屏动画",
                            "Route": "/api/animation/save",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2341,
                            "name": "全屏动画列表",
                            "Route": "/api/animation/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2342,
                            "name": "修改全屏动画",
                            "Route": "/api/animation/edit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2343,
                            "name": "全屏动画停用/启用",
                            "Route": "/api/animation/status",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2344,
                            "name": "全屏动画详情",
                            "Route": "/api/animation/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2345,
                            "name": "删除全屏动画",
                            "Route": "/api/animation/remove",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2549,
                            "name": "缩略图地址",
                            "Route": "/api/animation/preview/address",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2339,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 2346,
                    "name": "大转盘",
                    "Route": "app.bigWheel.bigWheel",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2347,
                            "name": "添加大转盘活动",
                            "Route": "/api/turntable/save",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2348,
                            "name": "大转盘活动详情",
                            "Route": "/api/turntable/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2349,
                            "name": "大转盘活动列表",
                            "Route": "/api/turntable/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2350,
                            "name": "修改大转盘活动",
                            "Route": "/api/turntable/edit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2351,
                            "name": "终止大转盘活动",
                            "Route": "/api/turntable/stop",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2352,
                            "name": "删除未开始大转盘活动",
                            "Route": "/api/turntable/remove",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2353,
                            "name": "大转盘活动中奖记录列表",
                            "Route": "/api/winning/records",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2354,
                            "name": "大转盘活动中奖记录列表奖项下拉列表",
                            "Route": "/api/winning/winningPrizeSelects",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2346,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 2424,
                    "name": "游戏推荐设置",
                    "Route": "app.recommendSetting.recommendSetting",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3222,
                            "name": "推荐设置列表",
                            "Route": "/api/recommended/setting/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3223,
                            "name": "添加",
                            "Route": "/api/recommended/setting/save",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3224,
                            "name": "修改",
                            "Route": "/api/recommended/setting/edit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3225,
                            "name": "删除",
                            "Route": "/api/recommended/setting/remove",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3226,
                            "name": "修改详情",
                            "Route": "/api/recommended/setting/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3227,
                            "name": "大类型下拉",
                            "Route": "/api/recommended/setting/topTypeDropDowns",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3228,
                            "name": "游戏类型下拉",
                            "Route": "/api/recommended/setting/gameTypeDropDowns",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3229,
                            "name": "厂商下拉",
                            "Route": "/api/recommended/setting/addDropDowns",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2424,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 2562,
                    "name": "移动端广告",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": [
                        {
                            "id": 3080,
                            "name": "底部广告",
                            "Route": "app.ad.parent.wap",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2562,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2642,
                                    "name": "底部-列表",
                                    "Route": "/api/siteadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2643,
                                    "name": "底部-添加",
                                    "Route": "/api/siteadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2644,
                                    "name": "底部-修改",
                                    "Route": "/api/siteadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2645,
                                    "name": "底部-启用停用",
                                    "Route": "/api/siteadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2646,
                                    "name": "底部-删除",
                                    "Route": "/api/siteadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2647,
                                    "name": "底部-排序",
                                    "Route": "/api/siteadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2648,
                                    "name": "底部-修改信息",
                                    "Route": "/api/siteadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2696,
                                    "name": "内链获取",
                                    "Route": "/api/siteinfo/linkurl",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3080,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3081,
                            "name": "游戏大厅",
                            "Route": "app.ad.parent.wapGame",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2562,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2608,
                                    "name": "游戏大厅/其他-列表",
                                    "Route": "/api/gameadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2609,
                                    "name": "游戏大厅/其他-修改信息",
                                    "Route": "/api/gameadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2610,
                                    "name": "游戏大厅/其他-添加",
                                    "Route": "/api/gameadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2611,
                                    "name": "游戏大厅/其他-修改",
                                    "Route": "/api/gameadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2612,
                                    "name": "游戏大厅/其他-启用停用",
                                    "Route": "/api/gameadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2613,
                                    "name": "游戏大厅/其他-排序",
                                    "Route": "/api/gameadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2614,
                                    "name": "游戏大厅/其他-删除",
                                    "Route": "/api/gameadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2615,
                                    "name": "游戏大厅/其他-分类类型",
                                    "Route": "/api/gameadv/types",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3083,
                                    "name": "内链获取",
                                    "Route": "/api/siteinfo/linkurl",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3085,
                                    "name": "游戏大厅-列表",
                                    "Route": "/api/gameadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3086,
                                    "name": "游戏大厅-修改信息",
                                    "Route": "/api/gameadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3087,
                                    "name": "游戏大厅-添加",
                                    "Route": "/api/gameadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3088,
                                    "name": "游戏大厅-修改",
                                    "Route": "/api/gameadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3089,
                                    "name": "游戏大厅-启用停用",
                                    "Route": "/api/gameadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3090,
                                    "name": "游戏大厅-排序",
                                    "Route": "/api/gameadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3091,
                                    "name": "游戏大厅-删除",
                                    "Route": "/api/gameadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3092,
                                    "name": "游戏大厅-分类类型",
                                    "Route": "/api/gameadv/types",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3081,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3082,
                            "name": "其他",
                            "Route": "app.ad.parent.wapOther",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2562,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3084,
                                    "name": "内链获取",
                                    "Route": "/api/siteinfo/linkurl",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3094,
                                    "name": "其他-列表",
                                    "Route": "/api/gameadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3095,
                                    "name": "其他-修改信息",
                                    "Route": "/api/gameadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3096,
                                    "name": "其他-添加",
                                    "Route": "/api/gameadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3097,
                                    "name": "其他-修改",
                                    "Route": "/api/gameadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3098,
                                    "name": "其他-启用停用",
                                    "Route": "/api/gameadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3099,
                                    "name": "其他-删除",
                                    "Route": "/api/gameadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3100,
                                    "name": "其他-分类类型",
                                    "Route": "/api/gameadv/types",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3101,
                                    "name": "其他-排序",
                                    "Route": "/api/gameadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3082,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3670,
                            "name": "闪屏广告",
                            "Route": "app.ad.parent.wapScreen",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2562,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3673,
                                    "name": "添加",
                                    "Route": "/api/app/adv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3676,
                                    "name": "详情",
                                    "Route": "/api/app/adv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3679,
                                    "name": "修改",
                                    "Route": "/api/app/adv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3682,
                                    "name": "删除",
                                    "Route": "/api/app/adv/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3685,
                                    "name": "批量删除",
                                    "Route": "/api/app/adv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3688,
                                    "name": "修改状态",
                                    "Route": "/api/app/adv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3691,
                                    "name": "列表",
                                    "Route": "/api/app/adv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3670,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2563,
                    "name": "PC端广告",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": [
                        {
                            "id": 3104,
                            "name": "左下角",
                            "Route": "app.ad.parent.pc",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2563,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2635,
                                    "name": "批量操作 更新 添加 修改状态",
                                    "Route": "/api/sitefloat/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2636,
                                    "name": "浮点列表查询",
                                    "Route": "/api/sitefloat/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2638,
                                    "name": "子站接口",
                                    "Route": "/api/site/selectlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2639,
                                    "name": "内链跳转链接",
                                    "Route": "/api/siteinfo/linkurl",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2649,
                                    "name": "左下角-修改",
                                    "Route": "/api/siteadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2650,
                                    "name": "左下角-停用启用",
                                    "Route": "/api/siteadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2651,
                                    "name": "左下角-排序",
                                    "Route": "/api/siteadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2652,
                                    "name": "左下角-删除",
                                    "Route": "/api/siteadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2653,
                                    "name": "左下角-修改信息",
                                    "Route": "/api/siteadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2654,
                                    "name": "左下角-添加",
                                    "Route": "/api/siteadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2655,
                                    "name": "左下角-列表",
                                    "Route": "/api/siteadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3104,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3105,
                            "name": "左右浮动",
                            "Route": "app.sitefloat.sitefloat",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2563,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3220,
                                    "name": "左右浮动列表数据",
                                    "Route": "/api/sitefloat/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3105,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3221,
                                    "name": "保存/发布",
                                    "Route": "/api/sitefloat/save",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3105,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3106,
                            "name": "游戏大厅",
                            "Route": "app.ad.parent.pcGame",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2563,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2656,
                                    "name": "游戏大厅-修改信息",
                                    "Route": "/api/gameadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2657,
                                    "name": "游戏大厅-分类类型",
                                    "Route": "/api/gameadv/types",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2658,
                                    "name": "游戏大厅-排序",
                                    "Route": "/api/gameadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2659,
                                    "name": "游戏大厅-删除",
                                    "Route": "/api/gameadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2660,
                                    "name": "游戏大厅-停用启用",
                                    "Route": "/api/gameadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2661,
                                    "name": "游戏大厅-修改",
                                    "Route": "/api/gameadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2662,
                                    "name": "游戏大厅-添加",
                                    "Route": "/api/gameadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2663,
                                    "name": "游戏大厅-列表",
                                    "Route": "/api/gameadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3106,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3107,
                            "name": "其他",
                            "Route": "app.ad.parent.pcOther",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2563,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3108,
                                    "name": "其他-修改信息",
                                    "Route": "/api/gameadv/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3109,
                                    "name": "其他-分类类型",
                                    "Route": "/api/gameadv/types",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3110,
                                    "name": "其他-排序",
                                    "Route": "/api/gameadv/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3112,
                                    "name": "其他-停用启用",
                                    "Route": "/api/gameadv/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3113,
                                    "name": "其他-删除",
                                    "Route": "/api/gameadv/deletes",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3114,
                                    "name": "其他-修改",
                                    "Route": "/api/gameadv/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3115,
                                    "name": "其他-添加",
                                    "Route": "/api/gameadv/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3116,
                                    "name": "其他-列表",
                                    "Route": "/api/gameadv/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3107,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2743,
                    "name": "问卷调查",
                    "Route": "app.questionnaire.list",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 946,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2744,
                            "name": "代理问卷调查添加",
                            "Route": "/api/investigation/add",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2745,
                            "name": "代理问卷调查列表",
                            "Route": "/api/investigation/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2746,
                            "name": "代理问卷调查删除",
                            "Route": "/api/investigation/delete",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2747,
                            "name": "代理问卷调查编辑",
                            "Route": "/api/investigation/edit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2748,
                            "name": "代理问卷调查状态",
                            "Route": "/api/investigation/status",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2749,
                            "name": "代理问卷调查复制",
                            "Route": "/api/investigation/info",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2764,
                            "name": "代理问卷调查发送",
                            "Route": "/api/investigation/send",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3244,
                            "name": "代理问卷调查消息统计",
                            "Route": "/api/investigationMessage/statis",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 2743,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 1313,
            "name": "资金管理",
            "Route": "#",
            "Icon": "icon-zjgl1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 1314,
                    "name": "稽核管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 2111,
                            "name": "即时稽核查询",
                            "Route": "app.audit.parent.auditQuery",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1314,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2114,
                                    "name": "即时稽核查询",
                                    "Route": "/api/siteaudit/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2111,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2724,
                                    "name": "手动清除稽核",
                                    "Route": "/api/siteaudit/clear",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2111,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2112,
                            "name": "稽核日志",
                            "Route": "app.audit.parent.auditLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1314,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2113,
                                    "name": "稽核日志列表",
                                    "Route": "/api/siteaudit/log",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2112,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2776,
                                    "name": "稽核日志导出",
                                    "Route": "/api/siteaudit/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2112,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1318,
                    "name": "会员返水管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1321,
                            "name": "返水设置",
                            "Route": "app.returnMoney.parent.set",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1318,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1426,
                                    "name": "返水设置列表",
                                    "Route": "/api/waterset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1442,
                                    "name": "复制",
                                    "Route": "/api/waterset/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1443,
                                    "name": "配置状态修改",
                                    "Route": "/api/waterset/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1444,
                                    "name": "配置删除",
                                    "Route": "/api/waterset/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1445,
                                    "name": "配置详情",
                                    "Route": "/api/waterset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1493,
                                    "name": "配置修改",
                                    "Route": "/api/waterset/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1321,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3002,
                            "name": "后台返水",
                            "Route": "app.returnMoney.parent.server",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1318,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1408,
                                    "name": "返水统计",
                                    "Route": "/api/returnwater/getcount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3002,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1498,
                                    "name": "返水",
                                    "Route": "/api/returnwater/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3002,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3003,
                            "name": "后台返水记录",
                            "Route": "app.returnMoney.parent.serverLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1318,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1407,
                                    "name": "后台返水记录列表",
                                    "Route": "/api/returnwater/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3003,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1499,
                                    "name": "冲销",
                                    "Route": "/api/returnwater/back",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3003,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3598,
                                    "name": "后台返水记录导出",
                                    "Route": "/api/returnwater/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3003,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3004,
                            "name": "自助返水记录",
                            "Route": "app.returnMoney.parent.selfLog",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1318,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2368,
                                    "name": "自助返水列表",
                                    "Route": "/api/waterself/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3004,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3001,
                                    "name": "自助反水导出",
                                    "Route": "/api/waterself/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3004,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1322,
                    "name": "红包管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1323,
                            "name": "红包样式",
                            "Route": "app.redEnvelope.parent.redEnvelopeStyle",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1322,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1391,
                                    "name": "红包样式列表",
                                    "Route": "/api/redstyle/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1323,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1392,
                                    "name": "添加红包样式",
                                    "Route": "/api/redstyle/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1323,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1393,
                                    "name": "删除红包样式",
                                    "Route": "/api/redstyle/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1323,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1394,
                                    "name": "获取红包样式修改信息",
                                    "Route": "/api/redstyle/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1323,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1395,
                                    "name": "修改红包样式",
                                    "Route": "/api/redstyle/updatename",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1323,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1324,
                            "name": "普通红包",
                            "Route": "app.redEnvelope.parent.general",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1322,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1446,
                                    "name": "普通红包-添加",
                                    "Route": "/api/redset/generaladd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1447,
                                    "name": "普通红包-列表",
                                    "Route": "/api/redset/generallist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1448,
                                    "name": "普通红包-获取修改信息",
                                    "Route": "/api/redset/generalinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1449,
                                    "name": "普通红包-修改",
                                    "Route": "/api/redset/generalupdate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1450,
                                    "name": "红包样式下拉框",
                                    "Route": "/api/redset/redstylelist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1462,
                                    "name": "普通/高级红包-删除",
                                    "Route": "/api/redset/generaldelete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1463,
                                    "name": "普通/高级红包-查看",
                                    "Route": "/api/redset/getgenerallist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1486,
                                    "name": "普通/高级红包-生成",
                                    "Route": "/api/redset/generalmake",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1487,
                                    "name": "普通/高级红包-领取记录",
                                    "Route": "/api/redset/gethightred",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1492,
                                    "name": "普通/高级红包-终止",
                                    "Route": "/api/redset/generalend",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1324,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3005,
                            "name": "高级红包",
                            "Route": "app.redEnvelope.parent.advanced",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1322,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1488,
                                    "name": "高级红包-添加",
                                    "Route": "/api/redset/hightadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1489,
                                    "name": "高级红包-列表",
                                    "Route": "/api/redset/hightllist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1490,
                                    "name": "高级红包-获取修改信息",
                                    "Route": "/api/redset/hightinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1568,
                                    "name": "高级红包-修改",
                                    "Route": "/api/redset/hightupdate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3006,
                                    "name": "红包样式下拉框",
                                    "Route": "/api/redset/redstylelist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3007,
                                    "name": "普通/高级红包-删除",
                                    "Route": "/api/redset/generaldelete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3008,
                                    "name": "普通/高级红包-查看",
                                    "Route": "/api/redset/getgenerallist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3009,
                                    "name": "普通/高级红包-生成",
                                    "Route": "/api/redset/generalmake",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3010,
                                    "name": "普通/高级红包-领取记录",
                                    "Route": "/api/redset/gethightred",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3011,
                                    "name": "普通/高级红包-终止",
                                    "Route": "/api/redset/generalend",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3005,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1335,
                    "name": "存取款管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1337,
                            "name": "公司入款管理",
                            "Route": "app.inoutCash.parent.companyIncome",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1335,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1502,
                                    "name": "公司入款列表",
                                    "Route": "/api/companyincome/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1503,
                                    "name": "公司入款excel导出",
                                    "Route": "/api/companyincome/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1504,
                                    "name": "公司入款确定",
                                    "Route": "/api/companyincome/enable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1505,
                                    "name": "公司入款取消",
                                    "Route": "/api/companyincome/notable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1951,
                                    "name": "公司入款不再提醒",
                                    "Route": "/api/companyincome/remind",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2028,
                                    "name": "公司入款监控列表",
                                    "Route": "/api/companyincome/monitor",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2379,
                                    "name": "公司入款-获取备注列表",
                                    "Route": "/api/companyincome/remarkinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2380,
                                    "name": "公司入款-添加备注",
                                    "Route": "/api/companyincome/remarkadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2386,
                                    "name": "公司入款-收款账号下拉",
                                    "Route": "/api/companyincome/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2720,
                                    "name": "公司入款/线上入款-会员详情",
                                    "Route": "/api/onlineout/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2725,
                                    "name": "公司入款-查看会员详情",
                                    "Route": "/api/companyincome/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1337,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1338,
                            "name": "取款管理",
                            "Route": "app.inoutCash.parent.onlineOut",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1335,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1515,
                                    "name": "出款列表",
                                    "Route": "/api/onlineout/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1516,
                                    "name": "出款excel导出",
                                    "Route": "/api/onlineout/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1517,
                                    "name": "出款预备出款",
                                    "Route": "/api/onlineout/ready",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1518,
                                    "name": "自动出款确定",
                                    "Route": "/api/onlineout/auto",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1519,
                                    "name": "出款确定",
                                    "Route": "/api/onlineout/enable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1520,
                                    "name": "出款取消",
                                    "Route": "/api/onlineout/notable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1521,
                                    "name": "出款拒绝",
                                    "Route": "/api/onlineout/refuse",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1522,
                                    "name": "修改手续费",
                                    "Route": "/api/onlineout/updatefee",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1523,
                                    "name": "出款监控铃声不再提醒",
                                    "Route": "/api/onlineout/remind",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1602,
                                    "name": "信息汇总",
                                    "Route": "/api/onlineout/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1663,
                                    "name": "出款详情",
                                    "Route": "/api/onlineout/moneyinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2030,
                                    "name": "线上出款监控列表",
                                    "Route": "/api/onlineout/monitor",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2388,
                                    "name": "出款管理-获取备注列表",
                                    "Route": "/api/onlineout/remarkinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2389,
                                    "name": "出款管理-添加备注",
                                    "Route": "/api/onlineout/remarkadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2391,
                                    "name": "出款管理-扣除状态修改",
                                    "Route": "/api/onlineout/updatefavourable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2489,
                                    "name": "修改行政费",
                                    "Route": "/api/onlineout/updateadminfee",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1338,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1339,
                            "name": "出入账目汇总",
                            "Route": "app.inoutCash.parent.entryCount",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1335,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1537,
                                    "name": "出入款账目汇总查询",
                                    "Route": "/api/entrycount/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1339,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2404,
                                    "name": "明细",
                                    "Route": "/api/entrycount/detail",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1339,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2722,
                                    "name": "导出明细",
                                    "Route": "/api/entrycount/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1339,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3012,
                            "name": "线上入款管理",
                            "Route": "app.inoutCash.parent.onlineIncome",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1335,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1507,
                                    "name": "线上入款列表",
                                    "Route": "/api/onlineincome/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1508,
                                    "name": "线上入款excel导出",
                                    "Route": "/api/onlineincome/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1509,
                                    "name": "线上入款确定",
                                    "Route": "/api/onlineincome/enable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1510,
                                    "name": "线上入款取消",
                                    "Route": "/api/onlineincome/notable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1952,
                                    "name": "线上入款不再提醒",
                                    "Route": "/api/onlineincome/remind",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2029,
                                    "name": "线上入款监控列表",
                                    "Route": "/api/onlineincome/monitor",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2383,
                                    "name": "线上入款-获取备注列表",
                                    "Route": "/api/onlineincome/remarkinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2384,
                                    "name": "线上入款-添加备注",
                                    "Route": "/api/onlineincome/remarkadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2387,
                                    "name": "线上入款-三方账号下拉",
                                    "Route": "/api/onlineincome/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2726,
                                    "name": "线上入款-查看会员详情",
                                    "Route": "/api/onlineincome/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3013,
                                    "name": "公司入款/线上入款-会员详情",
                                    "Route": "/api/onlineout/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3012,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1336,
                    "name": "人工存取款管理",
                    "Route": "*",
                    "Icon": "",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 3120,
                            "name": "人工存款",
                            "Route": "app.inoutCash.parent.manualIncomeForm",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1403,
                                    "name": "监控",
                                    "Route": "/api/ws",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1428,
                                    "name": "人工入款项目下拉",
                                    "Route": "/api/manualincome/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1456,
                                    "name": "人工入款会员账号查询",
                                    "Route": "/api/manualincome/memberinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1457,
                                    "name": "人工存款",
                                    "Route": "/api/manualincome/oneadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2392,
                                    "name": "人工入款-获取备注列表",
                                    "Route": "/api/manualincome/remarkinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2393,
                                    "name": "人工入款-添加备注",
                                    "Route": "/api/manualincome/remarkadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3120,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3121,
                            "name": "批量人工存款",
                            "Route": "app.inoutCash.parent.manualIncomeMulForm",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1458,
                                    "name": "多会员账号批量人工入款",
                                    "Route": "/api/manualincome/batchadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3121,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1459,
                                    "name": "会员分组批量人工入款",
                                    "Route": "/api/manualincome/batchlevel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3121,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3122,
                            "name": "人工存款记录",
                            "Route": "app.inoutCash.parent.manualIncome",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1427,
                                    "name": "人工入款列表",
                                    "Route": "/api/manualincome/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3122,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2768,
                                    "name": "人工存款记录导出",
                                    "Route": "/api/manualincome/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3122,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3123,
                            "name": "人工取款",
                            "Route": "app.inoutCash.parent.manualOutForm",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1495,
                                    "name": "人工取款项目下拉",
                                    "Route": "/api/manualout/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3123,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1496,
                                    "name": "人工取款",
                                    "Route": "/api/manualout/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3123,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2394,
                                    "name": "人工取款-获取备注列表",
                                    "Route": "/api/manualout/remarkinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3123,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2395,
                                    "name": "人工取款-添加备注",
                                    "Route": "/api/manualout/remarkadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3123,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2396,
                                    "name": "人工入款记录-修改稽核",
                                    "Route": "/api/manualincome/updateaudit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3123,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3124,
                            "name": "人工取款记录",
                            "Route": "app.inoutCash.parent.manualOut",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1494,
                                    "name": "人工取款列表查询",
                                    "Route": "/api/manualout/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3124,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2769,
                                    "name": "人工取款记录导出",
                                    "Route": "/api/manualout/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3124,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3260,
                            "name": "批量人工取款",
                            "Route": "app.inoutCash.parent.manualOutMulForm",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1336,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3261,
                                    "name": "批量人工取款",
                                    "Route": "/api/manualout/batchadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3260,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1352,
                    "name": "会员返佣管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1355,
                            "name": "推广设置",
                            "Route": "app.memberCommission.parent.generalizeSeting",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1352,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1400,
                                    "name": "推广设置列表",
                                    "Route": "/api/spreadset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1401,
                                    "name": "推广设置配置单条详情",
                                    "Route": "/api/spreadset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1402,
                                    "name": "推广设置配置修改",
                                    "Route": "/api/spreadset/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3027,
                                    "name": "推广设置",
                                    "Route": "/api/rebateset/promoteset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3030,
                                    "name": "推广设置修改",
                                    "Route": "/api/rebateset/edit/promoteset",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3337,
                                    "name": "会员返佣返水比例管理列表",
                                    "Route": "/api/spreadwaterset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3338,
                                    "name": "会员返佣返水比例管理详情",
                                    "Route": "/api/spreadwaterset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3339,
                                    "name": "添加会员返佣返水比例管理",
                                    "Route": "/api/spreadwaterset/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3340,
                                    "name": "修改会员返佣返水比例管理",
                                    "Route": "/api/spreadwaterset/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3341,
                                    "name": "删除会员返佣返水比例管理",
                                    "Route": "/api/spreadwaterset/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3342,
                                    "name": "站点套餐视讯列表",
                                    "Route": "/api/spreadwaterset/platform/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1355,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3132,
                            "name": "推广统计",
                            "Route": "app.memberCommission.parent.generalizeStatistics",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1352,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3133,
                                    "name": "推广统计列表",
                                    "Route": "/api/rebate/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3132,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3134,
                                    "name": "推广报表",
                                    "Route": "/api/rebate/report",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3132,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3185,
                                    "name": "会员推广明细",
                                    "Route": "/api/spreadcount/spreadlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3132,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3235,
                            "name": "返佣记录",
                            "Route": "app.memberCommission.parent.memberCommissionRecord",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1352,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3236,
                                    "name": "会员返佣记录查询",
                                    "Route": "/api/memberrebate/records",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3235,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3275,
                                    "name": "会员附属返佣记录查询",
                                    "Route": "/api/memberrebate/records/sub",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3235,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3595,
                                    "name": "返佣冲销",
                                    "Route": "/api/memberrebate/manual/reversal",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3235,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3586,
                            "name": "手动返佣",
                            "Route": "app.memberCommission.parent.manualRecord",
                            "Icon": "#",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1352,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3589,
                                    "name": "手动返佣列表",
                                    "Route": "/api/memberrebate/manual/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3586,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3592,
                                    "name": "手动返佣",
                                    "Route": "/api/memberrebate/manual/rebate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3586,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1360,
                    "name": "会员现金记录",
                    "Route": "app.moneyLog.list",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 1361,
                            "name": "资金列表",
                            "Route": "/api/membercash/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1360,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1362,
                            "name": "类型列表",
                            "Route": "/api/membercash/typelist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1360,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2556,
                            "name": "删除",
                            "Route": "/api/membercash/del",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1360,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2787,
                            "name": "会员现金记录导出",
                            "Route": "/api/membercash/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1360,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 1365,
                    "name": "支付管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1366,
                            "name": "支付参数预设",
                            "Route": "app.paySettings.parent.paramSetting",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1365,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1464,
                                    "name": "支付参数预设列表",
                                    "Route": "/api/payset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1465,
                                    "name": "支付参数预设单条详情",
                                    "Route": "/api/payset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1466,
                                    "name": "支付参数预设复制添加",
                                    "Route": "/api/payset/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1467,
                                    "name": "支付参数预设外层名字修改",
                                    "Route": "/api/payset/updatename",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1468,
                                    "name": "支付参数预设公司入款修改",
                                    "Route": "/api/payset/updatecompany",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1469,
                                    "name": "支付参数预设线上入款修改",
                                    "Route": "/api/payset/updateonline",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1470,
                                    "name": "支付参数预设线上出款修改",
                                    "Route": "/api/payset/updateout",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1471,
                                    "name": "支付参数预设删除",
                                    "Route": "/api/payset/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1366,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1369,
                            "name": "银行入款",
                            "Route": "app.paySettings.parent.incomeWay",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1365,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1472,
                                    "name": "银行入款设定列表",
                                    "Route": "/api/bankset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1473,
                                    "name": "银行入款单条详情",
                                    "Route": "/api/bankset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1474,
                                    "name": "该入款银行的入款记录查询",
                                    "Route": "/api/bankset/incomerecord",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1475,
                                    "name": "银行入款添加",
                                    "Route": "/api/bankset/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1476,
                                    "name": "银行入款修改",
                                    "Route": "/api/bankset/updatebank",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1477,
                                    "name": "入款银行状态修改",
                                    "Route": "/api/bankset/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1478,
                                    "name": "银行入款删除",
                                    "Route": "/api/bankset/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1511,
                                    "name": "银行入款银行列表下拉",
                                    "Route": "/api/bankset/downlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2372,
                                    "name": "银行入款排序",
                                    "Route": "/api/bankset/updatesort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2777,
                                    "name": "银行入款列表导出",
                                    "Route": "/api/bankset/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1369,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1959,
                            "name": "三方支付",
                            "Route": "app.thdPay.thdPay",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1365,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1973,
                                    "name": "三方支付",
                                    "Route": "/api/thirdpay/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1974,
                                    "name": "支付类型",
                                    "Route": "/api/thirdpay/paytype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1975,
                                    "name": "平台信息",
                                    "Route": "/api/thirdpay/platform",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1977,
                                    "name": "查询",
                                    "Route": "/api/thirdpay/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1978,
                                    "name": "列表",
                                    "Route": "/api/thirdpay/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1982,
                                    "name": "修改状态",
                                    "Route": "/api/thirdpay/status",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1983,
                                    "name": "删除",
                                    "Route": "/api/thirdpay/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2023,
                                    "name": "修改商户",
                                    "Route": "/api/thirdpay/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2779,
                                    "name": "三方支付列表导出",
                                    "Route": "/api/thirdpay/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3250,
                                    "name": "修改排序",
                                    "Route": "/api/thirdpay/sort",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1959,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3020,
                            "name": "二维码入款",
                            "Route": "app.paySettings.parent.otherIncome",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1365,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1479,
                                    "name": "其他入款设定列表",
                                    "Route": "/api/otherset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1480,
                                    "name": "其他入款单条详情",
                                    "Route": "/api/otherset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1481,
                                    "name": "该入款方式的入款记录查询",
                                    "Route": "/api/otherset/incomerecord",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1482,
                                    "name": "其他入款添加",
                                    "Route": "/api/otherset/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1483,
                                    "name": "其他入款修改",
                                    "Route": "/api/otherset/updatebank",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1484,
                                    "name": "其他入款设定状态修改",
                                    "Route": "/api/otherset/updatestatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1485,
                                    "name": "其他入款设定删除",
                                    "Route": "/api/otherset/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1512,
                                    "name": "其他入款银行列表下拉",
                                    "Route": "/api/otherset/downlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2778,
                                    "name": "二维码入款列表导出",
                                    "Route": "/api/otherset/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3020,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1371,
                    "name": "优惠活动记录",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 3153,
                            "name": "活动记录",
                            "Route": "app.actrec.actrec",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1371,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1418,
                                    "name": "会员活动领取记录列表",
                                    "Route": "/api/activityrecord/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3153,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2785,
                                    "name": "优惠活动记录导出",
                                    "Route": "/api/activityrecord/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3153,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3154,
                            "name": "自助优惠申请",
                            "Route": "app.actrec.prorec",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1371,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1419,
                                    "name": "自助优惠申请记录列表",
                                    "Route": "/api/promotionrecord/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1420,
                                    "name": "自助优惠申请记录单条详情",
                                    "Route": "/api/promotionrecord/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1421,
                                    "name": "自助优惠申请记录会员往期优惠",
                                    "Route": "/api/promotionrecord/beforeinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1422,
                                    "name": "自助优惠申请记录会员出入款情况",
                                    "Route": "/api/promotionrecord/inout",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1423,
                                    "name": "自助优惠申请记录会员投注情况",
                                    "Route": "/api/promotionrecord/payinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1424,
                                    "name": "自助申请确定",
                                    "Route": "/api/promotionrecord/enable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1425,
                                    "name": "自助申请拒绝",
                                    "Route": "/api/promotionrecord/notable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2786,
                                    "name": "自助优惠记录导出",
                                    "Route": "/api/promotionrecord/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3154,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 1382,
                    "name": "额度转换",
                    "Route": "*",
                    "Icon": "",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 3130,
                            "name": "额度转换",
                            "Route": "app.conversion.parent.memconversion",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1382,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1441,
                                    "name": "额度转换记录列表",
                                    "Route": "/api/memberconversion/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1451,
                                    "name": "会员账号查询获取游戏视讯额度",
                                    "Route": "/api/memberconversion/memberinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1452,
                                    "name": "远程请求会员游戏视讯额度",
                                    "Route": "/api/memberconversion/memberinfo/remote",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1454,
                                    "name": "额度一键回归系统额度",
                                    "Route": "/api/memberconversion/balanceall",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1455,
                                    "name": "一键刷新会员游戏视讯额度",
                                    "Route": "/api/memberconversion/updateall",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2770,
                                    "name": "额度转换记录导出",
                                    "Route": "/api/memberconversion/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3255,
                                    "name": "厂商下拉框",
                                    "Route": "/api/memberconversion/platform",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3130,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3131,
                            "name": "人工额度转换",
                            "Route": "app.conversion.parent.artificialMemconversion",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 1382,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1453,
                                    "name": "人工额度转换",
                                    "Route": "/api/memberconversion/balance",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3131,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2003,
                    "name": "代理退佣管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 2004,
                            "name": "退佣查询",
                            "Route": "app.retreats.parent.retreatsQuery",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2091,
                                    "name": "查询代理退佣记录",
                                    "Route": "/api/agencyrebate/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2004,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2005,
                            "name": "退佣设置",
                            "Route": "app.retreats.parent.retreatsSetting",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2083,
                                    "name": "查询代理退佣配置列表",
                                    "Route": "/api/hireconfig/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2087,
                                    "name": "退佣配置添加",
                                    "Route": "/api/hireconfig/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2088,
                                    "name": "修改代理退佣配置有效会员消费金额",
                                    "Route": "/api/hireconfig/validmoney",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2089,
                                    "name": "修改代理退佣配置单条详情",
                                    "Route": "/api/hireconfig/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2090,
                                    "name": "删除代理退佣配置单条",
                                    "Route": "/api/hireconfig/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2109,
                                    "name": "查询代理退佣配置等级梯度查询",
                                    "Route": "/api/hireconfig/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2005,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2006,
                            "name": "退佣统计",
                            "Route": "app.retreats.parent.retreatsStatistics",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2092,
                                    "name": "统计代理的退佣情况",
                                    "Route": "/api/agencyrebate/getcount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2006,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2093,
                                    "name": "代理退佣存档",
                                    "Route": "/api/agencyrebate/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2006,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2018,
                            "name": "期数管理",
                            "Route": "app.retreats.parent.period",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2075,
                                    "name": "期数列表查询",
                                    "Route": "/api/rebateperiods/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2077,
                                    "name": "查询代理退佣期数下拉列表",
                                    "Route": "/api/rebateperiods/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2078,
                                    "name": "增加退佣期数",
                                    "Route": "/api/rebateperiods/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2079,
                                    "name": "获取单条期数详情",
                                    "Route": "/api/rebateperiods/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2080,
                                    "name": "退佣冲销",
                                    "Route": "/api/rebateperiods/back",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2081,
                                    "name": "修改退佣期数",
                                    "Route": "/api/rebateperiods/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2082,
                                    "name": "删除退佣期数",
                                    "Route": "/api/rebateperiods/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2018,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 2074,
                            "name": "手续费设置",
                            "Route": "app.retreats.parent.chargeService",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2104,
                                    "name": "修改代理退佣费用单条详情",
                                    "Route": "/api/feeset/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2074,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2105,
                                    "name": "查询代理退佣费用单条详情",
                                    "Route": "/api/feeset/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2074,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2106,
                                    "name": "查询代理退佣费用列表",
                                    "Route": "/api/feeset/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 2074,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3265,
                            "name": "退佣设置(代理权限)",
                            "Route": "app.retreats.parent.retreatsSettingConfigOwner",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2003,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3266,
                                    "name": "添加退佣设置",
                                    "Route": "/api/spreadconfig/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3265,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3267,
                                    "name": "修改退佣设置",
                                    "Route": "/api/spreadconfig/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3265,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3268,
                                    "name": "退佣配置查询",
                                    "Route": "/api/spreadconfig/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3265,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3269,
                                    "name": "删除退佣设置",
                                    "Route": "/api/spreadconfig/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3265,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2355,
                    "name": "额度充值",
                    "Route": "*",
                    "Icon": "",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 3142,
                            "name": "线上充值",
                            "Route": "app.conversion.parent.onlineIncomeRecharge",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2355,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3145,
                                    "name": "线上充值搜索",
                                    "Route": "/api/onlinepay/paytype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3142,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3151,
                                    "name": "线上充值商户列表",
                                    "Route": "/api/onlinepay/merchantlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3142,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3264,
                                    "name": "线上充值支付类型",
                                    "Route": "/api/onlinepay/nonEmptyPaytype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3142,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3143,
                            "name": "线上充值记录",
                            "Route": "app.conversion.parent.onlineIncomeRechargeRecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2355,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3148,
                                    "name": "线上充值列表",
                                    "Route": "/api/onlinepay/recordlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3143,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3144,
                            "name": "额度相关配置",
                            "Route": "app.conversion.parent.rechargeConfig",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2355,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 2586,
                                    "name": "站点全局信息获取",
                                    "Route": "/api/site/set/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3144,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2587,
                                    "name": "站点全局信息更新",
                                    "Route": "/api/site/set/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3144,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 2356,
                    "name": "掉单申请",
                    "Route": "*",
                    "Icon": "",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 3216,
                            "name": "掉单申请",
                            "Route": "app.conversion.parent.singleAudit",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2356,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3218,
                                    "name": "掉单申请",
                                    "Route": "/api/sitecash/singleadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3216,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3217,
                            "name": "掉单申请记录",
                            "Route": "app.conversion.parent.singleAuditRecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 2356,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3219,
                                    "name": "掉单申请列表",
                                    "Route": "/api/sitecash/singlelist/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3217,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 3016,
                    "name": "视讯额度管理",
                    "Route": "*",
                    "Icon": "",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1313,
                    "childrens": [
                        {
                            "id": 1350,
                            "name": "额度统计",
                            "Route": "app.conversion.parent.conversion",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3016,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1398,
                                    "name": "视讯额度统计",
                                    "Route": "/api/conversion/sitecashcount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1350,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1399,
                                    "name": "额度转换统计",
                                    "Route": "/api/conversion/platformcount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1350,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 1351,
                            "name": "视讯额度",
                            "Route": "app.conversion.parent.bond",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3016,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 1429,
                                    "name": "视讯额度开户人列表",
                                    "Route": "/api/sitecash/agencylist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1430,
                                    "name": "视讯额度开户人单个查询",
                                    "Route": "/api/sitecash/agencyinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1431,
                                    "name": "视讯额度手动充值",
                                    "Route": "/api/sitecash/handadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1432,
                                    "name": "视讯额度手动扣款",
                                    "Route": "/api/sitecash/handdel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1433,
                                    "name": "视讯额度明细列表",
                                    "Route": "/api/sitecash/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1434,
                                    "name": "额度充值记录列表",
                                    "Route": "/api/sitecash/paylist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1435,
                                    "name": "额度充值确认",
                                    "Route": "/api/sitecash/enable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1436,
                                    "name": "额度充值取消",
                                    "Route": "/api/sitecash/notable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1437,
                                    "name": "掉单记录列表",
                                    "Route": "/api/sitecash/singlelist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1438,
                                    "name": "掉单申请确认",
                                    "Route": "/api/sitecash/singleenable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1439,
                                    "name": "掉单申请取消",
                                    "Route": "/api/sitecash/singlenotable",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1440,
                                    "name": "掉单申请回滚",
                                    "Route": "/api/sitecash/back",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1497,
                                    "name": "额度充值收款银行查询",
                                    "Route": "/api/sitecash/select",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1500,
                                    "name": "额度充值",
                                    "Route": "/api/sitecash/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1501,
                                    "name": "掉单申请添加",
                                    "Route": "/api/sitecash/singleadd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 1566,
                                    "name": "网站关联的视讯列表",
                                    "Route": "/api/sitecash/platformlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2597,
                                    "name": "线上充值类型",
                                    "Route": "/api/onlinepay/paytype",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2598,
                                    "name": "线上充值商户列表",
                                    "Route": "/api/onlinepay/merchantlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2599,
                                    "name": "线上充值",
                                    "Route": "/api/onlinepay/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2600,
                                    "name": "线上充值记录",
                                    "Route": "/api/onlinepay/recordlist",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2772,
                                    "name": "视讯额度列表导出",
                                    "Route": "/api/sitecash/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2773,
                                    "name": "额度充值记录导出",
                                    "Route": "/api/sitecash/paylist/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2774,
                                    "name": "线上充值记录导出",
                                    "Route": "/api/onlinepay/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 2775,
                                    "name": "掉单记录导出",
                                    "Route": "/api/sitecash/singlelist/excel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 1351,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                }
            ],
            "functions": null
        },
        {
            "id": 1897,
            "name": "报表管理",
            "Route": "#",
            "Icon": "icon-bbgl",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 1898,
                    "name": "报表统计",
                    "Route": "app.reportStatistics.reportStatistics",
                    "Icon": "icon-xtgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1897,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2042,
                            "name": "期数列表获取",
                            "Route": "/api/report/periodslist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2043,
                            "name": "总报表查询",
                            "Route": "/api/report/sitecount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2044,
                            "name": "代理报表查询",
                            "Route": "/api/report/agencycount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2045,
                            "name": "会员报表查询",
                            "Route": "/api/report/membercount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2046,
                            "name": "获取本期上期",
                            "Route": "/api/report/periodsthis",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2047,
                            "name": "获取游戏站点列表",
                            "Route": "/api/report/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2048,
                            "name": "查询下级报表详情",
                            "Route": "/api/report/nextreport",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2049,
                            "name": "代理下级会员报表详情",
                            "Route": "/api/report/nextmember",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2115,
                            "name": "报表导出",
                            "Route": "/api/report/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1898,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 1899,
                    "name": "账单管理",
                    "Route": "app.bill.bill",
                    "Icon": "icon-xtgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 1897,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 1992,
                            "name": "账单列表查询",
                            "Route": "/api/sitereportbill/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1993,
                            "name": "查询付款记录",
                            "Route": "/api/sitemoneyrecord/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 1995,
                            "name": "已付款",
                            "Route": "/api/sitereportbill/confirmpayment",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2012,
                            "name": "年份下拉框",
                            "Route": "/api/sitereportbill/year",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2013,
                            "name": "期数下拉框",
                            "Route": "/api/sitereportbill/periods",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2021,
                            "name": "导出Excel",
                            "Route": "/api/sitereportbill/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2702,
                            "name": "三方下拉框",
                            "Route": "/api/sitemoneyrecord/online",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2703,
                            "name": "线上支付",
                            "Route": "/api/sitemoneyrecord/pay",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2788,
                            "name": "导出付款记录",
                            "Route": "/api/sitemoneyrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 1899,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 2069,
            "name": "注单管理",
            "Route": "*",
            "Icon": "icon-zdgl1",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 3177,
                    "name": "彩票游戏",
                    "Route": "app.order.order",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2120,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2131,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2132,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2139,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2216,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3385,
                            "name": "彩票注单信用列表",
                            "Route": "/api/pkpl/admin/GetNoteFcList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3386,
                            "name": "彩票注单【信用】",
                            "Route": "/api/pkpl/admin/GetNoteFcTraList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3424,
                            "name": "系统彩票注单查询",
                            "Route": "/api/systemfc/betlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3425,
                            "name": "fc 注单【信】-投注详情",
                            "Route": "/api/pkpl/admin/GetAutoSinResult",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3427,
                            "name": "导出系统彩票注单",
                            "Route": "/api/systemfc/betlist/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3428,
                            "name": "彩票注单【官】详情",
                            "Route": "/api/pkpl/admin/GetNoteFcTraPeriodDetails",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3177,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3178,
                    "name": "电子游艺",
                    "Route": "app.order.elecplay",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3186,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3178,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3187,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3178,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3188,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3178,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3189,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3178,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3190,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3178,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3179,
                    "name": "真人视讯",
                    "Route": "app.order.realVideo",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3191,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3179,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3192,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3179,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3193,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3179,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3194,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3179,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3195,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3179,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3180,
                    "name": "棋牌游戏",
                    "Route": "app.order.boardGames",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3196,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3180,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3197,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3180,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3198,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3180,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3199,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3180,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3200,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3180,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3181,
                    "name": "体育赛事",
                    "Route": "app.order.sportsEvents",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3201,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3181,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3202,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3181,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3203,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3181,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3204,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3181,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3205,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3181,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3182,
                    "name": "捕鱼游戏",
                    "Route": "app.order.fishingGame",
                    "Icon": "icon-zdgl1",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2069,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3206,
                            "name": "注单管理",
                            "Route": "/api/betrecord/recordlist",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3182,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3207,
                            "name": "游戏类型",
                            "Route": "/api/betrecord/gametype",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3182,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3208,
                            "name": "平台信息",
                            "Route": "/api/betrecord/platform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3182,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3209,
                            "name": "表单导出",
                            "Route": "/api/betrecord/excel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3182,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3210,
                            "name": "游戏类型获取",
                            "Route": "/api/betrecord/gametypebyplatform",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3182,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 2172,
            "name": "统计分析",
            "Route": "*",
            "Icon": "icon-tjfx",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 3170,
                    "name": "会员统计",
                    "Route": "app.statistics.member",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2185,
                            "name": "会员分析查询",
                            "Route": "/api/memberreg/reganalysis",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3170,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3171,
                    "name": "代理统计",
                    "Route": "app.statistics.agency",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2493,
                            "name": "代理统计",
                            "Route": "/api/agencyStatistical/query",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3171,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3172,
                    "name": "注单统计",
                    "Route": "app.statistics.orders",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2495,
                            "name": "注单统计",
                            "Route": "/api/analysis/betrecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3172,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2633,
                            "name": "注单统计级联下拉",
                            "Route": "/api/analysis/betrecord/selects",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3172,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3173,
                    "name": "游戏统计",
                    "Route": "app.statistics.games",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2465,
                            "name": "游戏统计-overview",
                            "Route": "/api/analysis/gamerecord/overview",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3173,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2490,
                            "name": "游戏统计",
                            "Route": "/api/analysis/gamerecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3173,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2558,
                            "name": "游戏统计-state",
                            "Route": "/api/analysis/gamerecord/state",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3173,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2559,
                            "name": "游戏统计-hot",
                            "Route": "/api/analysis/gamerecord/hot",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3173,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2560,
                            "name": "游戏统计-entry",
                            "Route": "/api/analysis/gamerecord/entry",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3173,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3174,
                    "name": "资金统计",
                    "Route": "app.statistics.money",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2479,
                            "name": "资金统计分析",
                            "Route": "/api/analysis/cashrecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3174,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2494,
                            "name": "资金统计分析",
                            "Route": "/api/analysis/cashrecord",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3174,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3175,
                    "name": "优惠统计",
                    "Route": "app.statistics.offer",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2487,
                            "name": "优惠统计",
                            "Route": "/api/analysis/discountcount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3175,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2488,
                            "name": "活动或自助优惠统计",
                            "Route": "/api/analysis/activitycount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3175,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3254,
                            "name": "活动优惠下拉框",
                            "Route": "/api/analysis/activity/drop",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3175,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3176,
                    "name": "页面统计",
                    "Route": "app.statistics.pageAnalysis",
                    "Icon": "icon-tjfx",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2172,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2484,
                            "name": "页面分析",
                            "Route": "/api/analysis/discountcount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3176,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2485,
                            "name": "页面统计",
                            "Route": "/api/analysis/pagecount",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3176,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 2425,
            "name": "EG彩票",
            "Route": "#",
            "Icon": "icon-cpgl",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 3160,
                    "name": "开奖结果",
                    "Route": "*",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": [
                        {
                            "id": 3346,
                            "name": "彩票开奖",
                            "Route": "app.lottery.parent.result",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3160,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3358,
                                    "name": "彩票开奖",
                                    "Route": "/api/pkpl/admin/GetFcAutoData",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3346,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3347,
                            "name": "手动开奖",
                            "Route": "app.lottery.parent.hand",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3160,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3359,
                                    "name": "手动开奖列表",
                                    "Route": "/api/pkpl/admin/GetFcAutoHand",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3347,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3360,
                                    "name": "添加修改开奖结果",
                                    "Route": "/api/pkpl/admin/PostFcAutoHandAdd",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3347,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3361,
                                    "name": "删除开奖结果",
                                    "Route": "/api/pkpl/admin/PostFcAutoHandDel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3347,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3406,
                                    "name": "手动开奖彩种",
                                    "Route": "/api/pkpl/admin/GetFcGameHand",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3347,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3348,
                            "name": "杀率控制",
                            "Route": "app.lottery.parent.kda",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3160,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3362,
                                    "name": "杀率控制列表",
                                    "Route": "/api/pkpl/admin/GetFcGameKillRate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3348,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3363,
                                    "name": "修改杀率",
                                    "Route": "/api/pkpl/admin/UpdateFcGameKillRate",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3348,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 3161,
                    "name": "赔率设置",
                    "Route": "app.lottery.odds",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 2427,
                            "name": "赔率-批量修改",
                            "Route": "/api/fc/updatemany",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2428,
                            "name": "赔率--初始化",
                            "Route": "/api/fc/init",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2437,
                            "name": "赔率-- 列表",
                            "Route": "/api/fc/query",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 2438,
                            "name": "彩种下拉",
                            "Route": "/api/fc/querygame",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3215,
                            "name": "登录体育",
                            "Route": "/api/pkspt/login",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3248,
                            "name": "赔率-单个修改",
                            "Route": "/api/fc/update",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3370,
                            "name": "彩票赔率信用列表",
                            "Route": "/api/pkpl/admin/GetFcContents",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3371,
                            "name": "彩票赔率信用清除缓存",
                            "Route": "/api/pkpl/admin/DelCacheFcContents",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3372,
                            "name": "彩票赔率信用修改",
                            "Route": "/api/pkpl/admin/UpdateFcContent",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3373,
                            "name": "彩票赔率官方列表",
                            "Route": "/api/pkpl/admin/GetFcContentTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3374,
                            "name": "彩票赔率官方清除缓存",
                            "Route": "/api/pkpl/admin/DelCacheFcContentTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3375,
                            "name": "彩票赔率官方修改",
                            "Route": "/api/pkpl/admin/UpdateFcContentTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3376,
                            "name": "盘口赔率信用列表",
                            "Route": "/api/pkpl/admin/GetFcGameContentHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3377,
                            "name": "删除信用赔率",
                            "Route": "/api/pkpl/admin/DelFcGameContentHandicap",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3378,
                            "name": "添加信用赔率",
                            "Route": "/api/pkpl/admin/InsertFcGameContentHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3380,
                            "name": "盘口赔率官方列表",
                            "Route": "/api/pkpl/admin/GetFcConfigTraHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3381,
                            "name": "删除官方赔率",
                            "Route": "/api/pkpl/admin/DelFcConfigTraHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3382,
                            "name": "添加官方赔率",
                            "Route": "/api/pkpl/admin/InsertFcConfigTraHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3408,
                            "name": "玩法列表 - 信",
                            "Route": "/api/pkpl/admin/GetFcGamePlay",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3409,
                            "name": "玩法列表 -官",
                            "Route": "/api/pkpl/admin/GetFcGamePlayTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3410,
                            "name": "彩票列表",
                            "Route": "/api/pkpl/admin/GetGameListData",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3411,
                            "name": "盘口赔率 - 盘口列表 - 信",
                            "Route": "/api/pkpl/admin/GetHandicap",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3412,
                            "name": "盘口赔率 - 盘口列表 - 官",
                            "Route": "/api/pkpl/admin/GetHandicapTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3531,
                            "name": "修改盘口赔率-官",
                            "Route": "/api/pkpl/admin/UpdateFcConfigTraHandicaps",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3532,
                            "name": "修改盘口赔率-信",
                            "Route": "/api/pkpl/admin/UpdateFcGameContentHandicap",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3161,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3343,
                    "name": "彩种管理",
                    "Route": "app.lottery.manage",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3350,
                            "name": "获取彩种列表",
                            "Route": "/api/pkpl/admin/GetGameList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3351,
                            "name": "彩种修改排序",
                            "Route": "/api/pkpl/admin/UptateGamesSiteOrder",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3352,
                            "name": "清除评率",
                            "Route": "/api/pkpl/admin/FcGameRedisClear",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3353,
                            "name": "单个撤单",
                            "Route": "/api/pkpl/admin/UpdateIsCancel",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3354,
                            "name": "批量撤单",
                            "Route": "/api/pkpl/admin/UpdateIsCancelnum",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3355,
                            "name": "热门",
                            "Route": "/api/pkpl/admin/PostUpdateHot",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3356,
                            "name": "启用停用",
                            "Route": "/api/pkpl/admin/UpdateGameState",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3405,
                            "name": "获取站点",
                            "Route": "/api/pkpl/admin/GetIndexList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3407,
                            "name": "设置元角分",
                            "Route": "/api/pkpl/result/fc_game/fc_set_tra_games_update",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3343,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3344,
                    "name": "彩种类别",
                    "Route": "app.lottery.category",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3357,
                            "name": "彩种类别列表",
                            "Route": "/api/pkpl/admin/GetFcGamesCateData",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3344,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3417,
                            "name": "彩种排序",
                            "Route": "/api/pkpl/admin/UptateFcGamesCateOrder",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3344,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3345,
                    "name": "限额设置",
                    "Route": "app.lottery.quota",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3364,
                            "name": "限额设置信用列表",
                            "Route": "/api/pkpl/admin/GetAgentFcSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3365,
                            "name": "限额设置官方列表",
                            "Route": "/api/pkpl/admin/GetAgentFcTraSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3366,
                            "name": "批量修改官方限额设置",
                            "Route": "/api/pkpl/admin/BatchUpdateFcTraSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3367,
                            "name": "批量修改信用限额设置",
                            "Route": "/api/pkpl/admin/BatchUpdateFcSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3368,
                            "name": "修改官方单个玩法限额",
                            "Route": "/api/pkpl/admin/UpdateAgentFcTraSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3369,
                            "name": "修改信用单个玩法限额",
                            "Route": "/api/pkpl/admin/UpdateAgentFcSiteLimit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3418,
                            "name": "限额设置玩法信用列表",
                            "Route": "/api/pkpl/admin/GetFcGamePlay",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3419,
                            "name": "限额设置玩法官方列表",
                            "Route": "/api/pkpl/admin/GetFcGamePlayTra",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3345,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3420,
                    "name": "撤单日志",
                    "Route": "app.lottery.withdrawal",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3387,
                            "name": "撤单日志",
                            "Route": "/api/pkpl/admin/GetNoteFcLogList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3420,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3423,
                    "name": "六合彩下单统计",
                    "Route": "app.lottery.betStatistics",
                    "Icon": "icon-cpgl",
                    "status": 1,
                    "pType": 1,
                    "parentId": 2425,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3388,
                            "name": "六合彩注单列表",
                            "Route": "/api/pkpl/admin/GetNoteLotteryList",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3423,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        },
        {
            "id": 3313,
            "name": "公共菜单",
            "Route": "app.public",
            "Icon": "",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": null,
            "functions": [
                {
                    "id": 3314,
                    "name": "退出登陆",
                    "Route": "/api/logout",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3315,
                    "name": "修改密码",
                    "Route": "/api/edit/pass",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3316,
                    "name": "修改操作密码",
                    "Route": "/api/edit/operatepass",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3317,
                    "name": "角色对应的权限列表",
                    "Route": "/api/role/menu/owner",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3318,
                    "name": "修改锁屏密码",
                    "Route": "/api/lock/edit",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3319,
                    "name": "反锁屏",
                    "Route": "/api/lock/unlock",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3320,
                    "name": "修改锁屏时间",
                    "Route": "/api/lock/time",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3321,
                    "name": "锁屏",
                    "Route": "/api/lock/lock",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3322,
                    "name": "用户偏好添加",
                    "Route": "/api/userpreferences/add",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3323,
                    "name": "用户偏好查询",
                    "Route": "/api/userpreferences/query",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3324,
                    "name": "用户偏好设置查询",
                    "Route": "/api/userpreferences/querysetting",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3325,
                    "name": "站点信息",
                    "Route": "/api/site/info",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3326,
                    "name": "消息中心-滚动banner",
                    "Route": "/api/sitenotice/banner",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3327,
                    "name": "代理下拉",
                    "Route": "/api/genera/select/list",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3328,
                    "name": "会员层级",
                    "Route": "/api/userlevel/selectlist",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3329,
                    "name": "附件下拉",
                    "Route": "/api/sitethumb/fileselect",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3330,
                    "name": "未读信息数量",
                    "Route": "/api/agencymessage/unread",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3331,
                    "name": "站点全局信息",
                    "Route": "/api/site/set/info",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3332,
                    "name": "附件列表",
                    "Route": "/api/sitethumb/filelist",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3333,
                    "name": "站点下拉",
                    "Route": "/api/site/selectlist",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3334,
                    "name": "支付渠道下拉",
                    "Route": "/api/sitecash/select",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3335,
                    "name": "代理列表",
                    "Route": "/api/proxy/list",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3336,
                    "name": "站点关联的视讯列表",
                    "Route": "/api/sitecash/platformlist",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                },
                {
                    "id": 3349,
                    "name": "返佣比例模板下拉",
                    "Route": "/api/spreadwaterset/drop",
                    "Icon": "",
                    "status": 1,
                    "pType": 2,
                    "parentId": 3313,
                    "childrens": null,
                    "functions": null
                }
            ]
        },
        {
            "id": 3442,
            "name": "社交管理",
            "Route": "#",
            "Icon": "icon-icon",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 3445,
                    "name": "设置管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3442,
                    "childrens": [
                        {
                            "id": 3446,
                            "name": "管理员管理",
                            "Route": "app.social.parent.admSetUp",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3445,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3479,
                                    "name": "管理员列表",
                                    "Route": "/api/groupManager/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3480,
                                    "name": "创建管理员",
                                    "Route": "/api/groupManager/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3481,
                                    "name": "修改管理员",
                                    "Route": "/api/groupManager/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3483,
                                    "name": "修改状态",
                                    "Route": "/api/groupManager/updateStatus",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3484,
                                    "name": "删除管理员",
                                    "Route": "/api/groupManager/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3485,
                                    "name": "获取子账号",
                                    "Route": "/api/subAccount/getAll",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3446,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3447,
                            "name": "聊天室管理",
                            "Route": "app.social.parent.chat",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3445,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3474,
                                    "name": "群聊列表",
                                    "Route": "/api/groupchat/groupchats",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3475,
                                    "name": "删除群聊",
                                    "Route": "/api/groupchat/del",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3476,
                                    "name": "修改群聊",
                                    "Route": "/api/groupchat/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3477,
                                    "name": "修改群聊状态",
                                    "Route": "/api/groupchat/status",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3478,
                                    "name": "增加群聊",
                                    "Route": "/api/groupchat/new",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3486,
                                    "name": "游戏筛选",
                                    "Route": "/api/groupchat/gameCondition",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3487,
                                    "name": "获取彩票种类",
                                    "Route": "/api/groupchat/thirdGame",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3495,
                                    "name": "获取详情",
                                    "Route": "/api/groupchat/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3447,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3448,
                            "name": "敏感词汇管理",
                            "Route": "app.social.parent.sWords",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3445,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3454,
                                    "name": "查询站点敏感词记录",
                                    "Route": "/api/groupWords/query",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3448,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3455,
                                    "name": "查询站点默认敏感词记录",
                                    "Route": "/api/groupWords/queryByDefault",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3448,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3456,
                                    "name": "更新站点敏感词记录",
                                    "Route": "/api/groupWords/upInsert",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3448,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3453,
                            "name": "投注计划",
                            "Route": "app.social.parent.betPlan",
                            "Icon": "icon-ty-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3445,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3488,
                                    "name": "列表",
                                    "Route": "/api/group/betplan/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3489,
                                    "name": "创建",
                                    "Route": "/api/group/betplan/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3490,
                                    "name": "修改",
                                    "Route": "/api/group/betplan/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3491,
                                    "name": "发布",
                                    "Route": "/api/group/betplan/publish",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3492,
                                    "name": "删除",
                                    "Route": "/api/group/betplan/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3493,
                                    "name": "根据id查询",
                                    "Route": "/api/group/betplan/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3494,
                                    "name": "期数查询",
                                    "Route": "/api/group/betplan/betofnumber",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3453,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3544,
                            "name": "群聊管理",
                            "Route": "app.social.parent.groupChatSet",
                            "Icon": "icon-jt-y",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3445,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3496,
                                    "name": "群聊界面",
                                    "Route": "/api/groupchat/groupIndex",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3497,
                                    "name": "群聊会员列表",
                                    "Route": "/api/groupchat/groupMember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3498,
                                    "name": "群聊会员详情",
                                    "Route": "/api/groupchat/member",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3499,
                                    "name": "密聊聊天记录",
                                    "Route": "/api/group/hismsg",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3500,
                                    "name": "密聊离线消息数量",
                                    "Route": "/api/group/msgCount",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3501,
                                    "name": "密聊界面聊天人列表",
                                    "Route": "/api/group/secret/chat",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3502,
                                    "name": "投注记录",
                                    "Route": "/api/group/betplan/betRecord",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3503,
                                    "name": "消息发送",
                                    "Route": "/api/group/sendMessage",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3504,
                                    "name": "消息发送",
                                    "Route": "/api/group/sendMessage",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3509,
                                    "name": "发送红包",
                                    "Route": "/api/groupchat/red",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3510,
                                    "name": "发送红包",
                                    "Route": "/api/groupchat/red",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3511,
                                    "name": "红包领取记录",
                                    "Route": "/api/groupchat/log",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3512,
                                    "name": "红包领取记录",
                                    "Route": "/api/groupchat/log",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3513,
                                    "name": "禁言",
                                    "Route": "/api/group/forbidden/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3514,
                                    "name": "解除禁言",
                                    "Route": "/api/group/forbidden/cancel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3515,
                                    "name": "聊天室投注计划列表",
                                    "Route": "/api/group/betplan/groupChatBetList",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3516,
                                    "name": "聊天室投注计划列表-右侧",
                                    "Route": "/api/group/betplan/groupChatBetSubList",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3517,
                                    "name": "聊天室投注计划确认",
                                    "Route": "/api/group/betplan/pushGroupChatBet",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3527,
                                    "name": "聊天已确认的投注计划",
                                    "Route": "/api/group/betplan/groupChatBetInfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3528,
                                    "name": "删除消息",
                                    "Route": "/api/group/delMessage",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3529,
                                    "name": "掉线补偿",
                                    "Route": "/api/group/dropCompensation",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3530,
                                    "name": "掉线补偿",
                                    "Route": "/api/group/dropCompensation",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3540,
                                    "name": "群聊投注计划列表",
                                    "Route": "/api/group/betplan/groupChatBetLists",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3541,
                                    "name": "群聊投注计划列表(右侧)",
                                    "Route": "/api/group/betplan/groupChatBetSubLists",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3542,
                                    "name": "群聊投注计划确定",
                                    "Route": "/api/group/betplan/pushGroupChatBets",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3543,
                                    "name": "群聊已确认的投注计划",
                                    "Route": "/api/group/betplan/groupChatBetInfos",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3545,
                                    "name": "公群申请进入记录列表",
                                    "Route": "/api/groupchat/application/record",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3546,
                                    "name": "群申请同意或者拒绝",
                                    "Route": "/api/groupchat/application/agree",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3547,
                                    "name": "更新群员最后最后一次读取的信息ID",
                                    "Route": "/api/groupchat/application/last",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3548,
                                    "name": "群添加",
                                    "Route": "/api/groupchat/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3549,
                                    "name": "群列表",
                                    "Route": "/api/groupchat/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3550,
                                    "name": "群详情",
                                    "Route": "/api/groupchat/details",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3551,
                                    "name": "群修改",
                                    "Route": "/api/groupchat/update",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3552,
                                    "name": "群会员",
                                    "Route": "/api/groupchat/members",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3553,
                                    "name": "群邀人",
                                    "Route": "/api/groupchat/join",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3554,
                                    "name": "群解散",
                                    "Route": "/api/groupchat/disband",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3555,
                                    "name": "会员移群",
                                    "Route": "/api/groupchat/move",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3558,
                                    "name": "聊天会话列表",
                                    "Route": "/api/group/chat/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3559,
                                    "name": "群改名",
                                    "Route": "/api/groupchat/revise",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3560,
                                    "name": "管理员的群列表",
                                    "Route": "/api/groupchat/admin/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3561,
                                    "name": "后台单群的管理员会员列表",
                                    "Route": "/api/groupchat/member/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3562,
                                    "name": "踢人",
                                    "Route": "/api/groupchat/kickMember",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3563,
                                    "name": "群体禁言",
                                    "Route": "/api/groupchat/groupForbWords",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3564,
                                    "name": "删除会员记录",
                                    "Route": "/api/group/del/room/message",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3576,
                                    "name": "会员申请入群条数",
                                    "Route": "/api/groupchat/application/count",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3544,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 3449,
                    "name": "VIP管理",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3442,
                    "childrens": [
                        {
                            "id": 3451,
                            "name": "VIP等级",
                            "Route": "app.integral.vip",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3449,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3461,
                                    "name": "会员vip等级列表查询",
                                    "Route": "/api/group/level/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3462,
                                    "name": "会员vip等级详情查询",
                                    "Route": "/api/group/level/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3463,
                                    "name": "会员vip等级添加",
                                    "Route": "/api/group/level/add",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3464,
                                    "name": "会员vip等级修改",
                                    "Route": "/api/group/level/updateinfo",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3465,
                                    "name": "会员vip等级删除",
                                    "Route": "/api/group/level/delete",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3466,
                                    "name": "更新等级",
                                    "Route": "/api/group/level/uplevel",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3482,
                                    "name": "获取文件服务器地址",
                                    "Route": "/api/group/level/fileAddr",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3451,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3452,
                            "name": "积分管理",
                            "Route": "app.integral.integral",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3449,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3467,
                                    "name": "查询积分规则",
                                    "Route": "/api/groupLevelScore/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3452,
                                    "childrens": null,
                                    "functions": null
                                },
                                {
                                    "id": 3468,
                                    "name": "编辑积分规则",
                                    "Route": "/api/groupLevelScore/edit",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3452,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                },
                {
                    "id": 3505,
                    "name": "手气红包",
                    "Route": "*",
                    "Icon": "icon-jt-y",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3442,
                    "childrens": [
                        {
                            "id": 3507,
                            "name": "查看手气红包",
                            "Route": "app.redPacket.checkPacket",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3505,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3519,
                                    "name": "红包详情",
                                    "Route": "/api/groupchat/red/info",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3507,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        },
                        {
                            "id": 3508,
                            "name": "手气红包",
                            "Route": "app.redPacket.redPacket",
                            "Icon": "",
                            "status": 1,
                            "pType": 1,
                            "parentId": 3505,
                            "childrens": null,
                            "functions": [
                                {
                                    "id": 3518,
                                    "name": "红包列表",
                                    "Route": "/api/groupchat/red/list",
                                    "Icon": "",
                                    "status": 1,
                                    "pType": 2,
                                    "parentId": 3508,
                                    "childrens": null,
                                    "functions": null
                                }
                            ]
                        }
                    ],
                    "functions": null
                }
            ],
            "functions": null
        },
        {
            "id": 3601,
            "name": "莱利彩票",
            "Route": "#",
            "Icon": "icon-icon",
            "status": 1,
            "pType": 1,
            "parentId": 0,
            "childrens": [
                {
                    "id": 3604,
                    "name": "赔率列表",
                    "Route": "app.lllottery.parent.oddsList",
                    "Icon": "icon-icon",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3601,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3607,
                            "name": "赔率列表",
                            "Route": "/api/ll/odds",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3604,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3610,
                            "name": "赔率修改",
                            "Route": "/api/ll/edit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3604,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3613,
                            "name": "赔率初始化",
                            "Route": "/api/ll/initial",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3604,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3616,
                    "name": "自开彩管理",
                    "Route": "app.lllottery.parent.autoOpen",
                    "Icon": "icon-icon",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3601,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3619,
                            "name": "自开彩详情",
                            "Route": "/api/ll/set",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3622,
                            "name": "检测",
                            "Route": "/api/ll/detect",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3625,
                            "name": "开奖结果保存",
                            "Route": "/api/ll/save",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3628,
                            "name": "开奖结果保存批量",
                            "Route": "/api/ll/batch",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3631,
                            "name": "开奖结果删除",
                            "Route": "/api/ll/delete",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3634,
                            "name": "开奖结果恢复",
                            "Route": "/api/ll/restore",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3637,
                            "name": "开奖结果修改",
                            "Route": "/api/ll/revise",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3616,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3640,
                    "name": "开奖结果列表",
                    "Route": "app.lllottery.parent.llResult",
                    "Icon": "icon-icon",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3601,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3643,
                            "name": "开奖结果列表",
                            "Route": "/api/ll/result",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3640,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3646,
                    "name": "杀率列表",
                    "Route": "app.lllottery.parent.llkda",
                    "Icon": "icon-icon",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3601,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3649,
                            "name": "杀率列表",
                            "Route": "/api/ll/list",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3646,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3652,
                            "name": "修改杀率",
                            "Route": "/api/ll/update",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3646,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                },
                {
                    "id": 3655,
                    "name": "限额设置",
                    "Route": "app.lllottery.parent.set",
                    "Icon": "icon-icon",
                    "status": 1,
                    "pType": 1,
                    "parentId": 3601,
                    "childrens": null,
                    "functions": [
                        {
                            "id": 3658,
                            "name": "限额列表",
                            "Route": "/api/ll/limit",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3655,
                            "childrens": null,
                            "functions": null
                        },
                        {
                            "id": 3661,
                            "name": "修改限额",
                            "Route": "/api/ll/modify",
                            "Icon": "",
                            "status": 1,
                            "pType": 2,
                            "parentId": 3655,
                            "childrens": null,
                            "functions": null
                        }
                    ]
                }
            ],
            "functions": null
        }
    ]
}