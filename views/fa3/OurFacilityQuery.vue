<template>
  <div>
    <br>
    <h3><strong>維護本機關關鍵公共設施</strong></h3>
    <br>
    <facilityListTemp :mountFlag="true" :replaceField="this.fields"/>
    <br>
  </div>
</template>


<script>
import facilityListTemp from './FacilityListTemp.vue'


export default {
  data(){
    return{
      fields: [
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
		],
  }
 },
 methods:  {
   
  },
  components:{
    facilityListTemp
  },
  mounted(){
    console.log( this.$route.params.id)
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-md-4 {
  background-color:white;
  color: white;
  text-align: left;
}

</style>