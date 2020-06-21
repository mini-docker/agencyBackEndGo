<template>
	<div class="packageMant">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.lineMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.packageMant') }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="fr">
					<el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{ $t('common.add') }}</el-button>
				</div>
				<div class="clearboth"></div>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="id" :label="$t('common.packageId')" width="75" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.packageName')" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.nnredTakePer')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.slredTakePer')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.addTime')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.modifyTime')" align="center"></el-table-column>
				<el-table-column :label="$t('common.operating')" width="230" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-edit" @click="handleEdit(2, scope.$index, scope.row)">{{
							$t('common.modify')
						}}</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination" v-show="pageTotal > 0">
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
			<el-form :model="ruleForm" label-width="150px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.packName')" prop="name">
					<el-input v-model="ruleForm.name" :placeholder="$t('common.p_packName')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.nnredPM')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_nnredPM')" :disabled="formStatus === 2"
						><template slot="append"
							>%</template
						></el-input
					>
				</el-form-item>
				<el-form-item :label="$t('common.slredPM')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_slredPM')"
						><template slot="append"
							>%</template
						></el-input
					>
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
import fData from '@/app.config';

export default {
	name: 'basetable',
	data() {
		return {
			query: {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			},
			tableData: [],
			delList: [],
			editVisible: false,
			pageTotal: 0,
			fData: fData,
			ruleForm: {
				formTitle: '', //模态框title
				name: '',
				address: ''
			},
			formStatus: 1 //1添加 2修改
			// rules: {
			// 	name: [
			// 		{ required: true, message: this.$t('common.p_packName'), trigger: 'blur' },
			// 		{ min: 2, max: 20, message: this.$t('common.str_len'), trigger: 'blur' }
			//     ],
			//     address: [
			//         { required: true, message: this.$t('common.p_packName'), trigger: 'blur' },
			//     ],
			// },
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
		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			if (status === 2) {
				this.idx = index;
				// 需要继承row的数据进行验证
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('common.modifyPackName');
				this.editVisible = true;
			} else if (status === 1) {
				this.editVisible = true;
				this.ruleForm = {
					formTitle: this.$t('common.addPackName'),
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
