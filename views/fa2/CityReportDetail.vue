<template>
  <div>
    <br>
    <fillActivationsListInfo :detailFlag="true" :replaceItems="items"/>
  </div>
</template>


<script>
import fillActivationsListInfo from './FillActivationsListInfo.vue'

export default {
  data(){
    return{
		items: [
        {
          PLNNO: "1110000001",
          PLNNAME: "頭份鎮停二立體停車場拆除工程",
          wkut: "苗栗縣頭份市公所",
          constName: "頭份鎮停二立體停車場",
          plnamt: "5,000",
			pcount:'5,566',
			scount:'',
			prate:'',
			arate:'',
			mnum:'6',
			pmnum:'6',
			amnum:'6',
        },
        {
          PLNNO: "1110000002",
          PLNNAME:
            "嘉義縣布袋鎮布袋鎮景山國民小學推動閒置公共設施活化--正義校區活化計畫",
          wkut: "嘉義縣布袋鎮景山國民小學",
          constName: "嘉義縣布袋鎮景山國民小學正義校區",
          plnamt: "8,214",
          pcount:'4,850',
			scount:'4,850',
			prate:'100.00',
			arate:'100.00',
			mnum:'5',
			pmnum:'5',
			amnum:'5',
        },
        {
          PLNNO: "1110000004",
          PLNNAME: "桃園市大園區五權砲陣地舊營舍活化計畫",
          wkut: "桃園市政府都市發展局",
          constName: "桃園市大園區五權砲陣地舊營舍活化計畫",
          plnamt: "42,000",
			pcount:'21,100',
			scount:'13,503',
			prate:'63.99',
			arate:'32.15',
			mnum:'5',
			pmnum:'4',
			amnum:'3',
        },
      ],
	
  }
 },
  methods:  {
   
  },
  components:{
    fillActivationsListInfo
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