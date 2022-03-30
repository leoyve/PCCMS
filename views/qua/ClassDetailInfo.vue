<template>
  <div>
	<br>
    <b-container>
		<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>邊坡工程品質管理實務【109年5月起適用】訓練主題班別課程一覽表</strong></h4></b-form-row>
		<b-form-row class="justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="light">
			</b-table>
		</b-form-row>
	</b-container>
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
				key:	'unitName',
				label:	'單元名稱'
			},
			{
				key:	'className',
				label:	'課程名稱'
			} ,
			{
				key:	'summary',
				label: '課程摘要',
        thStyle: { width: "25%" },
			}, 
			{
				key:	'classHour',
				label:	'課程時數'
			},

			],
		items:	[
			{
				id: 1, unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '政府採購全生命週期概論', summary: '	(1)現階段政策方向 (2)辦理採購之重點理念 (3)計畫撰擬、規劃設計、採購招標、決標、履約、施工驗收作業及維護管理等各階段重點事項 (4)採購法使用手冊重點內容 (5)各階段案例', 
        classHour:'1',	pk: 5566
			},
			{
				id: 2,unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '最新政策與法規', summary: '就回訓期間每年更新說明工程會近期之政策與法規', 
        classHour:'11',	pk: 5566			},
			{
				id: 3, unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '室內裝修施工與案例研討', summary: '建築物地下基礎開挖施工中不僅承商自己工程要安全完成，而且也要考慮不致在施工中、完工後影響鄰房基礎之安全。如果基礎型式選擇不當、設計方式錯誤，因為不適合在該地盤施作，或者施工管理不良，則基礎開挖過程不但容易造成本身施工危險，例如傾斜、沉陷、上浮或倒塌，而且產生鄰房龜裂、傾斜與沉陷。因此，工程師必須對地盤的土壤性質與地下水狀況及周邊建物等設施環境有深入的了解...', 
        classType:'3',pk: 5566
			}
		],
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