<template>
	<div>
	<h1>公共設施維護管理資訊</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="關鍵公共設施" left fill>
			<b-dropdown-item @click="gotoParam('RankReport',)">維管排名</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('PublicFacilityEdit', {addFlag:true})">建立機關關鍵公共設施</b-dropdown-item>
			<b-dropdown-item @click="gotoQuery()">維護機關關鍵公共設施</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FacilityTypeReport')">機關/類別報表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('')">統計分析</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('')">查詢機關刪除資料</b-dropdown-item>
        </b-nav-item-dropdown>

        
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
	</div>
</template>


<script>


export default {
  data(){
    return{



  }
 },
 methods:  {
   gotoQuery(item){
		item;
		const replaceItems=[
		{id:1, mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'},
		{id:2, mainType:'交通設施', subType:'道路', equName:'4-1道路', BOSCODE:'交通部', EBOSOCDE:'墾丁國家公園管理處', UBOSCODE:'內政部營建署',
			OBOSCODE:'內政部',year:0,month:1, lastDate:'2022/03/31', status:'已依規定維護正常使用',
			lastStatus:'本處道路開口契約廠商隨時機動進行道路設施之維護'},
		{id:3, mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'}  ];
		const rf = [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key: 'mainType',
				label:	'主類別'
			},
			{
				key: 'subType',
				label:	'次類別'
			},
			{
				key:	'equName',
				label:	'施備名稱'
			},
			{
				key:	'BOSCODE',
				label:	'主管法規之中央目的事業主管機關'
			},
			{
				key:	'EBOSOCDE',
				label:	'養護機關'
			},
			{
				key:	'UBOSCODE',
				label:	'上一級養護管理機關'
			},
			{
				key:	'OBOSCODE',
				label:	'中央部會及地方政府'
			},
			{
				key:	'mym',
				label:	'養護頻率'
			},
			{
				key:	'file',
				label:	'養護紀錄',
				thStyle: { width: "15%" },
			},
			{
				key:	'lastDate',
				label:	'最近一次養護日期'
			},
			{
				key:	'status',
				label:	'維護管理狀況',
				thStyle: { width: "10%" },
			},
			{
				key:	'lastStatus',
				label:	'近期維護管理執行情形',
				thStyle: { width: "10%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "10%" },
			},
		];

		this.gotoParam('FacilityListTemp',{replaceItems:replaceItems, replaceField:rf, id:'MY'});

	}
  },

}

</script>

<style>

</style>