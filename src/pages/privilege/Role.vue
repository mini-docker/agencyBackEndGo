<template>
	<div class="role">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{ this.$t('common.actMant') }} </el-breadcrumb-item>
				<el-breadcrumb-item>{{ this.$t('common.roleMant') }}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="handle-box">
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.status') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</div>
				<div class="pk-inp-box">
					<label>{{ $t('common.rolename') }}:</label>
					<el-input v-model="query.name" :placeholder="$t('common.p_name')" class="selbox"></el-input>
				</div>
				<el-button type="primary" icon="el-icon-search" @click="handleSearch">{{ $t('common.search') }}</el-button>
				<el-button @click="reset">{{ $t('common.reset') }}</el-button>
				<el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{ $t('common.add') }}</el-button>
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
				<el-table-column prop="name" :label="$t('common.rolename')" align="center"></el-table-column>
				<el-table-column prop="address" :label="$t('common.remark')" align="center"></el-table-column>
				<el-table-column prop="date" :label="$t('common.addTime')" align="center"></el-table-column>
				<el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
						<!-- <el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag> -->
						<el-switch
							style="display: block"
							v-model="status2"
							active-color="#13ce66"
							inactive-color="#ff4949"
							:active-text="$t('common.able')"
							:inactive-text="$t('common.disable')"
							@change="handuseAble(scope.$index, scope.row)"
						>
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column :label="$t('common.operating')" width="230" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-edit" @click="handleEdit(2, scope.$index, scope.row)">{{
							$t('common.modify')
						}}</el-button>
						<el-button type="text" icon="el-icon-edit" @click="gorolePower()">{{ $t('common.rolePower') }}</el-button>
						<el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">{{
							$t('common.del')
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
				<el-form-item :label="$t('common.rolename')" prop="name">
					<el-input v-model="ruleForm.name" :placeholder="$t('common.p_name')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.remark')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_remark')"></el-input>
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

export default {
	name: 'role',
	data() {
		return {
			query: {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			},
			tableData: [],
			editVisible: false,
			pageTotal: 0,
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
			ruleForm: {
				formTitle: '', //模态框title
				name: '',
				address: ''
			},
			formStatus: 1,
			status2: true,
			rules: {
				name: [
					{ required: true, message: this.$t('common.p_name'), trigger: 'blur' },
					{ min: 2, max: 20, message: this.$t('common.str_len'), trigger: 'blur' }
				]
			}
		};
	},
	created() {
		this.getData();
	},
	methods: {
		handuseAble(index, row) {
			console.log(index, row, 'roooow');
			this.$message.success(this.$t('common.success'));
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
			// var post = {}
			// this.$.extend(post, this.query)
			// console.log("post",post)
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

		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			if (status === 2) {
				this.idx = index;
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('common.updRole');
				this.editVisible = true;
			} else if (status === 1) {
				this.editVisible = true;
				this.ruleForm = {
					formTitle: this.$t('common.addRole'),
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
			;
			this.query = {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			};
		}
	}
};
</script>
