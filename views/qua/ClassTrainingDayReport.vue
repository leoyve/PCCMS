<template>
	<div>
	</div>
</template>


<script>


export default {
 data(){
	return{
		options: [
			{	text:	'品管班',	value:	'A'},
			{	text:	'回訓班',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			} ,
			{
				key:	'classHour',
				label: 	'課程時數'
			}, 
			{
				key:	'stageNum',
				label:	'開班期數	'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{
				id: 1, agency: '中原大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classHour: '84', stageNum:'6',pk: 5566
			},
			{
				id: 2,	agency: '淡江大學學校財團法人淡江大學', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】', classHour: '36', stageNum:'3',pk: 5566
			},
			{
				id: 3, agency: '國立中央大學', className: '基礎開挖與品管【109年5月起適用】', classHour: '72', stageNum:'7',pk: 5566
			}
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