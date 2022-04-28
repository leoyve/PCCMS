<template>
	<div>
		<br>
		<h3>公共工程標案地理資訊平台</h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="所屬機關名稱" label-align-md="right">
					<b-select :options="wkutOpt"/>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程決標年度" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-input type="search"></b-form-input></b-col>~
							<b-col><b-form-input type="search"></b-form-input></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="最低工程決標金額(千元)" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="施工縣市" label-align-md="right">
					<b-select :options="city"/>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="在建標案" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="完工標案年度" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-input type="search"></b-form-input></b-col>~
							<b-col><b-form-input type="search"></b-form-input></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="搜尋對象" label-align-md="right">
					<b-form-checkbox-group
						v-model="selected"
						:options="checkOptions"
						class="mb-2"
						value-field="item"
						text-field="name"
						disabled-field="notEnabled"
						name="flavour-1a"
						inline
					></b-form-checkbox-group>
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
				<b-form-row class="row justify-content-end">
					<b-button size="sm" variant="info"  @click="mapInfo" >顯示群組地理圖資</b-button>
				</b-form-row>
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(check)="row">
							<b-checkbox v-model="row.items"></b-checkbox>
						</template>
						<template #cell(address)="row">
							<a
								href="#"
								variant="primary"
								@click="alertMsg()"
								>{{ row.item.site }}</a
							>
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
		wkutOpt:[
			{text:'內政部', value:1},
			{text:'文化部', value:1},
			{text:'交通部', value:1},
			{text:'台北市政府', value:1},
		],
		city:[
			{text:'台北市', value:1},
			{text:'新北市', value:1},
			{text:'桃園市', value:1},
			{text:'新竹市', value:1},
		],
		options:[
			{text:"不限", value:1},
			{text:"進度超前", value:2},
			{text:"落後1%以上", value:2},
			{text:"落後5%以上", value:2},
			{text:"落後10%以上", value:2},
			{text:"落後20%以上", value:2},
		],
		checkOptions: [
			{	name:	'重點防汛工程',	item:	'1', },
			{	name:	'水利類工程',	item:	'2',  },
			{	name:	'全部工程',	item:	'3',  },
			],
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'check',
				label:	'勾選'
			},
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: "cmdNum",
				label: "工程標案編號",
			},
			{
				key: "cmdName",
				label: "工程標案名稱",
			},
			{
				key: "wkut",
				label: "主辦機關",
			},
			{
				key: "decisive",
				label: "決標金額",
			},
			{
				key: "decisiveDate",
				label: "決標日期",
			},
			{
				key: "preDate",
				label: "預定完工日期",
			},
			{
				key: "actualDate",
				label: "實際完工日期",
			},
			{
				key: "address",
				label: "工程地點",
			},
			{
				key: "ym",
				label: "進度年月",
			},
			{
				key: "preRate",
				label: "預定進度",
			},
			{
				key: "actualRate",
				label: "實際進度",
			},
		],
		items:	[
			{
				cmdNum:"1091002",
				cmdName:"鹿草鄉鴨母寮排水水環境改善計畫工程",
				wkut:"嘉義縣鹿草鄉公所",
				decisive:"56,050",
				decisiveDate:"109/12/31",
				preDate:"110/01/03",
				actualDate:"110/05/05",
				site:"嘉義縣鹿草鄉",
				ym:"11003",
				preRate:21,
				actualRate:8.2

			},
			{
				cmdNum:"PL1080000001",
				cmdName:"花蓮縣警察局警勤科技大樓暨綜合大樓新建統包工程",
				wkut:"花蓮縣警察局",
				decisive:"600,000",
				decisiveDate:"108/04/01",
				preDate:"110/12/17",
				actualDate:"",
				site:"	花蓮縣花蓮市府前路21號",
				ym:"11003",
				preRate:52.16,
				actualRate:52.36

			},
		],
	}
 },
 methods: {
	alertMsg() {
      alert("顯示圖資資訊");
    },
	mapInfo(){
		alert("顯示群組圖資資訊");
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