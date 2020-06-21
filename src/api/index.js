export default {
    AGENCY_LOGIN: "/agency/login",
    AGENCY_LOGOUT: "/agency/logout",
    AGENCY_OWNER: "/agency/owner", //查询菜单列表(本身)
    AGENCY_QUERY_AGENCY_LIST: "/agency/queryAgencyList", //查询代理列表
    AGENCY_ADD_AGENCY: "/agency/addAgency",  // 添加代理
    AGENCY_EDIT_AGENCY: "/agency/editAgency", // 修改代理信息
    AGENCY_EDIT_AGENCY_STATUS: "/agency/editAgencyStatus",     // 修改代理状态
    AGENCY_RESET_AGENCY_PASSWORD: "/agency/resetAgencyPassword",     // 重置代理密码
    AGENCY_DEL_AGENCY: "/agency/delAgency",  // 删除代理
    AGENCY_QUERY_AGENCY_ONE: "/agency/queryAgencyOne", // 查询单个代理信息
    MODIFY_PWD: "/agency/editPassword",
    AGENCY_ROOM_CODE: "/agency/roomCode", //群枚举
// 游戏群
    AGENCY_QUERY_ROOM_LIST: "/agency/queryRoomList",    // 游戏群列表
    AGENCY_ADD_ROOM: "/agency/addRoom",   // 添加群
    AGENCY_QUERY_ROOM_ONE: "/agency/queryRoomOne",   // 查询单个群信息
    AGENCY_EDIT_ROOM: "/agency/editRoom",   // 修改群信息
    AGENCY_EDIT_ROOM_STATUS: "/agency/editRoomStatus",    // 修改群状态
    AGENCY_DEL_ROOM: "/agency/delRoom",    // 删除群
    AGENCY_LIST: "/agency/agencyCode", //查询代理李彪
    AGENCY_ADD_RED: "/agency/addRed", //发红包添加

// 红包注单
    AGE_ORDERLIST: "/agency/queryRedOrderRecordList", // 列表
    AGE_ORDERDET: "/agency/redInfo", // 详情
    AGENCY_MANUAL_HAND_OUT: "/agency/manualHandOut", // 手动派彩

    AGENCY_USERLIST: "/agency/queryUserList",    // 会员列表
    AGENCY_KICKUSERS: "/agency/kickUsers",    // 提线
    AGENCY_EDITUSERSTATUS: "/agency/editUsersStatus",    // 启用停用
    AGENCY_MEM_MANUAL: "/agency/memberManualHandOut", // 会员手动派彩接口
    // 咨询管理
    AGENCY_QUERY_POST_LIST: "/agency/queryPostList",   // 公告列表
    AGENCY_ADD_POST: "/agency/addPost",       // 添加公告
    AGENCY_EDIT_POST: "/agency/editPost",     // 修改公告
    AGENCY_QUERY_POST_BY_ID: "/agency/queryPostById",       // 根据id查询公告
    AGENCY_EDIT_POST_STATUS: "/agency/editPostStatus",     // 修改公告状态
    AGENCY_DEL_POST: "/agency/delPost",      // 删除公告
// 活动
    AGENCY_QUERY_ACTIVE_LIST: "/agency/queryActiveList",   // 活动列表
    AGENCY_ADD_ACTIVE: "/agency/addActive",       // 添加活动
    AGENCY_QUERY_ACTIVE_BY_ID: "/agency/queryActiveById",       // 根据id查询活动
    AGENCY_EDIT_ACTIVE: "/agency/editActive",     // 修改活动
    AGENCY_EDIT_ACTIVE_STATUS: "/agency/editActiveStatus",     // 修改活动状态
    AGENCY_DEL_ACTIVE: "/agency/delActive",      // 删除活动
    AGENCY_UPLOAD: "/agency/upload", // 上传图片
// 红包管理
    AGENCY_ORDINARY_RED_LIST: "/agency/ordinaryRed/list",
    AGENCY_ORDINARY_RED_EDIT: "/agency/ordinaryRed/edit",
    AGENCY_ORDINARY_RED_INFO: "/agency/ordinaryRed/info",
    AGENCY_ORDINARY_RED_DEL: "/agency/ordinaryRed/del",

    // 机器人红包
    AGENCY_ROBOT_LIST: "/agency/robot/list",              // 查询机器人列表
    AGENCY_ROBOT_GET_ROBOT_ACCOUNTS: "/agency/robot/getRobotAccounts",          // 批量生成机器人账号
    AGENCY_ROBOT_INSERT_ROBOTS: "/agency/robot/insertRobots",          // 批量生成机器人
    AGENCY_ROBOT_DEL_ROBOTS: "/agency/robot/delRobots",                 // 批量删除机器人
    
    // 站点管理
    AGENCY_SITE_LIST: "/agency/site/list",    // 站点列表
    AGENCY_SITE_ADD_SITE: "/agency/site/addSite",     // 添加站点
    AGENCY_SITE_EDIT_SITE: "/agency/site/editSite",      // 修改站点
    AGENCY_SITE_EDIT_SITE_STATUS: "/agency/site/editSiteStatus",      // 修改站点状态
    AGENCY_SITE_DEL_SITE: "/agency/site/delSite",        // 删除站点

    // 日志
    AGENCY_LOG_LIST: "/agency/log/list", 
    // 统计分析
    AGENCY_ORDER_STATISTICAL: "/agency/orderStatistical", // 代理后台盈利分析
    // 系统配置
    AGENCY_QUERY_SYSTEM_CONF: "/agency/querySystemConf", // 查询站点系统配置 
    AGENCY_SYSTEM_CONF: "/agency/systemConf",    // 站点系统配置
    AGENCY_ADD_KILL_USER: "/agency/addKillUser",      // 添加控杀会员
    AGENCY_DEL_KILL_USER: "/agency/delKillUser",      //删除控杀会员
}
