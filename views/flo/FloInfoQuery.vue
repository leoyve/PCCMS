<template>
	<div>
		<br>
		<h3>查詢重點防汛工程在建標案一覽表</h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程標案編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程標案名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
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
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="info" @click="potential(row.item)">潛勢</b-button>&nbsp;
							<b-button size="sm" variant="warning" @click="gotoParam('FloWarnDetail', row.item)">示警</b-button>&nbsp;
						</template>
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
				
			</b-container>
		</div>
	</div>
</template>


<script>
export default {
 data(){
	return{
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'prjno',
				label:	'工程標案編號'
			},
			{
				key:	'name',
				label:	'工程標案名稱',
				tdClass: 'text-left',
				thStyle: { width: "12%" },
			},
			{
				key:	'wkut',
				label: '主辦機關',
				thStyle: { width: "8%" },
			}, 
			{
				key:	'site',
				label:	'工程地點'
			}, 
			{
				key:	'amount',
				label:	'決標金額(千元)'
			}, 
			{
				key:	'decideDate',
				label:	'決標日期'
			}, 
			{
				key:	'preDate',
				label:	'預定完工日期'
			}, 
			{
				key:	'ym',
				label:	'進度年月'
			},
			{
				key:	'preStep',
				label:	'預定進度'
			},
			{
				key:	'actStep',
				label:	'實際進度'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{prjno: 'SAC1020401', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', amount: '9010000', preStep:100,actStep:'100',
				site:'宜蘭縣(非原住民地區)',	decideDate:'110/12/01', preDate:'106/05/28', ym: '10810', },
			{prjno: '1100219', name: '南部院區公共工程及第1棟建築興建工程',	wkut: '中央研究院', amount: '352000', preStep:'',actStep:'',
				site:'臺北市南港區研究院路二段12巷底',	decideDate:'110/12/01', preDate:'', ym: '', },
			{prjno: '109-BG08', name: '天文數學館新建工程契約變更',	wkut: '中央研究院天文及天文物理研究所', amount: '1618800', actStep:99.9,
				site:'宜蘭縣(非原住民地區)',	decideDate:'110/12/01', preDate:'105/04/07', ym: '10910', preStep:100,},
		]
	}
 },
 methods: {
	potential(item){
		console.log(item);
		alert("顯示潛勢地理地圖");
	}
 },
	mounted(){
		this.items.forEach((items, index) => { items.serial = index + 1; });
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