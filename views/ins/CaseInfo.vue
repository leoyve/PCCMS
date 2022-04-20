<template>
  <div>
      <b-container class="border border-dark" fluid>
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
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>缺失地點</b-col>
          <b-col class="col-md-10 text-left">[高雄市] 高雄市新興區永寧里16鄰五福二路200號</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">工程名稱</b-col>
          <b-col class="col-md-10 text-left">
              <b-row>
                <b-col class="text-left">	內政部營建署南區工程處空調設備節能改善</b-col>
              </b-row>
              <b-row>
                <b-col class="text-left">	<font color="red">[標案管理系統之工程名稱--內政部營建署南區工程處空調設備節能改善]</font></b-col>
              </b-row>
          </b-col>
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
            ></b-form-checkbox-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">*</font>具體內容</b-col>
          <b-col class="col-md-10 text-left">停工時間過長或超過告示牌原定完工期限而未完工</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">工程類別</b-col>
          <b-col class="col-md-10 text-left">建築新建工程</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary"><font color="red">允許本案免需上傳改善照片</font></b-col>
          <b-col class="col-md-4 text-left">否</b-col>
          <b-col class="col-md-2 bg-secondary"><font color="red">是否不納入督工資料統計</font></b-col>
          <b-col class="col-md-4 ">否</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 bg-secondary">分案歷程記錄</b-col>
          <b-col class="col-md-10 text-left">	[1100710(011406)行政院公共工程委員會-Lulu Huang]</b-col>
        </b-row>
      </b-container>
      <br>
  </div>
</template>

<script>
export default {
  props:  ['test',  'disabledFlag'],
  data(){
    return{
    status: [
        { value: '1', text: '電話'},
        { value: '2', text: '傳真' },
        { value: '3', text: '電腦' },
        { value: '4', text: '行動裝置' },
        { value: '6', text: '信件' },
        { value: '7', text: '媒體' },
      ],
      sex: [
        { value: 'M', text: '男'},
        { value: 'F', text: '女' },
      ],
      site: [
        { value: '1', text: '台北市'},
        { value: '2', text: '新北市' },
        { value: '3', text: '新竹市' },
        { value: '4', text: '台中市' },
        { value: '5', text: '台南市' },
        { value: '6', text: '高雄市' },
        { value: '7', text: '台東市' },
      ],
      checkOptions: [
      {	name:	'規劃設計不周：如道路排水坡度不良、號誌規劃不當、道路曲線不佳，未設置無障礙設施、擋土牆未設置洩水孔等。',	value:	'1'},
      {	name:	'工程品質不良：如路面有坑洞、人行道凹凸不平、新建水溝排水不良或擋土牆未背填級配及無預留洩水孔等。',	value:	'2'},
      {	name:	'安全措施不足：如鷹架固定不良、支撐鬆散不牢、支撐強度不夠、未設圍籬或圍籬占用道路或因設施導致鄰房產生裂縫等。',	value:	'3'},
      {	name:	'環境設施不佳：如營造廢棄土亂倒、工地泥濘、污廢水隨意排放、塵土飛揚或施工噪音干擾等。',	value:	'4'},
      {	name:	'工程進度緩慢：如施工進度緩慢、停工時間過長或超過告示牌原定完工期限而未完工等。',	value:	'5'},
      {	name:	'其他：除檢舉不法、法令疑義及建築管理(如建管、違章查報、既成巷道認定等)外之公共工程缺失。',	value:	'6'},
    ],
    category: [
        { value: '1', text: '機電工程'},
        { value: '2', text: '水電工程' },
        { value: '3', text: '空調工程' },
        { value: '4', text: '防漏工程' },
        { value: '6', text: '電梯工程' },
        { value: '7', text: '隧道工程' },
      ],
      check: [
        { value: 'Y', text: '是'},
        { value: 'N', text: '否' },
      ],
      showFlag: this.$route.params.showFlag,
      check1: 'Y',
      check2: 'Y',
      statusPicked: '',
      selected:['5'],
      sex1: '',
  }
 },
 methods:  {
    insertData(){
      alert('InsertData1111');
    },
  },
  mounted(){
      this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-sm{
  padding: 1px;
}
</style>