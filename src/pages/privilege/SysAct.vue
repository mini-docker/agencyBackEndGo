<template>
	<div class="sysAct">
		<div class="crumbs">
			<el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{$t('common.actMant')}} </el-breadcrumb-item>
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{$t('common.system')}}{{$t('common.actMant')}} </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="pk-inp-box time-d-width">
					<label>{{$t('common.addTime')}}:</label>
					<el-date-picker
						v-model="query.addTime"
						type="datetimerange"
						align="right"
						:start-placeholder="$t('common.startTime')"
						:end-placeholder="$t('common.endTime')"
                        format="yyyy-MM-dd HH:mm:ss"
						:picker-options="pickerOptions"
                        value-format="timestamp"
						:default-time="['00:00:00', '23:59:59']"
					>
					</el-date-picker>
				</div>
				<div class="pk-inp-box pk-select">
					<label>{{$t('common.role')}}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box pk-select">
					<label>{{$t('common.onlineStatus')}}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box">
					<label>{{$t('common.act')}}:</label>
					<el-input v-model="query.name" :placeholder="$t('common.p_act')" class="selbox"></el-input>
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
				class="table"
				ref="multipleTable"
				header-cell-class-name="table-header"
				@selection-change="handleSelectionChange"
			>
				<el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.act')" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.rolename')" align="center"></el-table-column>
				<el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
						<el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="date" :label="$t('common.addTime')" align="center"></el-table-column>
				<el-table-column :label="$t('common.operating')" width="230" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-edit" @click="handleEdit(2, scope.$index, scope.row)">{{$t('common.modify')}}</el-button>
						<el-button type="text" icon="el-icon-edit" @click="handleInit()">{{$t('common.init')}}</el-button>
						<el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)"
							>{{$t('common.del')}}</el-button
						>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				></el-pagination>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="30%">
			<el-form :model="ruleForm" label-width="90px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.role')" prop="name">
					<el-input v-model="ruleForm.name" :placeholder="$t('common.p_role')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.act')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_act')" :disabled="formStatus===2"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.loginPwd')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_loginPwd')"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.confirPwd')" prop="address2">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_confirPwd')"></el-input>
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
import { getDate,Timestamp} from '@/filter.js';
export default {
	name: 'SysAct',
	data() {
        let operationpassError = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t('common.p_pwd')));
            }else if(!operationpassError.test(value)){
                callback(new Error(this.$t('common.pwd_str')));
            }else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t('common.againInpPwd')));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error(this.$t('common.noSamePwd')));
            } else {
                callback();
            }
        };
		return {
			query: {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize,
                addTime: '',
                startTime: 0,
                endTime: 0
			},
			tableData: [],
			delList: [],
			editVisible: false,
			pageTotal: 0,
			form: {},
			idx: -1,
            id: -1,
            fData: fData,
			ruleForm: {
				formTitle: '', //模态框title
				name: '',
                address: '',
                address2: '',
                pass: '',
                checkPass: '',
			},
			formStatus: 1, //1添加 2修改
			// rules: {
			// 	name: [
			// 		{ required: true, message: '请输入名称', trigger: 'blur' },
			// 		{ min: 2, max: 20, message: this.$t('common.str_len'), trigger: 'blur' }
            //     ],
            //     address: [
            //         { required: true, message: this.$t('common.p_pwd'), trigger: 'blur' },
            //         { validator: validatePass, trigger: 'blur' }
            //     ],
            //     address2: [
            //         // { required: true, message: this.$t('common.againInpPwd'), trigger: 'blur' },
            //         { validator: validatePass2, trigger: 'blur' }
            //     ],
			// },
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now() + 5.64e7; //如果没有后面的-8.64e6就是不可以选择今天的
				}
			}
		};
	},
	created() {
		this.getData();
	},
	methods: {
		getData() {
			fetchData(this.query).then(res => {
				console.log(res, 'resssss');
				this.tableData = res.list;
				this.pageTotal = res.pageTotal || 50;
			});
		},
		// 触发搜索按钮
		handleSearch() {
			var post = {};
			this.$.extend(post, this.query);
			post.startTime = parseInt((post.startTime / 1000) || 0)
            post.endTime = parseInt((post.endTime / 1000) || 0)
            post.startTime = Timestamp(post.startTime)
            post.endTime = Timestamp(post.endTime)
			console.log('post', post);
			this.$set(this.query, 'pageIndex', 1);
			this.getData();
		},
		// 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm(this.$t('common.doSureDel'), this.$t('common.prompt'), {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success(this.$t('common.sucDel'));
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
		// 多选操作
		handleSelectionChange(val) {
			this.multipleSelection = val;
        },
        // 初始化
        handleInit(){
            this.$confirm(this.$t('common.init_str',[123456]), this.$t('common.prompt'), {
				type: 'warning'
			})
				.then(() => {
                    // todo

					this.$message.success(this.$t('common.sucModify'));
				})
				.catch(() => {});
        },
		delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(this.$t("common.deled",[str]));
            this.multipleSelection = [];
        },
		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			if (status === 2) {
				this.idx = index;
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('common.modifyAct');
				this.editVisible = true;
			} else if (status === 1) {
				this.editVisible = true;
				this.ruleForm = {
					formTitle: this.$t('common.addAct'),
					name: '',
					address: ''
				};
			}
		},
		// 保存编辑
		saveEdit(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.editVisible = false;
					if (this.formStatus === 2) {
						this.$message.success(`修改第 ${this.idx + 1} 行成功`);
						this.$set(this.tableData, this.idx, this.form);
					}

					this.resetEdit(formName);
					this.getData();
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
		},
		// 分页导航
		handlePageChange(val) {
			this.$set(this.query, 'pageIndex', val);
			this.getData();
		},
		reset() {
			
			this.query = {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize,
                addTime: '',
                startTime: 0,
                endTime: 0
			};
		}
	}
};
</script>
