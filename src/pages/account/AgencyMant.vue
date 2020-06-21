<template>
	<div class="role allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
                <!-- <i class="el-icon-lx-people"></i> -->
				<el-breadcrumb-item>{{ $t('common.actMant') }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $t('common.agencyMant') }}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.status') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
                <div class="pk-inp-box pk-select">
					<label>{{ $t('common.onlineStatus') }}:</label>
					<el-select v-model="query.isOnline" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.memAgencOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
                <div class="pk-inp-box pk-select" v-if="token.isAdmin === 1">
					<label>{{ $t('common.siteId') }}:</label>
                    <el-select filterable v-model="query.agencyId" :placeholder="$t('common.all')" class="selbox pull-width">
                        <el-option
                            v-for="(item) in agenListpro"
                            :key="item.account" :label="item.account" :value="item.account">
                        </el-option>
                    </el-select>
                </div>
				<div class="pk-inp-box">
					<label>{{ $t('common.act') }}:</label>
					<el-input v-model="query.account" :placeholder="$t('common.p_act')" class="selbox"></el-input>
				</div>
				<div class="fl">
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{ $t('common.search') }} </el-button>
				    <el-button @click="reset">{{ $t('common.reset') }}</el-button>
				    <el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)" v-if="token.isAdmin===1">{{ $t('common.add') }}</el-button>
                </div>
                <div class="clearboth"></div>
			</div>
			<el-table :height="fData.tHeightOne()" :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="agencyId" :label="$t('common.siteId')" width="85" align="center"></el-table-column>
				<!-- <el-table-column prop="lineId" :label="$t('common.lineId')" width="85" align="center"></el-table-column> -->
				<el-table-column prop="account" :label="$t('common.act')" align="center"></el-table-column>
				<!-- <el-table-column prop="limit" :label="$t('common.quota')" align="center"></!--> -->
				<el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
						<el-switch
                            v-if="token.isAdmin===1"
							style="display: block"
							v-model="scope.row.statuspro"
							active-color="#13ce66"
							inactive-color="#ff4949"
							:active-text="$t('common.able')"
							:inactive-text="$t('common.disable')"
							@change="handuseAble(scope.row)"
						>
						</el-switch>
                        <el-tag v-else :type="scope.row.status === 1 ? 'success' : scope.row.status === 2 ? 'danger' : ''">{{
							scope.row.status | filterUseStatus
						}}</el-tag>
					</template>
				</el-table-column>
                <el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
                        <el-tag :type="scope.row.isOnline === 1 ? 'success' : scope.row.isOnline === 2 ? 'danger' : ''">{{
							scope.row.isOnline | isOnline
						}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="createTime" :label="$t('common.addTime')" align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterDate}}</span>
                    </template>
                </el-table-column>
				<el-table-column v-if="token.isAdmin===1" :label="$t('common.operating')" width="280" align="center">
					<template slot-scope="scope">
                        <div :class="{'dis-none':token.isAdmin!==1}">
                            <el-button @click="handleConfim(scope.$index, scope.row)">{{ $t('common.resetPwd') }}</el-button>
                            <el-button type="primary" plain @click="handleEdit(2, scope.$index, scope.row)">{{
                                $t('common.modify')
                            }}</el-button>
                            <el-button type="danger" plain @click="handleDel(scope.$index, scope.row)">{{ $t('common.del') }}</el-button>
                        </div>
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
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="30%" @close="resetEdit('ruleForm')">
			<el-form :model="ruleForm" label-width="100px" :rules="rules" ref="ruleForm">
                <el-form-item :label="$t('common.siteId')" prop="agencyId">
					<el-select filterable v-model="ruleForm.agencyId" :placeholder="$t('common.all')" class="selbox pull-width" :disabled="formStatus===2">
                        <el-option
                            v-for="(item) in agenList"
                            :key="item.account" :label="item.account" :value="item.account">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :label="$t('common.agenceAct')" prop="account">
					<el-input v-model="ruleForm.account" :placeholder="$t('common.p_agenceAct')" :disabled="formStatus === 2"></el-input>
				</el-form-item>
				<!-- <el-form-item :label="$t('common.quota')" prop="limit">
					<el-input type="limit" v-model.number="ruleForm.limit" :placeholder="$t('common.p_quota')" auto-complete="new-password"></el-input>
				</el-form-item> -->
				<el-form-item :label="$t('common.loginPwd')" prop="password">
					<el-input type="password" v-model="ruleForm.password" :placeholder="$t('common.p_loginPwd')" auto-complete="new-password"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.confirPwd')" prop="confirmPassword">
					<el-input type="password" v-model="ruleForm.confirmPassword" :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.status')" prop="status">
					<el-select v-if="token.isAdmin===1" v-model="ruleForm.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in statusOptionspro" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>
                <el-form-item :label="$t('common.allowLoginId')" prop="whiteIpAddress">
                    <template slot-scope="scope">
                        <el-input
                            v-model="ruleForm.whiteIpAddress"
                            :autosize="{ minRows: 2, maxRows: 10}"
                            type="textarea"
                            :placeholder="$t('common.strlogIPLimit')">
                        </el-input>
                    </template>
				</el-form-item>
                
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetEdit('ruleForm')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveEdit('ruleForm')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import {
    getAgenActList,
    addAgeAct,
    updAgeAct,
    updAgeActStatus,
    resetAgeActpwd,
    delAgeAct,
    getAgeActDet
} from '@/api/account';
import Pagination from '@/components/common/Pagination'
import fData from '@/app.config';
import { getAgeList } from '@/api/account'
export default {
	name: 'agencyMant',
    components: { Pagination },
	data() {
		let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t('common.mustY')));
            } else if (!fData.operationpassError.test(value)) {
                callback(new Error(this.$t('common.pwd_str')));
            } else {
                if (this.ruleForm.confirmPassword !== '') {
                    this.$refs.ruleForm.validateField('confirmPassword');
                }
                callback();
            }
        };
		let validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.againInpPwd')));
			} else if (value !== this.ruleForm.password) {
				callback(new Error(this.$t('common.noSamePwd')));
			} else {
				callback();
			}
        };
        let password = [
                { required: true, message: this.$t('common.mustY'), trigger: 'blur' },
                { validator: validatePass, trigger: 'blur' }
            ]
        let confirmPassword = [
            { required: true, message: this.$t('common.mustY'), trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
        ]
        let siteIdV = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.siteIdValid.test(value)) {
				callback(new Error(this.$t('common.siteIdValid')));
			} else {
				callback();
			}
        }
		return {
			query: {
				account: '', //value值
				isOnline: 0, //启停用状态
                pageIndex: 1,
                status: 0,
                pageSize: fData.pageSize,
                agencyId: ''
			},
			tableData: [],
			delList: [],
			editVisible: false,
			pageTotal: 0,
            statusOptions: fData.statusOptions,
            statusOptionspro: [],
            fData: fData,
			ruleForm: {
				formTitle: '', //模态框title
				account: '',
                limit: '',
                password: '',
                confirmPassword: '',
                status: 0,
                whiteIpAddress: '',
                agencyId: ''
            },
            token: fData.token(),
            agenList: [],
            agenListpro: [],
            password: password,
            confirmPassword: confirmPassword,
			rules: {
                // limit: [
                //     { required: true, message: this.$t('common.mustY'), trigger: 'blur' },
                //     { type: 'number', message: '必须为数字值', trigger: 'blur'}
                // ],
				account: [
					{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
					{ validator: fData.actValidate, trigger: 'blur' }
                ],
                status: [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }],
				password: password,
                confirmPassword: confirmPassword,
                agencyId: [
					{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
					{ validator: siteIdV, trigger: 'blur' }
                ],
                whiteIpAddress: [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }]
			},
			formStatus: 1,
		};
	},
	created() {
        this.$.extend(this.statusOptionspro,this.fData.statusOptions)
        this.statusOptionspro.shift()
        if (this.token.isAdmin === 1) {
            this.getAenList();
        }
        this.getData();
    },
    watch: {
        formStatus(val){
            if(val===1){
                this.rules.password = this.password
                this.rules.confirmPassword = this.confirmPassword
            }else{
                this.rules.password = null
                this.rules.confirmPassword = null
            }   
        }
    },
	methods: {
        // 查询代理列表
		getAenList() {
			getAgeList().then(res => {
				if (res.success) {
                    this.agenList = res.data || [];
                    this.agenListpro.push({agencyId:'',account:this.$t('common.all')},...res.data)
				} else {
					this.$message.error(res.message);
				}
			});
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
		getData(params) {
            if(params){
                this.query.pageIndex = params.page;
                this.query.pageSize = params.limit;
            }
            if(this.query.agencyId === this.$t('common.all')){
                this.query.agencyId = ''
            }
            var post = {};
			this.$.extend(post, this.query);
            post.agencyId = this.checkAgenId(post.agencyId)
			getAgenActList(post).then(res => {
				if(res.success){
                    this.tableData = res.data.data;
                    this.pageTotal = res.data.count || 0;
                    this.tableData.map(v => {
                        v.statuspro = v.status === 1
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
		handuseAble(row) {
            let status = row.statuspro === true ? 1 : 2;
			updAgeActStatus({ id: row.id, status }).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					row.isOnline = row.status === 1;
					this.$message.error(res.message);
				}
			});
		},
        // 编辑操作
        handleEdit(status, index, row) {
            this.formStatus=status
            this.editVisible = true;
            if(status===2){
                this.idx = index;
                // this.ruleForm = this.$.extend(this.ruleForm,row);
                getAgeActDet({id: row.id}).then(res => {
                    if(res.success){
                        this.ruleForm = res.data;
                        this.ruleForm.formTitle = this.$t('common.modify')+this.$t('common.agency');
                    }else{
                        this.$message.error(res.message)
                    }
                })
            }else if(status===1){
                this.initFormData()
            }
        },
        initFormData(){
            this.ruleForm = {
                formTitle: this.$t('common.add')+this.$t('common.agency'),
                account: '',
                limit: '',
                password: '',
                confirmPassword: '',
                status: this.statusOptionspro[0].key,
                whiteIpAddress: '',
                agencyId: this.token.isAdmin === 1 ? this.agenList[0].account : null
            }
        },
        // 保存编辑
        saveEdit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let func;
                    let post={};
                    if (this.formStatus === 2) {
                        func = updAgeAct
                    }else{
                        func = addAgeAct
                    }
                    this.$.extend(post,this.ruleForm)
                    post.limit = ((post.limit)*1).toFixed(2);
                    post.agencyId = this.checkAgenId(post.agencyId);
                    func(post).then(res => {
                        if(res.success){
                            this.resetEdit(formName);
                            this.$message.success(this.$t('common.success'))
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
           this.editVisible = false
           this.initFormData();
           this.$refs[formName].resetFields();
        }, 
        // 删除操作
        handleConfim(index, row) {
            let post = {id:row.id}
            this.$confirm(this.$t('common.wResetPwd',[123456]), this.$t('common.prompt'), {
                type: 'warning'
            })
                .then(() => {
                    resetAgeActpwd(post).then(res => {
                        if(res.success){
                            this.$message.success(this.$t('common.success'))
                            this.getData();
                        }else{
                            this.$message.error(res.message)
                        }
                    })
                    // this.$message.success(this.$t('common.sucDel'));
                })
                .catch(() => {});
        },
        handleDel(index, row) {
            let post = {id:row.id}
            this.$confirm(this.$t('确认删除此代理？'), this.$t('common.prompt'), {
                type: 'warning'
            }).then(() => {
                delAgeAct(post).then(res => {
                    if(res.success){
                        this.$message.success(this.$t('common.success'))
                        this.getData();
                    }else{
                        this.$message.error(res.message)
                    }
                })
            })
        },
		reset() {
			this.query = {
                status: 0, //value值
                isOnline: 0,
                name: '',
                agencyId: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			};
		}
	}
};
</script>
