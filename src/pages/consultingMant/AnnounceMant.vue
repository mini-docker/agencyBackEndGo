<template>
	<div class="eventPic allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.consultingMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.announceMant') }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.status') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
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
					<label>{{ $t('common.announceTit') }}:</label>
					<el-input v-model="query.title" :placeholder="$t('common.p_KeywordS')" class="selbox"></el-input>
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
			<el-table :data="tableData" :height="fData.onlyOneHeight()" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
                <el-table-column prop="title" :label="$t('common.announceTit')" align="center"></el-table-column>
				<el-table-column prop="startTime" :label="$t('common.playTime')" align="center">
					<template slot-scope="scope">
						<div>
							<span>{{ $t('common.start') }}：</span><span>{{ scope.row.startTime | filterDate }}</span>
						</div>
						<div>
							<span>{{ $t('common.end') }}：</span><span>{{ scope.row.endTime | filterDate }}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="sort" :label="$t('common.playOrder')" align="center">
					<template slot-scope="scope">
						<el-input-number
							:min="0"
							:max="99999999"
							size="small"
							v-model="scope.row.sort"
							@change="handleChange(scope.row)"
						></el-input-number>
					</template>
				</el-table-column>

				<el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
						<!-- <el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag> -->
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
						<el-button type="primary" plain @click="handleEdit(2, scope.row)">{{ $t('common.modify') }}</el-button>
						<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{ $t('common.del') }}</el-button>
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
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" @close="resetEdit('ruleForm')" width="38%">
			<el-form :model="ruleForm" label-width="90px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.announceTit')" prop="title">
					<el-input v-model="ruleForm.title" :placeholder="$t('请输入公告标题')"></el-input>
				</el-form-item>
                <el-form-item :label="$t('common.siteName')" prop="agencyId" v-if="token.isAdmin===1&&formStatus===1">
                    <div class="flex">
						<el-select
                            filterable
							v-model="ruleForm.agencyId"
							:placeholder="$t('common.siteName')"
							class="selbox pull-width"
						>
							<el-option v-for="item in agenList" :key="item.account" :label="item.account" :value="item.account">
							</el-option>
						</el-select>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.annoTime')" prop="addTime">
					<el-date-picker
						class="pull-width"
						v-model="ruleFormTimes"
						type="datetimerange"
						align="right"
						:start-placeholder="$t('common.startTime')"
						:end-placeholder="$t('common.endTime')"
						format="yyyy-MM-dd HH:mm:ss"
						value-format="timestamp"
						:pickerOptions="pickerOptions"
						:default-time="['00:00:00', '23:59:59']"
					>
					</el-date-picker>
				</el-form-item>
				<el-form-item :label="$t('common.annoCon')" prop="content">
					<template>
						<el-input
							v-model="ruleForm.content"
							:autosize="{ minRows: 2, maxRows: 10 }"
							type="textarea"
							:placeholder="$t('common.p_Con')"
						>
						</el-input>
					</template>
				</el-form-item>
				<el-form-item :label="$t('common.status')" prop="status">
					<el-radio v-for="item in statusOptionspro" v-model="ruleForm.status" :label="item.key" :key="item.key">{{
						item.value
					}}</el-radio>
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
import Pagination from '@/components/common/Pagination'
import fData from '@/app.config';
import { getDate,Timestamp} from '@/filter.js';
import { getAnno, addAnno, getAnnoOne, editAnno, editAnnoStatus, delAnno } from '@/api/announce';
import { getAgeList } from '@/api/account'
export default {
	name: 'announceMant',
    components: { Pagination },
	data() {
        let MUST = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }];
		return {
			query: {
				title: '',
				status: 0,
                pageIndex: 1,
                agencyId: '',
				pageSize: fData.pageSize
            },
            token: JSON.parse(decodeURIComponent(sessionStorage.getItem('token'))),
			startTime: getDate().today.start * 1000,
			endTime: getDate().today.end * 1000,
			tableData: [],
			editVisible: false,
			pageTotal: 0,
			fData: fData,
			ruleForm: {
				formTitle: '',
				title: '',
				addTime: '',
				startTime: 0,
				endTime: 0,
				content: '',
                status: '',
                agencyId: ''
			},
			// 应用同一个fdata时赋值有问题
			rules: {
				title: MUST,
				addTime: MUST,
				content: MUST,
                status: MUST,
                agencyId: MUST,
			},
			statusOptionspro: [],
			formStatus: 1, //1添加 2修改
			status2: true,
            url: '',
            pickerOptions: {
				disabledDate(time) {
                    //今天及以后 如果没有后面的-8.64e7就是不可以选择今天的
					return time.getTime() < Date.now() - 8.64e7;
				}
            },
            agenList: [],
            agenListpro: [],
            ruleFormTimes:[0,0]
		};
	},
	created() {
		this.statusOptionspro = this.$.extend(this.statusOptionspro, this.fData.statusOptions);
        this.statusOptionspro.shift();
        if(this.token.isAdmin===1){
            this.getAenList();
        }
        if(this.token.isAdmin!==1){
            this.ruleForm.agencyId=null
        }
        this.getData();
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
        checkAgenId(account){
            let a;
            this.agenList.map(v=>{
                if(v.account==account){
                    a = v.agencyId
                }
            })
            return a 
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
            post.startTime = parseInt((post.startTime / 1000) || 0)
            post.endTime = parseInt((post.endTime / 1000) || 0)
            post.startTime = Timestamp(post.startTime)
            post.endTime = Timestamp(post.endTime)
            post.agencyId = this.checkAgenId(post.agencyId)
			getAnno(post).then(res => {
				if (res.success) {
					this.tableData = res.data.data || [];
					this.pageTotal = res.data.count || 0;
					this.tableData.map(v => {
						v.statuspro = v.status === 1;
					});
				} else {
					this.$message.error(res.message);
				}
			});
		},
		handleChange(row) {
			editAnno(row).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					this.$message.error(res.message);
				}
			});
			console.log(row, 'row');
		},
		// 更改radio样式
		makeRadio() {
			let _this = this;
			setTimeout(function() {
				_this.$('.el-radio__label').css({
					'font-weight': '400',
					'font-size': '14px',
					'padding-left': '10px'
				});
			}, 200);
		},
		// 触发搜索按钮
		handleSearch() {
			this.$set(this.query, 'pageIndex', 1);
			this.getData();
		},

		// 编辑操作
		handleEdit(status, row) {
			this.formStatus = status;
			this.editVisible = true;
			if (status === 2) {
				getAnnoOne({ id: row.id }).then(res => {
					if (res.success) {
						this.ruleForm = res.data;
						this.ruleFormTimes = [this.ruleForm.startTime * 1000, this.ruleForm.endTime * 1000];
                        this.ruleForm.addTime = this.ruleFormTimes;
						this.ruleForm.formTitle = this.$t('修改公告');
						console.log(this.ruleForm, 'resssss');
					} else {
						this.$message.error(res.message);
					}
				});
			} else if (status === 1) {
				this.initFormData();
			}
		},
		initFormData() {
			this.ruleForm = {
				formTitle: this.$t('添加公告'),
				title: '',
                status: 1,
                agencyId: this.token.isAdmin===1?this.agenList[0].account:null,
				addTime: [this.startTime, this.endTime],
				startTime: this.startTime,
				endTime: this.endTime
            };
            this.ruleFormTimes=[]
		},
		// 保存编辑
		saveEdit(formName) {
            console.log(formName,'formName');
			this.$refs[formName].validate(valid => {
				if (valid) {
                    this.editVisible = false;
					let func;
					let post = {};
                    this.ruleForm.addTime = this.ruleFormTimes;
                    this.$.extend(post, this.ruleForm);
					post.startTime = parseInt((post.startTime / 1000) || 0)
                    post.endTime = parseInt((post.endTime / 1000) || 0)
                    post.startTime = Timestamp(post.startTime)
                    post.endTime = Timestamp(post.endTime)
					if (this.formStatus === 2) {
						func = editAnno;
					} else {
                        func = addAnno;
                        post.agencyId = this.checkAgenId(post.agencyId)
					}
					func(post).then(res => {
						if (res.success) {
							this.resetEdit(formName);
							this.$message.success(this.$t('common.success'));
							this.getData();
						} else {
							this.$message.error(res.message);
						}
					});
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

		// 删除操作
		handleDelete(index, row) {
			// 二次确认删除
			this.$confirm(this.$t('common.doSureDel'), this.$t('common.prompt'), {
				type: 'warning'
			})
				.then(() => {
					let post = {
						id: row.id
					};
					delAnno(post).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.success'));
							this.getData();
						} else {
							this.$message.error(res.message);
						}
					});
					// this.$message.success(this.$t('common.sucDel'));
					// this.tableData.splice(index, 1);
				})
				.catch(() => {});
		},
		handuseAble(row) {
			let postdata = {
				id: row.id,
				status: row.statuspro === true ? 1 : 2
			};
			editAnnoStatus(postdata).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					row.statuspro = row.status === 1;
					this.$message.error(res.message);
				}
			});
		},
		reset() {
			this.query = {
				title: '',
				status: 0,
                pageIndex: 1,
                agencyId: '',
				pageSize: fData.pageSize
			};
		}
	}
};
</script>
