<template>
  <div>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-12 text-center"><h3>廠商申請創新產品交流基本資料表</h3></b-col>
          <br>
          <br>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">創新產品交流編號</b-col>
          <b-col class="col-md-8 text-left">202103001</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4  ">申請交流日期</b-col>
          <b-col class="col-md-8 text-left">110/11/11 PM 04:50:50</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">創新產品名稱</b-col>
          <b-col class="col-md-8 text-left">建築用混凝土</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4">申請受理交流之機關</b-col>
          <b-col class="col-md-8 text-left">工程會</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">申請與機關交流之發文日期</b-col>
          <b-col class="col-md-8 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">申請與機關交流之字號</b-col>
          <b-col class="col-md-8 text-left"><b-form-input value="2021010001"/></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-4">申請廠商</b-col>
          <b-col class="col-md-8 text-left">
            <b-container>
              <b-row >
                <b-col class="col-md-2">廠商名稱:</b-col>
                <b-col class="col-sm-4 text-left">大XX股份有限公司</b-col>
                <b-col class="col-md-2">統一編號:</b-col>
                <b-col class="col-sm-4 text-left">00000000</b-col>
              </b-row>
              <b-row>
                <b-col class="col-md-2 ">通訊地址:</b-col>
                <b-col class="col-md-10 text-left">台北市信義區松仁路3號</b-col>
              </b-row>
               <b-row>
                <b-col class="col-md-2 ">聯絡人:</b-col>
                <b-col class="col-md-1.5 text-left">陳xx</b-col>
                <b-col class="col-md-2 ">職稱:</b-col>
                <b-col class="col-md-1.5 text-left">經理</b-col>
                <b-col class="col-md-2 ">電話:</b-col>
                <b-col class="col-md-3 text-left">(02)1234-5678</b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
        <b-row class="border border-dark ">
          <b-col class="col-md-4 ">屬性</b-col>
          <b-col class="col-md-8 row align-items-center">
          &nbsp;
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
            :disabled="flag"/>
          </b-col>
        </b-row>
        <b-row class="border border-dark ">
          <b-col class="col-md-4 ">工程類別</b-col>
          <b-col class="col-md-8">
          &nbsp;
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
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">創新資訊</b-col>
          <b-col class="col-md-8 text-left">
            <b-container>
               <b-row >
                <b-col class="col-sm-12">1.功能效益說明:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">
                 一種適用於山坡地水土保持，果園農田之地下集排水，隧道、路基之排水等系統之排水方法，<br>
                 係將至少一面具有多道成密集平行排列且沿帶體全長延伸而槽口成毛細縫隙之<br>
                 小徑集排水溝槽之排水帶，以任何形式，但最好為平鋪型態埋設於欲排水之土層中，<br>
                 而利用槽口所具排毛細管作用將土壤中之水分吸入集排水溝槽內，<br>
                 並藉槽溝兩端會任一段之水位落差所生虹吸力將水吸取並匯集排出。
                </b-col>
              </b-row>
              <br>
              <b-row >
                <b-col class="col-sm-12">2.品質說明:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">
                 一種適用於山坡地水土保持，果園農田之地下集排水，隧道、路基之排水等系統之排水方法，<br>
                 係將至少一面具有多道成密集平行排列且沿帶體全長延伸而槽口成毛細縫隙之<br>
                 小徑集排水溝槽之排水帶，以任何形式，但最好為平鋪型態埋設於欲排水之土層中，<br>
                </b-col>
              </b-row>
               <br>
              <b-row >
                <b-col class="col-sm-12">3.證明方式:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">
                 一種適用於山坡地水土保持，果園農田之地下集排水，隧道、路基之排水等系統之排水方法，<br>
                 可查看推薦函<br>
                </b-col>
              </b-row>
              <br>
              <b-row >
                <b-col class="col-sm-12">4.專利:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">
                <b-radio v-model="patent" value="Y" disabled>有，專利期間 110/11/01 至 110/12/31</b-radio>
                <b-radio v-model="patent" value="N" disabled>無</b-radio>
                </b-col>
              </b-row>
              <br>
              <b-row >
                <b-col class="col-sm-12">5.施工成本:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">一種適用於山坡地水土保持，果園農田之地下集排水，隧道、路基之排水等系統之排水方法</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">維護成本:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-12">一種適用於山坡地水土保持，果園農田之地下集排水，隧道、路基之排水等系統之排水方法</b-col>
              </b-row>
              <br>
              <b-row >
                <b-col class="col-sm-12">6.國內外工程實例:</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-2 ">工程名稱:</b-col>
                <b-col class="col-sm-1.5 text-left">防水工程</b-col>
                <b-col class="col-sm-2 ">業主:</b-col>
                <b-col class="col-sm-1.5 text-left">XXXX建設</b-col>
                <b-col class="col-sm-2 ">工程規模:</b-col>
                <b-col class="col-sm-3 text-left">1020M2</b-col>
              </b-row>
              <b-row >
                <b-col class="col-sm-6">7.產品DM:</b-col>
                <b-col class="col-sm-6"><a href="#">產品DM</a></b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
        <b-row class="border border-dark ">
          <b-col class="col-md-4 ">推薦單位<font color="red">(如為學(公、協)會需與公共工程相關))</font></b-col>
          <b-col class="col-md-8">
            <b-container>
              <br>
              <template v-for="tempData in arryaData" >
                <b-row :key="tempData.id">
                  <b-col class="col-sm"><b-checkbox v-model="checkSchool" :value="tempData.checkValue" :disabled="tempData.checkDisable">{{ tempData.checkName }}</b-checkbox></b-col>
                  <b-col class="col-sm">名稱:</b-col>
                  <b-col class="col-sm"><b-input type="text" :value="tempData.name"/></b-col>
                  <b-col class="col-sm">電話:</b-col>
                  <b-col class="col-sm"><b-input type="text" :value="tempData.tel"/></b-col>
                  <b-col class="col-sm">檔案:</b-col>
                  <b-col class="col-sm"><a href="#">{{  tempData.file }}</a></b-col>
                </b-row>
              </template>
            </b-container>
          </b-col>
        </b-row>
        <b-row class="border border-dark " v-show="true">
          <b-col class="col-md-4 ">編輯狀態</b-col>
          <b-col class="col-md-8 text-left">公開</b-col>
        </b-row>
      </b-container>
      <br>
      <!-- 已交流顯示 -->
      <b-container v-show="!showType && this.$route.params.statusType === '已交流'">
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-center">回覆更新日期:</b-col>
          <b-col class="col-md-10 text-left">2021/11/22 上午11:11:11</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-center">機關名稱:</b-col>
          <b-col class="col-sm-4 text-left">新北市政府工務局</b-col>
          <b-col class="col-md-2 text-center">交流時間:</b-col>
          <b-col class="col-sm-4 text-left">2021/11/22</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-center">交流方式:</b-col>
          <b-col class="col-sm-4 text-left">會議</b-col>
          <b-col class="col-md-2 text-center">交流地點:</b-col>
          <b-col class="col-sm-4 text-left">新北市政府市府大樓13樓1335會議室</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-center">交流過程紀要:</b-col>
          <b-col class="col-sm-4 text-left">	110年11月18日本局敬邀本府新建工程處及養護工程處與會，當日請廠商先對本次交流產品進行簡報周後再行提問及交流。</b-col>
          <b-col class="col-md-2 text-center">交流意見:</b-col>
          <b-col class="col-sm-4 text-left">	1.對於本產品於細粒料土壤之成效希望能後續再加以描述及說明。
            2.因政府機關有政府採購法之限制，故無法直接於契約要求採用貴公司之產品，建議後續貴公司可向工程顧問公司或技師公會宣傳該產品。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-center">參與人員:</b-col>
          <b-col class="col-sm-4 text-left">
            林育群(股長)<br>
            林宜蓁(辦事員)<br>
            張奕睿(科員)<br>
          </b-col>
          <b-col class="col-md-2 text-center">其他:</b-col>
          <b-col class="col-sm-4 text-left"></b-col>
        </b-row>
      </b-container>
     
      <br>
      <!-- 不交流顯示 -->
      <b-container v-show="!showType && this.$route.params.statusType === '不交流'">
        <template v-for="reason in reasonData" >
          <b-row :key="reason.id" class="border border-dark">
            <b-col class="col-sm row justify-content-start">
              &emsp;&emsp;<b-checkbox v-model="checkReason" :value="reason.checkValue" disabled><h6>{{ reason.checkName }}</h6></b-checkbox>
            </b-col>
          </b-row>
        </template>
        <b-row class="border border-dark text-left">
          <b-col class="col-md ">請詳細說明選擇前項「不受理交流」的理由:<b-form-textarea disabled></b-form-textarea></b-col>
        </b-row>
      </b-container>
      <br>
      <b-container>
        <b-row class="col-sm row justify-content-end" v-show="showType"> 
          <!-- 管理員專用-->
          <b-button size="sm" variant="success"  @click="queryHandler" >公開</b-button>&ensp; 
          <b-button size="sm" variant="danger" @click="queryHandler" >駁回</b-button>&ensp; 
          <b-button size="sm" variant="danger" @click="queryHandler" >下架</b-button>&ensp; 
          <!------------------------>
          <b-button size="sm" variant="success"  @click="queryHandler" >送審</b-button>&ensp; 
          <b-button size="sm" variant="success"  @click="queryHandler" >儲存</b-button>&ensp; 
          <b-button size="sm" variant="danger"  @click="queryHandler" >刪除</b-button>&ensp; 
          <b-button size="sm" variant="success"  @click="queryHandler" >列印</b-button>&ensp; 
          <b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
        </b-row>
      </b-container>
      <br>
  </div>
