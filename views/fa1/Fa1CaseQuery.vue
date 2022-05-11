<template>
	<div>
		<br>
		<h3><strong><font color="brown">公共設施上月活化情形填報及確認一覽表</font></strong></h3>
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
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>公共設施活化情形填報及確認一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('Fa1CaseDetail', row.item)">檢視</b-button>
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
	</div>
</template>


<script>


export default {
 data(){
	return{

		rows: 100,
		perPage: 1,
		currentPage: 1,
		itemOptions: [
			{	text:	'設施管理機關未填報',	value:	'A'},
			{	text:	'中央目的事業主管關未確認(含未填報) ',	value:	'B'},
			{	text:	'全部',	value:	'C'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'constName',
				label:	'設施名稱',
				tdClass: 'text-left',
				thStyle: { width: "10%" },
			},
			{
				key:	'wkut',
				label:	'設施管理機關'
			},
			{
				key:	'bosWkut',
				label:	'目的事業主管機關'
			},
			{
				key:	'ym',
				label:	'最近填報年月',
			},
			{
				key:	'situation',
				label:	'最近活化情形',
				tdClass: 'text-left',
				thStyle: { width: "15%" },
			},
			{
				key:	'isFill',
				label:	'上月活化情形是否填報',
			},
			{
				key:	'isCheck',
				label:	'上月活化情形是否確認',
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
		items:	[
			{	constName:'海口港觀光魚市場',wkut: '屏東縣政府農業處', bosWkut:'行政院農業委員會',ym:'11003',
				situation:'本府傳播暨國際事務處規劃將「落山風風景特定區」(含原有候船室、魚市場及周邊綠地)整體委外經營管理，預計110年5月底前完成上外公告招標，110年8月完成簽約及點交作業，110年9月開始營運。',
				isFill:'否', isCheck:'否'},
			{	constName:'台東縣蘭嶼手工藝品展售中心',wkut: '臺東縣蘭嶼鄉公所', bosWkut:'原住民族委員會',ym:'11003',
				situation:'蘭嶼鄉紅頭手工藝品展售中心： (截止進度110.03.05止) 一、本次土地撥用部份，原住民族委員會已於109年11月6日原民土字第1090064868號函同意辦理。',
				isFill:'否', isCheck:'否'},
			{	constName:'	嘉義市東市場綜合大樓二、三樓改建停車場(餘三樓停車場)',wkut: '嘉義市政府交通處', bosWkut:'交通部',ym:'11003',
				situation:'正常營運中，將提報解除列管.',
				isFill:'是', isCheck:'是'},
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