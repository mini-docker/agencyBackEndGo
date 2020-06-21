<template>
	<div class="sysConf allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.sysMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $t('common.sysConf') }}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
            <div class="search-box" v-if="token.isAdmin === 1">
                <div class="pk-inp-box pk-select">
					<label>{{ $t('common.siteId') }}:</label>
                    <el-select filterable v-model="query.agencyId" :placeholder="$t('common.all')" class="selbox pull-width">
                        <el-option
                            v-for="(item) in agenList"
                            :key="item.account" :label="item.account" :value="item.account">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{
						$t('common.search')
					}}</el-button>
                    <el-button @click="reset">{{ $t('common.reset') }}</el-button>
                </div>
            </div>

			<div class="search-box" v-cloak>
                <div class="pk-inp-box lineheight30">
					<label>{{ $t('common.controlKill') }}:</label>
					<el-switch
                        class="dis-block padt5"
                        v-model="iscontrolKill"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        :active-text="$t('common.able')"
                        :inactive-text="$t('common.disable')"
                    >
                    </el-switch>
				</div>
				<div class="pk-inp-box lineheight30">
					<label>{{ $t('common.profitsStart') }}:</label>
					<el-input :disabled="token.isAdmin === 1" v-model="systemConf.winRatioStart" :placeholder="$t('common.p_Number')" class="selbox">
                        <template slot="append">%</template>
                    </el-input>
				</div>
				<!--<div class="pk-inp-box lineheight30">
					<label>{{ $t('common.profitEnd') }}:</label>
					<el-input :disabled="token.isAdmin === 1" v-model="systemConf.winRatioEnd" :placeholder="$t('common.p_Number')" class="selbox">
                        <template slot="append">%</template>
                    </el-input>
				</div>-->
                <div class="pk-inp-box lineheight30">
					<label>{{ $t('common.curRadio') }}:</label>
					<p class="f16 red lineheight30" v-show="systemConf.currentRatio||systemConf.currentRatio==0">{{parseInt(systemConf.currentRatio*100)}}%</p>
				</div>
				<div>
					<el-button v-if="token.isAdmin !== 1" type="primary" @click="handleEdit()">{{ $t('common.submit') }}</el-button>
				</div>
			</div>
            <div class="handle-box pk-important-text-tip">
				<p>{{ $t('注：盈利比例   =   近七天总机器人盈利  /  近七天总有效打码金额') }}</p>
			</div>
			<div class="search-box mgt10">
                <h3 class="f16 mgr10">控杀会员列表</h3>
				<el-button type="primary" @click="addMem()">{{ $t('common.addMem') }}</el-button>
            </div>
			<el-table
				:data="tableData"
				border
				class="table"
                :height="fData.tableHeight()"
				ref="multipleTable"
				header-cell-class-name="table-header"
			>
            
				<el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
				<el-table-column prop="account" :label="$t('common.memAct')" align="center"></el-table-column>
                <el-table-column :label="$t('common.operating')" width="230" align="center">
                    <template slot-scope="scope">
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
        <!-- 添加控杀会员 -->
        <el-dialog :title="$t('common.addKillUser')" :visible.sync="editVisible" width="55%">
            <div class="search-box">
                <div class="pk-inp-box">
					<label>{{ $t('common.memAct') }}:</label>
					<el-input v-model="ruleForm.memAct" :placeholder="$t('common.p_act')" class="selbox"></el-input>
				</div>
                <el-button type="primary" icon="el-icon-search" @click="getDatas">{{
						$t('common.search')
					}}</el-button>
            </div>
            <el-table
                :data="tableDatas"
                border
                class="table"
                ref="multipleTables"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
                <el-table-column prop="account" :label="$t('common.memAct')" align="center"></el-table-column>
            </el-table>
            <pagination
                v-show="pageTotals > 0"
                :total="pageTotals"
                :page.sync="querys.pageIndex"
                :limit.sync="querys.pageSize"
                @pagination="getDatas"
            />
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
import { getAgencyId } from '@/mixins/initAgentList';
import { userList } from '@/api/account';
import { agencyqueSys, agencySysConf,addKillUser,delKillUser } from '@/api/system';
export default {
	name: 'sysConf',
	mixins: [getAgencyId],
	components: { Pagination },
	data() {
		return {
			query: {
				agencyId: '',
				pageIndex: 1,
				pageSize: fData.pageSize
            },
            querys: {
                pageIndex: 1,
                pageSize: fData.pageSize
            },
            editVisible: false,
            pageTotal: 0,
            fData: fData,
            tableData: [],
			systemConf: {
				winRatioStart: '',
				winRatioEnd: '',
                controlKill: 1,
                iscontrolKill: true,
            },
            ruleForm: {
                memAct: ''
            },
            // 会员列表
            tableDatas: [],
            pageTotals: 0,
            checkedArr: [],
            iscontrolKill: true,
            
		};
	},
    mounted(){
        setTimeout(()=>{
            if(this.token.isAdmin === 1){
                this.query.agencyId = sessionStorage.getItem('agenId')
            }
            this.getData();
            // 会员列表
            this.getDatas();
        },500)
    },
    destroyed() {
       sessionStorage.removeItem('agenId')
    },
	methods: {
		getData(params) {
			if (this.query.agencyId === this.$t('common.all')) {
				this.query.agencyId = '';
			}
			if (params) {
				this.query.pageIndex = params.page;
				this.query.pageSize = params.limit;
			}
			if (!this.query.pageIndex) {
				this.query.pageIndex = 1;
			}
			if (!this.query.pageSize) {
				this.query.pageSize = fData.pageSize;
			}
			var post = {};
			this.$.extend(post, this.query);
			post.agencyId = this.checkAgenId(post.agencyId);
			agencyqueSys(post).then(res => {
				if (res.success) {
					this.pageTotal = res.data.count || 0;
					this.systemConf = res.data.systemConf;
                    this.iscontrolKill = this.systemConf.controlKill===1;
                    this.tableData = res.data.controlKillUsers || [];
                    
					console.log(res, 'ressssss');
				} else {
					this.$message.error(res.message);
				}
			});
        },
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        handleEdit() {
            this.systemConf.winRatioStart*=1
            this.systemConf.winRatioEnd*=1
            this.systemConf.controlKill = this.iscontrolKill?1:2;
            // if(this.systemConf.winRatioStart>this.systemConf.winRatioEnd){
            //     return this.$message.error('盈利起比例不能大于盈利止比例！')
            // }
            if(this.systemConf.winRatioStart<5||this.systemConf.winRatioStart>25){
                return this.$message.error('保底盈利比例在5~25之间！')
            }
            // if(this.systemConf.winRatioEnd<5||this.systemConf.winRatioEnd>25){
            //     return this.$message.error('盈利止比例在5~25之间！')
            // }
            
            agencySysConf(this.systemConf).then(res => {
                if(res.success){
                    this.$message.success(this.$t('common.success'))
                    this.getData()
                }else{
                    this.$message.error(res.message)
                }
            })

        },
        reset(){
            this.query = {
                agencyId: sessionStorage.getItem('agenId'),
				pageIndex: 1,
				pageSize: fData.pageSize
            }
        },
        handleDel(index,row){
            this.$confirm(this.$t('common.trueStrmem'), this.$t('common.prompt'), {
                type: 'warning'
            }).then(() => {
                    delKillUser({id:row.id*1}).then(res=>{
                        if(res.success){
                            this.$message.success(this.$t('common.success'))
                            this.tableData.splice(index,1)
                        }else{
                            this.$message.error(res.message)
                        }
                    })
                })
                .catch(() => {});
        },
        addMem(){
            this.editVisible = true;
            this.ruleForm = {
				memAct: ''
            }
        },
        saveEdit(formName){
            if(this.checkedArr.length<1){
                return this.$message.error('添加控杀会员账号不能为空')
            }
            if(this.checkedArr.length>1){
                return this.$message.error('添加控杀会员只能选择一个')
            }
            addKillUser({userId:this.checkedArr[0]}).then(res => {
                if(res.success){
                    this.resetEdit()
                    this.$message.success(this.$t('common.success'))
                    this.getData()
                }else{
                    this.$message.error(res.message)
                }
            })
                
        },
        resetEdit(formName){
           this.editVisible = false;
           this.checkedArr = []
           this.multipleSelection = []
           this.$refs.multipleTables.clearSelection();
        },
        // 会员管理列表
        getDatas(params) {
            if (params) {
				this.querys.pageIndex = params.page;
				this.querys.pageSize = params.limit;
			}else{
                this.querys.pageIndex = 1
            }
            var post = {
                pageIndex: 1,
                pageSize: fData.pageSize,
                status: 0,
                account: this.ruleForm.memAct,
                isOnline: 0,
                agencyId: ""
            };
            this.$.extend(post, this.querys);
            userList(post).then(res =>{
                if(res.success){
                    this.tableDatas = res.data.data;
                    this.pageTotals = res.data.count || 0;
                }else{
                    this.$message.error(res.message)
                }
            });
            
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
            var checkedArr = []
            val.map(({id}) => {
                 checkedArr.push(id)
            })
            this.checkedArr = checkedArr
        },
        
	}
};
</script>