</template>


<script>
export default {
  data(){
    return{
      value1: new Date(),
      picked: '2',
      statusPicked: 'Y',
      flag: true,
      options: [
			{	text:	'材料',	value:	'1'},
			{	text:	'設備',	value:	'2'},
			{	text:	'技術',	value:	'3'},
			{	text:	'工法',	value:	'4'},
      {	text:	'其他',	value:	'5'}
		],
    checkOptions: [
      {	name:	'建築',	item:	'1',  notEnabled: true},
      {	name:	'道路運輸',	item:	'2',  notEnabled: true},
      {	name:	'軌道運輸',	item:	'3',  notEnabled: true},
      {	name:	'機場',	item:	'4',  notEnabled: true},
      {	name:	'港灣',	item:	'5',  notEnabled: true},
      {	name:	'水庫及蓄水',	item:	'6',  notEnabled: true},
      {	name:	'電業設備',	item:	'7',  notEnabled: true},
      {	name:	'水利',	item:	'8',  notEnabled: true},
      {	name:	'自來水',	item:	'9',  notEnabled: true},
      {	name:	'共同管道',	item:	'10',  notEnabled: true},
      {	name:	'下水道',	item:	'11',  notEnabled: true},
      {	name:	'焚化廠',	item:	'12',  notEnabled: true},
      {	name:	'垃圾掩埋場',	item:	'13',  notEnabled: true},
      {	name:	'土地開發',	item:	'14',  notEnabled: true},
      {	name:	'水土保持',	item:	'15',  notEnabled: true},
      {	name:	'其他',	item:	'16',  notEnabled: true},

    ],
    selected: ['1', '3', '5','11','15'],
    patent: 'Y', 
    arryaData: [
      { id: '1',  checkName:  '大專院校', checkValue:  '1', name: '台北大學', tel:  '02-1234-5678', file: 'A.pdf',  checkDisable: true},
      { id: '2',  checkName:  '研究機構', checkValue:  '2', name: '台灣大學', tel:  '0988-988-988', file: 'B.pdf',  checkDisable: true},
      { id: '3',  checkName:  '學會', checkValue:  '3', name: '嘉義大學', tel:  '02-0000-1234', file: 'C.pdf',  checkDisable: true},
      { id: '4',  checkName:  '公會', checkValue:  '4', name: '輔仁大學', tel:  '02-1234-5678', file: 'D.pdf',  checkDisable: true},
      { id: '5',  checkName:  '協會', checkValue:  '5', name: '長庚大學', tel:  '02-1234-5678', file: 'E.pdf',  checkDisable: true},
    ],
    checkSchool:  ['1', '3'],
    status: [
        { value: 'Y', text: '公開'},
        { value: 'N', text: '草稿' },
        { value: 'W', text: '送審中' },
        { value: 'E', text: '已下架' },
      ],
    showType: this.$route.params.showType,
    statusShow: true,
    reasonData: [
      { id: '1',  checkName:  '1.廠商提出之創新產品不具創新性。:', checkValue:  '1', name: '', checkDisable: false},
      { id: '2',  checkName:  '2.廠商填報欄位內容不實，或有缺漏經通知限期補正屆期未補正。', checkValue:  '2', name: '', checkDisable: false},
      { id: '3',  checkName:  '3.機關無採購該產品之需求。', checkValue:  '3', name: '', checkDisable: false},
      { id: '4',  checkName:  '4.機關一年內曾就同一創新產品辦理交流', checkValue:  '4', name: '', checkDisable: false},
    ],
    checkReason:  3,
  }
 },
 methods: {
   queryHandler(){

   },
   reset(){
     
   }
 }
}
</script>

<style>
.col-md-4, 
.col-md-2 {
  background-color: black;
  color: white;
  text-align: left;
}

.col-sm{
  padding: 1px;
}
</style>