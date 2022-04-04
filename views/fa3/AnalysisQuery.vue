<template>
  <div>
    <br>
    <h3><strong>統計分析</strong></h3>
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
		<b-form-row>
			<b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="維護頻率(年)" label-align-md="right">
				<b-form-input type="search"></b-form-input>
			</b-form-group>
			<b-form-group class="col-md-6" label-cols-md="3" content-cols-md="9" label="維護頻率(月)" label-align-md="right">
				<b-form-input type="search"></b-form-input>
			</b-form-group>
		</b-form-row>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="維護管理狀況" label-align-md="right">
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
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施維護填報情形" label-align-md="right">
				<b-form-checkbox-group
					v-model="selected"
					:options="checkOptions2"
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
			<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
			<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
		</b-form-row>
	</b-container>
    <br>
	<facilityListTemp :replaceItems="items" :buttonFlag="false"/>
  </div>
</template>


<script>
import facilityListTemp from './FacilityListTemp.vue'
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
	checkOptions:[
		{name:'已依規定維護正常使用', item:1},
		{name:'已依規定維護改善中', item:2},
		{name:'已依規定維護待改善', item:3},
		{name:'未依規定維護', item:4},
	],
	checkOptions2:[
		{name:'維護正常', item:1},
		{name:'未填頻率', item:2},
		{name:'未填養護日期', item:3},
		{name:'無紀錄', item:4},
		{name:'紀錄不足', item:5},
	],
	
	items:[{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。',abnormal:'無記錄',},
		{mainType:'交通設施', subType:'道路', equName:'4-1道路', BOSCODE:'交通部', EBOSOCDE:'墾丁國家公園管理處', UBOSCODE:'內政部營建署',
			OBOSCODE:'內政部',year:0,month:1, lastDate:'2022/03/31', status:'已依規定維護正常使用',
			lastStatus:'本處道路開口契約廠商隨時機動進行道路設施之維護',abnormal:'未填養護日期,未填頻率',},
		{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。',abnormal:'',}  
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
  },
  components:{
    facilityListTemp
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