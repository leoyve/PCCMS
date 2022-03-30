<template>
  <div>
     
    <br>
		<h3><strong><font color="brown">民眾通報但尚未成功立案之案件查詢及處理畫面</font></strong></h3>
		<br>
       <b-container class="border border-dark">
         <b-row class="border border-dark">
          <b-col class="col-md-2  bg-secondary">案件編號</b-col>
          <b-col class="col-md-10 text-left">11000000365</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  bg-secondary">通報日期</b-col>
          <b-col class="col-md-4 text-left">110/11/30</b-col>
          <b-col class="col-md-2 bg-secondary">通報方式</b-col>
          <b-col class="col-md-4 text-left">行動通報</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>民眾姓名</b-col>
          <b-col class="col-md-4 text-left">王XX</b-col>
          <b-col class="col-md-2 bg-secondary">民眾性別</b-col>
          <b-col class="col-md-4 text-left">男</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">民眾住址</b-col>
          <b-col class="col-md text-left">高雄市三民區厚德路150號</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">民眾電話</b-col>
          <b-col class="col-md-4 text-left">0911123456</b-col>
          <b-col class="col-md-2 bg-secondary">民眾傳真</b-col>
          <b-col class="col-md-4 text-left">02-99998888</b-col>
        </b-row>
          <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">民眾電子郵件信箱</b-col>
          <b-col class="col-md text-left">test1234@gmail.com</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">工程名稱</b-col>
          <b-col class="col-md-10 text-left"> 	內政部營建署南區工程處空調設備節能改善        </b-col>
          <br>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">主辦機關</b-col>
          <b-col class="col-md-10 text-left">內政部營建署南區工程處</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>通報主題</b-col>
          <b-col class="col-md-10 text-left">施工進度緩慢</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>通報內容</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-checkbox-group
            v-model="selected"
            :options="checkOptions"
            class="mb-2"
            text-field="name"
            name="flavour-1a"
            disabled="true"
            inline
          ></b-form-checkbox-group></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>具體內容</b-col>
          <b-col class="col-md-10 text-left">停工時間過長或超過告示牌原定完工期限而未完工</b-col>
        </b-row>
      </b-container>
      <br>
      <b-container>
        <b-row class="col-sm row justify-content-end"> 
          <b-button size="sm" variant="success" @click="queryHandler" >立案</b-button>&ensp; 
          <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
        </b-row>
      </b-container>
      <br>
  </div>
</template>


<script>


export default {
  data(){
    return{
       checkOptions: [
      {	name:	'規劃設計不周：如道路排水坡度不良、號誌規劃不當、道路曲線不佳，未設置無障礙設施、擋土牆未設置洩水孔等。',	value:	'1'},
      {	name:	'工程品質不良：如路面有坑洞、人行道凹凸不平、新建水溝排水不良或擋土牆未背填級配及無預留洩水孔等。',	value:	'2'},
      {	name:	'安全措施不足：如鷹架固定不良、支撐鬆散不牢、支撐強度不夠、未設圍籬或圍籬占用道路或因設施導致鄰房產生裂縫等。',	value:	'3'},
      {	name:	'環境設施不佳：如營造廢棄土亂倒、工地泥濘、污廢水隨意排放、塵土飛揚或施工噪音干擾等。',	value:	'4'},
      {	name:	'工程進度緩慢：如施工進度緩慢、停工時間過長或超過告示牌原定完工期限而未完工等。',	value:	'5'},
      {	name:	'其他：除檢舉不法、法令疑義及建築管理(如建管、違章查報、既成巷道認定等)外之公共工程缺失。',	value:	'6'},
      ],
      selected:['5'],
  }
 },
 methods:  {
   queryHandler(){
      
    },
    reset(){

    }
  },

}
</script>
<style>

</style>