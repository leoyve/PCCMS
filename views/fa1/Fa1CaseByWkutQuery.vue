<template>
	<div>
		<br>
		<h3><strong><font color="brown">閒置公共設施統計表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="是否開放檢視" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="itemPicked"
						:options="itemOptions"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施編號關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施名稱關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="依目的、上級" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="itemPicked"
						:options="itemOptions2"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<!--上面的查詢條件會帶到標題-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>上級主管機關所屬尚未開放檢視之閒置公共設施統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('Fa1CaseList', row.item)">明細</b-button>
						</template>
						<template #custom-foot >
							<b-tr variant="secondary">
								<b-th variant="secondary" colspan="2">合計</b-th>
								<b-th >24</b-th>
								<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('Fa1CaseList', )">明細</b-button></b-th>
							</b-tr>
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

		itemOptions: [
			{	text:	'否',	value:	'A'},
			{	text:	'是',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		itemOptions2:[
			{	text:	'目的',	value:	'A'},
			{	text:	'上級',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'wkut',
				label:	'主管機關'
			},
			{
				key:	'number',
				label:	'活化計畫項數',
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	wkut: '內政部', number:7,},
			{	wkut: '財政部', number:1,},
			{	wkut: '教育部', number:5,},
			{	wkut: '經濟部', number:8,},
		]
	}
 },
 methods: {
	
 },
 mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
  },
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>