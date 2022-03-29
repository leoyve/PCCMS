<template>
  <div>
    <br>
    <h3><strong><font color="brown">訓練主題班別師資教授課程表</font></strong></h3>
    <br>
    <b-container fluid>
      <b-row class="col-sm row justify-content-end" >     
        <b-button size="sm" variant="success" @click="gotoParam('TeacherCourseEdit', {addFlag:true})">新增</b-button>&ensp; 
        <b-button size="sm" variant="warning" @click="add">上傳EXCEL</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenPeriodDetail',)">回上一頁</b-button>
      </b-row>
      <br>
      <b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="教師姓名" label-align-md="right">
					<b-form-input type="search"></b-form-input>
        </b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="送審情形" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
    </b-container>
    <br>
    <b-container fluid>
				<!--依照使用者選的選項顯示品管/回訓-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}開班課程</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
              <!--工程會管理員才有審查按鈕，且其他按鈕常駐可編輯-->
							<b-button size="sm" variant="success"  @click="gotoParam('TeacherCourseEdit', {updateFlag:true, ...row.item})" >修改</b-button>&nbsp;
              <b-button size="sm" variant="danger"  @click="deleteCheck(row.item)" >刪除</b-button>&nbsp;
              <b-button size="sm" variant="warning"  @click="gotoParam('TeacherCourseReview',row.item)" >審查</b-button>&nbsp;
						</template>
					</b-table>
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
			</b-container>
  </div>
</template>


<script>

export default {
  data(){
    return{
     options: [
			{	text:	'送審中',	value:	'A'},
			{	text:	'審查退件',	value:	'B'},
			{	text:	'未送審',	value:	'C'},
      {	text:	'未備查',	value:	'C'},
      {	text:	'已備查',	value:	'C'},
      {	text:	'全部',	value:	'C'},
		],
    rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'teacherName',
				label:	'教師姓名'
			},
			{
				key:	'serviceUnit',
				label:	'服務單位名稱'
			},
			{
				key:	'title',
				label: 	'職稱'
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
				key:	'isValid',
				label: '是否有效'
			},
      {
				key:	'status',
				label: '送審狀態'
			},
      {
				key:	'originalAgency',
				label: '原送審機構'
			},
      {
				key:	'action',
				label: ''
			},
		],
		items:	[
			{
				id: 1, teacherName:'王XX', serviceUnit:'彰化縣政府',title:'課長',unitName:'基礎開挖與品管',
        course: '單元一：公共工程施工品質管理制度教育宣導片',	isValid:'是',status:'已備查',pk: 5566,
        originalAgency:'經濟部國營事業委員會'
			},
			{
				id: 2, teacherName:'林XX', serviceUnit:'淡江大學推廣教育處',title:'教授',unitName:'基礎開挖與品管',
        course: '永續公共工程-節能減碳',	isValid:'是',status:'已備查',	pk: 5566,
        originalAgency:'經濟部國營事業委員會'
			},
			{
				id: 3, teacherName:'陳XX', serviceUnit:'行政院客家委員會',title:'主任',unitName:'基礎開挖與品管',
        course: '單元二：第四章 工程進料檢驗與管制',	isValid:'是',status:'已備查',	pk: 5566,
        originalAgency:'經濟部國營事業委員會'
			}
		]
  }
 },
 methods:  {

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