<template>
  <div>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>授課教師名單表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('CourseTeacherEdit', row.item)" v-show="(editableFlag && !row.item.assignFlag)">編輯</b-button>&nbsp;
				<div v-show="row.item.assignFlag">主管機關指派</div>
			</template>
		</b-table>
      </b-form-row>
    </b-container>
    <br>
  </div>
</template>


<script>


export default {
  props: ["editableFlag"],
  data(){
    return{
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'className',
				label:	'單元名稱'
			},
			{
				key:	'course',
				label:	'課程名稱'
			},
			{
				key:	'classHours',
				label:	'課程時數'
			},
			{
				key:	'teacher',
				label:	'授課教師',
				thStyle: { width: "8%" },
			},
			{
				key:	'serviceUnit',
				label:	'目前服務單位'
			},
			{
				key:	'title',
				label:	'職稱'
			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			{
				id: 1, className: '基礎開挖與品管', course: '政府採購全生命週期概論',	classHours:1,teacher:'王XX',	
        serviceUnit:'行政院客家委員會', title:'主任',pk: 5566,assignFlag:false,
			},
			{
				id: 2, className: '基礎開挖與品管', course: '	最新政策與法規',	classHours:4,	teacher:'陳XX',	
        serviceUnit:'淡江大學推廣教育處', title:'教授',pk: 5566,assignFlag:false,
			},
			{
				id: 3, className: '基礎開挖與品管', course: '擋土樁工程',	classHours:6,	teacher:'林XX',	
        serviceUnit:'行政院工程委員會', title:'處長',pk: 5566,assignFlag:true,
			},
		],
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
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