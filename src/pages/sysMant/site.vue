<template>
    <div class="role allHeight">
        <div class="crumbs">
            <el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <!-- <i class="el-icon-lx-people"></i>  -->
                    {{$t('common.sysMant')}}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{$t('common.siteMant')}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="search-box">
                <div class="pk-inp-box pk-select">
                    <label>{{$t('common.status')}}:</label>
                   <el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
                        <el-option
                            v-for="(item) in fData.statusOptions"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
                </div>
                <div class="pk-inp-box">
                    <label>{{$t('common.siteName')}}:</label>
                    <el-input v-model="query.siteName" :placeholder="$t('common.p_KeywordS')" class="selbox"></el-input>
                </div>
                <div class="fl">
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{$t('common.search')}}</el-button>
                    <el-button @click="reset">{{$t('common.reset')}}</el-button>
                    <el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{$t('common.add')}}</el-button>
                </div>
                <div class="clearboth"></div>
            </div>
            <el-table
                :data="tableData"
                border
                :height="fData.onlyOneHeight()"
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column prop="siteName" :label="$t('common.siteName')" align="center"></el-table-column>
                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
                <el-table-column prop="state" :label="$t('common.status')" align="center">
                    <template slot-scope="scope">
						<el-switch
							style="display: block"
							v-model="scope.row.statuspro"
							active-color="#13ce66"
							inactive-color="#ff4949"
							:active-text="$t('common.able')"
							:inactive-text="$t('common.disable')"
							@change="handuseAble(scope.row)"
						>
						</el-switch>
					</template>
                </el-table-column>
                <el-table-column :label="$t('common.operating')" width="230" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="primary"
                            plain
                            @click="handleEdit(2,scope.$index, scope.row)"
                        >{{$t('common.modify')}}</el-button>
                        <el-button
                            type="danger"
                            plain
                            @click="handleDel(scope.$index, scope.row)"
                        > {{$t('common.del')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <pagination
                v-show="pageTotal > 0"
                :total="pageTotal"
                :page.sync="query.pageIndex"
                :limit.sync="query.pageSize"
                @pagination="getData"
            />
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="30%">
            <el-form :model="ruleForm" label-width="90px" :rules="rules" ref="ruleForm">
                <el-form-item :label="$t('common.siteName')" prop="siteName">
					<el-input v-model="ruleForm.siteName" :placeholder="$t('common.p_act')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.siteId')" prop="agencyId">
					<el-input v-model="ruleForm.agencyId" :placeholder="$t('common.p_sel')" class="selbox" :disabled="formStatus===2"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.status')" prop="status">
					<el-select v-model="ruleForm.status" :placeholder="$t('common.all')" class="selbox pull-width">
                        <el-option
                            v-for="(item) in statusOptionspro"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
				</el-form-item>
			</el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetEdit('ruleForm')">{{$t('common.cancel')}}</el-button>
                <el-button type="primary" @click="saveEdit('ruleForm')">{{$t('common.ok')}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import fData from '@/app.config';
import Pagination from '@/components/common/Pagination';
import {
    agencySiteList,
    agencySiteAddSite,
    agencySiteEditSite,
    agencySiteEditSiteStatus,
    agencySiteDelSite
} from '@/api/site'
import { getAgeList } from '@/api/account'
export default {
    name: 'site',
	components: { Pagination },
    data() {
        return {
            query: {
                siteName: '', //value值
                status: 0,
                pageIndex: 1,
                pageSize: fData.pageSize
            },
            tableData: [],
            editVisible: false,
            pageTotal: 0,
            fData: fData,
            ruleForm: {
				formTitle: '', //模态框title
				agencyId: '',
                siteName: '',
                status: ''
            },
            statusOptions: fData.statusOptions,
            statusOptionspro: [],
            formStatus: 1,
            rules: {
                agencyId: fData.MUST,
                siteName: fData.MUST,
                status: fData.MUST,
            },
            agenList: [],
        };
    },
    created() {
        this.getAenList();
        this.getData();
        this.statusOptionspro = this.statusOptions.slice(1,this.statusOptions.length)
    },
    methods: {
        // 查询代理列表
		getAenList() {
			getAgeList().then(res => {
				if (res.success) {
					this.agenList = res.data || [];
				} else {
					this.$message.error(res.message);
				}
			});
		},
        getData() {
            var reg = /^[A-Za-z0-9]+$/;
            let flag = reg.test(this.query.siteName);
            if(this.query.siteName!=''&&!flag){
                this.$message.error('搜索站点名称不能含特殊字符！')
                console.log(reg.test(this.query.siteName),'reg.test(this.query.siteName)')
                return 
            }
            agencySiteList(this.query).then(res => {
                if(res.success){
                    console.log(res,'resssss');
                    this.tableData = res.data.data || [];
                    this.pageTotal = res.data.count || 0;
                    this.tableData.map(v => {
                        v.statuspro = v.status === 1
                        return v
                    })
                }else{
                    this.$message.error(res.message)
                }
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 编辑操作
        handleEdit(status, index, row) {
            this.formStatus=status
            this.editVisible = true;
            if(status===2){
                this.ruleForm = this.$.extend(this.ruleForm,row);
                this.ruleForm.formTitle = this.$t('common.editSite');
            }else if(status===1){
                this.initFormData()
            }
        },
        initFormData(){
            this.ruleForm = {
				formTitle: this.$t('common.addSite'),
				agencyId: this.agenList[0].account,
                siteName: '',
                status: 1
            }
        },
        // pick agencyId
		checkAgenId(account) {
			let a;
			this.agenList.map(v => {
				if (v.account == account) {
					a = v.agencyId;
				}
			});
			return a;
		},
        handuseAble(row) {
            let status = row.statuspro === true ? 1 : 2;
			agencySiteEditSiteStatus({ id: row.id, status }).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					row.statuspro = row.status === 1;
					this.$message.error(res.message);
				}
			});
		},
        // 保存编辑
        saveEdit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let func;
                    if (this.formStatus === 2) {
                        func = agencySiteEditSite
                    }else{
                        func = agencySiteAddSite
                    }
                    let post = {}
                    this.$.extend(post,this.ruleForm)
                    var reg = /^[A-Za-z0-9]+$/;
                    let flag = reg.test(post.siteName);
                    if(post.siteName!=''&&!flag){
                        return this.$message.error('编辑站点名称不能含特殊字符！')
                    }
                    func(post).then(res => {
                        if(res.success){
                            this.$message.success(this.$t('common.success'))
                            this.resetEdit(formName);
                            this.getData();
                        }else{
                            this.$message.error(res.message)
                        }
                    })
                } else {
                    console.error('error submit!!');
                    return false;
                }
            });
            
        },

        //取消编辑
        resetEdit(formName) {
           this.editVisible = false;
           this.$refs[formName].resetFields();
           this.initFormData();
        }, 
        reset(){
            this.query = {
                siteName: '', //value值
                status: 0,
                pageIndex: 1,
                pageSize: fData.pageSize
            }
        },
        handleDel(index,row){
            agencySiteDelSite({id: row.id}).then(res => {
                if(res.success){
                    this.$message.success(this.$t('common.success'))
                    this.getData();
                }else{
                    this.$message.error(res.message)
                }
            })

        }
    }
};
</script>
