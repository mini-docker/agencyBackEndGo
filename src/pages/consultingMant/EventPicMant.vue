<template>
	<div class="eventPic allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i> -->
					{{ $t('common.consultingMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i> -->
					{{ $t('common.eventPicMant') }}
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
					<label>{{ $t('common.advName') }}:</label>
					<el-input v-model="query.activeName" :placeholder="$t('common.p_KeywordS')" class="selbox"></el-input>
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
			<el-table :data="tableData"  :height="fData.onlyOneHeight()" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
				<!-- <el-table-column prop="lineId" :label="$t('common.line')" align="center"></el-table-column> -->
				<el-table-column prop="activeName" :label="$t('common.mName')" align="center"></el-table-column>
				<el-table-column prop="name" :label="$t('common.adPic')" align="center">
					<template slot-scope="scope">
						<el-image
							style="width: 100px; height: 100px"
							:src="scope.row.picture"
							:lazy="true"
							@click="handlePreview(scope.row.picture)"
						>
						</el-image>
					</template>
				</el-table-column>
				<el-table-column prop="name" :label="$t('common.playTime')" align="center">
					<template slot-scope="scope">
						<div>
							<span>{{ $t('common.start') }}：</span><span>{{ scope.row.startTime | filterDate }}</span>
						</div>
						<div>
							<span>{{ $t('common.end') }}：</span><span>{{ scope.row.endTime | filterDate }}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column :label="$t('common.status')" align="center">
					<template slot-scope="scope">
						<el-switch
							style="display: block"
							v-model="scope.row.statuspro"
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
						<el-button type="primary" plain @click="handleEdit(2, scope.row)">{{ $t('common.modify') }}</el-button>
						<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{ $t('common.del') }}</el-button>
					</template>
				</el-table-column>
			</el-table>
                    <!-- v-show="pageTotal > 0" -->

            <pagination
                    :total="pageTotal"
                    :page.sync="query.pageIndex"
                    :limit.sync="query.pageSize"
                    @pagination="getData"
                />
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="40%" @close="resetEdit('ruleForm')">
			<el-form :model="ruleForm" label-width="90px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.mName')" prop="activeName">
					<el-input v-model="ruleForm.activeName" :placeholder="$t('common.p_sel')"></el-input>
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
				<el-form-item :label="$t('common.playTime')" prop="addTime">
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
				<el-form-item :label="$t('common.img')" prop="picture">
					<el-upload
						class="avatar-uploader"
						action=""
						:on-change="handleChange"
						:on-success="handsuccess"
						:before-upload="beforeAvatarUpload"
						:limit="limit"
						:on-exceed="onExceed"
					>
						<img v-if="imageUrl" :src="imageUrl" class="avatar" />
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<div>{{ picname }}</div>
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
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="" />
		</el-dialog>
	</div>
</template>

<script>
import { getActivity, addActivity, getActivityOne, editActivity, editActivityStatus, uploadImg, delActivity } from '@/api/announce';
import Pagination from '@/components/common/Pagination'
import fData from '@/app.config';
import { getAgeList } from '@/api/account'
import { getAgencyId } from "@/mixins/initAgentList";
import { getDate,Timestamp} from '@/filter.js';
let startTime = getDate().today.start * 1000;
 let endTime = getDate().today.end * 1000;
export default {
    name: 'EventPciMant',
    mixins: [ getAgencyId ],
    components: { Pagination },
	data() {
		let MUST = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }];
		return {
			query: {
				activeName: '',
				status: 0,
                pageIndex: 1,
                agencyId: '',
				pageSize: fData.pageSize
			},
            token: JSON.parse(decodeURIComponent(sessionStorage.getItem('token'))),
			startTime: startTime,
			endTime:endTime,
			tableData: [],
			delList: [],
			editVisible: false,
			pageTotal: 0,
			form: {},
			fData: fData,
			statusOptionspro: [],
			imageUrl: '',
			picname: '',
			ruleForm: {
				activeName: 0,
				startTime: 0,
				endTime: 0,
				picture: 0,
                status: 1,
                agencyId: '',
				addTime: [0, 0]
			},
			rules: {
				activeName: MUST,
				picture: MUST,
                status: MUST,
                agencyId: MUST,
				addTime: MUST
			},
			formStatus: 1, //1添加 2修改
			dialogVisible: false,
            dialogImageUrl: '',
            beFaild: false,
			url: '',
			limit: 1,
			pickerOptions: {
				disabledDate(time) {
                    //今天及以后 如果没有后面的-8.64e7就是不可以选择今天的
					return time.getTime() < Date.now() - 8.64e7;
                },
                
            },
            agenList: [],
            agenListpro: [],
            ruleFormTimes:[startTime,endTime]
		};
	},
	created() {
		this.statusOptionspro = this.$.extend(this.statusOptionspro, this.fData.statusOptions);
        this.statusOptionspro.shift();
        
        if(this.token.isAdmin!==1){
            this.ruleForm.agencyId=null
        }
        this.getData();
	},
	methods: {
		handlePreview(url) {
			this.dialogImageUrl = url;
			this.dialogVisible = true;
		},
		handsuccess(file) {
            this.ruleForm.picture = file.data.url;
		},
		onExceed() {
			this.$message.success(this.$t('最多上传一个文件'));
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
			getActivity(post).then(res => {
				if(res.success){
                    this.tableData = res.data.data;
                    this.pageTotal = res.data.count || 0;
                    this.tableData.map(v => {
                        v.statuspro = v.status === 1;
                        return;
                    });
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
		// 删除操作
		handleDelete(index, row) {
			// 二次确认删除
			this.$confirm(this.$t('common.doSureDel'), this.$t('common.prompt'), {
				type: 'warning'
			})
				.then(() => {
					delActivity({ id: row.id }).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.success'));
							this.getData();
						} else {
							this.$message.error(res.message);
						}
					});
				})
				.catch(() => {});
		},

		// 编辑操作
		handleEdit(status, row) {
			this.ruleForm = this.$.extend(this.ruleForm, row);
			this.formStatus = status;
            this.editVisible = true;
            this.beFaild = false;
			if (status === 2) {
				getActivityOne({ id: row.id }).then(res => {
					if (res.success) {
						this.ruleForm = res.data;
                        this.ruleFormTimes = [this.ruleForm.startTime * 1000, this.ruleForm.endTime * 1000];
                        this.ruleForm.addTime = this.ruleFormTimes;
						this.ruleForm.formTitle = this.$t('common.modify')+this.$t('common.actvImg');
						let picture = this.ruleForm.picture;
						this.imageUrl = picture;
						let name = picture.split('/')[picture.split('/').length - 1];
						this.picname = name;
					} else {
						this.$message.error(res.message);
					}
				});
			} else if (status === 1) {
				this.initFormData();
			}
		},
		initFormData() {
			this.imageUrl = '';
			this.picname = '';
			this.ruleForm = {
				formTitle: this.$t('common.add')+this.$t('common.actvImg'),
				status: 1,
				activeName: '',
				picture: '',
				addTime: [this.startTime, this.endTime],
				startTime: this.startTime,
                endTime: this.endTime,
                agencyId: this.token.isAdmin===1?this.agenList[0].account:null,
            };
            this.ruleFormTimes=[startTime,endTime]
		},
		// 保存编辑
		saveEdit(formName) {
           if(this.beFaild){
               this.ruleForm.picture = '';
               this.picname=''
               this.$message.error(this.$t('common.updImgErr'),{timeout:2000})
               return
           };
			this.$refs[formName].validate(valid => {
				if (valid) {
                    this.editVisible = false;
					let func;
					let post = {};
					if (this.formStatus === 2) {
						func = editActivity;
					} else {
                        func = addActivity;
                        post.agencyId = this.checkAgenId(post.agencyId)
                    }
                    this.ruleForm.addTime = this.ruleFormTimes;
                    this.$.extend(post, this.ruleForm);
                    
                    post.startTime = parseInt((post.startTime / 1000) || 0)
            post.endTime = parseInt((post.endTime / 1000) || 0)
            post.startTime = Timestamp(post.startTime)
            post.endTime = Timestamp(post.endTime)

					func(post).then(res => {
						if (res.success) {
					        this.editVisible = false;
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
		handuseAble(index, row) {
			let post = {};
			this.$.extend(post, row);
			post.status = post.statuspro === true ? 1 : 2;
			editActivityStatus(post).then(res => {
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
				activeName: '',
                status: 0,
                agencyId: '',
				pageIndex: 1,
				pageSize: fData.pageSize
			};
		},
		handleChange(file) {
			this.imageUrl = URL.createObjectURL(file.raw);
			this.picname = file.name;
			let form = new FormData();
            form.append('file', file.raw);
            this.beFaild = false;
			uploadImg(form).then(res => {
				if (res.success) {
                    this.ruleForm.picture = res.data.url;
                    if(!this.beFaild){
					    this.$message.success(this.$t('common.success'));
                    }
					// let picture = this.ruleForm.picture
					// let name = picture.split('/')[picture.split('/').length - 1].split('.');
					// name = name[name.length - 2];
					// this.picname = name;
				} else {
					this.$message.error(res.message);
				}
			});
		},
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg' || file.type==='image/png' || file.type === 'image/jpg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            console.log(file.type,isLt2M,'isLt2M')
			if (!isJPG) {
                this.$message.error(this.$t('common.imgupdn'));
                this.beFaild = true
			}
			if (!isLt2M) {
                this.$message.error(this.$t('common.imgupdnpro'));
                this.beFaild = true
			}
            return false;
		}
	}
};
</script>

<style lang="scss" scoped>
	/deep/.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		width: 345px;
		height: 115px;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409eff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 345px;
		height: 115px;
		line-height: 115px;
		text-align: center;
	}
	.avatar {
		width: 345px;
		height: 115px;
		display: block;
	}
</style>
