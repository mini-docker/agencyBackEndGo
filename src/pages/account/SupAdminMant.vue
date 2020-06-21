<template>
    <div class="role allHeight">
        <div class="crumbs">
            <el-breadcrumb  separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>
                    <!-- <i class="el-icon-lx-people"></i>  -->
                    {{$t('common.actMant')}}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{$t('common.supMMant')}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <div class="pk-inp-box pk-select">
                    <label>{{$t('common.line')}}:</label>
                    <el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
                        <el-option
                            v-for="(item) in fData.statusOptions"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
                </div>
                <div class="pk-inp-box pk-select">
                    <label>{{$t('common.onlineStatus')}}:</label>
                    <el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
                        <el-option
                            v-for="(item) in fData.memAgencOp"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
                </div>
                <div class="pk-inp-box">
                    <label>{{$t('common.act')}}:</label>
                    <el-input v-model="query.name" :placeholder="$t('common.p_act')" class="selbox"></el-input>
                </div>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{$t('common.search')}}</el-button>
                <el-button @click="reset">{{$t('common.reset')}}</el-button>
                <el-button type="primary" icon="el-icon-lx-add" @click="handleEdit(1)">{{$t('common.add')}}</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                :height="fData.tHBatchOne()"
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" :label="$t('common.line')" align="center"></el-table-column>
                <el-table-column prop="address" :label="$t('common.act')" align="center"></el-table-column>
                <el-table-column prop="state" :label="$t('common.isOnline')" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='在线'?'success':(scope.row.state==='离线'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="state" :label="$t('common.status')" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='启用'?'success':(scope.row.state==='停用'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="date" :label="$t('common.addTime')" align="center" width="150"></el-table-column>
                <el-table-column prop="date" :label="$t('common.modifyTime')" align="center" width="150"></el-table-column>

                <el-table-column :label="$t('common.operating')" width="230" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(2,scope.$index, scope.row)"
                        >{{$t('common.modify')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination" v-show="pageTotal>0">
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
				<el-form-item :label="$t('common.selLine')" prop="name">
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
                        <el-option
                            v-for="(item) in fData.statusOptions"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
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
                <el-form-item :label="$t('common.status')" prop="name">
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
                        <el-option
                            v-for="(item) in fData.statusOptions"
                            :key="item.key"
                            :label="item.value"
                            :value="item.key">
                        </el-option>
                    </el-select>
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
export default {
    name: 'basetable',
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
                pageSize: fData.pageSize
            },
            tableData: [],
            editVisible: false,
            pageTotal: 0,
            fData: fData,
            ruleForm: {
				formTitle: '', //模态框title
				name: '',
                address: '',
                address2: '',
                pass: '',
                checkPass: '',
			},
            formStatus: 1,
            // rules: {
            //     name: [
			// 		{ required: true, message: this.$t('common.p_mName'), trigger: 'blur' },
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
            // }
        };
    },
    created() {
        this.getData();
    },
    methods: {
        
        getData() {
            fetchData(this.query).then(res => {
                console.log(res,'resssss');
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 编辑操作
        handleEdit(status, index, row) {
            this.formStatus=status
            if(status===2){
                this.idx = index;
                this.ruleForm = this.$.extend(this.ruleForm,row);
                this.ruleForm.formTitle = this.$t('common.modify')+this.$t('common.superAct');
                this.editVisible = true;
            }else if(status===1){
                this.editVisible = true;
                this.ruleForm = {
                    formTitle: this.$t('common.add')+this.$t('common.superAct'),
                    name: '',
                    address: ''
                }
            }
        },
        // 保存编辑
        saveEdit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.editVisible = false;
                    if(this.formStatus===2){
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
           this.editVisible = false
           this.$refs[formName].resetFields();
        }, 
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
        reset(){
            
            this.query = {
                status: '', //value值
                name: '',
                pageIndex: 1,
                pageSize: fData.pageSize
            }
        }
    }
};
</script>
