<template>
	<div class="role">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i> -->
                 {{ $t('common.actMant') }} </el-breadcrumb-item>
				<el-breadcrumb-item>{{ $t('common.funcMenu') }}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="handle-box flex-end">
				<el-button type="primary" @click="handleEdit(1)">{{ $t('common.addTo') }}</el-button>
				<el-button type="primary" :icon="!collpase?'el-icon-lx-add':'el-icon-lx-move'" @click="toggleCollpase()">{{ collpase?$t('common.collapseAll'):$t('common.expandAll')}}</el-button>
			</div>
			<div>
				<el-table
                    ref="multipleTable"
					:data="tableData2"
					style="width: 100%;margin-bottom: 20px;"
					border
                    :row-key="getRowKeys"
					:tree-props="{ children: 'childrens', hasChildren: 'hasChildren' }"
				>
					<el-table-column prop="name" label="姓名" sortable width="180"> </el-table-column>
					<el-table-column prop="address" label="地址" align="center"> </el-table-column>
                    <el-table-column :label="$t('common.operating')" width="230" align="center">
						<template slot-scope="scope">
							<el-button type="text" icon="el-icon-edit" @click="handleEdit(2, scope.$index, scope.row)">{{
								$t('common.modify')
							}}</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="40%">
			<el-form :model="ruleForm" label-width="100px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.parentMenu')" prop="name" class="w200">
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>

				<el-form-item :label="$t('common.menuName')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_menuName')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.menuAddr')" prop="address">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_menuAddr')"></el-input>
				</el-form-item>
				<el-form-item :label="$t('common.iconClass')" prop="address" class="mgb0">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_iconClass')"></el-input>
				</el-form-item>
				<el-form-item label="" prop="" class="mgb0">
					{{ $t('common.referUrl') }}：<span class="c-red">https://www.baidu.com</span>
				</el-form-item>
				<el-form-item :label="$t('common.status')" prop="address">
					<!-- <el-radio v-model="radio" label="1">启用</el-radio>
                    <el-radio v-model="radio" label="2">停用</el-radio> -->
					<el-radio v-for="item in ableOptions" v-model="valuesf" :label="item.key" :key="item.key">{{ item.value }}</el-radio>
				</el-form-item>
				<el-form-item :label="$t('common.isVisible')" prop="address">
					<el-radio v-for="item in visableOptions" v-model="valuesf" :label="item.key" :key="item.key">{{ item.value }}</el-radio>
				</el-form-item>

				<el-form-item :label="$t('common.sortY')" prop="address" class="w200">
					<el-input v-model="ruleForm.address" :placeholder="$t('common.p_Sort')"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<!-- <el-button @click="resetEdit('ruleForm')">取 消</el-button> -->
				<el-button type="primary" @click="saveEdit('ruleForm')">{{ $t('common.save') }}</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>

import { json } from './demo.js';
export default {
	name: 'funcMenu',
	data() {
		return {
            getRowKeys(row) {
                return row.id;
            },
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
			ableOptions: [
				{
					key: 1,
					value: '启用'
				},
				{
					key: 2,
					value: '停用'
				}
			],
			visableOptions: [
				{
					key: 1,
					value: '可见'
				},
				{
					key: 2,
					value: '不可见'
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
				],
				address: [{ required: true, message: this.$t('common.p_addr'), trigger: 'blur' }]
			},
			valuesf: 1,
            collpase: false,
            expandRows: [],//tree-table 展开行id数组

		};
	},
	created() {
		this.getData();
        console.log(json, 'json');
        this.tableData2 = json.data;
        this.getExpandRows();
    },
    mounted() {
        
    },
	watch: {
		status2(val) {
			console.log(val, 'status2');
		}
	},
	methods: {
		gorolePower() {
			this.$router.push({ name: 'roleTopower' });
        },
        
        getData() {
            // fetchData(this.query).then(res => {
            //     console.log(res,'resssss');
            //     this.tableData = res.list;
            //     this.pageTotal = res.pageTotal || 50;
            // });
        },

		// 触发搜索按钮
		handleSearch() {
			// var post = {}
			// this.$.extend(post, this.query)
			// console.log("post",post)
			this.$set(this.query, 'pageIndex', 1);
		},

		// 编辑操作
		handleEdit(status, index, row) {
			this.formStatus = status;
			if (status === 2) {
				this.idx = index;
				this.ruleForm = this.$.extend(this.ruleForm, row);
				this.ruleForm.formTitle = this.$t('common.editMenu');
				this.editVisible = true;
			} else if (status === 1) {
				this.editVisible = true;
				this.ruleForm = {
					formTitle: this.$t('common.addMenu'),
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
		reset() {
			this.query = {
				status: '', //value值
				name: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			};
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        // 菜单展开全部
        toggleCollpase(){
            let rows = this.expandRows || [];
            if (rows) {
                this.collpase = !this.collpase
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowExpansion(row,this.collpase);
                });
            }
        },
        getExpandRows(){
             this.tableData2.map(v=>{
                 if(v.childrens){
                     this.expandRows.push(v)
                     v.childrens.map(v2=>{
                         this.expandRows.push(v2)
                     })
                 }
             })
            console.log(this.expandRows,'this.expandRows')
        }
	}
};
</script>
