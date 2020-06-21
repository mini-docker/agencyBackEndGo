<template>
	<div class="lineList">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i>  -->
                {{ $t('common.lineMant') }} </el-breadcrumb-item>
				<el-breadcrumb-item> 
                    <!-- <i class="el-icon-lx-people"></i>  -->
                {{ $t('common.lineList') }} </el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<div class="pk-inp-box time-d-width">
					<label>{{ $t('common.addTime') }}:</label>
					<el-date-picker
						v-model="query.addTime"
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
				</div>
				<div class="fl">
					<el-button type="primary" icon="el-icon-search" @click="handleSearch">{{
						$t('common.search')
					}}</el-button>
					<el-button @click="reset">{{ $t('common.reset') }}</el-button>
				</div>
				<div class="clearboth"></div>
			</div>
			<el-table :data="tableData2" style="width: 100%">
				<el-table-column type="expand">
					<template slot-scope="props">
                        <div class="handle-box" v-if="props.row.childrens&&props.row.childrens.length>0">
                            <el-button type="primary" plain @click="exportExcel(props.row)">{{ $t('common.exportExcel') }}</el-button>
                        </div>
                        <el-table :data="props.row.childrens || []" border class="table" header-cell-class-name="table-header">
                            <!-- <el-table-column type="expand">
                                <template slot-scope="props">
                                    <div class="handle-box" v-if="props.row.childrens&&props.row.childrens.length>0">
                                        <el-button type="primary" plain @click="exportExcel(props.row)">{{ $t('common.exportExcel') }}</el-button>
                                    </div>
                                    <el-table :data="props.row.childrens || []" border class="table" header-cell-class-name="table-header">
                                        <el-table-column prop="id" :label="$t('common.agencyName')" width="75" align="center"></el-table-column>
                                        <el-table-column prop="name" :label="$t('common.nnredGprofit')" align="center"></el-table-column>
                                        <el-table-column prop="name" :label="$t('common.slredGprofit')" align="center"></el-table-column>
                                    </el-table>
                                </template>
                            </el-table-column> -->
                            <el-table-column prop="id" :label="$t('common.agencyName')" width="75" align="center"></el-table-column>
                            <el-table-column prop="name" :label="$t('common.nnredGprofit')" align="center"></el-table-column>
                            <el-table-column prop="name" :label="$t('common.slredGprofit')" align="center"></el-table-column>
                        </el-table>
					</template>
				</el-table-column>
				<el-table-column :label="$t('common.lineId')" prop="id"> </el-table-column>
				<el-table-column :label="$t('common.nnredGprofit')" prop="name"> </el-table-column>
				<el-table-column :label="$t('common.slredGprofit')" prop="desc"> </el-table-column>
			</el-table>

			<div class="handle-box">
				<p class="color666">{{ $t('common.lineCommStr') }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { getDate,Timestamp} from '@/filter.js';
import { json } from '../privilege/demo.js';
export default {
	name: 'LineComm',
	data() {
		return {
			query: {
				pageIndex: 1,
				pageSize: fData.pageSize,
				addTime: '',
				startTime: 0,
				endTime: 0
			},
			pageTotal: 0,
			formStatus: 1, //1添加 2修改
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now() + 5.64e7; //如果没有后面的-8.64e6就是不可以选择今天的
					//   return time.getTime() < Date.now() - 8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
            tableData2: []
		};
	},
	created() {
        // this.getData();
        console.log(json, 'json');
        this.tableData2 = json.data;
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
		reset() {
			this.query = {
				pageIndex: 1,
				pageSize: fData.pageSize,
				addTime: '',
				startTime: 0,
				endTime: 0
			};
		},
		exportExcel(row) {
            console.log(row,'row')
			this.$confirm(this.$t('common.lineComExpStr'), this.$t('common.prompt'), {
				type: 'warning'
			})
				.then(() => {
					this.$message.success(this.$t('common.success'));
				})
				.catch(() => {
                    console.log('777778888')
                });
		}
	}
};
</script>
<style>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>