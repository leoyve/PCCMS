<template>
	<div>
		<br>
		<h3><strong><font color="brown">代訓機構開班期別詳細資料</font></strong></h3>
		<b-container fluid>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>壹、基本資料</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('AgencyStageEdit',{updateFlag:true})">修改</b-button>&ensp; 
					<b-button size="sm" variant="danger" @click="deleteCheck()">刪除</b-button>&ensp; 
					<b-button size="lg" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
				</b-col>
			</b-form-row>
			<br>
			<agencyStageDetailInfo/>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>貳、課程明細</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('', {updateFlag:true})">上傳EXCEL</b-button>&nbsp;
				</b-col>
			</b-form-row>
			<stageTeacherInfo  :editableFlag="true"/>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>參、學員明細</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('', {updateFlag:true})">上傳EXCEL</b-button>&nbsp;
				</b-col>
			</b-form-row>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>受訓學員名單一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<!--工程會管理員按鈕都可以操作，代訓機構備查後只顯示文字-->
						<template #cell(teacherAction)="row">
							<b-container>
								<b-row v-for="teacher in row.item.teacherList" :key="teacher.sid">
									<b-col>{{teacher.name}}</b-col>
									<b-col v-show="teacher.check"><b-button size="sm" variant="warning" @click="deleteCheck(teacher.sid)">移除</b-button></b-col>
									<b-col v-show="teacher.check">({{teacher.status}})</b-col>
								</b-row>
							</b-container>	
						</template>
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('TeacherCourseListEdit', row.item)">新增</b-button>&nbsp;
						</template>
					</b-table>
				</b-form-row>
			</b-container>
			<b-form-row class="justify-content-start">
				<!--備查是工程會管理員的權限-->
				<b-button size="lg" variant="info" @click="gotoParam('Stage1Submit', )">送審</b-button>&nbsp;
				<b-button size="lg" variant="success" @click="gotoParam('Stage1Review', )">備查(已備查、送審未備查...)</b-button>&nbsp;
			</b-form-row >
		</b-container>
		<br>
		
	</div>
</template>


<script>
import agencyStageDetailInfo from './AgencyStageDetailInfo.vue'
import stageTeacherInfo from './StageTeacherInfo.vue'

export default {
 data(){
	return{
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'unitName',
				label:	'單元名稱'
			},
			{
				key:	'course',
				label: '課程名稱'
			},
			{
				key:	'summary',
				label:	'課程摘要',
				thStyle: { width: "30%" },
			},
			{
				key:	'classHour',
				label:	'課程時數'
			} ,
			{
				key:	'isValid',
				label: '是否有效',
				thStyle: { width: "8%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},

		],
		items:	[
			{
				id: 1,unitName: '基礎開挖與品管', course:'政府採購全生命週期概論',
				summary:'	(1)現階段政策方向 (2)辦理採購之重點理念 (3)計畫撰擬、規劃設計、採購招標、決標、履約、施工驗收作業及維護管理等各階段重點事項 (4)採購法使用手冊重點內容 (5)各階段案例',
				classHour:1, isValid:'是',pk: 5566
			},
			{
				id: 2,unitName:'基礎開挖與品管', course: '最新政策與法規', 
				summary:'就回訓期間每年更新說明工程會近期之政策與法規',
				classHour:4,isValid:'是',pk: 5566
			},
			{
				id: 3, unitName:'基礎開挖與品管', course: '擋土樁工程', 
				summary:'本課程之教學內容針對擋土樁工程之施工概要、施工要領、施工作業流程圖及檢驗要點、施工品質管理標準與施工自主檢查表詳細討論，並且依照三級品管制度制訂施工品質管理標準表與施工自主檢查，提供現場監造人員查核及承商施工時依循的標準，以利工地主管經由標準的程序，統一管理各分項工程施工，藉以達到防止施工災害並且確保施工品質之目的。',
				classHour:6, isValid:'是',pk: 5566
			}
		],
		
	}
 },
 methods: {
	
 },
  components:{
    agencyStageDetailInfo,stageTeacherInfo
  },
}


</script>

<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}
</style>