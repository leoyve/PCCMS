<template>
  <div>
    <br>
    <br>
    <b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>測驗課程科目命題數資料表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
            <!--把可配題數資訊放在placeHodel-->
             <template #cell(core)="row">
               <b-input v-model="row.item.coreNum" type="number" placeholder="可配5題"></b-input>
             </template>
             <template #cell(nonCore)="row">
               <b-input v-model="row.item.nonCoreNum" type="number" placeholder="可配10題"></b-input>
             </template>
           </b-table>
			</b-form-row>
    </b-container>
    <br>
    <b-container fluid>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update">儲存</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>


export default {
  data(){
    return{
      fields:[
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'suject',
				label:	'課程科目'
			},
			{
				key:	'courseNum',
				label:	'課程時數'
			},
			{
				key:	'core',
				label:	'核心題數'
			},
			{
				key:	'nonCore',
				label:	'非核心題數'
			},
		],
		items:[
			{id:1,suject:'政府採購全生命週期概論',courseNum:1, coreNum:'', nonCoreNum:5,pk:5566},
			{id:2,suject:'工程倫理',courseNum:1, coreNum:5, nonCoreNum:5,pk:5566},
			{id:3,suject:'單元一：第一章 公共工程施工品質管理制度理念與導入',courseNum:2, coreNum:10, nonCoreNum:4,pk:5566},
		],
      
  }
 },
 methods:  {
    update(){
      console.log(this.items);
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