<template>
  <div>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">受理狀態 </b-col>
          <b-col class="col-md-8 text-left"><b-form-select v-model="acceptStatus" :options="type" @change="change()"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4  ">創新產品交流編號</b-col>
          <b-col class="col-md-8 text-left"><b-form-input value="2021010001"></b-form-input></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-4">申請廠商</b-col>
          <b-col class="col-md-8 text-left">
            <b-container class="border border-dark">
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">廠商名稱:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">大XX股份有限公司</b-col>
                <b-col class="col-sm-2 border border-dark">統一編號:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">00000000</b-col>
              </b-row>
               <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">單位地址:</b-col>
                <b-col class="col-sm-10 text-left border border-dark">台北市信義區松仁路3號</b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">聯絡人姓名:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">林XX</b-col>
                <b-col class="col-sm-2 border border-dark">職稱:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">經理</b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">單位電話:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">(03)1234-5678</b-col>
                <b-col class="col-sm-2 border border-dark">Email:</b-col>
                <b-col class="col-sm-4 text-left border border-dark">pcctest@pcc.gov.tw</b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">機關意見</b-col>
          <b-col class="col-md-8 text-left">
            <b-container>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">交流方式:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-select :options="communicateType"></b-form-select></b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">{{ comminicateTime }}:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">交流地點:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-input value="台北市信義區松仁路3號"></b-form-input></b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">參與人員:</b-col>
                <b-col class="col-md-10">
                  <template v-for="tempData in arryaData" >
                    <b-row :key="tempData.id" class="border border-dark">
                      <b-col class="col-sm-3">
                        <b-checkbox v-model="checkSchool" :value="tempData.checkValue" :disabled="tempData.checkDisable"><h6>{{ tempData.checkName }}</h6></b-checkbox>
                      </b-col>
                      <b-col class="col-sm-3"><b-input type="text" /></b-col>
                      <b-col class="col-sm-2"><h6>職稱:</h6></b-col>
                      <b-col class="col-sm-4"><b-input type="text" /></b-col>
                    </b-row>
                  </template>
                </b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">交流過程紀要:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">交流意見:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
              <b-row class="border border-dark">
                <b-col class="col-sm-2 border border-dark">其他:</b-col>
                <b-col class="col-sm-10 border border-dark"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      
        <b-row class="border border-dark " v-show="cond1">
          <b-col class="col-md-4 ">不受理交流原因</b-col>
           <b-col class="col-md-8">
            <template v-for="reason in reasonData" >
              <b-row :key="reason.id" class="border border-dark"  v-show="cond1">
                <b-col class="col-sm row justify-content-start">
                  &emsp;&emsp;<b-checkbox v-model="checkReason" :value="reason.checkValue" :disabled="reason.checkDisable"><h6>{{ reason.checkName }}</h6></b-checkbox>
                </b-col>
              </b-row>
            </template>
          </b-col>
        </b-row>
        <b-row class="border border-dark text-left"  v-show="cond1">
           <b-col class="col-md-4 ">不受理交流理由</b-col>
           <b-col class="col-md-8"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark ">
          <b-col class="col-md-4 ">編輯狀態</b-col>
          <b-col class="col-md-8 text-left">公開</b-col>
        </b-row> 
      </b-container>
      <br>
      <b-container>
        <b-row class="col-sm row justify-content-end"> 
          <b-button size="sm" variant="success" @click="queryHandler" >公開</b-button>&ensp;
          <b-button size="sm" variant="danger" @click="queryHandler" >下架</b-button>&ensp;
          <b-button size="sm" variant="success" @click="queryHandler" >儲存</b-button>&ensp;
          <b-button size="sm" variant="danger" @click="queryHandler" >刪除</b-button>&ensp;
          <b-button size="sm" variant="success" @click="queryHandler" >列印</b-button>&ensp;
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
      comminicateTime: '',
      type: [
        { value: 'N', text: '不受理交流'},
        { value: 'Y', text: '受理交流' },
      ],
    patent: 'Y', 
    arryaData: [
      { id: '1',  checkName:  '機關人員:', checkValue:  '1', name: '', tel:  '02-1234-5678', file: 'A.pdf',  checkDisable: false},
      { id: '2',  checkName:  '主計人員:', checkValue:  '2', name: '', tel:  '0988-988-988', file: 'B.pdf',  checkDisable: false},
      { id: '3',  checkName:  '政風人員', checkValue:  '3', name: '', tel:  '02-0000-1234', file: 'C.pdf',  checkDisable: false},
      { id: '4',  checkName:  '上級機關人員', checkValue:  '4', name: '', tel:  '02-1234-5678', file: 'D.pdf',  checkDisable: false},
      { id: '5',  checkName:  '專家、學者', checkValue:  '5', name: '', tel:  '02-1234-5678', file: 'E.pdf',  checkDisable: false},
    ],
    status: [
        { value: 'Y', text: '公開'},
        { value: 'N', text: '草稿' },
      ],
    reasonData: [
      { id: '1',  checkName:  '1.廠商提出之創新產品不具創新性。:', checkValue:  '1', name: '', checkDisable: false},
      { id: '2',  checkName:  '2.廠商填報欄位內容不實，或有缺漏經通知限期補正屆期未補正。', checkValue:  '2', name: '', checkDisable: false},
      { id: '3',  checkName:  '3.機關無採購該產品之需求。', checkValue:  '3', name: '', checkDisable: false},
      { id: '4',  checkName:  '4.機關一年內曾就同一創新產品辦理交流', checkValue:  '4', name: '', checkDisable: false},
    ],
    cond1:  false,
    acceptStatus: this.$route.params.acceptType,
    communicateType:  [
      {value: '1',  text: '會議'},
      {value: '2',  text: '現勘'},
      {value: '3',  text: '公開示範說明會'},
      {value: '4',  text: '依公共工程創新產品交流平台試辦作業要點第12點規定轉入'},
    ],
    
    checkSchool:  ['1', '3'],
    tt: 'Y',
    checkReason:  '',
  }
 },
  methods:  {
    change(){
      //alert(this.prop);
      if(this.acceptStatus === 'N'){
        this.comminicateTime = '書面通知廠商不交流日期';
        this.cond1= true;
      }else{
        this.comminicateTime = '交流時間';
        this.cond1= false;
      }

    },
    queryHandler(){

    },
    reset(){

    }
  },
  mounted(){  //ready已經不備使用了
      this.change();
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