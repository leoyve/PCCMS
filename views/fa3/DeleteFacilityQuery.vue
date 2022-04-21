<template>
  <div>
    <br>
    <h3><strong>查詢機關刪除資料</strong></h3>
    <br>
    <b-container >
		<!--三個機關選單有連動-->
		<b-form-row >
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="中央部會及地方政府" label-align-md="right">
				<b-form-select :options="wkut" @change="checkChange(name)" v-model="name"></b-form-select>
			</b-form-group>
		</b-form-row>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="上一級養護管理機關:" label-align-md="right">
				<b-form-select :options="wkut"></b-form-select>
			</b-form-group>
		</b-form-row>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="養護單位:" label-align-md="right">
				<b-form-select :options="wkut"></b-form-select>
			</b-form-group>
		</b-form-row>
		<!--類別也有連動-->
		<b-form-row>
			<b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="主類別:" label-align-md="right">
				<b-form-select :options="main"></b-form-select>
			</b-form-group>
			<b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="次類別:" label-align-md="right">
				<b-form-select :options="sub"></b-form-select>
			</b-form-group>
		</b-form-row>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設備名稱" label-align-md="right">
				<b-form-input type="search"></b-form-input>
			</b-form-group>
		</b-form-row>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
			<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
		</b-form-row>
	</b-container>
    <br>
	<b-container fluid>
		<b-form-row class="row justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
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
</template>

<script>

export default {
	data(){
		return{
			wkut:[
				{text:'內政部', value:1},
				{text:'交通部', value:2},
				{text:'行政院農業委員會', value:4},
				{text:'經濟部', value:3},
			],
			name:'',
			main:[
				{text:'水利設施', value:1},
				{text:'交通設施', value:2},
				{text:'能源設施', value:4},
				{text:'環保設施', value:3},
			],
			sub:[
				{text:'水庫', value:1},
				{text:'軌道', value:2},
				{text:'抽水站', value:4},
				{text:'汙水處理廠', value:3},
			],
			fields: [
				{
					key:	'serial',
					label:	'流水號'
				},
				{
					key:	'BOSCODE',
					label:	'主管法規之中央目的事業主管機關'
				},
				{
					key:	'EBOSOCDE',
					label: '養護機關',
					thStyle: { width: "10%" },
				}, 
				{
					key:	'UBOSCODE',
					label:	'上一級養護管理機關',
					thStyle: { width: "20%" },
				}, 
				{
					key:	'OBOSCODE',
					label:	'中央部會及地方政府'
				},
				{
					key:	'mainType',
					label:	'主類別'
				},
				{
					key:	'subType',
					label:	'次類別'
				},
				{
					key:	'equName',
					label:	'施備名稱'
				},
				{
					key:	'deleteReason',
					label:	'刪除原因'
				},
				{
					key:	'deleteComment',
					label:	'刪除理由'
				},
				{
					key:	'deleteDate',
					label:	'刪除時間'
				},
			],
			items:	[{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
					OBOSCODE:'經濟部',deleteReason:'有重複案件',deleteComment:'測試',deleteDate:'110/05/06/12.00'},
				{mainType:'交通設施', subType:'道路', equName:'4-1道路', BOSCODE:'交通部', EBOSOCDE:'墾丁國家公園管理處', UBOSCODE:'內政部營建署',
					OBOSCODE:'內政部',deleteReason:'有重複案件',deleteComment:'測試',deleteDate:'110/05/06/12.00'},
				{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
					OBOSCODE:'經濟部',deleteReason:'有重複案件',deleteComment:'測試',deleteDate:'110/05/06/12.00'}  
				],
		}
	},
 methods:  {
   checkChange(value){
	console.log(value);
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