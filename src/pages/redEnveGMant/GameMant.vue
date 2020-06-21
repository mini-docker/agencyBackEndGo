<template>
	<div class="allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{ $t('common.redEnveGMant') }} </el-breadcrumb-item>
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{ $t('common.gameMant') }} </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="fr">
					<el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{ $t('common.add') }}</el-button>
				</div>
				<div class="clearboth"></div>
			</div>
			<el-table :data="tableData" :height="fData.tableHeight()" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="name" :label="$t('common.gameType')" align="center"></el-table-column>
				<el-table-column prop="address" :label="$t('common.gameName')" align="center"></el-table-column>
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
			</el-table>
		</div>
	</div>
</template>

<script>
import fData from '@/app.config';

export default {
	data() {
		return {
			query: {
				pageIndex: 1,
				pageSize: fData.pageSize
			},
			pageTotal: 0,
			tableData: [],
			ruleForm: {
				formTitle: '', //模态框title
				name: '',
				address: ''
			},
			editVisible: false,
			rules: {
				name: [
					{ required: true, message: this.$t('common.p_name'), trigger: 'blur' },
					{ min: 2, max: 20, message: this.$t('common.str_len'), trigger: 'blur' }
				]
			},
            fData: fData,
			status2: true,
			statusOptionspro: []
		};
	},
	created() {
		this.getData();
		this.$.extend(this.statusOptionspro, this.fData.statusOptions);
		this.statusOptionspro.shift();
	},

	methods: {

		getData() {
			fetchData(this.query).then(res => {
				console.log(res, 'resssss');
				this.tableData = res.list;
				this.pageTotal = res.pageTotal || 50;
			});
		},
		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			if (status === 2) {
				this.idx = index;
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('修改游戏');
				this.editVisible = true;
			} else if (status === 1) {
				this.editVisible = true;
				this.ruleForm = {
					formTitle: this.$t('添加游戏'),
					name: '',
					address: ''
				};
			}
		},
		handuseAble(index, row) {
			console.log(index, row, 'roooow');
			this.$message.success(this.$t('common.success'));
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
		}
	}
};
</script>
