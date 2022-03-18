<template>
	<div>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('AnnualAppraisalEdit', {addFlag:true})" >新增</b-button>&nbsp;&nbsp;
				<b-button size="l" variant="info"  @click="upload()" >上傳EXCLE檔案</b-button>&nbsp;&nbsp;
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="評鑑年度" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('AnnualAppraisalEdit', row.item)">修改</b-button>
						</template>
					</b-table>
				</b-form-row>
			</b-container>
		</div>
	</div>
</template>



<script>


export default {
 data(){
	return{
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'agencyName',
				label:	'代訓機構名稱'
			},
			{
				key:	'evaluationYear',
				label:	'評鑑年度'
			},
			{
				key:	'evaluation',
				label:	'評鑑成績'
			} ,
			{
				key:	'grade',
				label: '評鑑等級'
			}, 
			{
				key:	'postDate',
				label:	'發文日期'
			},
			{
				key:	'postNum',
				label:	'發文字號'
			},
			{
				key:	'action',
				label:	''
			},

			],
		items:	[
			{
				id: 1, agencyName: '中原大學', evaluationYear: '110', evaluation: '88', grade:'第一級',	
				qualifications:'機關、學校之薦任第九職等以上主管(含副主管)，且具專長相關實務經驗十五年以上',	isPccms:'',	updateFlag:true,	pk: 5566
			},
			{
				id: 2,agencyName: '國立中央大學', evaluationYear: '110', evaluation: '0', grade:'第四級',	
				qualifications:'大專院校專任助理教授以上，且具專長相關教學經驗五年以上',	isPccms:'是',	updateFlag:true,	pk: 5566
			},
			{
				id: 3, agencyName: '財團法人中國生產力中心台北服務處', evaluationYear: '110', evaluation: '78', grade:'第三級',	
				qualifications:'其他經本會核定之專家',	isPccms:'',	updateFlag:true,	pk: 5566
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
.col-md-10 {
  background-color: rgb(240, 229, 214);
  color: white;
  text-align: left;
}
</style>