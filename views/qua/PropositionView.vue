<template>
	<div>
		<br>
		<h3><strong><font color="brown">品管班測驗命題版本管理畫面</font></strong></h3>
		<br>
		<b-row class="col-sm row justify-content-end" >
			<b-button size="sm" variant="outline-secondary" @click="gotoParam('PropositionQuery')">回上一頁</b-button>
		</b-row>
		<b-container fluid>
			<b-form-row >
				<b-col class="col-md-10 text-left"><h2><strong>壹、測驗命題條件基本資料表</strong></h2></b-col>
				<b-col class="col-md-1"><b-button size="xs" variant="success" @click="gotoParam('ExamConditionEdit', {version:'1090001', updateFlag:true})">修改</b-button></b-col>
			</b-form-row>
			<br>
		<b-container fluid class="border border-dark">
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">命題版本編號</b-col>
				<b-col class="col-md-10 text-left">1090001</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>訓練主題班別</b-col>
			<b-col class="col-md-10 text-left">
				公共工程品質管理訓練班(土建) 【109年4月起適用】
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>訓練主題班別種類</b-col>
			<b-col class="col-md-10 text-left">
				品管
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2"><font color="red">*</font>卷別版本名稱</b-col>
			<b-col class="col-md-10 text-left">
				LR110
			</b-col>
			</b-row>
			<!--依照選的課程來顯示題庫數，使用placeHolder-->
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>測驗總題數(A)</b-col>
			<b-col class="col-md-4 text-left">
				100
			</b-col>
			<b-col class="col-md-2 "><font color="red">*</font>核心題數</b-col>
			<b-col class="col-md-4 text-left">
				20
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>最難題數(B)</b-col>
			<b-col class="col-md-4 text-left">
				25
			</b-col>
			<b-col class="col-md-2 "><font color="red">*</font>困難題數(C)</b-col>
			<b-col class="col-md-4 text-left">
				25
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>普通題數(D)</b-col>
			<b-col class="col-md-4 text-left">
				25
			</b-col>
			<b-col class="col-md-2 "><font color="red">*</font>容易題數(E)</b-col>
			<b-col class="col-md-4 text-left">
				25
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>第1次補考更換題數</b-col>
			<b-col class="col-md-4 text-left">
				50
			</b-col>
			<b-col class="col-md-2 "><font color="red">*</font>第2次補考更換題數</b-col>
			<b-col class="col-md-4 text-left">
				50
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>新試卷從前試卷抽換部分題目產生之抽換題數</b-col>
			<b-col class="col-md-10 text-left">
				50
			</b-col>
			</b-row>
			<b-row class="border border-dark">
			<b-col class="col-md-2 "><font color="red">*</font>是否有效</b-col>
			<b-col class="col-md-10 text-left">
				是
			</b-col>
			</b-row>
		</b-container>
		<br>
		<b-form-row >
			<b-col class="col-md-10 text-left"><h2><strong>貳、課程科目命題數資料</strong></h2></b-col>
			<b-col class="col-md-1"><b-button size="xs" variant="success" @click="gotoParam('ExamEventEdit', )">修改</b-button></b-col>
		</b-form-row>
		<br>
		<b-container fluid>
			<b-table striped hover :items="items" :fields="fields" head-variant="light">
			</b-table>
		</b-container>
		<br>
		<b-form-row >
			<b-col class="col-md-10 text-left"><h2><strong>參、課程科目命題數資料</strong></h2></b-col>
			<b-col class="col-md-1"><b-button size="xl" variant="success" @click="create()">產生測驗卷</b-button></b-col>
		</b-form-row>
		<br>
		<b-container fluid>
			<b-table striped hover :items="items2" :fields="fields2" head-variant="light">
				<template #cell(difficulty)="row">
					<b-container>
						<b-row>
							<b-col>最難:{{row.item.hardestNum}}</b-col>
						</b-row>
						<b-row>
							<b-col>困難:{{row.item.diffcultNum}}</b-col>
						</b-row>
						<b-row>
							<b-col>普通:{{row.item.normalNum}}</b-col>
						</b-row>
						<b-row>
							<b-col>容易:{{row.item.easyNum}}</b-col>
						</b-row>
					</b-container>
				</template>
				<template #cell(change)="row">
					<b-container>
						<b-row>
							<b-col>第1次補考更換題數:{{row.item.change1}}</b-col>
						</b-row>
						<b-row>
							<b-col>第2次補考更換題數:{{row.item.change2}}</b-col>
						</b-row>
						<b-row>
							<b-col>新測驗卷更換題數:{{row.item.changeNew}}</b-col>
						</b-row>
					</b-container>
				</template>
				<template #cell(action)="row">
					<b-button size="sm" variant="info" @click="gotoParam('ExamDetail', {examName:'期末', ...row.item})">期末</b-button>&nbsp;
					<b-button size="sm" variant="warning" @click="gotoParam('ExamDetail', {examName:'第1次補考', ...row.item})">補考1</b-button>&nbsp;
					<b-button size="sm" variant="warning" @click="gotoParam('ExamDetail', {examName:'第2次補考', ...row.item})">補考2</b-button>&nbsp;
					<b-button size="sm" variant="danger" @click="deleteCheck(row)">刪除</b-button>
				</template>
			</b-table>
		</b-container>
    </b-container>
	</div>
</template>


<script>


export default {
 data(){
	return{
		fields:[
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'suject',
				label:	'課程科目'
			},
			{
				key:	'courseNum',
				label:	'課程時數'
			},
			{
				key:	'coreNum',
				label:	'核心題數'
			},
			{
				key:	'nonCoreNum',
				label:	'非核心題數'
			},
		],
		items:[
			{id:1,suject:'政府採購全生命週期概論',courseNum:1, coreNum:0, nonCoreNum:5,pk:5566},
			{id:2,suject:'工程倫理',courseNum:1, coreNum:5, nonCoreNum:5,pk:5566},
			{id:3,suject:'單元一：第一章 公共工程施工品質管理制度理念與導入',courseNum:2, coreNum:10, nonCoreNum:4,pk:5566},
		],
		fields2:[
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'serial',
				label:	'卷別'
			},
			{
				key:	'testNum',
				label:	'測驗總題數'
			},
			{
				key:	'coreNum',
				label:	'核心題數'
			},
			{
				key:	'difficulty',
				label:	'困難度'
			},
			{
				key:	'change',
				label: '題數更換',
				tdClass: 'text-left',
			},
			{
				key:	'action',
				label: '',
			},
		],
		items2:[
			{
				id: 1, serial: '110-1', testNum:'50',
				hardestNum:'10',diffcultNum:10,normalNum:20,easyNum:10,coreNum:10,
				change1:20,change2:20,changeNew:50,pk: 5566, 
			},
			{
				id: 2, serial: '110-2', testNum:'80',
				hardestNum:'0',diffcultNum:10,normalNum:20,easyNum:20,coreNum:10,
				change1:20,change2:20,changeNew:50,pk: 5566
			},
			{
				id: 3, serial: '110-3',	testNum:'100',
				hardestNum:5,diffcultNum:20,normalNum:20,easyNum:20,coreNum:20,
				change1:20,change2:20,changeNew:50,pk: 5566
			}
		],
	}
 },
 methods: {
	create(){
		alert('已產生新版測驗卷');
	}
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