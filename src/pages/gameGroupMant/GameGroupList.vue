<!-- 
Todo
各个红包添加时的选项

接龙红包：       牛牛红包：          扫雷：             骰子：
群名称            群名称	       群名称                 群名称           bbbbdbbbb   
游戏             游戏	          游戏                   游戏              bbbbbdbbb    
群属性           群属性	           群属性                 群属性             bbbbdbbbb   
站点名称         站点名称	        站点名称               红包最小金额         bbbdbbbbb  
发包金额         红包最小金额	     红包最小金额           红包最大金额         bbdbbbbbb 
发红包个数       红包最大金额	     红包最大金额            红包最小个数         bdbbbbbbb
抽水比例         红包最小个数	     发红包个数             红包最大个数         bbdbbbbbb 
游戏时间         红包最大个数	     赔率                  抽水比例            bbbdbbbbb  
               抽水比例	           抽水比例               游戏时间           bbbbdbbbb   
               游戏时间	           游戏时间                        			bbbbdbbbb   
               是否启用免死	        是否启用免死号                   		  bbdbbbbbb 


-->
<template>
	<div class="lineList allHeight">
		<div class="crumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.gameGroupMant') }}
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<!-- <i class="el-icon-lx-people"></i>  -->
					{{ $t('common.gameGroupList') }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="search-box">
				<!-- <div class="pk-inp-box time-d-width">
					<label>{{ $t('common.dataSel') }}:</label>
					<el-date-picker
						v-model="query.addTime"
						type="datetimerange"
						align="right"
						:start-placeholder="$t('common.startTime')"
						:end-placeholder="$t('common.endTime')"
						format="yyyy-MM-dd HH:mm:ss"
						value-format="timestamp"
						:default-time="['00:00:00', '23:59:59']"
					>
					</el-date-picker>
				</div> -->
                <div class="pk-inp-box pk-select" v-if="token.isAdmin === 1">
					<label>{{ $t('common.siteId') }}:</label>
                    <el-select filterable v-model="query.agencyId" :placeholder="$t('common.all')" class="selbox pull-width">
                        <el-option
                            v-for="(item) in agenListpro"
                            :key="item.account" :label="item.account" :value="item.account">
                        </el-option>
                    </el-select>
                </div>
				<div class="pk-inp-box pk-select">
					<label>{{ $t('common.gstatus') }}:</label>
					<el-select v-model="query.status" :placeholder="$t('common.all')" class="selbox">
						<el-option v-for="item in fData.statusOptions" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
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
			<div class="handle-box pk-important-text-tip">
				<p>{{ $t('common.ggStr') }}</p>
			</div>
			<div class="handle-box">
				<el-tabs v-model="activeName" type="card" @tab-click="getData" class="pull-width">
					<el-tab-pane v-for="item in gameNameOppro" :label="item.value" :key="item.key" :name="item.value">
						<div v-show="item.key === 1||item.key === 3||item.key === 4">
							<el-table
								fixed
                                :height="tableHeight"
								:data="tableData"
								border
								class="table"
								ref="multipleTables"
								header-cell-class-name="table-header"
							>
                                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
								<el-table-column
									prop="roomName"
									:label="$t('common.groupName')"
									width="75"
									align="center"
								></el-table-column>
								<el-table-column prop="gameType" :label="$t('common.game')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameType | filtergameTypes }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomNo" :label="$t('common.gId')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomNo }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomType" :label="$t('common.gType')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomType | filterRoomType }}</span>
									</template>
								</el-table-column>
								<!-- <el-table-column prop="gamePlay" :label="$t('common.playMethods')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gamePlay | filterRedPlayType }}</span>
									</template>
								</el-table-column> -->
								<el-table-column prop="minMoney" :label="$t('common.redEnvMinAmt')" align="center"></el-table-column>
								<el-table-column prop="maxMoney" :label="$t('common.redEnvMaxAmt')" align="center"></el-table-column>
								<el-table-column prop="redMinNum" :label="$t('common.redMinNum')" align="center"></el-table-column>
								<el-table-column prop="redNum" :label="$t('common.redMaxNum')" align="center"></el-table-column>

								<el-table-column prop="royalty" :label="$t('common.pumpingRatio')" align="center"></el-table-column>
								<!-- <el-table-column prop="royaltyMoney" :label="$t('common.pumpingAmount')" align="center"></el-table-column> -->
								<el-table-column prop="gameTime" :label="$t('common.gameTime')" align="center" width="100">
									<template slot-scope="scope">
										<span>{{ scope.row.gameTime }}{{ $t('common.mintus') }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="freeFromDeath" :label="$t('common.tuDieStatus')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
											v-model="scope.row.isfreeFromDeath"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column prop="robotSendPacket" :label="$t('common.raSendpStatuspro')" align="center" width="230">
									<template slot-scope="scope">
										<div class="flex flex-center">
											<el-switch
												class="dis-block mgr10"
												v-model="scope.row.isrobotSendPacket"
												active-color="#13ce66"
												inactive-color="#ff4949"
												:active-text="$t('common.able')"
												:inactive-text="$t('common.disable')"
												@change="handuseAblepro(scope.$index, scope.row)"
											>
											</el-switch>
											<el-button type="primary" plain @click="handleEdits(scope.$index, scope.row)">{{
												$t('common.configure')
											}}</el-button>
										</div>
									</template>
								</el-table-column>
								<el-table-column prop="robotGrabPacket" :label="$t('common.raQdbStatuspro')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.isrobotGrabPacket"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
                                <!-- <el-table-column prop="controlKill" :label="$t('common.controlKill')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.iscontrolKill"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column> -->
                                
								<!-- <el-table-column prop="createTime" :label="$t('common.addTime')" align="center" width="100">
									<template slot-scope="scope">
										<span>{{ scope.row.createTime | filterDate }}</span>
									</template>
								</el-table-column> -->
								<el-table-column prop="roomSort" :label="$t('common.sortY')" align="center" width="120">
									<template slot-scope="scope">
										<el-input
											class="inputs"
											size="small"
											v-model.number="scope.row.roomSort"
											@change="handleChange(scope.row)"
										></el-input>
									</template>
								</el-table-column>
								<el-table-column prop="statuspro" :label="$t('common.gstatus')" align="center" width="180">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
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
										<el-button type="success" plain @click="redNormalEdit(scope.$index, scope.row)">{{
											$t('common.sendRdd')
										}}</el-button>
										<el-button type="primary" plain @click="handleEdit(2, scope.$index, scope.row)">{{
											$t('common.edit')
										}}</el-button>
										<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{
											$t('common.del')
										}}</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
						<div v-show="item.key === 2">
							<el-table
								fixed
                                :height="tableHeight"
								:data="tableData"
								border
								class="table"
								ref="multipleTable"
								header-cell-class-name="table-header"
							>
                                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
								<el-table-column
									prop="roomName"
									:label="$t('common.groupName')"
									width="75"
									align="center"
								></el-table-column>
								<el-table-column prop="gameType" :label="$t('common.game')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameType | filtergameTypes }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomNo" :label="$t('common.gId')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomNo }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomType" :label="$t('common.gType')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomType | filterRoomType }}</span>
									</template>
								</el-table-column>
								<!-- <el-table-column prop="gamePlay" :label="$t('common.playMethods')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gamePlay | filteroddTypes }}</span>
									</template>
								</el-table-column> -->
								<el-table-column prop="minMoney" :label="$t('common.redEnvMinAmt')" align="center"></el-table-column>
								<el-table-column prop="maxMoney" :label="$t('common.redEnvMaxAmt')" align="center"></el-table-column>
								<!-- <el-table-column prop="redMinNum" :label="$t('common.redMinNum')" align="center"></el-table-column> -->
								<el-table-column prop="redNum" :label="$t('common.numRedEnv')" align="center"></el-table-column>
								<!-- <el-table-column prop="date" :label="$t('common.oddsTypes')" align="center">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.oddsTypes|filteroddTypes}}</span>
                                    </template>
                                </el-table-column> -->
								<!-- <el-table-column prop="date" :label="$t('common.oddsMax')" align="center"></el-table-column> -->
								<el-table-column prop="royalty" :label="$t('common.pumpingRatio')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.royalty }}</span>
									</template>
								</el-table-column>
								<!-- <el-table-column prop="royaltyMoney" :label="$t('common.pumpingAmount')" align="center"></el-table-column> -->

								<el-table-column prop="gameTime" :label="$t('common.gameTime')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameTime }}{{ $t('common.mintus') }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="isfreeFromDeath" :label="$t('common.tuDieStatus')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
											v-model="scope.row.isfreeFromDeath"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column prop="isrobotSendPacket" :label="$t('common.raSendpStatuspro')" align="center" width="230">
									<template slot-scope="scope">
										<div class="flex flex-center">
											<el-switch
												class="dis-block mgr10"
												v-model="scope.row.isrobotSendPacket"
												active-color="#13ce66"
												inactive-color="#ff4949"
												:active-text="$t('common.able')"
												:inactive-text="$t('common.disable')"
												@change="handuseAblepro(scope.$index, scope.row)"
											>
											</el-switch>
											<el-button type="primary" plain @click="handleEdits(scope.$index, scope.row)">{{
												$t('common.configure')
											}}</el-button>
										</div>
									</template>
								</el-table-column>
								<el-table-column prop="isrobotGrabPacket" :label="$t('common.raQdbStatuspro')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.isrobotGrabPacket"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
                                <!-- <el-table-column prop="controlKill" :label="$t('common.controlKill')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.iscontrolKill"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column> -->
								<!-- <el-table-column prop="createTime" :label="$t('common.addTime')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.createTime | filterDate }}</span>
									</template>
								</el-table-column> -->
								<el-table-column prop="roomSort" :label="$t('common.sortY')" align="center" width="120">
									<template slot-scope="scope">
										<el-input
											class="inputs"
											size="small"
											v-model.number="scope.row.roomSort"
											@change="handleChange(scope.row)"
										></el-input>
									</template>
								</el-table-column>
								<el-table-column prop="statuspro" :label="$t('common.gstatus')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
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
										<el-button type="success" plain @click="redNormalEdit(scope.$index, scope.row)">{{
											$t('common.sendRdd')
										}}</el-button>
										<el-button type="primary" plain @click="handleEdit(2, scope.$index, scope.row)">{{
											$t('common.edit')
										}}</el-button>
										<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{
											$t('common.del')
										}}</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
                        <div v-show="item.key === 5">
							<el-table
								fixed
                                :height="tableHeight"
								:data="tableData"
								border
								class="table"
								ref="multipleTables"
								header-cell-class-name="table-header"
							>
                                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
								<el-table-column
									prop="roomName"
									:label="$t('common.groupName')"
									width="75"
									align="center"
								></el-table-column>
								<el-table-column prop="gameType" :label="$t('common.game')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameType | filtergameTypes }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomNo" :label="$t('common.gId')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomNo }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomType" :label="$t('common.gType')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomType | filterRoomType }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="maxMoney" :label="$t('common.redAmts')" align="center"></el-table-column>
								<el-table-column prop="redNum" :label="$t('common.sendGe')" align="center"></el-table-column>
								<el-table-column prop="royalty" :label="$t('common.pumpingRatio')" align="center"></el-table-column>
								<el-table-column prop="gameTime" :label="$t('common.gameTime')" align="center" width="100">
									<template slot-scope="scope">
										<span>{{ scope.row.gameTime }}{{ $t('common.mintus') }}</span>
									</template>
								</el-table-column>
                                <el-table-column prop="roomRule" :label="$t('common.send_method')" align="center" width="100">
									<template slot-scope="scope">
										<span>{{ scope.row.roomRule | filtersendStatusOp }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="robotSendPacket" :label="$t('common.raSendpStatuspro')" align="center" width="230">
									<template slot-scope="scope">
										<div class="flex flex-center">
											<el-switch
												class="dis-block mgr10"
												v-model="scope.row.isrobotSendPacket"
												active-color="#13ce66"
												inactive-color="#ff4949"
												:active-text="$t('common.able')"
												:inactive-text="$t('common.disable')"
												@change="handuseAblepro(scope.$index, scope.row)"
											>
											</el-switch>
											<el-button type="primary" plain @click="handleEdits(scope.$index, scope.row)">{{
												$t('common.configure')
											}}</el-button>
										</div>
									</template>
								</el-table-column>
								<el-table-column prop="robotGrabPacket" :label="$t('common.raQdbStatuspro')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.isrobotGrabPacket"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column prop="roomSort" :label="$t('common.sortY')" align="center" width="120">
									<template slot-scope="scope">
										<el-input
											class="inputs"
											size="small"
											v-model.number="scope.row.roomSort"
											@change="handleChange(scope.row)"
										></el-input>
									</template>
								</el-table-column>
								<el-table-column prop="statuspro" :label="$t('common.gstatus')" align="center" width="180">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
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
										<el-button type="success" plain @click="redNormalEdit(scope.$index, scope.row)">{{
											$t('common.sendRdd')
										}}</el-button>
										<el-button type="primary" plain @click="handleEdit(2, scope.$index, scope.row)">{{
											$t('common.edit')
										}}</el-button>
										<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{
											$t('common.del')
										}}</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
                        <div v-show="item.key === 6">
							<el-table
								fixed
                                :height="tableHeight"
								:data="tableData"
								border
								class="table"
								ref="multipleTable"
								header-cell-class-name="table-header"
							>
                                <el-table-column prop="agencyId" :label="$t('common.siteId')" align="center"></el-table-column>
								<el-table-column
									prop="roomName"
									:label="$t('common.groupName')"
									width="75"
									align="center"
								></el-table-column>
								<el-table-column prop="gameType" :label="$t('common.game')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameType | filtergameTypes }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomNo" :label="$t('common.gId')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomNo }}</span>
									</template>
								</el-table-column>
								<el-table-column prop="roomType" :label="$t('common.gType')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.roomType | filterRoomType }}</span>
									</template>
								</el-table-column>
								
								<!-- <el-table-column prop="maxMoney" :label="$t('common.redAmts')" align="center"></el-table-column>
								<el-table-column prop="redNum" :label="$t('common.sendGe')" align="center"></el-table-column> -->
								<el-table-column prop="minMoney" :label="$t('common.redEnvMinAmt')" align="center"></el-table-column>
								<el-table-column prop="maxMoney" :label="$t('common.redEnvMaxAmt')" align="center"></el-table-column>
								<el-table-column prop="redMinNum" :label="$t('common.redMinNum')" align="center"></el-table-column>
								<el-table-column prop="redNum" :label="$t('common.redMaxNum')" align="center"></el-table-column>
								
								<el-table-column prop="royalty" :label="$t('common.pumpingRatio')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.royalty }}</span>
									</template>
								</el-table-column>

								<el-table-column prop="gameTime" :label="$t('common.gameTime')" align="center">
									<template slot-scope="scope">
										<span>{{ scope.row.gameTime }}{{ $t('common.mintus') }}</span>
									</template>
								</el-table-column>
								
								<el-table-column prop="isrobotSendPacket" :label="$t('common.raSendpStatuspro')" align="center" width="230">
									<template slot-scope="scope">
										<div class="flex flex-center">
											<el-switch
												class="dis-block mgr10"
												v-model="scope.row.isrobotSendPacket"
												active-color="#13ce66"
												inactive-color="#ff4949"
												:active-text="$t('common.able')"
												:inactive-text="$t('common.disable')"
												@change="handuseAblepro(scope.$index, scope.row)"
											>
											</el-switch>
											<el-button type="primary" plain @click="handleEdits(scope.$index, scope.row)">{{
												$t('common.configure')
											}}</el-button>
										</div>
									</template>
								</el-table-column>
								<el-table-column prop="isrobotGrabPacket" :label="$t('common.raQdbStatuspro')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											class="dis-block"
											v-model="scope.row.isrobotGrabPacket"
											active-color="#13ce66"
											inactive-color="#ff4949"
											:active-text="$t('common.able')"
											:inactive-text="$t('common.disable')"
											@change="handuseAblepro(scope.$index, scope.row)"
										>
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column prop="roomSort" :label="$t('common.sortY')" align="center" width="120">
									<template slot-scope="scope">
										<el-input
											class="inputs"
											size="small"
											v-model.number="scope.row.roomSort"
											@change="handleChange(scope.row)"
										></el-input>
									</template>
								</el-table-column>
								<el-table-column prop="statuspro" :label="$t('common.gstatus')" align="center" width="150">
									<template slot-scope="scope">
										<el-switch
											style="display: block;"
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
										<el-button type="success" plain @click="redNormalEdit(scope.$index, scope.row)">{{
											$t('common.sendRdd')
										}}</el-button>
										<el-button type="primary" plain @click="handleEdit(2, scope.$index, scope.row)">{{
											$t('common.edit')
										}}</el-button>
										<el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">{{
											$t('common.del')
										}}</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
						<pagination
							v-show="pageTotal > 0"
							:total="pageTotal"
							:page.sync="query.pageIndex"
							:limit.sync="query.pageSize"
							@pagination="getData"
						/>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<!-- 编辑弹出框 -->
		<!-- 下拉框配置 -->
		<el-dialog :title="ruleForm.formTitle" :visible.sync="editVisible" width="35%" @close="resetEdit('ruleForm')">
			<el-form :model="ruleForm" label-width="130px" :rules="rules" ref="ruleForm">
				<el-form-item :label="$t('common.groupName')" prop="roomName">
					<div class="flex">
						<el-input v-model="ruleForm.roomName" :placeholder="$t('common.groupName')"> </el-input>
						<span class="mgl10 colorfff">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.game')" prop="gameType">
					<div class="flex">
						<el-select
							@change="gameChange"
							v-model="ruleForm.gameType"
							:placeholder="$t('common.all')"
							class="selbox pull-width"
						>
							<el-option v-for="item in gameNameOppro" :key="item.key" :label="item.value" :value="item.key"> </el-option>
						</el-select>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.gType')" prop="roomType">
					<div class="flex">
						<el-select v-model="ruleForm.roomType" :placeholder="$t('common.all')" class="selbox pull-width">
							<el-option v-for="item in fData.roomTypesOps" :key="item.key" :label="item.value" :value="item.key">
							</el-option>
						</el-select>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.siteName')" prop="agencyId" v-show="token.isAdmin === 1">
					<div class="flex">
						<!-- <el-select
							v-model="ruleForm.agencyId"
							:placeholder="$t('common.agenceAct')"
							class="selbox pull-width"
						>
							<el-option v-for="item in agenList" :key="item.account" :label="item.account" :value="item.account">
							</el-option>
						</el-select> -->
						<el-select
							filterable
							v-show="formStatus === 1"
							v-model="ruleForm.agencyId"
							:placeholder="$t('common.siteName')"
							class="selbox pull-width"
						>
							<el-option v-for="item in agenList" :key="item.agencyId" :label="item.account" :value="item.account">
							</el-option>
						</el-select>
						<el-input v-show="formStatus === 2" disabled v-model="ruleForm.agencyId"> </el-input>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>

				<el-form-item v-show="ruleForm.gameType === 1" :label="$t('common.playMethods')" prop="gamePlay">
					<div class="flex">
						<el-select v-model="ruleForm.gamePlay" :placeholder="$t('common.p_sel')" class="selbox pull-width">
							<el-option v-for="item in fData.gameGTypOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
						</el-select>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
                <span v-show="ruleForm.gameType !== 5">
                    <el-form-item :label="$t('common.redEnvMinAmt')" prop="minMoney">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.minMoney" :placeholder="$t('common.redEnvMinAmt')"> </el-input>
                            <span class="mgl10">{{ $t('common.yuan') }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.redEnvMaxAmt')" prop="maxMoney">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.maxMoney" :placeholder="$t('common.redEnvMaxAmt')"> </el-input>
                            <span class="mgl10">{{ $t('common.yuan') }}</span>
                        </div>
                    </el-form-item>
                </span>
                <!-- 接龙红包 -->
                <span v-show="ruleForm.gameType === 5">
                    <el-form-item :label="$t('common.redAmt')" prop="maxMoney">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.maxMoney" :placeholder="$t('common.p_redAmt')"> </el-input>
                            <span class="mgl10">{{ $t('common.yuan') }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.numRedEnv')" prop="redNum">
                        <div class="flex">
                            <el-select v-model.number="ruleForm.redNum" :placeholder="$t('common.p_sel')" class="selbox pull-width">
                                <el-option v-for="item in fData.redNumsArr" :key="item" :label="item" :value="item"> </el-option>
                            </el-select>
                            <span class="mgl10">{{ $t('common.ge') }}</span>
                        </div>
                    </el-form-item>
                </span>
				<!-- 牛牛 骰子系列 -->
				<span v-show="ruleForm.gameType === 1||ruleForm.gameType === 3||ruleForm.gameType === 4||ruleForm.gameType === 6">
					<el-form-item :label="$t('common.redMinNum')" prop="redMinNum">
						<div class="flex">
							<el-input class="redMinNum" v-model="ruleForm.redMinNum" :placeholder="$t('common.redMinNum')">
							</el-input>
							<span class="mgl10">{{ $t('common.ge') }}</span>
						</div>
					</el-form-item>
					<el-form-item :label="$t('common.redMaxNum')" prop="redNum">
						<div class="flex">
							<el-input v-model.number="ruleForm.redNum" :placeholder="$t('common.redMaxNum')"> </el-input>
							<span class="mgl10">{{ $t('common.ge') }}</span>
						</div>
					</el-form-item>
				</span>
                <!-- 骰子红包 -->
                <!-- <span v-show="ruleForm.gameType === 6">
                    <el-form-item :label="$t('common.redAmt')" prop="maxMoney">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.maxMoney" :placeholder="$t('common.p_redAmt')"> </el-input>
                            <span class="mgl10">{{ $t('common.yuan') }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.numRedEnv')" prop="redNum">
                        <div class="flex">
                            <el-select v-model.number="ruleForm.redNum" :placeholder="$t('common.p_sel')" class="selbox pull-width">
                                <el-option v-for="item in fData.redNumsArr" :key="item" :label="item" :value="item"> </el-option>
                            </el-select>
                            <span class="mgl10">{{ $t('common.ge') }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.bigOdds')" prop="big">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.big" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.smallOdds')" prop="small">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.small" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.singleOdds')" prop="single">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.single" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.doubleOdds')" prop="both">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.both" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.straightOdds')" prop="straight">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.straight" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item :label="$t('common.leopardOdds')" prop="leopard">
                        <div class="flex">
                            <el-input v-model.number="ruleForm.leopard" :placeholder="$t('common.p_pl')"> </el-input>
                        </div>
                    </el-form-item>

                </span> -->
				
                <!-- 扫雷系列 -->
				<span v-show="ruleForm.gameType === 2">
					<!-- <el-form-item :label="$t('common.oddsTypes')" prop="gamePlay">
						<div class="flex">
							<el-select
								@change="oddChange"
								v-model="ruleForm.gamePlay"
								:placeholder="$t('common.all')"
								class="selbox pull-width"
							>
								<el-option v-for="item in redOddsOppro" :key="item.key" :label="item.value" :value="item.key"> </el-option>
							</el-select>
							<span class="mgl10 colorfff">&nbsp;&nbsp;&nbsp;</span>
						</div>
					</el-form-item> -->
					<!-- <span v-show="ruleForm.gamePlay === 1"> -->
						<!-- <el-form-item :label="$t('common.odds')" prop="odds">
							<div class="flex">
								<el-input v-model="ruleForm.odds" :placeholder="$t('common.odds')"> </el-input>
								<span class="mgl10 colorfff">&nbsp;&nbsp;&nbsp;</span>
							</div>
						</el-form-item> -->
                        <!-- 红包最小个数 -->
						<!-- <el-form-item :label="$t('common.redMinNum')" prop="redNum">
							<div class="flex">
								<el-select v-model="ruleForm.redMinNum" :placeholder="$t('common.p_sel')" class="selbox pull-width">
									<el-option v-for="item in fData.redNumsArr" :key="item" :label="item" :value="item"> </el-option>
								</el-select>
								<span class="mgl10">{{ $t('common.ge') }}</span>
							</div>
						</el-form-item> -->
                        <!-- 红包最大个数 -->
                        <el-form-item :label="$t('common.numRedEnv')" prop="redNum">
							<div class="flex">
								<el-select @change="oddsAndpros" v-model.number="ruleForm.redNum" :placeholder="$t('common.p_sel')" class="selbox pull-width">
									<el-option v-for="item in fData.redNumsArr" :key="item" :label="item" :value="item"> </el-option>
								</el-select>
								<span class="mgl10">{{ $t('common.ge') }}</span>
							</div>
						</el-form-item>
                        <el-form-item :label="$t('common.odds')" prop="odds">
							<div class="flex">
								<el-input v-model="ruleForm.odds" :placeholder="$t('common.odds')"> </el-input>
								<span class="mgl10 colorfff">&nbsp;&nbsp;&nbsp;</span>
							</div>
						</el-form-item>
					<!-- </span> -->
					<!-- <span v-show="ruleForm.gamePlay === 2">
						<el-form-item :label="$t('common.odds')" prop="odds">
							<div class="flex">
								<el-select
									@change="oddsAnd"
									v-model="ruleForm.odds"
									:placeholder="$t('common.p_sel')"
									class="selbox pull-width"
								>
									<el-option v-for="item in fData.redOddsArr" :key="item" :label="item" :value="item"> </el-option>
								</el-select>
								<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
							</div>
						</el-form-item>
						<el-form-item :label="$t('common.redBagNum')" prop="redNum">
							<div class="flex">
								<el-select
									@change="oddsAndpro"
									v-model="ruleForm.redNum"
									:placeholder="$t('common.p_sel')"
									class="selbox pull-width"
								>
									<el-option v-for="item in fData.redNumsArr" :key="item" :label="item" :value="item"> </el-option>
								</el-select>
								<span class="mgl10">{{ $t('common.ge') }}</span>
							</div>
						</el-form-item>
						<el-form-item label="">
							<span class="red mgr10">{{ $t('common.gameGLstr') }}</span>
                            <el-tooltip placement="top">
								<div slot="content">
									<el-table
										:data="fData.redOddsList"
										border
										class="table"
										ref="redOddsLists"
										header-cell-class-name="table-header"
									>
										<el-table-column prop="key" :label="$t('common.odds')" align="center"></el-table-column>
										<el-table-column prop="value" :label="$t('common.redBagNum')" align="center"></el-table-column>
									</el-table>
								</div>
                                <el-button>?</el-button>
							</el-tooltip>
						</el-form-item>
					</span> -->
				</span>
				<el-form-item :label="$t('common.pumpRatiopro')" prop="royalty">
					<div class="flex">
						<el-input v-model="ruleForm.royalty" :placeholder="$t('common.pumpRatiopro')"> </el-input>
						<span class="mgl10">%</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.gameTime')" prop="gameTime">
					<div class="flex">
						<el-select v-model="ruleForm.gameTime" :placeholder="$t('common.all')" class="selbox pull-width">
							<el-option v-for="item in fData.gameTimeOp" :key="item.key" :label="item.value" :value="item.key"> </el-option>
						</el-select>
						<span class="mgl10">{{ $t('common.ge') }}</span>
					</div>
				</el-form-item>
				<el-form-item v-show="(ruleForm.gameType !== 5&&ruleForm.gameType !== 6)" :label="$t('common.isNoDieNum')" prop="freeFromDeath">
					<div class="flex">
						<el-select v-model="ruleForm.freeFromDeath" :placeholder="$t('common.all')" class="selbox pull-width">
							<el-option v-for="item in fData.freeFromDeathsOps" :key="item.key" :label="item.value" :value="item.key">
							</el-option>
						</el-select>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
                <el-form-item v-show="ruleForm.gameType === 5" :label="$t('common.send_method')" prop="roomRule">
					<el-radio v-for="item in sendStatusOppro" v-model="ruleForm.roomRule" :label="item.key" :key="item.key">{{
						item.value
					}}</el-radio>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetEdit('ruleForm')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveEdit('ruleForm')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>
		<!-- 发红包配置 -->
		<el-dialog :title="$t('common.configure')" :visible.sync="editVisibles" width="30%" @close="resetEdits('ruleForms')">
			<el-form :model="ruleForms" :rules="redConfig" ref="ruleForms">
				<el-form-item :label="$t('common.redConfTit')" prop="robotSendPacketTime">
					<input class="dis-none" type="text" v-model="ruleForms.robotSendPacketTime" />
				</el-form-item>
				<el-form-item label="" prop="robotSendPacketTime">
					<el-select v-model="ruleForms.robotSendPacketTime" :placeholder="$t('common.all')" class="selbox pull-width">
						<el-option v-for="item in fData.redTimeArr" :key="item.key" :label="item.value" :value="item.key"> </el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetEdits('ruleForms')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveEdits('ruleForms')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>
		<!-- 发普通红包 -->
		<el-dialog :title="$t('common.sendNormalRed')" :visible.sync="isnormalRed" width="35%" @close="resetNormal('formNomal')">
			<el-form :model="normalRed" label-width="150px" :rules="sendRedConf" ref="formNomal">
				<el-form-item :label="$t('common.siteName')" prop="agencyId" v-if="token.isAdmin === 1">
					<div class="flex">
						<el-select filterable v-model="normalRed.agencyId" :placeholder="$t('common.agenceAct')" class="selbox pull-width">
							<el-option v-for="item in agenList" :key="item.account" :label="item.account" :value="item.account">
							</el-option>
						</el-select>
						<span class="mgl10">&nbsp;&nbsp;&nbsp;</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.redAmts')" prop="redAmount">
					<div class="flex">
						<el-input v-model.number="normalRed.redAmount" :placeholder="$t('common.redAmts')"> </el-input>
						<span class="mgl10">{{ $t('common.yuan') }}</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.redBagNum')" prop="redNum">
					<div class="flex">
						<el-input v-model.number="normalRed.redNum" :placeholder="$t('common.redBagNum')"> </el-input>
						<span class="mgl10">{{ $t('common.ge') }}</span>
					</div>
				</el-form-item>
				<el-form-item :label="$t('common.redTimeValid')" prop="gameTime">
					<div class="flex">
						<el-input v-model.number="normalRed.gameTime" :placeholder="$t('common.redTimeValid')"> </el-input>
						<span class="mgl10 w40">{{ $t('common.hour') }}</span>
					</div>
				</el-form-item>
				<el-form-item>
					<p class="red">{{ $t('common.redNormalStr') }}</p>
				</el-form-item>
				<el-form-item :label="$t('common.isAutoSendRed')" prop="isAuto">
					<el-radio v-for="item in fData.freeFromDeathsOps" v-model="normalRed.isAuto" :label="item.key" :key="item.key">{{
						item.value
					}}</el-radio>
				</el-form-item>
				<el-form-item v-if="normalRed.isAuto===1" :label="$t('common.setAutoSendTime')" prop="autoTime">
					<el-date-picker
						class="pull-width"
						v-model="normalRed.autoTime"
						type="datetime"
						align="right"
						:placeholder="$t('common.startTime')"
						format="yyyy-MM-dd HH:mm:ss"
						value-format="timestamp"
						:pickerOptions="pickerOptionspro"
						default-time="00:00:00"
					>
					</el-date-picker>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetNormal('formNomal')">{{ $t('common.cancel') }}</el-button>
				<el-button type="primary" @click="saveNormal('formNomal')">{{ $t('common.ok') }}</el-button>
			</span>
		</el-dialog>


	</div>
</template>

<script>
import Pagination from '@/components/common/Pagination';
import fData from '@/app.config';
import { getAgeGList, addAgeG, getAgeGOne, updAgeG, updAgeGStatus, delAgeG, getAgeList, addRed } from '@/api/account';
import { getDate,Timestamp,makeGameType} from '@/filter.js';
const ODDS = 1.6; //固定赔率
let nowDate = Math.round(parseInt(new Date().valueOf()));
export default {
	components: { Pagination },
	data() {
		let MUST = fData.MUST

		let funcAB = (A, B) => {
			if (A > B) {
				this.$refs.ruleForm.validateField('minMoney');
			} else if (A < B) {
				this.$refs.ruleForm.validateField('maxMoney');
			}
		};
		let maxMoney = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.moneyInt1.test(value)) {
				callback(new Error(this.$t('common.moneyInt1Str')));
			} else {
				if (this.ruleForm.minMoney) {
					if (value < this.ruleForm.minMoney) {
						callback(new Error(this.$t('common.moneyMaxMin')));
					}
				}
				callback();
			}
		};
		let minMoney = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.moneyInt1.test(value)) {
				callback(new Error(this.$t('common.moneyInt1Str')));
			} else {
				if (this.ruleForm.maxMoney) {
					if (value > this.ruleForm.maxMoney) {
						callback(new Error(this.$t('common.moneyMinMax')));
					} else if (value < this.ruleForm.maxMoney) {
						funcAB(value, this.ruleForm.maxMoney);
					}
				}
				callback();
			}
		};

		let royalty = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.moneyFee.test(value)) {
				callback(new Error(this.$t('common.moneyFee')));
			} else {
				callback();
			}
		};

		let redNum = (rule, value, callback) => {
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.moneyInt1.test(value)) {
				callback(new Error(this.$t('common.moneyInt1Str')));
			} else {
				if (this.ruleForm.redMinNum) {
					if (value < this.ruleForm.redMinNum) {
						callback(new Error(this.$t('common.redNumMaxMin')));
					} else if (this.ruleForm.redMinNum > value) {
						this.$refs.ruleForm.validateField('redMinNum');
					}
				}
				callback();
			}
		};
		let redMinNum = (rule, value, callback) => {
			if (value === null) return;
			if (value === '') {
				callback(new Error(this.$t('common.mustY')));
			} else if (!fData.moneyInt1.test(value)) {
				callback(new Error(this.$t('common.moneyInt1Str')));
			} else {
				if (this.ruleForm.redNum) {
					if (value > this.ruleForm.redNum) {
						callback(new Error(this.$t('common.redNumMinMax')));
					}
					// else if(value<this.ruleForm.redNum){
					//     this.$refs.ruleForm.validateField('redNum');
					// }
				}
				callback();
			}
        };
        let maxMoneys = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: maxMoney, trigger: 'blur' }];
        let minMoneys = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: minMoney, trigger: 'blur' }];
        let royaltys = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: royalty, trigger: 'blur' }];
        let redNums = [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: redNum, trigger: 'blur' }];
		return {
			query: {
				pageIndex: 1,
				pageSize: fData.pageSize,
                addTime: '',
                agencyId: '',
				startTime: 0,
				endTime: 0,
				status: 0,
				gameType: 1
			},
            szOdds:{
                "big":1,     	 // 大
                "small":1,   	 //小
                "single":1,   	// 单
                "both":1,    	// 双
            //     "straight":5, 	// 顺子
            //     "leopard":10 	// 豹子
            },
			startTime: getDate().today.start * 1000,
			endTime: getDate().today.end * 1000,
			agenList: [],
			token: JSON.parse(decodeURIComponent(sessionStorage.getItem('token'))),
			tableData: [],
			pageTotal: 0,
			formStatus: 1, //1添加 2修改
			editVisible: false,
			editVisibles: false,
			isnormalRed: false,
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() < Date.now() - 10.64e6; //如果没有后面的-8.64e6就是不可以选择今天的
				}
			},
			pickerOptionspro: {
				disabledDate(time) {
					return time.getTime() < nowDate;
				}
			},
			formTitles: this.$t('common.sendRedConfig'),
            fData: fData,
            token: fData.token(),
			gameNameOppro: [],
            redOddsOppro: [],
            agenListpro: [],
			ruleForm: {
				formTitle: '', //模态框title
				roomName: '',
				gameType: 2, //1牛牛 2扫雷
				maxMoney: '',
				minMoney: '',
				gamePlay: 1,
				odds: '1.6',
				royalty: '',
				gameTime: 1,
				redMinNum: '',
				redNum: '',
				roomType: 1,
				freeFromDeath: 1,
                agencyId: '',
                redAmount: '',
                roomRule: 1,
                // 骰子
                big: 1,     	 // 大
                small: 1,   	 //小
                single: 1,   	// 单
                both: 1,    	// 双
                straight: 5, 	// 顺子
                leopard: 10	// 豹子
			},
			ruleForms: {
				formTitles: this.$t('common.sendRedConfig'),
                robotSendPacketTime: 1,
                redMinNum: 0,
				agencyId: ''
			},
			roomId: null,
			normalRed: {
				redAmount: '',
				redNum: '',
				roomId: '',
				isAuto: 1,
				autoTime: getDate().today.start * 1000,
				gameTime: '',
				agencyId: ''
			},
			maxMoney: maxMoney,
            minMoney: minMoney,
            maxMoneys: maxMoneys,
            minMoneys: minMoneys,
			royaltys: royaltys,
            royalty: royalty,
			redNum: redNum,
			redMinNum: redMinNum,
            redNums: redNums,
			rules: {
                roomName: null,
				// roomName: [
				// 	{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
				// 	{ validator: fData.gNameValid, trigger: 'blur' }
                // ],
                // redAmount: [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }],
				roomType: MUST,
				freeFromDeath: MUST,
				gameType: MUST,
				// gamePlay: MUST,
				maxMoney: maxMoneys,
				minMoney: minMoneys,
				odds: MUST,
				royalty: [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: royalty, trigger: 'blur' }],
				gameTime: MUST,
				redMinNum: null,
				redNum: [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: redNum, trigger: 'blur' }],
				status: MUST,
                agencyId: MUST,
                roomRule: MUST,
                // big: [{ required: true, message: this.$t('common.mustY'), trigger: 'blur' }, { validator: royalty, trigger: 'blur' }],
                // small: royaltys,
                // single: royaltys,
                // both: royaltys,
                // straight: royaltys,
                // leopard: royaltys,
			},
			redConfig: {
				robotSendPacketTime: MUST,
				agencyId: MUST
			},
			sendRedConf: {
				redAmount: [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }],
				redNum: [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }],
				isAuto: MUST,
				autoTime: MUST,
				gameTime: [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }],
				agencyId: MUST
			},
			ids: '',
			values: '',
			statusOptionspro: [],
            activeName: this.$t('common.slred'),
            tableHeight: fData.tHBatchOne(),
            sendStatusOppro: [],
		};
	},
	created() {
		this.getData();
        this.makeOp();
	},
	mounted() {
		if (this.token.isAdmin === 1) {
			this.getAenList();
		}
		if (this.token.isAdmin !== 1) {
			this.rules.agencyId = null;
			this.redConfig.agencyId = null;
			this.sendRedConf.agencyId = null;
        }
	},
	watch: {
		'ruleForm.gameType': function(val) {
			// if (val === 1) {
			// 	//牛牛
			// 	this.rules.redMinNum = [
			// 		{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
			// 		{ validator: this.redMinNum, trigger: 'blur' }
			// 	];
			// } else if (val === 2) {
			// 	//扫雷
			// 	// this.ruleForm.redMinNum = null;
			// 	this.rules.redMinNum = null;
            // }
            this.transferGameTypeValid(val);
        },
	},
	methods: {
		makeOp() {
			this.$.extend(this.gameNameOppro, this.fData.gameNameOp);
            this.gameNameOppro.shift();
            this.gameNameOppro.pop();
            // this.gameNameOppro.splice(2,1)
			this.$.extend(this.redOddsOppro, this.fData.redOddsOp);
			this.redOddsOppro.shift();
			this.statusOptionspro = this.$.extend(this.statusOptionspro, this.fData.statusOptions);
            this.statusOptionspro.shift();
            
            this.$.extend(this.sendStatusOppro, this.fData.sendStatusOp)
            this.sendStatusOppro.shift();

		},
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
		checkAgenId(account) {
			let a;
			this.agenList.map(v => {
				if (v.account == account) {
					a = v.agencyId;
				}
			});
			return a;
		},
		getData(params) {
			if (params) {
				this.query.pageIndex = params.page;
				this.query.pageSize = params.limit;
			}
            this.query.gameType = makeGameType(this.activeName)
            if(!this.query.pageIndex){
                this.query.pageIndex = 1
            }
            if(!this.query.pageSize){
                this.query.pageSize = fData.pageSize
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
            
            post.gameType *= 1;
            post.agencyId = this.checkAgenId(post.agencyId)
			getAgeGList(post).then(res => {
				if (res.success) {
					console.log(res, 'resssss');
					this.tableData = res.data.data;
					this.pageTotal = res.data.count || 0;
					this.tableData.map(v => {
						v.statuspro = v.status === 1;
						v.isfreeFromDeath = v.freeFromDeath === 1;
						v.isrobotSendPacket = v.robotSendPacket === 1;
                        v.isrobotGrabPacket = v.robotGrabPacket === 1;
                        // v.iscontrolKill = v.controlKill === 1;
					});
				} else {
					this.$message.error(res.message);
				}
			});
		},
		handuseAble(index, row) {
			let post = {};
			this.$.extend(post, row);
			post.status = row.statuspro === true ? 1 : 2;
			updAgeGStatus(post).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					row.statuspro = row.status === 1;
					this.$message.error(res.message);
				}
			});
		},
		handuseAblepro(index, row) {
			let post = {};
            this.$.extend(post, row);
            this.fixMsg(post,2);
            console.log(row,'row')
            
			post.freeFromDeath = row.isfreeFromDeath === true ? 1 : 2;
			post.robotSendPacket = row.isrobotSendPacket === true ? 1 : 2;
			post.robotGrabPacket = row.isrobotGrabPacket === true ? 1 : 2;
			// post.controlKill = row.iscontrolKill === true ? 1 : 2;
			updAgeG(post).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					row.isfreeFromDeath = row.freeFromDeath === 1;
					row.isrobotSendPacket = row.robotSendPacket === 1;
					row.isrobotGrabPacket = row.robotGrabPacket === 1;
					// row.iscontrolKill = row.controlKill === 1;
					this.$message.error(res.message);
				}
			});
		},

		// 触发搜索按钮
		handleSearch() {
			this.$set(this.query, 'pageIndex', 1);
			this.getData();
		},
		handleChange(row) {
			let post = {};
			this.$.extend(post, row);
			if (post.roomSort == '') {
				post.roomSort = 0;
			}
			this.fixMsg(post,2);
			updAgeG(post).then(res => {
				if (res.success) {
					this.$message.success(this.$t('common.success'));
					this.getData();
				} else {
					this.$message.error(res.message);
				}
			});
			
		},
		// 发普通红包
		redNormalEdit(index, row) {
			this.roomId = row.id;
			this.isnormalRed = true;
			this.initNormalData();
		},
		fixMsg(post,status) {
			post.maxMoney = post.maxMoney + '';
			post.minMoney = post.minMoney + '';
			post.odds = post.odds + '';
			post.royalty = post.royalty + '';
            post.redNum = post.redNum * 1;
            if(status==2){
                post.redMinNum*=1
            }else{
                let valMinred = this.$('.redMinNum input').val();
                post.redMinNum = valMinred * 1;
            }
            console.log(post,'postsssss')
		},
		handleEdit(status, index, row) {
			this.formStatus = status;
			// 当已选中牛牛扫雷选项直接进入弹窗页面时
			let gameType = this.ruleForm.gameType;
			// if (gameType === 1) {
			// 	//牛牛
			// 	this.rules.redMinNum = [
			// 		{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
			// 		{ validator: this.redMinNum, trigger: 'blur' }
			// 	];
			// } else if (gameType === 2) {
			// 	//扫雷
			// 	// this.ruleForm.redMinNum = null;
			// 	this.rules.redMinNum = null;
			// 	console.log(this.rules, 'this.rules', gameType);
            // }
            // console.log(gameType,'valssss')
            this.transferGameTypeValid(gameType)
			console.log(this.rules, 'this.rules', gameType);
			this.editVisible = true;
			if (status === 2) {
				this.idx = index;
				// this.ruleForm = this.$.extend(this.ruleForm, row);
				getAgeGOne({ id: row.id }).then(res => {
					if (res.success) {
						this.$.extend(this.ruleForm, res.data);
                        console.log(this.ruleForm.moreOdds,'this.ruleForm.moreOdds')

                        // if(this.ruleForm.gameType===6){
                        //     this.ruleForm.moreOdds = this.ruleForm.moreOdds&&JSON.parse(this.ruleForm.moreOdds)
                        //     console.log(typeof(this.ruleForm.moreOdds),'this.ruleForm.moreOdds')
                        //     if(typeof(this.ruleForm.moreOdds)==='object'){
                        //         this.ruleForm.big = this.ruleForm.moreOdds.big;
                        //         this.ruleForm.small = this.ruleForm.moreOdds.small;
                        //         this.ruleForm.single = this.ruleForm.moreOdds.single;
                        //         this.ruleForm.both = this.ruleForm.moreOdds.both;
                        //         this.ruleForm.straight = this.ruleForm.moreOdds.straight;
                        //         this.ruleForm.leopard = this.ruleForm.moreOdds.leopard;
                        //     }
                        // }
                        console.log(this.ruleForm,'this.ruleForm')
						this.ruleForm.formTitle = this.$t('common.modify') + this.$t('common.gameGroup');
					} else {
						this.$message.error(res.message);
					}
				});
			} else if (status === 1) {
				this.initFormData();
			}
        },
        transferGameTypeValid(val){
            if (val === 1||val === 3||val === 4) {
				//牛牛
				this.rules.redMinNum = [
					{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
					{ validator: this.redMinNum, trigger: 'blur' }
                ];
                this.rules.roomRule = null;
                
                this.rules.maxMoney = this.maxMoneys;
				this.rules.minMoney = this.minMoneys;
                this.rules.odds = null;
                this.rules.freeFromDeath = fData.MUST;
                
                // this.rules.big = null;
                this.rules.small = null;
                this.rules.single = null;
                this.rules.both = null;
                // this.rules.straight = null;
                // this.rules.leopard = null;
			} else if (val === 2) {
				//扫雷
				this.$('.redMinNum input').val(null);
                this.rules.redMinNum = null;
                this.rules.roomRule = null;
                this.rules.odds = fData.MUST;
                this.rules.maxMoney = this.maxMoneys;
				this.rules.minMoney = this.minMoneys;

                this.rules.freeFromDeath = fData.MUST;
                // this.rules.big = null;
                // this.rules.small = null;
                // this.rules.single = null;
                // this.rules.both = null;
                // this.rules.straight = null;
                // this.rules.leopard = null;
			}else if (val === 5) {
                this.$('.redMinNum input').val(null);
                this.rules.redMinNum = null;
                this.rules.roomRule = fData.MUST;
                this.rules.maxMoney = [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }];
                this.rules.minMoney = null;
                this.rules.odds = null;
                this.rules.freeFromDeath = null;
                // this.rules.redAmount = [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }];
                // this.rules.small = null;
                // this.rules.single = null;
                // this.rules.both = null;
                // this.rules.straight = null;
                // this.rules.leopard = null;
            }
            else if (val === 6) {
                // this.rules.big = this.royaltys;
                // this.rules.small = this.royaltys;
                // this.rules.single = this.royaltys;
                // this.rules.both = this.royaltys;
                // this.rules.straight = this.royaltys;
				// this.rules.leopard = this.royaltys;
                // this.rules.maxMoney = [{ required: true, message: this.$t('common.mustY') }, { type: 'number', message: this.$t('common.mustNum') }];
				this.rules.maxMoney = this.maxMoneys;
				this.rules.minMoney = this.minMoneys;
				this.rules.redMinNum = [
					{ required: true, message: this.$t('common.mustY'), trigger: 'blur' },
					{ validator: this.redMinNum, trigger: 'blur' }
                ];

                this.rules.roomRule = null;
                // this.rules.redMinNum = null;
                // this.rules.minMoney = null;

            }
            // console.log(this.ruleForm,'看看ruleForm',this.rules)
        },
		handleEdits(index, row) {
			getAgeGOne({ id: row.id }).then(res => {
				if (res.success) {
					console.log(res, 'resssss');
					this.ruleForms = res.data;
					this.ruleForms.robotSendPacketTime =
						this.ruleForms.robotSendPacketTime === 0 ? fData.redTimeArr[0].key : this.ruleForms.robotSendPacketTime;
					this.editVisibles = true;
					console.log(this.ruleForms,'this.ruleForms')
				} else {
					this.$message.error(res.message);
				}
			});
		},
		initFormData(status) {
			this.ruleForm = {
				formTitle: this.$t('common.add') + this.$t('common.gameGroup'),
				roomName: '',
				gameType: 2, //1牛牛 2扫雷
				maxMoney: '',
				minMoney: '',
				gamePlay: 1,
				odds: '1.6',
				redNum: '',
                royalty: '',
                redMinNum: '',
				gameTime: 1,
				roomType: 1,
                freeFromDeath: 1,
                roomRule: 1,
                // 骰子
                big: 1,     	 // 大
                small: 1,   	 //小
                single: 1,   	// 单
                both: 1,    	// 双
                straight: 5, 	// 顺子
                leopard: 10,	// 豹子
				agencyId: this.token.isAdmin === 1 ? this.agenList[0].account : null
			};
		},
		initFormDatas() {
			this.ruleForms.robotSendPacketTime = 1;
			this.ruleForms.agencyId = this.token.isAdmin === 1 ? this.agenList[0].account : null;
		},
		initNormalData() {
			this.normalRed = {
				redAmount: '',
				redNum: '',
				roomId: '',
				isAuto: 1,
				autoTime: Math.round(parseInt(new Date().valueOf())),
				gameTime: '',
				agencyId: this.token.isAdmin === 1 ? this.agenList[0].account : null
			};
		},
		// 保存编辑 
		saveEdit(formName) {
			if (this.ruleForm.redMinNum === 0) {
				this.ruleForm.redMinNum = null;
            }
            if(this.ruleForm.gameType==2&&this.ruleForm.gamePlay==1 &&this.ruleForm.redMinNum>=this.ruleForm.redNum){
                this.$message.error(this.$t('最小红包个数不能大于或等于最大红包个数！'))
                return
            }
            // if(this.ruleForm.gameType==6){
            //     console.log(this.ruleForm)
            //     if(this.ruleForm.big==''){
            //         return this.$message.error(this.$t('大赔率必填'))
            //     }else if(this.ruleForm.small==''){
            //         return this.$message.error(this.$t('小赔率必填'))
            //     }else if(this.ruleForm.single==''){
            //         return this.$message.error(this.$t('单赔率必填'))
            //     }else if(this.ruleForm.both==''){
            //         return this.$message.error(this.$t('双赔率必填'))
			// 	}
			// 	else if(this.ruleForm.straight==''){
            //         return this.$message.error(this.$t('顺子赔率必填'))
			// 	}
			// 	else if(this.ruleForm.leopard==''){
            //         return this.$message.error(this.$t('豹子赔率必填'))
            //     }
            //     let moneyFee = this.fData.moneyFee
            //     if(!moneyFee.test(this.ruleForm.big)){
            //         return this.$message.error('大赔率'+this.$t('common.moneyFee'))
            //     }else if(!moneyFee.test(this.ruleForm.small)){
            //         return this.$message.error('小赔率'+this.$t('common.moneyFee'))
            //     }else if(!moneyFee.test(this.ruleForm.single)){
            //         return this.$message.error('单赔率'+this.$t('common.moneyFee'))
            //     }else if(!moneyFee.test(this.ruleForm.both)){
            //         return this.$message.error('双赔率'+this.$t('common.moneyFee'))
			// 	}
			// 	else if(!moneyFee.test(this.ruleForm.straight)){
            //         return this.$message.error('顺子赔率'+this.$t('common.moneyFee'))
			// 	}
			// 	else if(!moneyFee.test(this.ruleForm.leopard)){
            //         return this.$message.error('豹子赔率'+this.$t('common.moneyFee'))
            //     }
            //     this.ruleForm.moreOdds={
            //         big: this.ruleForm.big,     	 // 大
            //         small: this.ruleForm.small,   	 //小
            //         single: this.ruleForm.single,   	// 单
            //         both: this.ruleForm.both,    	// 双
            //         straight: this.ruleForm.straight, 	// 顺子
            //         leopard: this.ruleForm.leopard 	// 豹子
            //     }
            //     this.ruleForm.moreOdds = JSON.stringify(this.ruleForm.moreOdds)
            // }
            console.log(this.ruleForm,'ruleFormsss')
			this.$refs[formName].validate((valid, obj) => {
				console.log(valid, 'valid', obj);
				if (valid) {
					let func;
					let post = {};
					this.$.extend(post, this.ruleForm);
					post.maxMoney = post.maxMoney + '';
					post.minMoney = post.minMoney + '';
					post.odds = post.odds + '';
					post.royalty = post.royalty + '';
					post.redNum = post.redNum * 1;
					console.log(post.agencyId, 'post.agencyId');
					if (this.formStatus === 2) {
						func = updAgeG;
					} else {
						func = addAgeG;
						post.agencyId = this.checkAgenId(post.agencyId);
					}
					let valMinred = this.$('.redMinNum input').val();
					post.redMinNum = valMinred * 1;
                    console.log(post, 'post', this.ruleForm);
                    console.log(post.gamePlay,'postgamePlay')
					func(post).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.success'));
							this.resetEdit(formName);
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
		saveEdits(formName) {
			console.log(this.ruleForms, 'this.ruleForms');
			this.$refs[formName].validate(valid => {
				if (valid) {
					let post = {};
					this.$.extend(post, this.ruleForms);
					console.log(post, 'post');
					post.maxMoney = post.maxMoney + '';
					post.minMoney = post.minMoney + '';
					post.odds = post.odds + '';
					post.royalty = post.royalty + '';
					post.redNum = post.redNum * 1;
					post.redMinNum = post.redMinNum * 1;
					// let valMinred = this.$('.redMinNum input').val();
					// post.redMinNum = valMinred * 1;
					console.log(post,'postss')
					updAgeG(post).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.success'));
							this.resetEdits(formName);
							this.getData();
						} else {
							this.$message.error(res.message);
						}
					});
				}
			});
		},
		saveNormal(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let post = {};
					this.$.extend(post, this.normalRed);
					post.redAmount += '';
					post.redNum *= 1;
					post.roomId = this.roomId;
					post.agencyId = this.checkAgenId(post.agencyId);
                    console.log(this.normalRed, 'this.ruleForms',post.isAuto);
                    if(this.normalRed.isAuto===2){
                        post.autoTime = Math.round(parseInt(new Date().valueOf()));
                    }
                    post.autoTime = Math.round(parseInt(post.autoTime) / 1000);
					addRed(post).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.success'));
							this.resetNormal(formName);
							this.getData();
						} else {
							this.$message.error(res.message);
						}
					});
				}
			});
		},
		//取消编辑
		resetEdit(formName) {
			this.editVisible = false;
			this.initFormData();
			this.$refs[formName].resetFields();
		},
		resetEdits(formName) {
			this.editVisibles = false;
			this.initFormDatas();
			this.$refs[formName].resetFields();
		},
		resetNormal(formName) {
			this.isnormalRed = false;
			this.$refs[formName].resetFields();
			this.initNormalData();
		},
		// 删除操作
		handleDelete(index, row) {
			console.log(index, row);
			// 二次确认删除
			this.$confirm(this.$t('common.doSureDel'), this.$t('common.prompt'), {
				type: 'warning'
			})
				.then(() => {
					let postData = {
						id: row.id
					};
					delAgeG(postData).then(res => {
						if (res.success) {
							this.$message.success(this.$t('common.sucDel'));
							this.tableData.splice(index, 1);
						} else {
							this.$message.error(res.message);
						}
					});
				})
				.catch(() => {});
		},
		// 当游戏gameType变换时
		gameChange(val) {
			this.ruleForm.gamePlay = 1;
			this.ruleForm.royalty = '';
			this.ruleForm.gameTime = 1;
			this.ruleForm.redNum = '';
			// this.ruleForm.redMinNum= ''
			this.ruleForm.maxMoney = '';
			this.ruleForm.minMoney = '';
            this.$('.redMinNum input').val(null);
			this.transferGameTypeValid(val);
            // this.$refs['ruleForm'].resetFields();
			// let valMinred = this.$(".redMinNum input").val()
			// console.log('sssss',valMinred,this.ruleForm.redMinNum)
		},
		// 当固定赔率和不固定赔率发生转换时
		oddChange(val) {
			if (val === 1) {
				this.ruleForm.odds = ODDS;
			} else {
				this.ruleForm.odds = '';
				this.ruleForm.redNum = '';
				// this.ruleForm.redMinNum = null;
				this.rules.redMinNum = null;
			}
		},
		// 互相监听然后自己匹配
		oddsAnd(val) {
			let idx = this.fData.redOddsArr.indexOf(val);
			this.ruleForm.redNum = this.fData.redNumsArr[idx];
		},
		// 互相监听然后自己匹配
		oddsAndpro(val) {
			let idx = this.fData.redNumsArr.indexOf(val);
			this.ruleForm.odds = this.fData.redOddsArr[idx];
        },
        oddsAndpros(val) {
			let idx = this.fData.redNumsArr.indexOf(val);
            this.ruleForm.odds = this.fData.redOddsArr[idx];
		},
		reset() {
			this.query = {
				pageIndex: 1,
				pageSize: fData.pageSize,
				addTime: '',
				startTime: 0,
				endTime: 0,
                status: 0,
                agencyId: '',
				gameType: 2
			};
		}
	}
};
</script>