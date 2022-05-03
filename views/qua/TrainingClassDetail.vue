<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別詳細資料</font></strong></h3>
		<b-form-row class="justify-content-end">
			<b-button size="xs" variant="outline-secondary" @click="gotoParam('TrainingClassQuery')">回上一頁</b-button>&nbsp;
		</b-form-row >
		<b-container fluid>
			<b-form-row >
				<b-col class="col-md-10 text-left"><h2><strong>壹、基本資料</strong></h2></b-col>
				<b-col class="col-md-1"><b-button size="xs" variant="success" @click="gotoParam('TrainingClassEdit', {updateFlag:true})">編輯</b-button></b-col>
			</b-form-row>
			<br>
			<b-container fluid class="border border-dark">
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">代訓機構</b-col>
					<b-col class="col-md-10 text-left">經濟部國營事業委員會</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">訓練主題班別名稱</b-col>
					<b-col class="col-md-10 text-left">基礎開挖與品管【109年5月起適用】</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">班別種類</b-col>
					<b-col class="col-md-4 text-left">回訓</b-col>
					<b-col class="col-md-2 ">課程總時數</b-col>
					<b-col class="col-md-4 text-left">36</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">是否適用於同一代訓機構之其他分支訓練單位</b-col>
					<b-col class="col-md-4 text-left">是</b-col>
					<b-col class="col-md-2 ">目前是否有效</b-col>
					<b-col class="col-md-4 text-left">是</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">是否適用於同一代訓機構之其他分支訓練單位</b-col>
					<b-col class="col-md-4 text-left">是</b-col>
					<b-col class="col-md-2 ">目前是否有效</b-col>
					<b-col class="col-md-4 text-left">是</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">代訓機構送審函報日期</b-col>
					<b-col class="col-md-4 text-left">109/06/10</b-col>
					<b-col class="col-md-2 ">代訓機構送審函報文號</b-col>
					<b-col class="col-md-4 text-left">訓字第1098061155號</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">主管機關許可日期</b-col>
					<b-col class="col-md-4 text-left">109/06/16</b-col>
					<b-col class="col-md-2 ">主管機關許可文號</b-col>
					<b-col class="col-md-4 text-left">	工程管字第1090014114號</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">審查狀態</b-col>
					<b-col class="col-md-10 text-left">同意備查</b-col>
				</b-row>
			</b-container>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>貳、課程明細</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('', {updateFlag:true})">上傳EXCEL</b-button>&nbsp;
					<b-button size="sm" variant="success" @click="gotoParam('CourseEdit', {addFlag:true})">新增課程</b-button>
				</b-col>
			</b-form-row>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>訓練課程一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('CourseEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
							<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
						</template>
					</b-table>
				</b-form-row>
			</b-container>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>參、授課教師</strong></h2></b-col>
			</b-form-row>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>課程授課教師一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items2" :fields="fields2" >
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
				<b-button size="lg" variant="info" @click="gotoParam('TrainingClassSubmit', )">送審</b-button>&nbsp;
				<b-button size="lg" variant="success" @click="gotoParam('TrainingClassReview', )">備查(已備查、送審未備查...)</b-button>&nbsp;
			</b-form-row >
		</b-container>
		<br>
		
	</div>
</template>


<script>


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
		fields2: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'course',
				label: '課程名稱',
				thStyle: { width: "30%" },
			},
			{
				key:	'teacherAction',
				label:	'授課教師名單',
				thStyle: { width: "30%" },
				tdClass: 'text-left',
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},

		],
		items2:	[
			{
				id: 1,course:'政府採購全生命週期概論',teacherList:[{sid:111, name:'王XX(1)',status:'未備查',check:true},
				{sid:123, name:'林XX(2)', status:'已備查',check:true},],
				pk: 5566
			},
			{
				id: 2,course: '最新政策與法規', teacherList:[{sid:123, name:'(主管機關指派)', status:'',check:false},],
				pk: 5566
			},
			{
				id: 3,course: '擋土樁工程', pk: 5566,teacherList:[{sid:111, name:'劉XX(0)',status:'未備查',check:true},],
			}
		]
	}
 },
 methods: {
	
 }
}


</script>

<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}
</style>