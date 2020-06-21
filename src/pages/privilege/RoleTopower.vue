<template>
	<div class="role">
		<div class="crumbs">
			<el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i>  -->
                {{$t('common.actMant')}} </el-breadcrumb-item>
                <el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i>  -->
                {{$t('common.roleMant')}} </el-breadcrumb-item>
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i>  -->
                {{$t('common.rolePower')}} </el-breadcrumb-item>
			</el-breadcrumb>
            <div class="pulls-right">
                <el-button @click="$router.go(-1)">{{$t('common.return')}}</el-button>
            </div>
		</div>
		<div class="container">
            <h3>勾选需要赋予角色的权限操作</h3>
			<div class="handle-box mgb20">
				<div class="formdiv">
                    <div class="left">首页</div>
                    <div class="right">
                        <el-checkbox v-model="checked">首页</el-checkbox>
                        <el-checkbox v-model="checked">会员管理</el-checkbox>
                        <el-checkbox v-model="checked">超管管理</el-checkbox>
                    </div>
                </div>
                <div class="formdiv">
                    <div class="left">首页</div>
                    <div class="right">
                        <el-checkbox v-model="checked">首页</el-checkbox>
                        <el-checkbox v-model="checked">会员管理</el-checkbox>
                        <el-checkbox v-model="checked">超管管理</el-checkbox>
                    </div>
                </div>
                <div class="formdiv">
                    <div class="left">首页</div>
                    <div class="right">
                        <el-checkbox v-model="checked">首页</el-checkbox>
                        <el-checkbox v-model="checked">会员管理</el-checkbox>
                        <el-checkbox v-model="checked">超管管理</el-checkbox>
                    </div>
                </div>
                <div class="formdiv">
                    <div class="left">首页</div>
                    <div class="right">
                        <el-checkbox v-model="checked">首页</el-checkbox>
                        <el-checkbox v-model="checked">会员管理</el-checkbox>
                        <el-checkbox v-model="checked">超管管理</el-checkbox>
                    </div>
                </div>
                <div class="clearboth"></div>
			</div>
            
            <div class="text-center">
                <el-button type="primary" @click="handleSubmit">确定</el-button>
                <el-button @click="resets">重置</el-button>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            checked: true,
			defaultProps: {
				children: 'children',
				label: 'label' //lable => name
			}
		};
	},
	methods: {
		
		
        handleSubmit(){
            // 将获取到的勾选的数据id上传

        },
        // 重置
        resets(){
            // 重新获取数据，重新渲染

        }
	}
};
</script>
<style lang="scss" scoped>
.handle-box{
    border-left: 1px solid #EBEEF5;
    border-top: 1px solid #EBEEF5;
    display: block;
}
.container{
    h3{
        margin-bottom: 15px;
        font-weight: 400;
    }
}
.formdiv{
    float: left;
    height: 40px;
    width: 50%;
    display: flex;
    div{
        border-right: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
        text-align: center;
        line-height: 40px;
    }
    .left{
        width: 20%;
        background-color: #f5f7fa !important;
    }
    .right{
        flex: 1;
    }
}
</style>
