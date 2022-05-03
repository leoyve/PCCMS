<template>
	<div>
		<br>
		<h3><strong><font color="brown">清查公共設施使用情形表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="md" variant="info" @click="upload" >批次上傳</b-button>&nbsp;
				<b-button size="md" variant="success" @click="gotoParam('InventoryEdit',{addFlag:true})" >新增</b-button>&nbsp;
			</b-form-row>
			<br>
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
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報公共設施名稱關鍵字" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="itemPicked"
						:options="itemOptions"
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
				<!--應該依照時間近的在上面-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>主管機關所屬清查公共設施使用情形表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('InventoryDetail1', row.item)">檢視</b-button>
						</template>
						<template #custom-foot >
							<b-tr variant="secondary">
								<b-th variant="secondary" colspan="2">合計</b-th>
								<b-th >16794</b-th>
								<b-th >14</b-th>
								<b-th >16808</b-th>
								<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('InventoryDetail1', )">檢視</b-button></b-th>
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
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'wkut',
				label:	'主管機關名稱'
			},
			{
				key:	'normal',
				label:	'正常使用(件)',
			},
			{
				key:	'unNormal',
				label:	'未正常使用(件)'
			},
			{
				key:	'total',
				label:	'合計(件)'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	wkut: '內政部', normal:91,	unNormal:0,	total:91,},
			{	wkut: '財政部', normal:102,	unNormal:0,	total:102,},
			{	wkut: '教育部', normal:3799,	unNormal:3,	total:3802,},
			{	wkut: '經濟部', normal:538,	unNormal:1,	total:539,},
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