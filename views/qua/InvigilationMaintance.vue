<template>		
	<div>
		<br>
		<h3><strong><font color="brown">監考人員維護</font></strong></h3>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-end "><h4><strong><b-button size="lg" variant="success" @click="gotoParam('InvigilationEdit',{addFlag:true})">新增</b-button></strong></h4></b-form-row>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>監考人員清單一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="gotoParam('InvigilationEdit', {updateFlag:true, ...row.item})">修改</b-button>
					</template>
				</b-table>
			</b-form-row>
		</b-container>
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
				label:	'流水號',
			},
			{
				key:	'personA',
				label:	'人員A',
			},
			{
				key:	'personB',
				label:	'人員B',
			},
			{
				key:	'personC',
				label:	'人員C',
			},
			{
				key:	'classType',
				label:	'訓練班別種類',
				thStyle: { width: "8%" },
			},
			{
				key:	'action',
				label:	'',
			},
		],
		items:	[
			{
				id: '1',	personA: '王XX', personB: '劉XX', personC:'李XX',	classType:'品管',	pk: 5566
			},
			{
				id: '2',	personA: '林XX', personB: '蔡XX', personC:'王XX',	classType:'品管',	pk: 5566
			},
			{
				id: '3',	personA: '陳XX', personB: '張XX', personC:'徐XX',	classType:'回訓',	pk: 5566
			},
		],
	}
 },
 methods: {

 }
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>