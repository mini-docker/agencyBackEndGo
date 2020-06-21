<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.children">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.children">
							<el-submenu v-if="subItem.children" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.index">
									<span>{{ threeItem.title }}</span>
								</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index"  :key="subItem.index">
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
import bus from './bus';
export default {
	data() {
		return {
			collapse: false,
			// items: [
			// 	{
			// 		icon: 'el-icon-lx-home',
			// 		index: 'dashboard',
			// 		title: '系统首页'
			// 	},
			// 	{
			// 		icon: 'el-icon-lx-rankfill',
			// 		index: 'sys',
			// 		title: '系统管理',
			// 		children: [
			// 			{
			// 				index: 'siteMant',
			// 				title: this.$t('common.siteMant')
            //             },
            //             {
			// 				index: 'log',
			// 				title: this.$t('common.operLog')
			// 			}
			// 		]
			// 	},
			// 	{
			// 		icon: 'el-icon-lx-people',
			// 		index: '4',
			// 		title: '账号管理',
			// 		children: [
			// 			{
			// 				index: 'memMant',
			// 				title: '会员管理'
			// 			},
			// 			{
			// 				index: 'agencyMant',
			// 				title: '代理管理'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		icon: 'el-icon-lx-group',
			// 		index: '8',
			// 		title: '游戏群管理',
			// 		children: [
			// 			{
			// 				index: 'gameGroupList',
			// 				title: '游戏群列表'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		icon: 'el-icon-lx-vipcard',
			// 		index: '9',
			// 		title: '红包游戏管理',
			// 		children: [
			// 			{
			// 				index: 'redEnvNote',
			// 				title: '红包注单'
			// 			},
			// 			{
			// 				index: 'normalRed',
			// 				title: '红包管理'
			// 			},
			// 			{
			// 				index: 'gamerobotMant',
			// 				title: '机器人管理'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		icon: 'el-icon-lx-friend',
			// 		index: '10',
			// 		title: '咨询管理',
			// 		children: [
			// 			{
			// 				index: 'eventPicMant',
			// 				title: '活动图片管理'
			// 			},
			// 			{
			// 				index: 'announceMant',
			// 				title: '公告管理'
			// 			}
			// 		]
			// 	}
            // ],
            items: [
				{
					icon: 'el-icon-lx-home',
					index: 'dashboard',
					title: this.$t('common.sysIndex')
				},
				{
					icon: 'el-icon-lx-cascades',
					index: 'sys',
					title: this.$t('common.sysMant'),
					children: [
						{
							index: 'siteMant',
							title: this.$t('common.siteMant')
                        },
                        {
							index: 'log',
							title: this.$t('common.operLog')
                        },
                        {
							index: 'sysConf',
							title: this.$t('common.sysConf')
                        },
					]
				},
				{
					icon: 'el-icon-lx-people',
					index: '4',
					title: this.$t('common.actMant'),
					children: [
						{
							index: 'memMant',
							title: this.$t('common.memMant')
						},
						{
							index: 'agencyMant',
							title: this.$t('common.agencyMant')
                        }
					]
				},
				{
					icon: 'el-icon-lx-group',
					index: '8',
					title: this.$t('common.gameGroupMant'),
					children: [
						{
							index: 'gameGroupList',
							title: this.$t('common.gameGroupList')
						}
					]
				},
				{
					icon: 'el-icon-lx-vipcard',
					index: '9',
					title: this.$t('common.redEnveGMant'),
					children: [
						{
							index: 'redEnvNote',
							title: this.$t('common.redEnvNote')
						},
						{
							index: 'normalRed',
							title: this.$t('红包管理')
						},
						{
							index: 'gamerobotMant',
							title: this.$t('机器人管理')
						}
					]
				},
				{
					icon: 'el-icon-lx-friend',
					index: '10',
					title: this.$t('common.consultingMant'),
					children: [
						{
							index: 'eventPicMant',
							title: this.$t('common.eventPicMant')
						},
						{
							index: 'announceMant',
							title: this.$t('common.announceMant')
						}
					]
                },
                {
                    icon: 'el-icon-lx-rank',
					index: '11',
					title: this.$t('common.statistics'),
					children: [
						{
							index: 'chartline',
							title: this.$t('common.getGoods')
						},
						
					],
                }
            ],
            token: JSON.parse(decodeURIComponent(sessionStorage.getItem('token'))),
		};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		}
	},
	created() {
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
			this.collapse = msg;
			bus.$emit('collapse-content', msg);
        });
    },
    mounted(){
        // 权限管理
		if(this.token.isAdmin*1 !== 1){
            this.items[1].children.splice(0,1)
            console.log(this.items[1],'this.items')
        }
    }
};
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 40px;
		bottom: 0;
		overflow-y: scroll;
	}
	.sidebar::-webkit-scrollbar {
		width: 0;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 186px;
	}
	.sidebar > ul {
		height: 100%;
	}
</style>
