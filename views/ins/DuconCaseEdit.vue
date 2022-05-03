<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>通報表單</strong></h2></b-form-row>
      <br>
      <h5 class="text-left"><font color="red">機關代民眾登錄之通報案件，於未展延之應結案日期7天前得編輯通報資料。</font></h5>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報日期</b-col>
          <b-col class="col-md-4 text-left">110/11/30</b-col>
          <b-col class="col-md-2 ">通報方式</b-col>
          <b-col class="col-md-4 text-left"><b-form-select v-model="statusPicked" :options="status" :disabled="disabledFlag"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>民眾姓名</b-col>
          <b-col class="col-md-4"><b-form-input v-model="test" :disabled="disabledFlag"/></b-col>
          <b-col class="col-md-2">民眾性別</b-col>
          <b-col class="col-md-4">
            <b-form-radio-group  v-model="sex1" :options="sex" :disabled="disabledFlag"/>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">民眾住址</b-col>
          <b-col class="col-md text-left"><b-form-input :disabled="disabledFlag"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">民眾電話</b-col>
          <b-col class="col-md-4 text-left"><b-form-input :disabled="disabledFlag"/></b-col>
          <b-col class="col-md-2 ">民眾傳真</b-col>
          <b-col class="col-md-4 text-left"><b-form-input :disabled="disabledFlag"/></b-col>
        </b-row>
          <b-row class="border border-dark">
          <b-col class="col-md-2 ">民眾電子郵件信箱</b-col>
          <b-col class="col-md text-left"><b-form-input :disabled="disabledFlag"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>缺失地點</b-col>
          <b-col class="col-md-3 text-left"><b-form-select v-model="statusPicked" :options="site" :disabled="disabledFlag"></b-form-select></b-col>
          <b-col class="col-md-7 text-left"><b-form-input :disabled="disabledFlag"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報之工程名稱</b-col>
          <!-- 不可編輯狀態下，如果有輸入標案管理系統工程名稱時，要紅字顯示在下面-->
          <b-col class="col-md-10 text-left"><b-form-input :disabled="disabledFlag"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報之主辦機關</b-col>
          <b-col class="col-md-10 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報主題</b-col>
          <b-col class="col-md-10 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報內容</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-checkbox-group
              v-model="selected"
              :options="checkOptions"
              class="mb-2"
              value-field="item"
              text-field="name"
              :disabled="disabledFlag"
              name="flavour-1a"
              inline
            ></b-form-checkbox-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>具體內容</b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea :disabled="disabledFlag"></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">標案管理系統工程名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">工程類別</b-col>
          <b-col class="col-md-10 text-left"><b-form-select v-model="statusPicked" :options="category" :disabled="disabledFlag"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">允許本案免需上傳改善照片</font></b-col>
          <b-col class="col-md-4 ">
            <b-form-radio-group v-model="check1" :options="check" name="radio-validation" :disabled="disabledFlag">
            </b-form-radio-group>
          </b-col>
          <b-col class="col-md-2 "><font color="red">是否不納入督工資料統計</font></b-col>
          <b-col class="col-md-4 ">
            <b-form-radio-group v-model="check2" :options="check" name="radio-validation" :disabled="disabledFlag">
            </b-form-radio-group>
          </b-col>
        </b-row>
        <!-- 可編輯狀態的的時候(新增、編輯)不用顯示-->
        <b-row class="border border-dark" v-show="disabledFlag">
          <b-col class="col-md-2 ">分案歷程記錄</b-col>
          <b-col class="col-md-10 text-left">	[1100710(011406)行政院公共工程委員會-Lulu Huang]</b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">編輯</b-button>&ensp; 
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
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
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
      {	name:	'規劃設計不周：如道路排水坡度不良、號誌規劃不當、道路曲線不佳，未設置無障礙設施、擋土牆未設置洩水孔等。',	item:	'1',  notEnabled: false},
      {	name:	'工程品質不良：如路面有坑洞、人行道凹凸不平、新建水溝排水不良或擋土牆未背填級配及無預留洩水孔等。',	item:	'2',  notEnabled: false},
      {	name:	'安全措施不足：如鷹架固定不良、支撐鬆散不牢、支撐強度不夠、未設圍籬或圍籬占用道路或因設施導致鄰房產生裂縫等。',	item:	'3',  notEnabled: false},
      {	name:	'環境設施不佳：如營造廢棄土亂倒、工地泥濘、污廢水隨意排放、塵土飛揚或施工噪音干擾等。',	item:	'4',  notEnabled: false},
      {	name:	'工程進度緩慢：如施工進度緩慢、停工時間過長或超過告示牌原定完工期限而未完工等。',	item:	'5',  notEnabled: false},
      {	name:	'其他：除檢舉不法、法令疑義及建築管理(如建管、違章查報、既成巷道認定等)外之公共工程缺失。',	item:	'6',  notEnabled: false},
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
      selected:['2','5'],
      sex1: '',
  }
 },
 methods:  {
    queryHandler(){
      //CALL 子元素的Method
      this.$refs.caseVue.insertData();
    },
  },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

</style>