<template>
	<div class="lineList">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.lineMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.lineList') }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.line') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.status') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.lineStatusOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.doMonMode') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.doMonModeOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box">
					<label>{{ $t('common.lineName') }}:</label>
					<el-input v-model="query.name" :placeholder="$t('common.p_lineName')" class="selbox"></el-input>
				</div>
				<div class="fl">
					<el-button type="primary" icon="el-icon-search" @click="handleSearch">{{
						$t('common.search')
					}}</el-button>
					<el-button @click="reset">{{ $t('common.reset') }}</el-button>
					<el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{ $t('common.add') }}</el-button>
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
				<el-table-column prop="id" :label="$t('ID')" width="75" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.lineName')" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.quota')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.lineStatus')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.payMode')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.local')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.addTime')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.modifyTime')" align="center"></el-table-column>
				<el-table-column :label="$t('common.operating')" width="230" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-edit" @click="statusEdit(2, scope.$index, scope.row)">{{
							$t('common.updStatus')
						}}</el-button>
						<el-button type="text" icon="el-icon-edit" @click="handleEdit(2, scope.$index, scope.row)">{{
							$t('common.updLine')
						}}</el-button>
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
				<el-form-item :label="$t('common.lineId')" prop="name">
					<el-input v-model="ruleForm.name" :placeholder="$t('common.p_role')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.lineName')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_act')" :disabled="formStatus === 2"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.package')" prop="address">
					<el-select v-model="query.status" :placeholder="$t('请选择一个套餐')" class="selbox">
						<el-option v-for="item in fData.packOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('common.local')" prop="address2">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
				<el-form-item label="md5key" prop="address2">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
				<el-form-item label="desKey" prop="address2">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.payMode')" prop="address2">
					<el-radio v-for="item in walitOptions" v-model="valuesf" :label="item.key" :key="item.key">{{ item.value }}</el-radio>
				</el-form-item>
				<el-form-item label="API URL" prop="address2">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.status')" prop="address2">
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in statusOptionspro" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('common.addTime')" prop="address2">
					<el-input v-model="ruleForm.address" disabled :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.modifyTime')" prop="address2">
					<el-input v-model="ruleForm.address" disabled :placeholder="$t('common.p_confirPwd')"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetEdit('ruleForm')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveEdit('ruleForm')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>

		<el-dialog :title="$t('common.updStatus')" :visible.sync="statusVisible" width="30%">
			<el-form :model="ruleForms" label-width="90px" :rules="rules" ref="ruleForms">
				<el-form-item :label="$t('common.lineStatus')" prop="status">
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in lineStatusOppro" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetStatus('ruleForms')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveStatus('ruleForms')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import fData from '@/app.config';

export default {
	name: 'basetable',
	data() {
		let operationpassError = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.p_pwd')));
			} else if (!operationpassError.test(value)) {
				callback(new Error(this.$t('common.pwd_str')));
			} else {
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
			editVisible: false,
			statusVisible: false,
			pageTotal: 0,
			fData: fData,
			walitOptions: [],
			statusOptionspro: [],
			lineStatusOppro: [],

			ruleForm: {
				formTitle: '', //模态框title
				name: '',
				address: '',
				address2: '',
				pass: '',
				checkPass: ''
			},
			ruleForms: {
				status: ''
			},
			// ruleForm = {
			//     lineId: '',
			//     lineName: '',
			//     packName: '',
			//     localName: '',
			//     md5key: '',
			//     desKey: '',
			//     doMMode: '',
			//     apiUrl: '',
			//     status: '',
			// }
			formStatus: 1, //1添加 2修改
			status2: true,
			rules: {
				name: [
					{ required: true, message: '请输入名称', trigger: 'blur' },
					{ min: 2, max: 20, message: this.$t('common.str_len'), trigger: 'blur' }
				],
				address: [
					{ required: true, message: this.$t('common.p_pwd'), trigger: 'blur' },
					{ validator: validatePass, trigger: 'blur' }
				],
				address2: [
					// { required: true, message: this.$t('common.againInpPwd'), trigger: 'blur' },
					{ validator: validatePass2, trigger: 'blur' }
				],
				status: [{ required: true, message: '请选择状态', trigger: 'blur' }]
			},
			valuesf: 1
		};
	},
	created() {
		this.getData();
		this.makeOp();
	},
	watch: {
		status2(val) {
			console.log(val, 'status2');
		}
	},
	methods: {
		makeOp() {
			this.walitOptions = this.$.extend(this.walitOptions, this.fData.doMonModeOp);
			this.walitOptions.shift();
			this.statusOptionspro = this.$.extend(this.statusOptionspro, this.fData.statusOptions);
			this.statusOptionspro.shift();
			this.lineStatusOppro = this.$.extend(this.lineStatusOppro, this.fData.lineStatusOp);
			this.lineStatusOppro.shift();
		},
		makeRadio() {
			let _this = this;
			setTimeout(function() {
				console.log(_this.$('.el-radio__label'), '22222');
				_this.$('.el-radio__label').css({
					'font-weight': '400',
					'font-size': '14px',
					'padding-left': '10px'
				});
			}, 200);
		},

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
		handleInit() {
			this.$confirm(this.$t('common.init_str', [123456]), this.$t('common.prompt'), {
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
			this.$message.error(this.$t('common.deled', [str]));
			this.multipleSelection = [];
		},
		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			this.editVisible = true;
			if (status === 2) {
				this.idx = index;
				// 需要继承row的数据进行验证
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('common.updLine');
			} else if (status === 1) {
				this.ruleForm = {
					formTitle: this.$t('common.addLine'),
					name: '',
					address: ''
				};
			}
			this.makeRadio();
		},
		// 状态修改
		statusEdit(status, index, row) {
			this.statusVisible = true;
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
		// 状态编辑
		resetStatus(formName) {
			this.statusVisible = false;
			this.$refs[formName].resetFields();
		},
		// 状态编辑
		saveStatus(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					console.log('ok submit');
					this.resetStatus(formName);
					this.getData();
				} else {
					console.error('error submit!!');
					return false;
				}
			});
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
