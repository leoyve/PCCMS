<template>
  <div>
    <br>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>受訓學員名單一覽表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('StageStudentEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
				<b-button size="sm" variant="danger" @click="gotoParam('CourseTeacherEdit', row.item)">刪除</b-button>&nbsp;
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
      rows: 20,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'seatNumber',
				label:	'座號'
			},
			{
				key:	'idNum',
				label:	'身份證字號'
			},
			{
				key:	'name',
				label:	'姓名'
			},
			{
				key:	'qualify',
				label:	'報名資格',
				thStyle: { width: "25%" },

			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			{
				id: 1, seatNumber: 'FR1100101', idNum: 'R1*******4',name:'王XX',qualify:'具有七年（含）以上之工程實務經驗者',
				serviceUnit:'行政院客家委員會', title:'主任',pk: 5566
			},
			{
				id: 2, seatNumber: 'FR1100102', idNum: 'F2*******4',name:'陳XX',qualify:'取得公共工程類科專業技師或建築師證書者（含消防設備師）',
				serviceUnit:'淡江大學推廣教育處', title:'教授',pk: 5566
			},
			{
				id: 3, seatNumber: 'FR1100103', idNum: 'C1*******8',name:'林XX',qualify:'大專以上學校土木、水利、環工、建築、營建、電機、機械、電子、化工及工程相關科系畢業，並於畢業後有二年（含）以上工程實務經驗者',
				serviceUnit:'行政院工程委員會', title:'處長',pk: 5566
			},
		],
     
  }
 },
 methods:  {
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